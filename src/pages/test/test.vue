<template>
    <div class="z-test" @contextmenu="rclickhandle">
        <div class="z-test-head">
            <button class="z-test-b" @click="clickhandle" @dblclick="dbclickhandle">按钮</button>
            <input @keyup="keyuphandle" v-model="arry2" @select="selecthandle">
            <li>{{testarray}}</li>
            <li>{{arry2}}</li>
        </div>
        <div id='n1'>
            <div id='n2'>
                <div id='n3'>
                    <div id='n4'>
                        <div id='n5'></div>
                    </div>
                </div>
            </div>
        </div>
        <article class="z-test-json">
            <button @click="findkey" style="margin:0px 30px 0px 40px">查找</button>
            <input v-model="jsonkey" type="text"/>
            <p>{{jsonresult}}</p>
        </article>
    </div>
</template>
<script src="./test.js"></script>
<style src="./test.css"></style>
