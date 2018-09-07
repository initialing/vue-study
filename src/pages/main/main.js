/* eslint-disable */
export default {
    name: 'Main',
    data () {
        return {
            positionX: 0,
            positionY: 0
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
        }
    }
}