<template>
  <div class="grid-gallery">
  <div class="grid-container">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="'Image ' + (index + 1)"
      @click="openModal(index)"
      class="grid-image"
    />
  </div>

  <div v-if="selectedImage !== null" class="modal" @click="closeModal">
    <span class="close">&times;</span>
    <img
      :src="images[selectedImage].src"
      :alt="'Image ' + (selectedImage + 1)"
      class="modal-content"
    />
  </div>
</div>
</template>

<script>
export default {
  name:'GalleryComp',
  data() {
    return {
      images: [
      {src: require('@/assets/Gallery/1.jpg') },
      {src: require('@/assets/Gallery/2.jpg') },
      { src: require('@/assets/Gallery/3.jpg') },
      { src: require('@/assets/Gallery/4.jpg') },
      { src: require('@/assets/Gallery/5.jpg') },
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
    openModal(index) {
      this.selectedImage = index;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.selectedImage = null;
      document.body.style.overflow = 'auto'; 
    },
  },
};
</script>

<style scoped>
.grid-gallery {
display: flex;
justify-content: center;
}

.grid-container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 10px;
margin-top: 20px;
margin-bottom: 20px;
}

.grid-image {
width: 100%;
height: 80%;
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
max-width: 90%;
max-height: 90%;
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
