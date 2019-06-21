<template>
    <div class='z-main'>
        <div class="z-main-body">
            <!-- <div class="z-main-move" @mousedown="move">
                <span>{{positionX}}</span>
                <br/>
                <span>{{positionY}}</span>
            </div> -->
            <div class="drag">
                <draggable v-model="myarray1" :options='{group:"people"}' @start='drag=true' @end='dragend'>
                    <button v-for='(item,index) in myarray1' :key='index'>{{item.name}}</button>
                </draggable>
                <draggable v-model="myarray2" :options='{group:"people"}' @start='drag=true'>
                    <button v-for='(item,index) in myarray2' :key='index+item.name'>{{item.name}}</button>
                </draggable>
            </div>
            <article>
                <p>上传图片</p>
                <Upload :before-upload="BeforeUpload" action="//jsonplaceholder.typicode.com/posts/">
                    <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
            </article>
            <article class="tree-one">
                <el-tree
                    :data='treeData'
                    draggable
                    node-key="id"
                    >
                </el-tree>
            </article>
            <button @click.stop="showtree">点击</button>
            <input v-model="inputv"/>
            <article class="tree-two">
                <z-tree
                    :data='treeData'
                    :draggable='true'
                    node-key="id"
                    >
                </z-tree>
            </article>
        </div>
    </div>
</template>
<script src="./main.js"></script>
<style scoped></style>
<style src='./main.css'></style>
