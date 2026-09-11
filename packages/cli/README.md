# moticon (CLI)

> **Status: deferred — not published to npm.**
>
> This CLI copies moticon icon component source into a project (shadcn-style).
> Its `add` command currently reads `@moticon/react`'s bare `src/icons`
> geometry rather than the enhanced `src/enhanced` motion layer, so a copied
> component would not carry its animation. It ships only once it is rebuilt on
> the shared source pipeline used by `@moticon/mcp` and the shadcn registry.
>
> Until then:
> - `@moticon/react` — `npm install @moticon/react motion` and import icons as
>   a dependency
> - shadcn registry and this CLI — see the
>   [repo README](https://github.com/ferhadsultan98/moticon#readme) roadmap

## License

MIT
