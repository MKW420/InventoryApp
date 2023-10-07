<template>
  <div id="main-banner">
    <h1 id="banner-Text">Welcome to the Dashboard, John!</h1>
    <!-- <p id="banner-para">View Recent Trends in your Inventory</p> -->
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>
<style scoped>
#main-banner {
  /* border:1px solid blue; */
  font-family: "Roboto", serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  margin-left: -20px;
  background: linear-gradient(135deg, #61b2d8 0%, #2e6dd8 100%);
  animation: animate 7.5s ease-in-out infinite;
  background: linear-gradient(
    315deg,
    3%,
    rgba(60, 132, 206, 1) 38%,
    rgba(48, 238, 226, 1) 68%,
    rgba(255, 25, 25, 1) 98%
  );
  animation: gradient 15s ease infinite;
}
#banner-Text {
  color: white;
  margin-left: 40px;
}
#banner-para {
  color: white;
  margin-left: 0px;
}

@media only screen and (min-width: 640px) and (max-width: 767px) {
  #main-banner {
    height: 80px;
  }

  #banner-Text {
    margin-left: 60px;
    color: red;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #main-banner {
    height: 120px;
    margin-left: 30px;
  }

  #banner-Text {
    margin-left: 50px;
    font-size: 24px;
    /* color: purple; */
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  #main-banner {
    height: 120px;
    /* margin-left: 5%; */
  }

  #banner-Text {
    margin-left: 60px;
    font-size: 30px;
    /* color: yellow; */
  }
}

@media only screen and (min-width: 1320px) and (max-width: 1605px) {
  #main-banner {
    height: 150px;
    margin-left: 5%;
  }

  #banner-Text {
    margin-left: 70px;
    font-size: 36px;
    /* color: orange;  */
  }
}

@media only screen and (min-width: 360px) and (max-width: 384px) {
  #main-banner {
    height: 70px;
    margin-left: 5%;
  }

  #banner-Text {
    margin-left: 30px;
    font-size: 18px;
    /* color: orange;  */
  }
}

@media only screen and (min-width: 385px) and (max-width: 400px) {
  #main-banner {
    height: 70px;
    margin-left: 5%;
  }

  #banner-Text {
    margin-left: 30px;
    font-size: 18px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 495px) {
  #main-banner {
    height: 100px;
    margin-left: 5%;
  }

  #banner-Text {
    margin-left: 40px;
    font-size: 24px;
  }
}

@media only screen and (min-width: 496px) and (max-width: 520px) {
  #main-banner {
    height: 100px;
    margin-left: 5%;
  }

  #banner-Text {
    margin-left: 30px;
    font-size: 24px;
  }
}
</style>
