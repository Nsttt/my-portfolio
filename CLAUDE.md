# CLAUDE.md - Guidelines for Agentic Coding in my-portfolio

## Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Build for production
- `pnpm lint` - Run Astro type checking
- `pnpm preview` - Preview production build
- `pnpm fix` - Fix formatting with Prettier
- `pnpm typecheck` - Run TypeScript type checking

## Code Style Guidelines
- **TypeScript**: Strict typing, no unused variables/parameters, no unchecked indexed access
- **Formatting**: 2 spaces indentation, 80 chars max width, double quotes, trailing commas
- **Imports**: Use type imports with inline style, sorted by @ianvs/prettier-plugin-sort-imports
- **Components**: Astro components (.astro) and Solid.js for interactive components (.tsx)
- **Error Handling**: Explicit error types, no unchecked promises
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File Structure**: Content in src/content/, components in src/components/, layouts in src/layouts/
- **CSS**: Use Tailwind CSS with typography, forms, aspect-ratio and line-clamp plugins

Always run both `pnpm lint` and `pnpm typecheck` before submitting changes.