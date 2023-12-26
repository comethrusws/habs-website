<template>
<NavOther />
<div class="container">
    <div class="centered">
        <img src="../assets/calendar/Q3_calendar.png" class="calendar">
        <button @click="downloadPDF">Download Calendar</button>
    </div>
</div>
<ApplyOth />
<FooterBar />
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '@/components/NavOther.vue';
import ApplyOth from '@/components/ApplyOth.vue';

export default {
  components: {
    NavOther,
    ApplyOth,
    FooterBar,
  },
  methods: {
    async downloadPDF() {
      try {
        const response = await fetch('@/assets/calendar/Q3_calendar.pdf');
        const blob = await response.blob();

        // Create the link and trigger download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Q3calendar.pdf';
        link.click();
        URL.revokeObjectURL(link.href);
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    },
  },
};
</script>


<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.centered {
    text-align: center;
    border: 1px solid #ccc;
    padding: 20px;
}

img {
    height: 60%;
    width: 60%;
}

button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #e22249;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    outline: none;
}
</style>
