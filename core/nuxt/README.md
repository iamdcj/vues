# Nuxt 
NuxtJS is a SSR enabled Vue framework for building performant, modular Vue applications.

### Why Nuxt?
- SSR out of the box
- Performent
- Automatic routing handling

## Fetching Data
Nuxt provides a number of ways for handling data fetching;

- `asyncData` - this is used at a page-level, and allows the engineer to fetch page-level data, which is used as the component data.

- `fetch` - this is used at a page-level, and allows the engineer to fetch page-level data which is passed to the application store.

- `nuxtServerInit` - this is used at a global/store level, and allows the engineer to fetch data which is intended to be used across all parts of the application, and store it in the application store.