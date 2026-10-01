import { Parameter, ParameterTypes } from "./types.js";

export function parse(arguments_: unknown[], schema: Parameter[]): Record<string, ParameterTypes> {
	if (arguments_.length !== schema.length) {
		throw new Error(`Expected ${schema.length} arguments but got ${arguments_.length}`);
	}

	const result: Record<string, ParameterTypes> = {};

	for (let i = 0; i < schema.length; i++) {
		const param = schema[i];
		const value = arguments_[i];

		result[param.name] = cast(value, param.type, param.name);
	}

	return result;
}

function cast(value: unknown, type: ParameterTypes, name: string): ParameterTypes {
	switch (type) {
		case "string":
			return String(value) as unknown as ParameterTypes;
		case "number": {
			const num = Number(value);
			if (Number.isNaN(num)) {
				throw new Error(`Argument "${name}" expected type "number" but got "${value}"`);
			}
			return num as unknown as ParameterTypes;
		}
		case "boolean": {
			if (value === "true") return true as unknown as ParameterTypes;
			if (value === "false") return false as unknown as ParameterTypes;
			throw new Error(`Argument "${name}" expected type "boolean" but got "${value}"`);
		}
	}
}
