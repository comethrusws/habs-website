<template>
<div class="body">
    <NavBar/>

    <SlideShow/>
 
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
                    </p><br>
                    <button class="sub">School Calendar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="video-section">
        <div class="vcontainer">
            <div class="vcontent">
                <div class="vidtext">
                    <h2>Storytime With Principal</h2><br>
                    <p>At HABS, we aim to create an atmosphere where students feel inspired, supported, and encouraged to excel not just academically but also in their personal growth and relationships. <br>
                        <br>Join our Principal for captivating 'Storytime with Principal' sessions on YouTube! Delight in tales that spark imagination and learning, specially curated for young minds. These engaging story sessions foster a love for reading and discovery among our students, creating cherished moments of shared learning and joy.
                    </p>
                </div>
                <div class="video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-Z1ldscWMf4?si=j4S1s2epBQgAv3hf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>

    <div class="ft-desc">
        <img src="../assets/foot-desc.png" >
    </div>
    
    <ApplyBar/>

    <FooterBar/>

</div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavBar from '../components/NavBar.vue';
import ApplyBar from '../components/ApplyBar.vue';
import SlideShow from '../components/SlideShow.vue'
export default {
    components: { NavBar, FooterBar, ApplyBar, SlideShow }
}

</script>

<style scoped>
.welcome-section {
    padding: 40px 0;
    align-items: center;
    justify-content: center;
}

.container {
    width: 80%;
    margin: auto;
    position: relative;
}

.background-image {
    width: 1100px;
    height: 550px;
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

.welcome-text h3 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: normal;
    color: #ff4b4b;
}

.welcome-text p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
}

.sub{
    padding: 10px 20px;
    background-color: #e22249;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 auto;
    outline: none;
}

.video-section {
    padding: 40px 0;
    background-color: #fdfdfd;

}

.vcontainer {
    width: 80%;
    margin: auto;
    position: relative;
    width: 1100px;
    height: 300px;
    overflow: hidden;
}

.vcontent {
    position: absolute;
    top: 0;
    left: 0;
    width: 1100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.video,
.vidtext {
    width: 50%;
    max-width: 550px;
}

.vidtext h2 {
    color: #ff4b4b;
}

.vidtext p {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
}


.ft-desc{
    width: 80%;
    margin: 0px;
    position: relative;
    width: 100%;
    height: 560px;
    overflow: hidden;

}
.ft-desc img{
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
