/* eslint-disable */


export default {
    name: 'Algo',
    data(){
        return {
            sortin:'',              //输入字符
            sortout:'',             //输出字符
        }
    },
    methods:{
        bubblesort(){
            this.numlen = 0
            let temp=this.sortin.split(' ')             //按空格切割字符串
            temp = this.isnumarry(temp)             //使用函数判断是否有非数字
            if(!temp){
                alert('请输入数字')             //若有非法字符，提示并返回
                return
            }
            console.time('bubble sort')
            for(let i=0;i<temp.length;i++){             //冒泡排序实现
                for(let j=0;j<temp.length-i;j++){
                    if(temp[j]>temp[j+1]){
                        [temp[j],temp[j+1]]=[temp[j+1],temp[j]]
                    }
                }
            }
            console.timeEnd('bubble sort')
            this.sortout = temp.join(' ')               //按空格将数组拼接为字符串
        },
        selectsort(){

        },
        isnumarry(arr){
            for(let l=0;l<arr.length;l++){              //循环遍历
                if(parseFloat(arr[l])){             //判断是否为纯字母，或字母开头的字符
                    arr[l]=parseFloat(arr[l])               //转为浮点数组
                }else{
                    return false                //如果存在字母，返回false
                }
            }
            return arr              //转化完毕，返回数组
        }
    }
}