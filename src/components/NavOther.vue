<template>
  <div class="navbar">
    <div class="left-side">
      <img src="../assets/mlogo.png" alt="mlogo" class="logo" />
    </div>

    <div class="right-side">
      <router-link to="/" class="nav-link" :class="{ 'menu-open': isMenuOpen }">Home</router-link>
      <router-link to="/admissions" class="nav-link">Admissions</router-link>
      <router-link to="/about" class="nav-link">About Us</router-link>
      <router-link to="/notice" class="nav-link">Notice Board</router-link>
      <router-link to="/gallery" class="nav-link">Gallery</router-link>
      <router-link to="/contact" class="nav-link">Contact Us</router-link>
      <b class="login"> <i class="fa-solid fa-lock"></i>  Student Login</b> 

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavOther',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  }
};
</script>

<style scoped>
/* Default styles for larger screens */
.login {
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 600;
}

.login:hover {
  cursor: pointer;
  color: #ffffff;
}

.navbar {
  width: 100%;
  height: 30px;
  background-color: #e22249;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: rgb(255, 255, 255);
  margin-right: 15px;
}

.nav-link:hover {
  font-style: normal;
  transition: 0.3s;
  color: #000000;
}

/* New styles for foldable menu */
.menu-icon {
  display: none;
  cursor: pointer;
  margin-right: 15px;
  font-size: 20px;
  color: white;
}

.nav-links {
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  .menu-open {
    display: flex !important;
    flex-direction: column;
    background-color: #e22249;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .menu-open .nav-link {
    color: white;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}

</style>