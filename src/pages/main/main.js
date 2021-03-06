/* eslint-disable */
import draggable from 'vuedraggable'
import ZTree from '../../components/tree/tree.vue'

export default {
    name: 'Main',
    components:{draggable,ZTree},
    data () {
        return {
            positionX: 0,
            positionY: 0,
            myarray1:[{name:'a'},{name:'b'},{name:'c'},{name:'d'}],
            myarray2:[{name:'1'},{name:'2'},{name:'3'},{name:'4'}],
            imgbase:'',
            treeData:[{
                id: 1,
                label: '一级 1',
                children: [{
                  id: 4,
                  label: '二级 1-1',
                  children: [{
                    id: 9,
                    label: '三级 1-1-1'
                  }, {
                    id: 10,
                    label: '三级 1-1-2'
                  }]
                }]
              }, {
                id: 2,
                label: '一级 2',
                children: [{
                  id: 5,
                  label: '二级 2-1'
                }, {
                  id: 6,
                  label: '二级 2-2'
                }]
              }, {
                id: 3,
                label: '一级 3',
                children: [{
                  id: 7,
                  label: '二级 3-1'
                }, {
                  id: 8,
                  label: '二级 3-2',
                  children: [{
                   id: 11,
                    label: '三级 3-2-1'
                  }, {
                    id: 12,
                    label: '三级 3-2-2'
                  }, {
                    id: 13,
                    label: '三级 3-2-3'
                  }]
                }]
              }],
            inputv:'iiiiiii'
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
            console.log('file',f)
            let me = this
            let datas = {}
            // this.base(f)
            let appkey = "59MiGNQTQrzdXbdt"
            let reader = new FileReader()
            let imgfile
            reader.readAsDataURL(f)
            reader.onload = async e=>{
                imgfile = e.target.result
                if(f.size/1024 > 100){
                    let quality = 100*1024/f.size
                    me.compressImg(imgfile,{w:quality,h:quality},(base)=>{
                        let basedata = base
                        console.log(basedata)
                        basedata = basedata.split('base64,')[1]
                        me.$http.post('http://127.0.0.1:8081/api/tencentai',{image:basedata},Headers={'Content-Type':'application/JSON'}).then(res=>{
                            console.log(res)
                        })
                    })
                }else{
                    let basedata = imgfile.split('base64,')[1]
                    console.log(imgfile)
                    me.$http.post('http://127.0.0.1:8081/api/tencentai',{image:basedata},Headers={'Content-Type':'application/JSON'}).then(res=>{
                        console.log(res)
                    })
                }
                // datas['app_id'] = 2110493895
                // let times = new Date().getTime()
                // times = times.toString()
                // times = times.substring(0,10)
                // datas['time_stamp'] = parseInt(times)
                // datas['nonce_str'] = me.randomWord(true,15,32)
                // datas['image'] = imgfile
                // datas['image'] = imgfile.split('base64,')[1]
                // datas['topk'] = 5
                // datas['image_url'] = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544690571192&di=a20f11325d332586292be443c5e8cd07&imgtype=0&src=http%3A%2F%2Fimg0.ph.126.net%2FRYh0GlXytfdbaPFMjUriyw%3D%3D%2F6598262736773960181.png'
                // let ddd = me.getReqSign(datas,appkey)
                // datas['sign'] = ddd
                // console.log(datas)
                // console.log('ddd===>',ddd)
                // console.log('image',datas.image)
                // me.$http.post('http://127.0.0.1:8081/api/tencentai',{image:datas.image},Headers={'Content-Type':'application/JSON'}).then(res=>{
                //     console.log(res)
                // })
                // me.$http.post("https://api.ai.qq.com/fcgi-bin/image/image_terrorism",datas).then(res=>{
                //     console.log('res=====>',res)
                // })
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
            // console.log('keys===>',keys)
            let str = ''
            // console.log('encode test====>',this.urlencode('疼 训'))
            for(let j=0;j<keys.length;j++){
                str=str + keys[j] + '=' + this.urlencode(datas[keys[j]]) + '&'
                // str = str + keys[j] + '=' + datas[keys[j]] + '&'
            }
            str = str + 'app_key=' + appkey
            // console.log('str====>',str)
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
        },
        urlencode(clearString) 
        {
            var output = '';
            var x = 0;
            
            clearString = utf16to8(clearString.toString());
            var regex = /(^[a-zA-Z0-9-_.]*)/;

            while (x < clearString.length) 
            {
                var match = regex.exec(clearString.substr(x));
                if (match != null && match.length > 1 && match[1] != '') 
                {
                    output += match[1];
                    x += match[1].length;
                } 
                else 
                {
                    if (clearString[x] == ' ')
                        output += '+';
                    else 
                    {
                        var charCode = clearString.charCodeAt(x);
                        var hexVal = charCode.toString(16);
                        output += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
                    }
                    x++;
                }
            }

            function utf16to8(str) 
            {
                var out, i, len, c;

                out = "";
                len = str.length;
                for(i = 0; i < len; i++) 
                {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F)) 
                    {
                        out += str.charAt(i);
                    } 
                    else if (c > 0x07FF) 
                    {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    } 
                    else 
                    {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            }

            return output;
        },
        compressImg(base,obj,callback){
            let img = new Image()
            img.src = base
            img.onload = (e)=>{
                let me = e.target
                let w = me.width*obj.w
                let h = me.height*obj.h
                let quality = 0.2
                let canvas = document.createElement('canvas')
                let ctx = canvas.getContext('2d')
                let anw = document.createAttribute('width')
                anw.nodeValue = w
                let anh = document.createAttribute('height')
                anh.nodeValue = h
                canvas.setAttributeNode(anw)
                canvas.setAttributeNode(anh)
                ctx.drawImage(me,0,0,w,h)
                if(obj.quality && obj.quality>0 && obj.quality<=1){
                    quality = obj.quality
                    console.log('quality=========>',quality)
                }
                let base64 = canvas.toDataURL('image/jpeg',quality)
                callback(base64)
            }
        },
        showtree(){

        }
    },
    mounted(){
        // let user = users['P060']
        console.log('00000000')
    },
}
