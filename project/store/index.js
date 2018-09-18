import axios from 'axios';

export default {
    state() {
        return {
            fetchingUsers: null,
            users: [],
            mapInstance: null,
        }
    },
    getters: {
        GET_REVERSED_USERS(state) {
            return state.users.slice().reverse()
        }
    },
    mutations: {
        SET_FETCHING_USERS(state, fetching) {
            state.fetchingUsers = fetching
        },
        SET_USERS(state, users) {
            state.users = users
        },
    },
    actions: {
        FETCH_USERS({ commit, state }) {
            if (state.fetchingUsers) {
                return state.fetchingUsers
            }

            const promise = axios.get('http://jsonplaceholder.typicode.com/users')
            commit('SET_FETCHING_USERS', promise)
            return promise.then(({ data }) => {
                commit('SET_USERS', data)
                commit('SET_FETCHING_USERS', null)
            })
        },
    }
}
