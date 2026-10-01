import { CommandBuilder, CommandDispatcher } from "@12354fdw/lcmd";

type Context = { num: number };

const context: Context = {
	num: 1,
};

const dispatcher = new CommandDispatcher<Context>();

dispatcher.register(
	new CommandBuilder<Context>()
		.name("addone")
		.parameter("a", "number")
		.handler((ctx, { a }) => {
			function add(x: number) {
				return ctx.num + x;
			}
			console.log(add(a));
		})
		.build(),
);

dispatcher.execute("greet 1", context);
// 1
