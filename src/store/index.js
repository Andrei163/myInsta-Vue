import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        image: JSON.parse(localStorage.getItem('image') || '[]')
    },
    mutations: {
        loadImg(state, images) {
            state.image.unshift(images)
            localStorage.setItem('image', JSON.stringify(state.image))
        }
    },
    actions: {
        loadImg({ commit }, images) {
            commit("loadImg", images)
        }
    },

    getters: {
        // image: state => state.image
        image: state => state.image.filter(todo => todo.url)
    },

    modules: {}
});