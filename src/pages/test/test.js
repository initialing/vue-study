/* eslint-disable */
export default {
    name:'Test',
    data(){
        return {
            testarray:[],
            arry2:[]
        }
    },
    methods:{
        clickhandle(){
            let i = 0
            do {
                i++
                if(i%3 == 0){
                    this.testarray.push(i)
                }
                if(i%4 == 0){
                    this.arry2.push(i)
                }
            } while (i <=1000);
            this.testarray = this.testarray.concat(this.arry2)
        }
    }
}