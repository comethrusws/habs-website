<template>
<NavOther />
<div class="slide-img">
    <img src="../assets/1702892974748.jpg">
</div>

<div class="container">
    <div class="center">
        <div class="admissionform">
            <h1>Student Admissions Form</h1>
            <form @submit.prevent="submitForm" id="adForm">
                <div class="form-group">
                    <label for="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" required>
                </div>
                <div class="form-group">
                    <label for="middlename">Middle Name:</label>
                    <input type="text" id="middlename" name="middlename">
                </div>
                <div class="form-group">
                    <label for="surnamename">Surname:</label>
                    <input type="text" id="surname" name="surname" required>
                </div>

                <div class="form-group select">
                    <label for="age">Age:</label>
                    <input type="number" id="age" name="age" required>
                </div>

                <div class="form-group select">
                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="form-group select">
                    <label for="grade">Grade Applied For:</label>
                    <select id="grade" name="grade" required>
                        <option value="playGroup">Play Group</option>
                        <option value="kindergarten">Kindergarten</option>
                        <option value="grade-one">Grade One</option>
                        <option value="grade-two">Grade Two</option>
                        <option value="grade-three">Grade Three</option>
                    </select>
                </div><br><br>
                <hr style="color: #757575; width: 100%;">
                <br><br>

                <div class="form-group">
                    <label for="parentName">Parent/Guardian's Name:</label>
                    <input type="text" id="parentName" name="parentName" required><br><br>

                    <label for="contactNumber">Contact Number:</label>
                    <input type="tel" id="contactNumber" name="contactNumber" required><br><br>

                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" required><br><br>

                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required><br><br>

                </div>

                <div class="form-group select">
                    <label for="transportation">Bus Transportation Needed:</label>
                    <select id="transportation" name="transportation" required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button class="sub" type="submit">Submit</button>
            </form>
        </div>
    </div>
    <div class="right">
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d722.3087208237386!2d85.41699836260847!3d27.67613711582671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b000873e62d%3A0x7cb58ab33175b30e!2sHimalayan%20Academy%20Boarding%20School!5e1!3m2!1sen!2snp!4v1703007079496!5m2!1sen!2snp" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr class="hr">
        <div class="contact-info">
            <h2 class="sect-title">Admissions Contact</h2>
            <p><i class="fa fa-phone"></i> +977 981-0136313</p>
            <p><i class="fa fa-envelope"></i> admissions@habs.edu.np</p>
        </div>
    </div>
</div>
<FooterBar />
</template>

<script>
import NavOther from '../components/NavOther.vue'
import FooterBar from '../components/FooterBar.vue'
import emailjs from 'emailjs-com';
emailjs.init('nwLb1-zBSBGEZkkoX');
export default {
    name: 'AdmissionIn',
    components: {
        NavOther,
        FooterBar
    },
    data() {
        return {
            formData: {
                firstname: '',
                middlename: '',
                surname: '',
                age: '',
                grade: '',
                parentName: '',
                contactNumber: '',
                address: '',
                email: '',
                transportation: '',
            }
        };
    },
    computed: {
        fullName() {
            return `${this.formData.firstname} ${this.formData.middlename} ${this.formData.surname}`.trim();
        }
    },
    methods: {
        submitForm() {
            emailjs.sendForm('service_cf5kaha', 'template_szexsiv', '#adForm')
                .then((result) => {
                    console.log('Email sent successfully!', result.text);
                    alert('Form submitted successfully!');
                }, (error) => {
                    console.error('Error sending email:', error);
                    alert('Error submitting form. Please try again.');
                });
        },
    }
}

</script>

<style scoped>
/* Default styles for larger screens */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.slide-img {
    width: 100%;
    height: 250px;
    overflow: hidden;
    position: relative;
}

.slide-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}

.center {
    margin-top: 20px;
    width: 600px;
    margin-bottom: 20px;
    border: 2px dashed #e22249;
    border-radius: 10px;
}

.right {
    display: flex;
    flex-direction: row;
    align-items: right;
}

.right #map {
    width: 200px;
    height: 200px;
    margin-top: 20px;
    margin-right: 150px;
}

.contact-info {
    text-align: center;
    margin-top: 20px;
}

/* Responsive styles for smaller screens */
@media screen and (max-width: 768px) {
    .center {
        width: 80%;
    }

    .right {
        flex-direction: column;
    }

    .right #map {
        margin-right: 0;
        margin-bottom: 20px;
        width: 100%;
    }
}

.admissionform {
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

.select {
    margin-bottom: 20px;
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
}

label {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    display: block;
    font-weight: lighter;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #757575;
    border-radius: 1px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="number"]:focus,

textarea:focus,
button:focus {
    outline: none !important;
}

input[type="text"]:hover,
input[type="email"]:hover,
input[type="tel"]:hover,
input[type="number"]:hover,
textarea:hover {
    border: 1px solid rgb(206, 88, 88);
}

select {
    outline: none;
    background-color: #ffffff2c;
    width: 100%;
    padding: 8px;
    border: 1px solid #757575;
    border-radius: 1px;
}

select:hover {
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

.hr {
    margin-right: 50px;
    margin-top: 20px;
    height: 150px;
}

.sub {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    font-size: 18px;
}

.p-title {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    text-align: left;
}

.sect-title {
    font-size: 22px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #e22249;
}

.sect-title2 {
    font-size: 18px;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: #e22249;
}
</style>
