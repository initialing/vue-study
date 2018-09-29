<template>
    <div class="z-test" @contextmenu="rclickhandle">
        <div class="z-test-head">
            <button class="z-test-b" @click="clickhandle" @dblclick="dbclickhandle">按钮</button>
            <input @keyup="keyuphandle" v-model="arry2" @select="selecthandle">
            <li>{{testarray}}</li>
            <li>{{arry2}}</li>
        </div>
    </div>
</template>
<script src="./test.js"></script>
<style src="./test.css"></style>
