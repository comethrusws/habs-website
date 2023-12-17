<template>
    <div class="news">
      <b class="news-list">NEWS:</b>
      <marquee class="headquote" behavior="smooth"><i>New Admissions Open For The Academic Year 2081 | Vacancies Open For 3 Posts | Himalayan Academy Boarding School, Sallaghari, Bhaktapur | Contact No: +977 9810136313</i></marquee>
      <b>|  </b>
      <b class="login"><i class="fa-solid fa-lock"></i>  Student Login</b>
    </div>

  <div class="navbar">
    <div class="left-side">
      <img src="../assets/mlogo.png" alt="mlogo" class="logo" />
    </div>

    <div class="right-side">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/admissions" class="nav-link">Admissions</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
      <router-link to="/notice" class="nav-link">Notice Board</router-link>
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
  background-color: rgb(0, 0, 0);
  color: white;
}
.news-list{
  margin-left: 10px;
  margin: 10px 10px 0px 0px;
  background-color: white;
  color: rgb(255, 57, 57);
  font-size: 12px;
  padding-top: 4px;
  padding-bottom: 0px;
}

.headquote{
  font-size: 12px;
  width: 85%;
  margin-bottom: 1px;
  color: rgb(255, 255, 0);
}

.login{
  color: white;
  font-size: 12px;
  margin-bottom: 1px;
  font-weight: lighter;
}
.login:hover{
  cursor: pointer;
  color: rgb(255, 255, 0);
}
.navbar {
  width: 100%;
  height: 30px;
  background-color: rgb(247, 11, 11);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px; 
}

.logo {
  width: auto;
  height: 30px; 
}

.right-side {
  display: flex;
  align-items: center;
  padding-right: 20px; 
  
}

.nav-link {
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  margin-right: 20px; 
}
.nav-link:hover{
  font-style: italic;
  color: #000000;
}

</style>
