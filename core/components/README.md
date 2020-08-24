# Components
Components are the building blocks of a Vue application; they make-up the various pieces of the user interface.

Vue consist of three key sections;

**Markup**
Vue components run with regular HTML out of the box, making templating natural.

**Scripts**
All props, data, and methods are attached the the component instance.

**Styles**




Components are:

- Resuable - they can be dropped anywhere in the application
- Encapsulated - they contain there own markup and functionality, without causing issues to the surrounding parts.
- Isolated - each component has its own isolated scope.
  

## Template
Vue offers a number of ways to put together components; the most common approach to templating is the HTML-based template baked into the Vue libary, however `<template />`'s are optional, you an use JSX when building components.

You can also attach a string of markup to the Vue instance;

```
Vue.component('Title', {
  template: '<h1>HOLA MUNDIAL</h1>'
})
```

The above is only for illustrative purposes, and you will most likely never run with the above approach.

## [Props](./props)
As per React, Vue compponents utilises props; a one-way communication from parent to child.

Props are be attached to a component via a v-bind attribute;

```
<SomeComponent :title="HOLA MUNDIAL" />
```

This prop can then be used in the target component;

```
Vue.component('Title', {
  props: ['title']
  template: '<h1>{{title}}</h1>'
})
```