<template>
  <div :style="styleObj">
    <div v-if="fetchingPosts">
      FETCHING...
    </div>
    <div v-else-if="posts">
      <router-link v-for="post in posts"
                   :key="post.id"
                   :to="`/posts/${post.id}`"
                   class="flex-row border">
        <div>{{post.id}}</div>
        <div>{{post.title}}</div>
        <div>{{post.body}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PostsList',
  props: {
    styleObj: {
      type: Object,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('posts', ['fetchingPosts', 'posts']),
  },
  methods: {
    ...mapActions('posts', ['FETCH_POSTS']),
    loadPosts () {
      this.FETCH_POSTS()
    }
  },
  mounted () {
    //this.loadPosts()
  }
}
</script>

<style scoped>
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .border {
    border: 1px solid black;
  }
</style>