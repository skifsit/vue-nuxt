<template>
  <d3-bars-chart />
</template>

<script>
import D3BarsChart from '@/components/D3BarsChart'

export default {
  components: {
    D3BarsChart,
  },
  async fetch ({ store }) {
    await store.dispatch('FETCH_USERS');
  }
}
</script>