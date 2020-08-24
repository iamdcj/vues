# Vue

A collection of snippets and text related to my learnings of the Vue library

## Overview
[Vue](https://vuejs.org/v2/guide/) is a declarative, reactive framework primarily concerned with creating component-based user interfaces. 

The creator essentially cherry-picked all of his favourite parts of popular frameworks suchs as React and Angular, and put them into the Vue framework.


## Core

- **Vue Instance** - the starting point of all Vue applications.
- **Templates** - the individual UI pieces which make-up the application.
- **Components** - the individual UI pieces which make-up the application.
  - Props - similar to React, you can pass props to other components via props.
  - Directives - similar to Angular, directives, e.g. `v-if`, can be used in components.
  - Conditional Rendering - easily hide/show componets/markup based on some logic, this is done via dedicated directives.
- **Virtual DOM** - like React, Vue utilises a virtual DOM; a faster, more reliable abstraction of the native DOM.

## Additional
- State - vuex is a Redux-like store which is part of the core vue library.
- Routing - vue ships with its own routing solution.
- NuxtJS - a SSR framework built with vue at its core.