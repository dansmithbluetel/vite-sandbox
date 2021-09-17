import { createApp } from 'vue'
import {createStore} from "vuex";
import App from './App.vue'
import './index.css'

// Create a new store instance.
const store = createStore({
    state: {
        colleagues: []
    },
    getters: {
        colleagues(state) {
            return state.colleagues
        }
    },
    mutations: {
        addColleague(state, payload) {
            state.colleagues.push(payload)
        }
    }
})

const app = createApp(App)

app.use(store)
app.mount('#app')