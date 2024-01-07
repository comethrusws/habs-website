<template>
<NavOther/>
<div class="slide-img">
    <img src="../assets/contact.jpg">
</div>
<div class="contact-form">
    <p class="sect-title">General Inquiries</p>
    <p class="p-title">Mail </p>
    <p>Himalayan Academy Boarding School, <br>Sallaghari, Bhaktapur, Nepal </p>
    <p class="p-title">Phone </p>
    <p> +977 981-0136313 </p>
    <p class="p-title">Contact Hours </p>
    <p>Monday — Friday:  10:00AM-3:00PM <br>Saturday & Sunday: Closed</p>

    <p class="p-title">Contact Us</p>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Your Name(required)</label>
            <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
            <label for="email">Your Email(required)</label>
            <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="formData.subject">
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>
        <button class="sub" type="submit">Submit</button>
    </form>
</div>
<p class="sect-title2">Request for Additional Information and Admissions for families</p>
    
<ApplyOth/>
<FooterBar/>
</template>

  
  
<script>
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '../components/NavOther.vue';
import ApplyOth from '../components/ApplyOth.vue';

import axios from 'axios';

export default {
    components: {NavOther,ApplyOth,FooterBar},
    data() {
        return {
            formData: {
                name: '',
                email: '',
                subject:'',
                message: ''
            }
        };
    },
    methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:3000/submit-form', this.formData);
        console.log('Form submitted!', response.data);
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  },
};
</script>
  
  
<style scoped>
.slide-img{
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
}

.slide-img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}
.contact-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 5px;
}

p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    text-align: left;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    display: block;
    font-weight: lighter;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #757575;
    border-radius: 1px;
}
input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus,
button:focus {
  outline: none !important; 
}
input[type="text"]:hover,
input[type="email"]:hover,
textarea:hover{
    border: 1px solid rgb(206, 88, 88);
}

button {
    padding: 10px 20px;
    background-color: #e22249;
    color: #fff;
    border: none;
    border-radius: 1px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
    outline: none;
}
.sub{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    font-size: 18px;
}
.p-title{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-align: left;
}
.sect-title{
    font-size: 22px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #e22249;
}
.sect-title2{
    font-size: 18px;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #e22249;
}
</style>
