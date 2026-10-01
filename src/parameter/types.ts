export type ParameterTypes = "string" | "number" | "boolean";

export type TypeMap = { string: string; number: number; boolean: boolean };

export type Parameter = {
	name: string;
	type: ParameterTypes;
};
