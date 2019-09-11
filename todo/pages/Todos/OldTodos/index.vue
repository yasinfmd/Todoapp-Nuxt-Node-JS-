<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="item in todolist">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <p class="card-text">{{item.todoname}}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Sil</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Güncelle</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Detaylar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        computed:{
            todolist(){
                return this.$store.getters.gettodo
            }
        },
        head () {
            return {
                title: "Tamamlanan Görevler",
            }
        },
        name: "index",
        fetch(context) {
            if (context.store.getters.getAuthKey) {
                let token = context.store.getters.getAuthKey;
                return axios.get("http://localhost:3001/api/todos/getall/0", {
                    headers: {
                        Authorization: "Bearer " + token,
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    console.log(response)
                    context.store.dispatch("gettodo",response.data)
                }).catch(e => {
                    console.log(e.message)
                })
            }

        },

    }
</script>

<style scoped>

</style>
