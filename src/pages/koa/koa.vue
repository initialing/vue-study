<template>
    <article class='koa-l1'>
        <header>
            <h1>koa交互</h1>
        </header>
        <article class="koa-get">
            <p class="get-id">
                <input v-model="queryid"/>
                <button class="koa-get-queryid" @click="idMethod">动态id</button>
            </p>
            <button class='koa-get-button' @click="getMethod">koa get</button>
            <button class="koa-post-button" @click="postMethod">koa post</button>
        </article>
    </article>
</template>
<script src='./koa.js'></script>
<style scoped></style>
<style src='./koa.css'></style>
