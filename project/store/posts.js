import axios from 'axios';

export default {
    namespaced: true,
    state () {
        return {
            fetchingPosts: null,
            posts: [],
        }
    },
    getters: {},
    mutations: {
        SET_FETCHING_POSTS(state, fetching) {
            state.fetchingPosts = fetching
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        },
    },
    actions: {
        FETCH_POSTS({ commit, state }) {
            if (state.fetchingPosts) {
                return state.fetchingPosts
            }

            const promise = axios.get('http://jsonplaceholder.typicode.com/posts')
            commit('SET_FETCHING_POSTS', promise)
            return promise.then(({data}) => {
                commit('SET_POSTS', data)
                commit('SET_FETCHING_POSTS', null)
            })
        },
    },
}