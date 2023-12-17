<template>
<div class="body">
    <NavBar />

    <div class="slide-img">
        <img class="slider" src="../assets/slide/img2.jpg">
    </div>

    <div class="welcome-section">
        <div class="container">
            <div class="background-image">
                <img src="../assets/welcome-wrap.png" />
            </div>

            <div class="content-overlay">
                <div class="welcome-image">
                    <img src="../assets/welcome.jpg" alt="Welcome Image" />
                </div>

                <div class="welcome-text">
                    <h3>Welcome To</h3><br>
                    <h1>Himalayan Academy Boarding School</h1><br>
                    <p>
                        Himalayan Academy Boarding School is a nurturing educational institution dedicated to fostering holistic development in elementary students.
                        <br><br>At our school, we prioritize not only academic achievement but also the spiritual, moral, and relational growth of our students. We believe in instilling values that go beyond textbooks, encouraging a sense of purpose and fulfillment in their journey towards excellence. <br>
                        <br>Please Also check our School Calendar.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="footer-section">
        <div class="ftcontainer">
            <div class="bgimg">
                <img src="../assets/footer-bg-2.jpg">
            </div>
            <div class="overlay">
                <div class="footer-row">
                    <div class="footer-column">
                        <h3>Resources</h3>
                            <ul>
                                <li><a href="#">Calendar</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Activities</a></li>
                            </ul>
                    </div>
                    <div class="footer-column">
                        <h3>About Us</h3>
                        <p>
                        </p>
                    </div>
                    <div class="footer-column">
                            <img src="../assets/menulogo.png">
                            <p>
                                Himalayan Academy Boarding School,<br>
                                Sallaghari, Bhaktapur<br>
                                +977 981-0136313<br>
                                contact@habs.edu.np<br>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.slider {
    width: 100%;
    height: 400px;
}
.welcome-section {
    padding: 40px 0;
}

.container {
    width: 80%;
    margin: auto;
    position: relative;
}

.background-image {
    width: 1100px;
    height: 641px;
    overflow: hidden;
}

.background-image img {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.content-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.welcome-image,
.welcome-text {
    width: 50%;
    max-width: 550px;
}

.welcome-image img {
    width: 550px;
    display: block;
}

.welcome-text {
    padding: 0 20px;
}

.welcome-text h3{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    color: #ff4b4b;
} 
.welcome-text p{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
}



.footer-section{
    padding: 40px 0;
}
.ftcontainer{
    width: 100%;
    margin: auto;
    position: relative;
}
.bgimg{
    width: 100%;
    height: 400px;
    overflow: hidden;
}
.bgimg img{
    width: 100%;
    height: 400px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footer-row {
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  padding-bottom: 10px;
}

.footer-column {
  flex: 0 0 50%;
  margin-left: 40px;
}

.footer-column img {
  height: 65px;
  top: 0;
  left: 0;
  margin-bottom: 10px;
  margin-left: -20px
}
.footer-column p{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 300;

}
.footer-column ul {
  margin-left: 40px;
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 10px;
  margin-left: -20px;
}

.footer-column ul li a {
  color: #000000;
  text-decoration: none;
}
</style>
