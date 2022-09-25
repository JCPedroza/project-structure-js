# JavaScript Project Structure Example

An example of how to structure a JavaScript project, including unit testing
that handles several different implementations of a same specification.

## Installation

To run everything here, you first need a JavaScript runtime and a package
manager.

You can either

- Install `node` and `npm` (runtime and package manager
respectively) separately, or with `nvm`.

- Or install `bun` (includes both runtime and package manager).

  - [node][50]
  - [npm][51]
  - [nvm][53]
  - [bun][52]

Once you have a runtime and a package manager, then you need to install the
dependencies by running one of the following commands (depending on which
runtimes and package managers you have installed).

```bash
npm install # Using npm
bun install # Using bun
```

## Usage

To run all unit tests use one of these:

```bash
npm test   # Using npm
bun test   # Using bun
jest .     # Using your global jest install
npx jest . # Using local jest install
```

To run only unit test for Fibonacci functions:

```bash
npm run test-fibo            # Using npm
bun run test-fibo            # Using bun
jest functions/fibonacci     # Using your global jest install
npx jest functions/fibonacci # Using local jest install
```

[50]: https://github.com/nodejs/node
[51]: https://github.com/npm/cli
[52]: https://github.com/oven-sh/bun
[53]: https://github.com/nvm-sh/nvm
