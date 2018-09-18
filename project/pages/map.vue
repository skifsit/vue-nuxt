<template>
  <l-map />
</template>

<script>
import LMap from '@/components/LMap'

export default {
  components: {
    LMap,
  },
  async fetch ({ store }) {
          await Promise.all([
        store.dispatch('FETCH_USERS'),
        store.dispatch('map/FETCH_LOCATIONS')
    ])
  }
}
</script>