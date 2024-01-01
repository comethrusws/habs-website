<template>
<div>
    <NavOther />

    <div class="slider">
        <img src="../assets/slide/slide-2.jpg ">
    </div>
    <br>
    <AboutContent/>

    <br>
    <ApplyOth />
    <FooterBar />
</div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '../components/NavOther.vue';
import ApplyOth from '@/components/ApplyOth.vue';
import AboutContent from '@/components/AboutContent.vue';

export default {
    name: 'AboutUs',
    components: {
    NavOther,
    FooterBar,
    ApplyOth,
    AboutContent
}
}
</script>

<style scoped>

.slider {
    max-width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-size: contain;
}

</style>
