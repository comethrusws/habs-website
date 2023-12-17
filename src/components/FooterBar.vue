<template>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>HABS</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">Admissions</a></li>
                    <li><a href="#">events</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Resources</h4>
                <ul>
                    <li><a href="#">community</a></li>
                    <li><a href="#">community voices</a></li>
                    <li><a href="#">recently at HABS</a></li>
                    <li><a href="#">calendar</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Administration</h4>
                <ul>
                    <li><a href="#">Calendar</a></li>
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
    background-color: #dfdfdf;
    padding: 40px 0;
}

.footer-col {
    width: 25%;
    padding: 0 15px;
}

.footer-col h4 {
    font-size: 18px;
    color: #000000;
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
    background-color: #ff4b4b;
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
    color: #3b3b3b;
    display: block;
    transition: all 0.3s ease;
}

.footer-col ul li a:hover {
    color: #ff4b4b;
    padding-left: 8px;
}

.footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #000000;
    transition: all 0.5s ease;
}

.footer-col .social-links a:hover {
    color: #24262b;
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
