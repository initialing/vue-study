/* eslint-disable */

export default {
    name:'Koa',
    data(){
        return {
            queryid:'',
            datas:''
        }
    },
    methods:{
        getMethod(){
            this.$http.get('http://127.0.0.1:8081/api/hello',{params:{"name":'sony'}}).then((res)=>{
                console.log(res)
            })
        },
        postMethod(){
            this.$http.post('http://127.0.0.1:8081/api/data',{data:{'age':{$ne:20}}},Headers={'Content-Type':'application/JSON'}).then((res)=>{
                console.log(res)
            })
        },
        idMethod(){
            this.$http.get('http://127.0.0.1:8081/api/queryid/'+this.queryid,{params:{"name":'temp'}}).then(res=>{
            this.datas = res
            console.log('this.datas',this.datas)
            })
        }
    }
}