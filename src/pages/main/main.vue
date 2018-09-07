<template>
    <div class='z-main'>
        <div class="z-main-body">
            <div class="z-main-move" @mousedown="move">
                <span>{{positionX}}</span>
                <br/>
                <span>{{positionY}}</span>
            </div>
        </div>
    </div>
</template>
<script src="./main.js"></script>
<style scoped></style>
<style src='./main.css'></style>
