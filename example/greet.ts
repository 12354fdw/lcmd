import { CommandBuilder, CommandDispatcher } from "lcmd";

type Context = { greeter: string };

const context: Context = {
	greeter: "Bob",
};

const dispatcher = new CommandDispatcher<Context>();

dispatcher.register(
	new CommandBuilder<Context>()
		.name("greet")
		.parameter("name", "string")
		.handler((ctx, { name }) => {
			console.log(`Hello, ${name} from ${ctx.greeter}!`);
		})
		.build(),
);

dispatcher.execute("greet Greg", context);
// Hello, Greg from Bob!
