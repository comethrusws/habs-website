<template>
    <div>
        <NavOther />

        <div class="slider">
            <img src="../assets/slide/img2.jpg ">
        </div>

        

        <ApplyBarVue/>
        <FooterBar/>
    </div>
</template>

<script setup>
    import FooterBar from '@/components/FooterBar.vue';
    import NavOther from '../components/NavOther.vue';
    import ApplyBarVue from '@/components/ApplyBar.vue';
</script>

<style scoped>
    .slider{
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
</style>