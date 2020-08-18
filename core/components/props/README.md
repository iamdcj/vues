## Props
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

### Type Checking
Vue provides a built-in mechanism for declaring a type for a prop, and will validate if the provided prop isn't of the stated type.

