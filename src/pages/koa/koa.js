/* eslint-disable */

export default {
    name:'Koa',
    data(){
        return {

        }
    },
    methods:{
        getMethod(){
            this.$http.get('http://127.0.0.1:3000/api/hello').then((res)=>{
                console.log(res)
            })
        }
    }
}