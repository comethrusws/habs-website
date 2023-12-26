<template>
    <div class="box">
      <div class="our-mission">
        <img class="image" alt="Image" src="../assets/missionlogo.jpg" />
        <div class="tittle">
          <div class="overlap-group">
            <p class="div">
              <span class="text-wrapper">Our</span>
              <span class="span"> Mission</span>
            </p>
            <div class="line">
              <div class="rectangle" />
              <div class="rectangle-2" />
            </div>
          </div>
        </div>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod temp incit ut labore dolore magna aliqua.
          Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
          incididunt ut labore dol magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor
          sit amet, consectetur adipng elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OurMission",
  };
  </script>
  
  <style>
  .box {
    height: 500px;
    position: relative;
    width: 1052px;
  }
  
  .box .our-mission {
    height: 500px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1054px;
  }
  
  .box .image {
    height: 500px;
    left: 0;
    position: absolute;
    top: 0;
    width: 501px;
  }
  
  .box .tittle {
    height: 53px;
    left: 551px;
    position: absolute;
    top: 0;
    width: 201px;
  }
  
  .box .overlap-group {
    height: 53px;
    position: relative;
    width: 199px;
  }
  
  .box .div {
    color: transparent;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 30px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
  }
  
  .box .text-wrapper {
    color: #29383f80;
  }
  
  .box .span {
    color: #22343d;
  }
  
  .box .line {
    height: 9px;
    left: 28px;
    position: absolute;
    top: 44px;
    width: 143px;
  }
  
  .box .rectangle {
    background-color: #22343d80;
    border-radius: 5px;
    height: 2px;
    left: 0;
    position: absolute;
    top: 0;
    width: 97px;
  }
  
  .box .rectangle-2 {
    background-color: #22343d;
    border-radius: 5px;
    height: 2px;
    left: 43px;
    position: absolute;
    top: 7px;
    width: 100px;
  }
  
  .box .text {
    color: #000000;
    font-family: "Poppins-Regular", Helvetica;
    font-size: 20px;
    font-weight: 400;
    left: 551px;
    letter-spacing: 0;
    line-height: 35px;
    position: absolute;
    top: 75px;
    width: 501px;
  }
  </style>
  