import Vuex from "vuex";
import axios from "axios"
import Login from "~/store/login";
import Dashboard from "~/store/dashboard";
import Todo from "~/store/todo";
const createStore = () => {
    return new Vuex.Store({
        modules: {
            Login,
            Dashboard,
            Todo
        },
        state: {
            test:"yasin dalkılıç"
        },
        mutations: {},
        actions: {},
        getters: {
    gettest(state){
        return state.test
    }
        }
    })
}

export default createStore
