<template>
    <section class="registration-section">
        <div class="registration-container">
            <div class="registration-row">
                <div class="registration-box">
                    <h3>Registration of Interest</h3>
                    <button class="btext">Register</button>
                </div>
                <div class="registration-box">
                    <h3>Application of Admission</h3>
                    <button @click="redirectToRegistration" class="btext">Apply</button>
                </div>
                <div class="registration-box">
                    <h3>Other inquiries</h3>
                    <button @click="redirectToContact" class="btext">Contact Us</button>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    export default{
        name:'ApplyBar',
        methods: {
            redirectToRegistration() {
                this.$router.push('/admissions');
            },
            redirectToContact() {
                this.$router.push('/contact');
            },
        },
    }
    </script>
    
    <style scoped>
    .registration-section {
        background-color: #fffafa;
        padding: 5px 0;
        margin-bottom: 0px;
    }
    
    .registration-container {
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
    }
    
    .registration-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .registration-box {
        flex: 0 0 30%;
        text-align: center;
        padding: 30px;
        padding-bottom: 20px;
        padding-top: 20px;
        background-color: #e22249;
    }
    
    .registration-box:nth-child(2) {
        background-color: #cf1d41;
    }
    
    .registration-box h3 {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: 400;
        color: #fff;
        font-size: 18px;
        margin-bottom: 15px;
    }
    
    .registration-box button {
        padding: 6px 20px;
        background-color: #33333300;
        color: #fff;
        border: solid 1px white;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    
    .registration-box button:hover {
        transition: 0.2s;
        padding: 6px 25px;
    
    }
    
    .btext {
        font-size: medium;
    }
    
    </style>
    