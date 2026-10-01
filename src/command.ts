import { Parameter, ParameterTypes } from "./parameter/types.js";
import { parse } from "./parameter/parse.js";

export type CommandHandler<TCtx extends object, TParams extends Record<string, ParameterTypes>> = (
	ctx: TCtx,
	args: TParams,
) => Promise<void> | void;

export class Command<TCtx extends object, TParams extends Record<string, ParameterTypes>> {
	constructor(
		public readonly name: string,
		public readonly parameters: Parameter[],
		private readonly handler: CommandHandler<TCtx, TParams>,
	) {}

	public execute(arguments_: unknown[], ctx: TCtx) {
		const params = parse(arguments_, this.parameters) as TParams;
		return this.handler(ctx, params);
	}
}
