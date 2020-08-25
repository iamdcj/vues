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



## Folder Structure
Nuxt applications have a similar structure to vue-cli generated applictions, however Nuxt apps do come with some additional directories;

- `/layouts` - this folder contains `.vue` files for the different layouts used in your application, e.g. a layout with a header and footer, or a layout with a sidebar.
- `/pages` - this folder contains `.vue` files for the different views/pages used in the application, e.g. Home, About, or Account - **Nuxt will automatically generate the applications routing using the files in this directory.**
- `/middelware` - this folder contains `.js` files for any middelware used in the application - middleware functions run before rendering the application.
- `/plugins` - this folder contains `.js` files for any plugins which run before the root instance of the application is instantiated.
-  `/static` - this folder contains static assets which are used in the application - these files can easily be accessed in the component files.