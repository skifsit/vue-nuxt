<template>
  <users-list />
</template>

<script>
import UsersList from '@/components/UsersList'

export default {
  components: {
    UsersList,
  },
  async fetch ({ store }) {
    await store.dispatch('FETCH_USERS');
  }
}
</script>