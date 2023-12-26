<template>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>HABS</h4>
                <ul>
                    <li><router-link to="/about">About Us</router-link></li>
                    <li><router-link to="/admissions">Admissions</router-link></li>
                    <li><a href="#">events</a></li>
                    <li><router-link to="/gallery"></router-link>Gallery</li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">community</a></li>
                    <li><a href="#">community voices</a></li>
                    <li><a href="#">recently at HABS</a></li>
                    <li><router-link to="/calendar">Calendar</router-link></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Administration</h4>
                <ul>
                    <li><router-link to="/calendar">Calendar</router-link></li>
                    <li><a href="#">News & Media</a></li>
                    <li><a href="#">Work at HABS</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
<footer class="endl">Copyright © 2023 Himalayan Academy Boarding School • All Rights Reserved</footer>
</template>

<script>
export default {
    name: 'FooterBar',
};
</script>

<style scoped>
body {
    font-family:Arial, Helvetica, sans-serif;   
    line-height: 1.5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    max-width: 1170px;
    margin-top: 0;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

ul {
    list-style: none;
}

.footer {
    background-color: #e22249;
    padding: 40px 0;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
}

.footer-col h4::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #000000;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li:not(:last-child) {
    margin-bottom: 10px;
}

.footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #ffffff;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #000000;
    padding-left: 8px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(48, 48, 48, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #000000;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: rgb(7, 7, 7);
    background-color: #ffffff;
}

.endl{
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    font-size: 13px;
    padding: 8px;
}

/*responsive*/
@media(max-width: 767px) {
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px) {
    .footer-col {
        width: 100%;
    }
}
</style>
