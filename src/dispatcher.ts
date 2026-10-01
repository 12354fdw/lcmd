import { Command } from "./command.js";

export class CommandDispatcher<TCtx extends object> {
	private commands = new Map<string, Command<TCtx>>();

	public register(command: Command<TCtx>) {
		this.commands.set(command.name, command);
	}

	public execute(commandString: string, ctx: TCtx) {
		const [name, ...args] = commandString.slice(1).trim().split(/\s+/);

		const command = this.commands.get(name);
		if (!command) throw new Error(`Command ${name} not found!`);

		command.execute(args, ctx);
	}
}
