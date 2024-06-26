<img
  align="right"
  width="1600px"
  alt="Newwwie Logo"
  src="newwwie-logo.svg?sanitize=true"
/>

# newwwie.com

The source for [newwwie.com](https://newwwie.com). The project is really barebones to allow for a new member to not be lost in tooling and encourage contributions.

It takes a community to build the community.

## Quickstart

```sh
git clone https://github.com/newwwie/newwwie.com
cd newwwie.com
npm install
npm run dev
```

### Typescript

This repository uses typescript for source files. Currently some typescript errors remain, though at some point (after existing issues in [#119](https://github.com/newwwie/newwwie.com/issues/119) are resolved) webpack will be configured to not build in the presence of typescript errors.

```sh
npm run typecheck -- --watch
```

## Contributing

For more information please see our [Contributing Guide](CONTRIBUTING.md)

This includes adding meetup groups and community listings.
