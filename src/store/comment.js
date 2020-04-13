export default {
    state: { 
        messages: JSON.parse(localStorage.getItem('messages') || '[]') 
    },
    mutations: {
        createMessage(state, message) {
            state.messages.push(message)
            localStorage.setItem('messages', JSON.stringify(state.messages))
        }
    },
    actions: {
        createMessage({ commit }, message) {
            commit("createMessage", message)
        }
    },
    getters: {
        messages: state => state.messages
    }
}