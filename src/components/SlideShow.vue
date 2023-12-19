<template>
    <div class="slideshow">
      <transition name="fade">
        <img :key="currentImage" :src="currentImage" class="slide" />
      </transition>
    </div>
  </template>  
  
<script>
export default {
    name: 'SlideShow',
    data() {
        return {
            images: [
                require('@/assets/slide/img1.gif'),
                require('@/assets/slide/img2.gif'),
                require('@/assets/slide/img3.gif'),
                require('@/assets/slide/img4.gif'),
            ],
            currentIndex: 0,
            intervalId: null,
            intervalDuration: 4000,
        };
    },
    computed: {
        currentImage() {
            return this.images[this.currentIndex];
        },
    },
    mounted() {
        this.startSlideshow();
    },
    methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, this.intervalDuration);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>
  
  
<style scoped>
.slideshow {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: transform opacity 0.6s ease-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
