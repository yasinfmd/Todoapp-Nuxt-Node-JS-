import axios from "axios"
import Cookie from 'js-cookie'
const state = () => ({
    token:null
})

const mutations = {
    setAuthKey(state, token) {
        debugger
       /* Cookie.set("token",token)
        localStorage.setItem("token",token)*/
        state.token=token
    },

}

const actions = {
    nuxtServerInit(vuexContext,context){
     /*   if(context.req.headers.cookie!=undefined){
            let cookie=context.req.headers.cookie.split(";").find(c=>{
                return    c.trim().startsWith("token")
            })
            if(cookie){
                cookie=cookie.split("=")[1]
            }
        }*/
    },
    initAuth(vuexContext,req){
        let token;
        if(req){
            if(!req.headers.cookie){
            return
            }
            token=req.headers.cookie.split(";").find(c=>{
                return    c.trim().startsWith("token")
            })
            if(token){
                token=token.split("=")[1]
            }
        }else{
             token=localStorage.getItem("token")
            if(!token){
                return;
            }
        }
        vuexContext.commit("setAuthKey", token)
    },

}
const getters = {
    getAuthKey(state){
        return state.token
    },
    isAuthenticated(state){
        return state.token!==null
    }
}


export default {
    state,
    mutations,
    actions,
    getters
};
