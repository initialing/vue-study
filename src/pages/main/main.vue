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
        </div>
    </div>
</template>
<script src="./main.js"></script>
<style scoped></style>
<style src='./main.css'></style>
