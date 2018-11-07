<template>
    <article class='js-algo'>
        <header>
            <h1>算法的实现</h1>
        </header>
        <article class='js-sort'>
            <header>
                <h5>几种排序算法</h5>
                <p>只能输入数字，并以空格分开</p>
            </header>
            <textarea class='sort-input' v-model="sortin"></textarea>
            <textarea class='sort-output' readonly='readonly' v-model="sortout"></textarea>
            <footer>
                <button class='bubble' @click="bubblesort">冒泡排序</button>
            </footer>
        </article>
    </article>
</template>
<script src='./algo.js'></script>
<style scoped></style>
<style src='./algo.css'></style>
