# Watcher 
Every Vue component comes with a 'watcher' instance - the watchers job is to look watcher for changes to the components properties.

The watch is a crucial piece of code; it determines if the UI should update based on changes to the data.


### Registering Properties
A getter and a setter is created for each component property present when the component instantiates.

If a property/data is added after the initial creation of the component the watcher will not register a getter/setter for that datum, and it will not be observered.

### Monitoring Changes
Any changs to the watched properties will be picked-up by the watcher - the watcher will calculate if the actual DOM needs updating via Vue's virtual DOM implementation.


## Configuring Watchers
You can setup watchers in a component, allowing you to run some specific code when a watched property changes.

Watchers come into their own when you need to perform expensive(usually async.) operations in response to a change in a components watched data.


```
watch: {
  someProperty(new, old) {
    ...do something
  }
}

```

**Watcher methods will provide both the new value and old value whenever a change occurs.**