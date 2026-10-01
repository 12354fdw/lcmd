# Lightweight Command

Literally a small command parser I made for my own use.

## Install

```bash
npm install @12354fdw/lcmd
```

## Usage

```ts
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
```

## API

### `CommandBuilder<TCtx, TParams>`

A builder for commands.

- `.name(string)` - set the command name
- `.parameter(name, type)` - add a parameter (`"string" | "number" | "boolean"`)
- `.handler(cb)` - set the execute callback
- `.build()` - returns a `Command`

### `Command<TCtx, TParams>`

Represents a built command. Call `.execute(args, ctx)` directly or register with a dispatcher.

### `CommandDispatcher<TCtx>`

Registers commands by name and parses command strings:

```ts
dispatcher.register(...);
dispatcher.execute("cmd str 42 true", ctx);
```

## Build

```bash
npm run build
```
