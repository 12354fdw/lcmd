# Lightweight Command

Literally a small command parser I made for my own use.

## Install

```bash
npm install github:12354fdw/lcmd
```

## Usage

```ts
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
