<template>
  <nav :style="styleObj">
    <nuxt-link to="/">
      Home
    </nuxt-link>
    <br />
    <nuxt-link to="/">
      {{fetchingUsers ? 'Fetching USERS...' : 'Users ' + users.length}}
    </nuxt-link>
    <br />
    <nuxt-link to="/posts/list">
      Posts List
    </nuxt-link>
    <br />
    <nuxt-link to="/map">
      Map
    </nuxt-link>
    <br />
    <nuxt-link to="/chart">
      Chart
    </nuxt-link>
    <br />
    <nuxt-link to="/login">
      Login
    </nuxt-link>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "NavBar",
  props: {
    styleObj: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["fetchingUsers", "users", "fetchingPosts", "posts"]),
    ...mapGetters(["GET_REVERSED_USERS"])
  },
  methods: {
    ...mapMutations(["SET_FETCHING", "SET_USERS"]),
    ...mapActions(["FETCH_USERS"]),
    loadUsers() {
      this.FETCH_USERS();
    }
  },
  mounted() {
    //this.loadUsers()
  }
};
</script>

<style scoped>
</style>
