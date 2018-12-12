/* eslint-disable */
import draggable from 'vuedraggable'
// import Upload from 'iview'
// import Button from 'iview'

export default {
    name: 'Main',
    components:{draggable},
    data () {
        return {
            positionX: 0,
            positionY: 0,
            myarray1:[{name:'a'},{name:'b'},{name:'c'},{name:'d'}],
            myarray2:[{name:'1'},{name:'2'},{name:'3'},{name:'4'}],
            imgbase:''
        }
    },
    methods: {
        move (e) {
            console.log('sssss', e)
            let odiv = e.target // 获取目标元素
            // 算出鼠标相对元素的位置
            let disX = e.clientX - odiv.offsetLeft
            let disY = e.clientY - odiv.offsetTop
            document.onmousemove = (e) => { // 鼠标按下并移动的事件
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX
                let top = e.clientY - disY
                top = this.toppo(top)
                left = this.leftpo(left)
                // 绑定元素位置到positionX和positionY上面
                this.positionX = top
                this.positionY = left
                // 移动当前元素
                odiv.style.left = left + 'px'
                odiv.style.top = top + 'px'
            }
            document.onmouseup = (e) => {
                document.onmousemove = null
                document.onmouseup = null
            }
        },
        leftpo(m = 0){
            for(let i =0;i<22;i++){
                if(m>i *50 && m < i*50+50){
                    m = i*50
                    break
                }
            }
            return m
        },
        toppo(m = 0){
            for(let i =0;i<7;i++){
                if(m>i *50 && m < i*50+50){
                    m = i*50
                    break
                }else if(m > 450){
                    m = 450
                    break
                }
            }
            return m
        },
        dragend(){
            console.log(this.myarray1)
        },
        BeforeUpload(f){
            // console.log('file',f)
            let me = this
            let datas = {}
            // this.base(f)
            let appkey = "59MiGNQTQrzdXbdt"
            let reader = new FileReader()
            let imgfile
            reader.readAsDataURL(f)
            reader.onload = e=>{
                imgfile = e.target.result
                datas['app_id'] = 2110493895
                datas['time_stamp'] = f.lastModified
                datas['nonce_str'] = me.randomWord(true,15,32)
                // datas['image'] = this.imgbase.split('base64,')[1]
                datas['image'] = imgfile.split('base64,')[1]
                let ddd = me.getReqSign(datas,appkey)
                datas['sign'] = ddd
                console.log(datas)
                console.log('ddd===>',ddd)
                me.$http.post("https://api.ai.qq.com/fcgi-bin/image/image_terrorism",datas).then(res=>{
                    console.log('res=====>',res)
                })
            }
            return false
        },
        randomWord(randomFlag, min, max){
            var str = "",
                range = min,
                arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            if(randomFlag){
                range = Math.round(Math.random() * (max-min)) + min;
            }
            for(var i=0; i<range; i++){
                let pos = Math.round(Math.random() * (arr.length-1));
                str += arr[pos];
            }
            return str;
        },
        getReqSign(datas,appkey){
            let keys = []
            for(let i in datas){
                keys.push(i)
            }
            keys = keys.sort()
            let str = ''
            for(let j=0;j<keys.length;j++){
                str=str + keys[j] + '=' + encodeURI(datas[keys[j]]) + '&'
            }
            str = str + 'app_key=' + appkey
            let mstr = md5(str).toUpperCase()
            return mstr
        },
        async getbase(f){
            return new Promise((resolve,reject)=>{
                let reader = new FileReader()
                let imgfile
                reader.readAsDataURL(f)
                reader.onload = e=>{
                    imgfile = e.target.result
                    resolve(imgfile)
                }
            })
        },
        async base(f){
            let ff = await this.getbase(f)
            this.imgbase = ff
        }
    }
}