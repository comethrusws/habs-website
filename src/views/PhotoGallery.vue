<template>
    <NavOther />
    <GalleryComp/>
    <FooterBar />
    </template>
    
    <script>
    export default {
        name: 'NoticeBoard',
        components: {
            FooterBar,
            NavOther,
            GalleryComp
        },
    }
    import FooterBar from '@/components/FooterBar.vue';
    import NavOther from '../components/NavOther.vue';
    import GalleryComp from '../components/GalleryComp.vue'
    </script>
