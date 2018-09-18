<template>
  <div class="app" :style="gridStyle">
    <nav-bar :styleObj="leftStyle" />
    <div :styleObj="rightStyle">
      <nuxt/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'

export default {
  name: 'home',
  components: {
    NavBar,
  },
  data () {
    return { // CSS Grid
      gridStyle: {
        display: 'grid',
        gridTemplate: '1fr / 1fr 5fr'
      },
      leftStyle: {
        gridArea: '1 / 1 / 1 / 1'
      },
      rightStyle: {
        gridArea: '1 / 2 / 1 / 2'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>