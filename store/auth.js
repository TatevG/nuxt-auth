import axios from 'axios'

export const state = () => ({
    authUser: null
})

export const mutations = {
    SET_USER (state, user) {
        state.authUser = user
    }
}

export const actions = {
    login ({ commit, dispatch }, data) {
        try {
            if(data.username === 'admin' && data.password === 'admin') {
                commit('SET_USER', data);
            }
            else {
                dispatch('snackbar/openSnackbar', {
                    status: 'error',
                    text: 'wrong username or password',
                    timeout: 6000,
                }, { root: true })
            }
        }
        catch (error) {
            if (error.response && error.response.status === 401) {
                throw new Error('Bad credentials')
            }
            throw error
        }
    },

    async logout ({ commit }) {
        await axios.post('/api/logout')
        commit('SET_USER', null)
    }

}
