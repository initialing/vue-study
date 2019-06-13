/* eslint-disable */
import menus from '../../assets/menu.js'
export default {
    name:'Test',
    data(){
        return {
            testarray:[],
            arry2:'',
            jsonkey:'',
            jsonresult:''
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
        },
        findkey(){
            let menu = menus.menu;
            this.findtags(menu,this.jsonkey);
            console.log(menu);
        },
        findtags(obj,key,p=[]){                                      //递归遍历json文件(可行但为何不能打印更多的不等的label？)
            for(let i of obj){
                console.log(i.label);
                if(key == i.label){
                    i.tags[0].show = false;
                    p.push(i.label);
                    this.jsonresult = JSON.stringify(i.tags);
                    console.log('finded',p);
                }else if(key !=i.label && Boolean(i.children)){
                    p.push(i.label);
                    this.findtags(i.children,key);
                }
            }
        }
    },
    mounted(){
        // console.log(menu)
    }
}
