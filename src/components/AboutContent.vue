<template>
    <div class="container">
        <div class="inner">

        </div>
    </div>
</template>

<script>
    export default{
        name:'AboutContent'
    }
</script>

<style scoped>
    .container{
        margin: auto;
        width: 90%;
        height: 300px;
        border: solid 1px red;
        position: relative;
    }
    .inner{
        margin: auto;
        width: 90%;
        height: 250px;
        border: solid 1px red;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
    }
</style>
