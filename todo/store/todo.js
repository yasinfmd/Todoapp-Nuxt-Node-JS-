import axios from "axios"
import Cookie from 'js-cookie'
const state = () => ({
    todoList:[],
})

const mutations = {
    gettodo(state, data) {
        state.todoList=data
    }
}

const actions = {
    nuxtServerInit(vuexContext,context){
      /*  console.log(context.store.getters.isAuthenticated)*/
        //console.log(vuexContext.getters.isAuthenticated)
        /* const headers = {
             'Content-Type': 'application/json',
             'Authorization':"Bearer "+

         }*/
        /*    'Authorization': 'jwt'*/
        /*  return   axios.get("http://localhost:3001/api/todos/getall").then(response=>{
              vuexContext.commit("settodo",post)
              return response
          }).catch(e=>console.log(e))*/


    },
    addtodo(vuexContext, payload) {
        return axios.post("https://yeniproje-241606.firebaseio.com/todo.json", payload).then(response => {
            debugger
            payload.id = response.data.name
            vuexContext.commit("addnewtodo", payload)
        }).catch(e => console.log(e))
    },
    gettodo(vuexContext, data) {
        debugger
        console.log(data)
        vuexContext.commit("gettodo", data)
    },
    setTodo(vuexContext,post){
        return   axios.put("https://yeniproje-241606.firebaseio.com/todo/"+ post.id+".json",post).then(response=>{
            vuexContext.commit("settodo",post)
            return response
        }).catch(e=>console.log(e))
    }

}
const getters = {
    gettodo(state){
        return state.todoList
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
