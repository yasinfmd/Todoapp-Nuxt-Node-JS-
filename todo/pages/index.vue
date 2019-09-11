<template>
  <div class="form-signin">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Nuxtjs & Nodejs Todo App </h1>
      <p>Todo Eklemek İçin <code>Giriş Yap</code> </p> {{$store.getters.gettest}}
    </div>

    <div class="form-label-group">
      <input type="email" id="inputEmail" class="form-control" v-model="user.username" placeholder="Email address" required autofocus>
      <label for="inputEmail">Email Adresi</label>
    </div>

    <div class="form-label-group">
      <input type="password" id="inputPassword" v-model="user.userpass" class="form-control" placeholder="Password" required>
      <label for="inputPassword">Parola</label>
    </div>


    <button class="btn btn-lg btn-primary btn-block" type="button" @click="checkValidate">Giriş Yap</button>
    <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2019</p>
  </div>
</template>

<script>
  import Plugins from '@/plugins/Plugins'
  export default {
    methods:{
      onlogin(){
        debugger
        this.$store.dispatch("onLogin",this.user).then((res)=>{
          if(res.status===200){
            this.$router.push("/Dashboard")
          }else if(res.status===401 || res.status===404){
            Plugins.showalert(
                    "Kullanıcı Adı Veya Parola Hatalı"
                    ,"error","Tamam"
            )
          }
        })
      },
      checkValidate(){
        debugger
          if(!Plugins.validateemail(this.user.username)){
            Plugins.showalert(
                    "Kullanıcı Adı Geçersiz"
                    ,"error","Tamam"
            )
          }else if(this.user.userpass.trim()=="" || this.user.userpass.length<8){

            Plugins.showalert(
                    "Parola Geçersiz"
                    ,"error","Tamam"
            )
          }else{
            this.onlogin()
          }
      },
    },
    data(){
      return{
        user:{
          username:"",
          userpass:""
        }
      }
    },
    head () {
      return {
        title: "Giriş Yap",
      }
    },
    layout: 'login',
    name: "index"
  }
</script>

<style scoped>
  html,
  body {
    height: 100%;
  }

  body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
  }

  .form-signin {
    width: 100%;
    max-width: 420px;
    padding: 15px;
    margin: auto;
  }

  .form-label-group {
    position: relative;
    margin-bottom: 1rem;
  }

  .form-label-group > input,
  .form-label-group > label {
    height: 3.125rem;
    padding: .75rem;
  }

  .form-label-group > label {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    margin-bottom: 0; /* Override default `<label>` margin */
    line-height: 1.5;
    color: #495057;
    pointer-events: none;
    cursor: text; /* Match the input under the label */
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: all .1s ease-in-out;
  }

  .form-label-group input::-webkit-input-placeholder {
    color: transparent;
  }

  .form-label-group input:-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-ms-input-placeholder {
    color: transparent;
  }

  .form-label-group input::-moz-placeholder {
    color: transparent;
  }

  .form-label-group input::placeholder {
    color: transparent;
  }

  .form-label-group input:not(:placeholder-shown) {
    padding-top: 1.25rem;
    padding-bottom: .25rem;
  }

  .form-label-group input:not(:placeholder-shown) ~ label {
    padding-top: .25rem;
    padding-bottom: .25rem;
    font-size: 12px;
    color: #777;
  }

  /* Fallback for Edge
  -------------------------------------------------- */
  @supports (-ms-ime-align: auto) {
    .form-label-group > label {
      display: none;
    }
    .form-label-group input::-ms-input-placeholder {
      color: #777;
    }
  }

  /* Fallback for IE
  -------------------------------------------------- */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .form-label-group > label {
      display: none;
    }
    .form-label-group input:-ms-input-placeholder {
      color: #777;
    }
  }
</style>
