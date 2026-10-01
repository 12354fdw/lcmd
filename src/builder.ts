import { Command, CommandHandler } from "./command.js";
import { ParameterTypes, Parameter } from "./parameter/types.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export class CommandBuilder<TCtx extends object, TParams extends Record<string, ParameterTypes> = {}> {
	private cmdName?: string;
	private parameters: Parameter[] = [];
	private handlerFn?: CommandHandler<TCtx, TParams>;

	public name(name: string) {
		this.cmdName = name;
		return this;
	}

	public parameter<K extends string, T extends ParameterTypes>(name: K, type: T) {
		this.parameters.push({
			name,
			type,
		});

		return this as unknown as CommandBuilder<TCtx, TParams & { [P in K]: T }>;
	}

	public handler(cb: CommandHandler<TCtx, TParams>) {
		this.handlerFn = cb;
		return this;
	}

	public build() {
		if (!this.cmdName) throw new Error(`Unable to construct command since it has no name!`);
		if (!this.handlerFn) throw new Error(`Unable to construct command "${this.cmdName}" since it has no handler!`);

		return new Command<TCtx, TParams>(this.cmdName, this.parameters, this.handlerFn);
	}
}
