<template>
  <posts-list />
</template>

<script>
import PostsList from '@/components/PostsList'

export default {
  components: {
    PostsList,
  },
  async fetch ({ store }) {
    await Promise.all([
        store.dispatch('FETCH_USERS'),
        store.dispatch('posts/FETCH_POSTS')
    ])
  }
}
</script>