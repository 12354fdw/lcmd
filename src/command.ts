import { ParameterTypes } from "./parameter/types.js";

export type CommandHandler<TCtx extends object, TParams extends Record<string, ParameterTypes>> = (
	ctx: TCtx,
	args: TParams,
) => Promise<void> | void;
