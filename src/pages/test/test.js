/* eslint-disable */
export default {
    name:'Test',
    data(){
        return {
            testarray:[],
            arry2:''
        }
    },
    methods:{
        clickhandle(){
            console.log(screen)
        },
        keyuphandle(e){
            console.log(e)
        },
        rclickhandle(e){
            console.log(e)
            e.returnValue = true
        },
        dbclickhandle(){
            window.defaultStatus='completed'
        },
        selecthandle(m){
            console.log('select',m)
        }
    }
}