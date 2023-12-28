<template>
<NavOther />

<v-container>
    <v-row>
      <v-col
        v-for="(note, index) in notes"
        :key="index"
        cols="12" sm="6" md="4" lg="3"
      >
        <v-card class="elevation-3">
          <v-card-title class="text-h6">{{ note.title }}</v-card-title>
          <v-card-text>{{ note.content }}</v-card-text>
        </v-card>
      </v-col><br>
    </v-row>
  </v-container>

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
      notes: [
        { title: 'Note 1', content: 'Content of Note 1' },
        { title: 'Note 2', content: 'Content of Note 2' },
        { title: 'Note 3', content: 'Content of Note 3' },
      ],
    };
  },
  }
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '../components/NavOther.vue';
</script>


<style scoped>
</style>