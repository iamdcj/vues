<template>
  <section class="hello">
    <header>
      <h2>Directives</h2>
      <p>Directives are attributes that when attached to HTML will run some code which does a particular thing with the data passed as the value.</p>
    </header>

    <For />
    <Model />
    <IfShow />
    <Bind bannerSrc="https://picsum.photos/200 "/>

    
  </section>
</template>

<script>

import For from './For'
import Model from './Model'
import IfShow from './IfShow'
import Bind from './Bind'

export default {
  name: 'Directives',
  props: {
    msg: String
  },
  components: {
    For,
    Model,
    Bind,
    IfShow
  }
}
</script>

