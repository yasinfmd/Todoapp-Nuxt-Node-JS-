import axios from "axios"
import Cookie from 'js-cookie'
const state = () => ({

})

const mutations = {
    clearAuthKey(state){
        Cookie.remove("token")
        localStorage.removeItem("token")
        state.token=null
    },
}

const actions = {
    logout(vuexContext){
        vuexContext.commit("clearAuthKey")
    },
    onLogin(vuexContext,payload){
        const headers = {
            'Content-Type': 'application/json',
        }
        return axios.post( "http://localhost:3001/api/users/signin", payload,headers).then(response => {
            if(response.status===200){
                 Cookie.set("token",response.data.token)
               localStorage.setItem("token",response.data.token)
                vuexContext.commit("setAuthKey",response.data.token)
                return response

            }
        }).catch(e =>{
            return e.response
        })
    },

}
const getters = {
}


export default {
    state,
    mutations,
    actions,
    getters
};
