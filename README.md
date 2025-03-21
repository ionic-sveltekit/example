# @ionic-sveltekit/example

This repository contains an example [Ionic](https://ionicframework.com/) project built with [SvelteKit](https://kit.svelte.dev/) and the `@ionic-sveltekit/core` integration package. It serves as the template for new projects created with the `npx @ionic-sveltekit/create` CLI tool.

## Features

The example project demonstrates various aspects of modern Svelte/SvelteKit (5+) development including:

- 🧩 **Svelte Runes** - Using `$state`, `$derived`, `$props()`, etc.
- 🔄 **Svelte Snippets & Renders** - Modern feature for reusable template fragments with `{#snippet}` and `{@render}`
- 📦 **Svelte Stores** - State management with readable stores
- 🧭 **SvelteKit Routing** - File-based routing pattern
- 🔄 **Server Components** - Server-side load functions
- 🔐 **Environment Variables** - Using `$env/static/private`
- 🎨 **Ionic Components** - Utilizing Ionic UI components with Svelte
- 📱 **Cross-Platform** - Works on iOS, Android, and web

## Project Structure

```
src/
├── lib/
│   ├── components/           # Reusable components
│   │   ├── PlanetCard.svelte # Card component for planets
│   │   ├── Timer.svelte      # Timer component with tooltip
│   │   └── planet-card-content/
│   │       ├── earth.svelte  # Content for Earth
│   │       ├── mars.svelte   # Content for Mars
│   │       └── ...           # Other planet contents
│   ├── stores/               # Svelte stores
│   │   └── timer.ts          # Timer store
│   └── images/               # Image assets
├── routes/                   # SvelteKit routes
│   ├── +layout.svelte        # Root layout with Ionic tabs
│   ├── +page.svelte          # Homepage with interactive elements
│   └── planets/              # Planets route
│       ├── +page.svelte      # List of planets with range slider
│       └── [planet]/         # Dynamic route for individual planets
│           ├── +page.server.ts # Server-side load function (for Mars weather)
│           ├── +page.svelte    # Planet page component
│           └── +page.ts        # Client-side load function
└── theme/                    # Ionic theming
```

## Key Components

### PlanetCard.svelte

A reusable card component for displaying planet information, supporting:
- Planet name and subtitle
- Optional image
- Dynamic content via component injection
- TypeScript type safety with a `Planet` type

### Timer.svelte

A small timer component that displays how long the app has been running, using:
- Svelte stores for time tracking
- Ionic tooltip components
- CSS view transitions

### Route Structure

- **Homepage**: Interactive demo with SVG animations and clickable buttons
- **Planets List**: Adjustable list using Ionic range slider
- **Individual Planet Pages**: Dynamic routes with server and client data loading, each showcasing different Ionic UI components:
  - Mercury: Popovers with information tooltips
  - Earth: Reorderable lists
  - Mars: Weather data with custom styling
  - Saturn: List with different colored badges
  - Neptune: Scrollable segments with icons

## Technical Highlights

### Svelte Runes

The project uses Svelte 5's runes API for reactive state:

```typescript
// From +page.svelte
let spinCount = $state(0);
let clickCount = $state(0);
const rotate = $derived((spinCount + clickCount) * -22.5);
```

### Snippets & Renders

The project demonstrates Svelte's modern snippet and render features for reusable template fragments:

```svelte
<!-- From planets/+page.svelte -->
{#snippet planetLink(planet: Planet)}
  <a href="/planets/{planet}">{planet}</a>
{/snippet}

<!-- Later in the file -->
{@render planetLink(planet)}
```

### Dynamic Imports

The project demonstrates dynamic imports for components and assets:

```typescript
// From planets/[planet]/+page.ts
async function getDynamicImport(planet: Planet, isComponent: boolean = true) {
  let module: { default: Component | string } | undefined;
  try {
    module = await import(isComponent
      ? `$components/planet-card-content/${planet}.svelte`
      : `$images/planets/${planet}.jpg`);
  } catch (e) {
    // Error handling...
  }
  return module?.default;
}
```

### Server-Side Data Fetching

For the Mars planet page, the project fetches real-time weather data from NASA's API:

```typescript
// From planets/[planet]/+page.server.ts
export const load: PageServerLoad = async ({ params, fetch }) => {
  if (params.planet !== 'mars') {
    return {};
  }

  // Fetch from NASA API...
};
```

## Development

### Requirements

- Node.js 18+
- A NASA API key (for Mars weather data)

### Setup

The recommended way to use this project is as a template through the CLI:

```bash
npx @ionic-sveltekit/create my-app
```

This will create a new project based on this example.

If using the Mars weather feature, you'll need to:
1. Get a NASA API key
2. Create a `.env` file with your key:
   ```
   NASA_API_KEY=your_api_key_here
   ```
3. Start the development server: `npm run dev`

## Building for Production

```bash
npm run build
```

## License

[MIT](LICENSE)
