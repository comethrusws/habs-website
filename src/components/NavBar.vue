<template>
    <div class="news">
      <b class="news-list">NEWS:</b>
      <marquee class="headquote" behavior="smooth" style="animation: infinite;"><i>New Admissions Open For The Academic Year 2081 | Vacancies Open For 3 Posts | Himalayan Academy Boarding School, Sallaghari, Bhaktapur | Contact No: +977 9810136313</i></marquee>
      <b style="color: white;">|  </b>
      <b style="font-size: 12px; font-weight: 200; color: white;"><i class="fa-solid fa-phone"></i> +977-9810136313</b>
      <b>|   </b>
      <b class="login"><i class="fa-solid fa-lock"></i>  Student Login</b>
    </div>
  
    <div class="left-side">
      <router-link to="/" class="logo" ><img src="../assets/mlogo.png" alt="mlogo" class="logo" /></router-link>
    </div>

  <div class="navbar">

    <div class="right-side">
      <router-link to="/admissions" class="nav-link">Admissions</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
      <router-link to="/notice" class="nav-link">Notice Board</router-link>
      <router-link to="/gallery" class="nav-link">Gallery</router-link>
      <router-link to="/contact" class="nav-link">Contact Us</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>

.news{
  width:100%;
  padding: 0px 0px;
  margin: 0px;
  height: 17px;
  background-color: rgb(26, 26, 26);
  color: rgb(0, 0, 0);
}
.news-list{
  margin-left: 10px;
  margin: 10px 10px 0px 0px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 82, 82);
  font-size: 12px;
  padding-top: 4px;
  padding-bottom: 0px;
}

.headquote{
  font-size: 12px;
  width: 79%;
  margin-bottom: 1px;
  color: yellow;
}

.login{
  color: rgb(255, 255, 255);
  font-size: 12px;
  margin-bottom: 1px;
  font-weight: lighter;
}
.login:hover{
  cursor: pointer;
  color: #ff4b4b;
}
.navbar {
  width: 100%;
  height: 40px;
  background-color: #e22249;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0; 
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.left-side {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 50px; 
}

.logo {
  width: auto;
  height: 55px; 
}

.right-side {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-right: 20px; 
  padding-left: 20px;
  
}

.nav-link {
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: rgb(255, 255, 255);
  display: inline-block;
  margin-right: 20px; 
  line-height: 40px;
}
.nav-link:hover{
  background-color: #e4e4e4;
  transition: 0.3s;
  color: #ff4b4b;
}

</style>
