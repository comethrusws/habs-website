<template>
<div>
    <NavOther />

    <div class="slider">
        <img src="../assets/slide/img2.jpg ">
    </div>

    <div class="vcrow">
        <div class="section_inner">
            <div class="section-inner-margin">
                <div class="vc-column">
                    <div class="vc-inner">
                        <div class="wpv-wrapper">
                            <div class="seperator">
                                <div class="wpb_bottom">
                                    <div class="wpb-wrapper">
                                        <div class="menu-about-us-container">
                                            <img src="../assets/logo.png" width="95%" height="95%" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vc-column-container">
                    <div class="vc-column-inner">
                        <div class="wpb-intro">
                            <div class="wpb-wrapper">
                                <p>Himalayan Academy Boarding School is a child-centered, humanistic, progressive, alternative, experiential, play-based, and pre-school and
                                    elementary school located in Bhaktapur and operated by its own management.</p>
                            </div><br>
                            <div class="text-bottom">
                                <div class="wpb-wrapper-2">
                                    <p>HABS offers an interactive, stimulating educational program that revolves around exploration, tailored to meet the unique requirements of our students. At HABS, we emphasize the significance of interdisciplinary education, enhancing our primary course of study with diverse learning experiences in areas such as drama, music, visual arts, tech, community service, physical fitness, and sports at all educational stages.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row2">
        <div class="sect-inner">
            <div class="sect-inner-margin">
                <div class="column-container">
                    <div class="column-inner">
                        <div class="wpb-wrapper"></div>
                    </div>
                </div>
                <div class="column-container">
                    <div class="vc-col-inner">
                        <div class="wpb-wrapper">
                            <div class="vc-row-t">
                                <div class="full-sect-innr">
                                    <div class="element-from-fade">
                                        <div class="animation">
                                            <div class="vc-col-inner">
                                                <div class="wpb-wrapper">
                                                    <div class="empty-space" style="height: 35px;"></div>
                                                    <div class="wpb-text-column">
                                                        <div class="wpb-wrapper">
                                                            <p>
                                                                <img src="../assets/bwlogo.png" alt="" width="52" height="52" style="padding-left: 100px;">
                                                            </p>
                                                            <p class="int-text">Reorganized in 2016, This school is a living, breathing model of how children develop self-confidence, empathy and emotional maturity when their intellectual and emotional processes are honored. </p>
                                                        </div>
                                                    </div>
                                                    <div class="empty-space" style="height: 25px;"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column-container">
                    <div class="vc-col-inner">
                        <div class="wpb-wrapper">
                            <div class="empty-space" style="height: 25px;"></div>
                            <div class="single-img">
                                <div class="animation">
                                    <div class="wpb-wrapper">
                                        <div class="vc-single-img-wrapper">
                                            <img src="../assets/vc-img.jpg" width="500" height="300" alt="" class="vc-single-img">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <ApplyOth />
    <FooterBar />
</div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';
import NavOther from '../components/NavOther.vue';
import ApplyOth from '@/components/ApplyOth.vue';
export default {
    name: 'AboutUs',
    components: {
        NavOther,
        FooterBar,
        ApplyOth,
    }
}
</script>

<style scoped>

.slider {
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.vcrow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.section_inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 20;
}

.section_inner_margin {
    margin-left: -15px;
    margin-right: -15px;
}

.vc-column {
    padding-left: 0;
    padding-right: 0;
    width: 25%;
}

.vc-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}

.seperator {
    margin-top: 25px;
    margin-bottom: 15px;
    background-color: #e22249;
    height: 1px;
    width: 80%;
    margin-left: 0;
    margin-right: 0;
}

.wpb_bottom {
    margin-bottom: 0 !important;
}

.menu-about-us-container {
    padding-top: 15px;

}

.menu {
    font-weight: 400;
    transition: color .3s ease-in-out;
    color: #cf2e2e;
    cursor: pointer;
    text-decoration: none;
    list-style: none;
}

.row2 {
    display: flex;
    flex-direction: row;
    width: 100%;
}
.vc-column-container {
    padding-left: 300px;
    padding-right: 0px;
    text-align: left;
    -webkit-text-stroke: 1px transparent;
    font-family: 'Montserrat', sans-serif;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: 700;
}

.vc-column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 0px;
    width: 100%;
    padding-top: 0px !important;
}

.wpb-intro {
    margin-bottom: 0 !important;
}

.wpb-wrapper {
    margin-bottom: 0;
    font-family: 'Montserrat', sans-serif;
    color: #2b2b2b;
    font-size: 20px;
    font-weight: 600;
}

.wpb-wrapper-2 {
    margin-bottom: 0;
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 300;

}

.row2 {
    text-align: left;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 50px !important;
    padding-bottom: 50px !important;
    margin-left: -15px;
    margin-right: -15px;
    font-family: 'Montserrat', sans-serif;
    color: #2b2b2b;
    font-size: 16px;
    font-weight: 300;
}

.sect-inner {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 20;
}

.sect-inner-margin {
    margin-left: -15px;
    margin-right: -15px;
}

.column-container {
    padding-left: 0;
    padding-right: 0;
}

.column-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}

.vc-col-inner {
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
}

.vc-row-t {
    text-align: left;
    padding-right: 5% !important;
    padding-left: 5% !important;
}

.full-sect-innr {
    position: relative;
    z-index: 20;
}

.element-from-fade {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
}

.animation {
    transition-delay: 800ms;
    animation-delay: 800ms;
    width: 100%;
}

.int-text {
    padding-left: 100px;
    margin-bottom: 0;
    font-family: 'Times New Roman', Times, serif;
    color: #e93232;
    font-size: 30px;
    font-weight: 400;
    padding-right: 530px;
    flex: 1; /* Occupy remaining space */
    margin-right: 20px; /* Add some space between elements */

}

.single-img {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
}

.vc-single-img-wrapper {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;

}

.vc-single-img {
    height: auto;
    max-width: 100%;
    image-rendering: optimizeQuality;
    padding-left: 100%;
    margin-top: -600px;
    margin-bottom: 60px;
}
</style>
