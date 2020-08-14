<template>
  <div>
    <h3>v-model</h3>
    <p>
      This directive creates a relationship between the component data and a
      form control.
    </p>

    <form>
      <legend>Input</legend>
      <input type="text" v-model="name" />
      <p>Name: {{ name }}</p>
    </form>

    <form>
      <legend>Checkboxes</legend>
      <fieldset>
        <div v-for="control in checkboxes" :key="control">
          <label :for="control">{{ control }}</label>
          <input
            v-model="checkedItems"
            :value="control"
            type="checkbox"
            :name="control"
            :id="control"
          />
        </div>
      </fieldset>
    </form>

    <h4>Modifiers</h4>
    <p>
      The model directive comes with some useful modifiers; making it easy to
      handle certain form-related edges cases
    </p>

    <form>
      <legend>Lazy</legend>
      <p>
        Instead of updating with every input event, the lazy modifier will sync
        only when an event is fired, not on every user input -
        <strong
          >this is often used when you want to capture the data at submission
          time.</strong
        >
      </p>

      <input v-model.lazy="text" type="text" />
      <button type="submit">Submit</button>
    </form>

    <form>
      <legend>Trim</legend>
      <p>
        This modified will trim any leading whitespace within an input, thus
        preventing submitting often unwanted whitespace.
      </p>
      <input v-model.trim="trimmedText" type="text" />
      <span>{{ trimmedText }}</span>
    </form>

    <form>
      <legend>Number</legend>
      <p>
        This ensure number input values are set as a number, not the native
        string value.
      </p>

      <div>
        <p>without number modifier</p>
        <input v-model="numbersA" type="number" />
        <span>{{ typeof numbersA }}</span>
      </div>

      <div>
        <p>with number modifier</p>
        <input v-model.number="numbersB" type="number" />
        <span>{{ typeof numbersB }}</span>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "Model",
  data() {
    return {
      name: "",
      text: "",
      numbersA: "",
      numbersB: null,
      trimmedText: "",
      checkboxes: ["David", "Stephanie", "Nolé"],
      checkedItems: [],
    };
  },
};
</script>
