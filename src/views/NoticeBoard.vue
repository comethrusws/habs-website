<template>
<NavOther />
<div class="gallery">
    <div class="gallery-container">
      <div v-for="(image, index) in images" :key="index" class="image-wrapper">
        <img :src="image.src" :alt="image.alt" @click="showImage(index)" />
      </div>
    </div>

    <div v-if="selectedImage !== null" class="modal" @click="hideImage">
      <span class="close">&times;</span>
      <img :src="images[selectedImage].src" :alt="images[selectedImage].alt" class="modal-content" />
    </div>
</div>
<FooterBar />
</template>

<script>
export default {
    name: 'NoticeBoard',
    components: {
        FooterBar,
        NavOther
    },
    data() {
    return {
      images: [
        { src: require('@/assets/Gallery/1.jpg') },
        { src: require('@/assets/Gallery/2.jpg') },
        { src: require('@/assets/Gallery/3.jpg') },
        {src: require('@/assets/Gallery/4.jpg') },
        {src: require('@/assets/Gallery/5.jpg') },
        { src: require('@/assets/Gallery/6.jpg') },
        { src: require('@/assets/Gallery/7.jpg') },
        { src: require('@/assets/Gallery/8.jpg') },
        { src: require('@/assets/Gallery/9.jpg') },
        { src: require('@/assets/Gallery/10.jpg') },
        { src: require('@/assets/Gallery/11.jpg') },
        { src: require('@/assets/Gallery/12.jpg') },
        { src: require('@/assets/Gallery/13.jpg') },
        { src: require('@/assets/Gallery/14.jpg') },
        { src: require('@/assets/Gallery/15.jpg') },
        { src: require('@/assets/Gallery/16.jpg') },

      ],
      selectedImage: null,
    };
  },
  methods: {
    showImage(index) {
      this.selectedImage = index;
      document.body.style.overflow = 'hidden'; // Hide scroll when modal is open
    },
    hideImage() {
      this.selectedImage = null;
      document.body.style.overflow = 'auto'; // Show scroll when modal is closed
    },
  },
}
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '../components/NavOther.vue';
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create a 3-column grid */
  gap: 20px;
  padding: 20px;
}

.image-wrapper {
  width: calc(33.33% - 20px); /* Adjust the width for each image wrapper (minus the gap) */
  height: 0;
  padding-bottom: calc(33.33% - 20px); /* Maintain a square aspect ratio */
  position: relative;
  overflow: hidden;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
}

.close {
  color: white;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}
</style>