/* eslint-disable */


export default {
    name: 'Algo',
    data(){
        return {
            sortin:'',
            sortout:'',
        }
    },
    methods:{
        bubblesort(){
            let temp=this.sortin.split(' ')
            for(let i=0;i<temp.length;i++){
                for(let j=0;j<temp.length-i;j++){
                    if(temp[j]>temp[j+1]){
                        [temp[j],temp[j+1]]=[temp[j+1],temp[j]]
                    }
                }
            }
            this.sortout = temp.join(' ')
        }
    }
}