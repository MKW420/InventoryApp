<template>

<body>
  <LoadingTracker v-if="isLoading"></LoadingTracker>
  <div id="main-section" color-scheme="dark">

    <Sidebar v-if="!isLoading"/>
    <nav id="nav-bar">
      <SearchboxCom  v-if="!isLoading" />

    </nav>

    <div id="main-board">
      <h1 id="heading">Dashboard</h1>


      <div id="main-stats">
        <DashboardTrack :cards="dashboardData" @click="ProductPage" />
        <router-view></router-view>
      </div>

      <div id="main-bottom">
        <div id="main-progress">
          <div class="sub-head">
            <h4 id="head-trends">
              Latest Trends <i class="bx bx-info-circle"></i>
            </h4>
            <button @click="ProductPage" class="btn-sm">View More</button>
            <router-view></router-view>
          </div>
          <!-- progress bars -->
          <div
            v-for="progress in progressors"
            :key="progress.id"
            :value="progress.id"
            id="progress-perc-bar"
          >
            <div id="picture-brand" width="40px" height="40px">
              <img src="../assets/Untitled.jpg" />
            </div>
            <span id="name-brand">{{ progress.name }}</span>
            <div
              id="progress-perc-1"
              :style="{
                background: progress.backgroundcolor,
                width: progress.width,
              }"
            ></div>
            <span id="perc-num">{{ progress.percentage }}</span>
          </div>
        </div>
        <!-- sales overview  -->
        <div class="main-sr">
          <div class="header-sr">
            <h5 class="h3-head">Sales Overview</h5>
            <i class="bx bx-dots-vertical-rounded"></i>
          </div>
          <div
            class="sales"

            id="sales-darkmode"

            v-for="sale in sales"
            :key="sale.id"
            :value="sale.id"
          >
            <span>{{ sale.label }}</span>
            <h1 class="h1-num">{{ sale.total }}</h1>
          </div>
        </div>

        <div id="feed">
          <div id="feed-summary">

           <i class='bx bxs-layer-plus'></i>
            <span class="rigup">total returns</span>
            <h1>2.5K</h1>
          </div>
        

        </div>
      </div>
    </div>
  </div>

  </body>

</template>

<script>
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import DashboardTrack from "../components/block.vue";

  import LoadingTracker from "../components/LoadingCom.vue"



// import ProgressCom from "../components/progressCom.vue"

export default {
  components: {
    Sidebar,
    SearchboxCom,
    DashboardTrack,

     LoadingTracker
  },
 
  mounted(){
    setTimeout(() => { this.isLoading =false;},
    4000);
},
  data() {
        return {
          
          isLoading: true,
        }
  },  
  methods: {
    

    ProductPage() {
      this.$router.push("/Products");
    },
  },
  CategoryPage() {
    this.$router.push("/CategorySelection");
  },

  setup() {
    return {
      sales: [
        {
          id: 1,
          label: "sales",
          total: "0",
        },
        {
          id: 2,
          label: "profit",
          total: "0",
        },
        {
          id: 2,
          label: "Reve",
          total: "0",
        },
      ],
      progressors: [
        {
          id: 1,
          name: "Brand 1",

          backgroundcolor: "#7d84ab",
          width: "50%",
          percentage: "80%",
          

        },
        {
          id: 2,
          name: "Brand 2",
          backgroundcolor: "#EB3E1B ",
          width: "50%",
          percentage: "80%",
        },
        {
          id: 3,
          name: "Brand 3",
          backgroundcolor: "#7d84ab",
          width: "80%",
          percentage: "80%",
        },
        {

          id: 4,
          name: "Brand 4",
          backgroundcolor: "#EB3E1B",
          width: "80%",
          percentage: "80%",
        },
      ],

      dashboardData: [
        {
          id: 1,
          icon: "bx bxs-calendar-check",
          number: 200,

          name: "Total Suppliers",
          color: "#083346",
          backgroundColor: "",

        },
        {
          id: 2,
          icon: "bx bx-box",
          number: 550,

          name: "Total Brands",
          color: "#083346",
          backgroundColor: "",
        },
        {
          id: 3,
          icon: "bx bx-building",
          number: 690,

          name: "Total Products",
          color: "#083346",
          backgroundColor: "",
        },
        {
          id: 4,
          icon: "bx bx-money",
          number: 7250,

          name: "Total Categories",
          color: "#083346",
          backgroundColor: "",
        },

        // Add more data for other cards if needed
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");
@import url("https://api.iconify.design/mingcute/notification-line.svg");

body{

min-height: 100vh;

}
#main-section {
  font-family: "Roboto", serif;

  height: 1500px;
  width: 100%;
  margin-top: -5px;
}
nav {
  height: 70px;
 background: #f3f6fd;

}
#picture-brand {
  /* border:3px solid green; */
  border-radius: 50px;
  height: 20px;
  width: 20px;
  margin-top: 0px;
}
#main-stats {
  /* border:3px solid green;  */
  width: 100%;
  height: 250px;
}
#nav-bar {
  /* border:3px solid blue; */
}
#main-board {
  height: 920px;
  width: 85%;
  margin-left: 220px;
  /* border:3px solid red; */
}
#main-bottom {
  height: 360px;
  width: 100%;
  flex-direction: row;
  display: flex;
}

.main-sr {
  height: 270px;
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border-radius: 10px;
  margin: 20px;
  margin-left: 10px;


}
#main-progress {
  height: 350px;
  width: 40%;
  margin-top: 0px;
  /* display:inline-block;
    position:relative; */
}
#perc-num {
  float: right;

   color:#7d84ab;

  font-size: 12px;
  margin-left: 15px;
  font-weight: bold;
  margin-top: 3px;
}
.header-sr {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
}
.header-sr i {
  margin-left: 150px;
  margin-top: 30px;
}
.sales {
  height: 50px;
  width: 90%;
  border-top: 1px solid #cacacc;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border-radius: 10px;

  background: #f3f6fd;

}
.sales span {
  margin: 8px;
  margin-top: 14px;
  color: grey;
  font-size: 15px;
}
.sales:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  border-left: 10px solid #7d84ab;;

}
#progress-bar-section {
  width: 30%;
  height: 350px;

  display: inline-block;
}
#progress-perc-bar {
  width: 100%;
  height: 60px;
  margin-top: 7px;

  position: relative;
  display: flex;
  margin-left: 25px;
  display: flex;
  flex-direction: row;
}

#feed {
  height: 350px;

  width: 20%;
  display: flex;
  flex-direction: row;
  

  /* display:inline-block; */
  border-radius: 10px;
}
#feed-summary {
  align-content: center;
  justify-content: center;
  border: 1px solid #cacacc;
  width: 40%;
  height: 150px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  border-radius: 10px;


  background-color: #f3f6fd;

  display: flex;
  align-items: center;
  justify-content: center;
}
#feed-summary h1 {
  font-weight: bold;
}

#feed-summary p {
  font-size: 13px;
}
#feed-summary span {
  margin-left: 10px;
  color: grey;
  font-size: 12px;
  font-weight: bold;
}
#feed-heading {
  font-size: 15px;
}
#heading {
  font-weight: bold;
  margin-left: 20px;

  color: #7d84ab;

}

#progress-perc-1 {
  height: 5px;
  margin-left: 20px;
  border-radius: 50px;
  width: 50%;

  background-color: #eb3e1b;
  margin-top: 8px;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
img {
  border-radius: 60px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 40px;
  height: 40px;
}
.h1-num {
  margin-left: 180px;
  font-size: 20px;
  font-weight: bold;
}
.rigup {
  font-size: 180%;
}
.h3-head {
  margin-left: 10px;
  font-size: 15px;

   color:#7d84ab;

}
.btn-sm {
  width: 120px;
  height: 25px;
  margin-left: 450px;
  margin-top: 13px;
    background-color: #EDEEF3;
    color:#083346;
    border:none;
border-radius: 8px;
height:30px;
width:250px;


}
.btn-sm:hover{
  border:1px solid #6291fd;
  cursor: pointer;
}
#name-brand {
  margin-left: 35px;
  font-weight: bold;
  font-size: 13px;
  margin-top: 3px;
   color:#7d84ab;
}
#progress-perc-2 {
  width: 50%;
  height: 8px;
  

  border-radius: 50px;
  display: inline-block;
  margin-left: 15px;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 8px;
}

#progress-perc-3 {
  width: 20%;
  height: 8px;

  
  border-radius: 50px;
  display: inline-block;
  margin-left: 15px;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 8px;
}
#progress-perc-4 {
  width: 70%;
  height: 15px;
  border-radius: 50px;
  display: inline-block;
  margin-left: 15px;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s ease;
  margin-top: 8px;
}
#progress-header {
  width: 80%;
  height: 50px;

  margin-left: 80px;
  font-size: 10px;
  margin-top: -90px;
}
.sub-head {
  display: flex;
  flex-direction: row;
  width: 100%;
}
#name-bar {
  margin-left: 20px;
  font-weight: bold;
}
#List-bx1 {
  border: 2px solid black;
  height: 130px;
  width: 98%;
  margin-top: 10px;
  border-radius: 20px;
}

#icon-arrow {
  margin-top: 22px;
}
/* medium sizes */
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #main-board {
    margin-left: 180px;
  }
  #progress-header {
    width: 30%;
    height: 50px;
    border: 3px solid blue;
  }
  .btn-sm {
    width: 120px;
    height: 25px;
    margin-left: 100px;
    margin-top: 13px;
  }
  #progress-bar-section {
    width: 100%;
    height: 200px;
    margin-left: 8px;
    margin-top: 0px;
    display: inline-block;
  }
  #main-progress {
    height: 300px;
    width: 60%;
    margin-top: 50px;
    /* display:inline-block;
    position:relative; */
  }
  #main-bottom {
    border: 3px solid green;
    margin-left: -180px;
    width: 117%;
  }
  #feed {
    height: 200px;
    margin: 25px;
    width: 200px;
    margin-left: 20px;
    margin-top: 60px;
  }
  #feed-summary {
    width: 80px;
    height: 80px;
    margin: 10px;
    margin-top: 50px;
  }
  #feed-summary h1 {
    font-weight: bold;
    font-size: 20px;
    margin-left: 26px;
  }

  #feed-summary p {
    font-size: 8px;
  }
  #feed-summary span {
    margin-left: 10px;
    color: grey;
    font-size: 9px;
    font-weight: bold;
  }
  .main-sr {
    width: 50%;
    margin-left: 40px;
    margin-top: 60px;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  #progress-bar-section {
    width: 30%;
    height: 200px;
    margin-left: 35px;
    margin-top: 0px;
    display: inline-block;
    border: 3px solid green;
  }
  progress-header {
    border: 3px solid blue;
    width: 30%;
    height: 50px;
  }
  #progress-perc-bar {
    border: 3px solid green;
    margin-left: -25px;
  }
  #progress-perc-1 {
    border: 3px solid red;

    margin-left: 20px;
    font-size: 15px;
  }
  #progress-perc-2 {
    border: 3px solid green;
    margin-left: 20px;
    font-size: 15px;
  }
  #progress-perc-3 {
    margin-left: 20px;
    font-size: 15px;
  }
  #progress-perc-4 {
    margin-left: 20px;
    font-size: 15px;
  }
  #feed {
    border: 3px solid blue;
    height: 250px;
    margin-top: 25px;
  }
  .main-sr {
    border: 3px solid green;
  }
  #main-bottom {
    border: 3px solid green;
    margin-left: -180px;
    width: 117%;
  }
}
@media only screen and (min-width: 1320px) and (max-width: 1605px) {
  #heading {
    margin-left: -40px;
    font-size: 25px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 400px;
    width: 120%;

    margin-left: -220px;
    margin-top: 0px;
  }
  #main-progress {
    height: 380px;
    width: 40%;
  }
  #progress-perc-bar {
    margin-left: 0px;
    margin-top: 5px;
    height: 40px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .main-sr {
    height: 250px;

    width: 40%;
  }
  .main-sr i {
    margin-left: 395px;
  }

  #feed {
    height: 200px;
    width: 15%;
   
    /* display:inline-block; */
    border-radius: 10px;
    margin-left:5px;
    margin-top:50px;

       display: flex;
    align-items: center;
    justify-content: center;
  }
  #feed-summary {
    width: 200px;
    height: 200px;
    margin: 8px;
    margin-top: 0px;

    margin-left: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    background:#D0E7D2;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left:120px;
    font-size: 30px;
  }
#feed-summary > i{
  color:#79AC78;
font-size:40px;
}
  .header-sr {
    width: 100%;

    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 260px;
  }
  .h1-num {
    margin-left: 330px;
    font-size: 20px;
    font-weight: bold;
  }

  

}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 640px) and (max-width: 767px) {
  #heading {
    margin-left: -40px;
    font-size: 25px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 800px;
    width: 90%;
    flex-direction: column;
    display: flex;

    margin-left: -60px;
    margin-top: 60px;
  }
  #main-progress {
    height: 550px;
    width: 95%;
  }
  #progress-perc-bar {
    margin-left: 0px;
    margin-top: 5px;
    height: 40px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .main-sr {
    height: 270px;
    width: 90%;
  }
  .main-sr i {
    margin-left: 350px;
  }

  #feed {
    height: 450px;
    width: 90%;

    /* display:inline-block; */
    border-radius: 10px;
  }
  #feed-summary {
    width: 40%;
    height: 150px;
    margin: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left: 150px;
    font-size: 20px;
  }

  .header-sr {
    width: 90%;
    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 260px;
  }
  .h1-num {
    margin-left: 330px;
    font-size: 20px;
    font-weight: bold;
  }
}
@media only screen and (min-width: 360px) and (max-width: 384px) {
  #heading {
    margin-left: -90px;
    font-size: 18px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 800px;
    width: 110%;
    flex-direction: column;
    display: flex;

    align-items: center;
    justify-content: center;
    margin-top: 290px;
    margin-left: -210px;
  }
  #main-progress {
    height: 550px;
    width: 95%;
  }
  #progress-perc-bar {
    margin-top: 5px;
    height: 40px;

    margin-left: 0px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .sub-head {
    width: 100%;
    font-size: 70%;
  }
  .main-sr {
    background: white;
    margin-top: -255px;
    height: 250px;
    width: 90%;
  }
  .main-sr i {
    margin-left: 250px;
  }

  #feed {
    height: 150px;
    width: 90%;
    background: white;
    /* display:inline-block; */
    border-radius: 10px;
  }
  #feed-summary {
    width: 40%;
    height: 100px;
    margin: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    margin-top: 15px;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left: 50px;
    font-size: 20px;
  }

  .header-sr {
    width: 100%;
    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 110px;
  }
  .h1-num {
    margin-left: 180px;
    font-size: 20px;
    font-weight: bold;
  }
  .btn-sm {
    width: 100px;
    height: 18px;
    font-size: 10px;
    margin-top: 13px;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
  }
}
@media only screen and (min-width: 385px) and (max-width: 400px) {
  #heading {
    margin-left: -90px;
    font-size: 18px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 800px;
    width: 110%;
    flex-direction: column;
    display: flex;
    border: 3px solid red;
    align-items: center;
    justify-content: center;
    margin-top: 290px;
    margin-left: -210px;
  }
  #main-progress {
    height: 550px;
    width: 95%;
  }
  #progress-perc-bar {
    margin-top: 5px;
    height: 40px;

    margin-left: 0px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .sub-head {
    width: 100%;
    font-size: 70%;
  }
  .main-sr {
    background: white;
    margin-top: -255px;
    height: 250px;
    width: 90%;
  }
  .main-sr i {
    margin-left: 250px;
  }

  #feed {
    height: 150px;
    width: 90%;
    background: white;
    /* display:inline-block; */
    border-radius: 10px;
  }
  #feed-summary {
    width: 40%;
    height: 100px;
    margin: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    margin-top: 15px;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left: 50px;
    font-size: 20px;
  }

  .header-sr {
    width: 100%;
    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 110px;
  }
  .h1-num {
    margin-left: 180px;
    font-size: 20px;
    font-weight: bold;
  }
  .btn-sm {
    width: 100px;
    height: 18px;
    font-size: 10px;
    margin-top: 13px;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
  }
}
@media only screen and (min-width: 401px) and (max-width: 495px) {
  #heading {
    margin-left: -90px;
    font-size: 18px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 800px;
    width: 110%;
    flex-direction: column;
    display: flex;

    align-items: center;
    justify-content: center;
    margin-top: 290px;
    margin-left: -210px;
  }
  #main-progress {
    height: 550px;
    width: 95%;
  }
  #progress-perc-bar {
    margin-top: 5px;
    height: 40px;

    margin-left: 0px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .sub-head {
    width: 100%;
    font-size: 70%;
  }
  .main-sr {
    background: white;
    margin-top: -305px;
    height: 250px;
    width: 90%;
  }
  .main-sr i {
    margin-left: 250px;
  }

  #feed {
    height: 150px;
    width: 90%;
    background: white;
    /* display:inline-block; */
    border-radius: 10px;
  }
  #feed-summary {
    width: 40%;
    height: 100px;
    margin: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    margin-top: 15px;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left: 50px;
    font-size: 20px;
  }

  .header-sr {
    width: 100%;
    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 200px;
  }
  .h1-num {
    margin-left: 250px;
    font-size: 20px;
    font-weight: bold;
  }
  .btn-sm {
    width: 100px;
    height: 18px;
    font-size: 10px;
    margin-top: 13px;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
  }
}
@media only screen and (min-width: 496px) and (max-width: 520px) {
  #heading {
    margin-left: -90px;
    font-size: 18px;
    margin-top: 50px;
  }
  #main-bottom {
    height: 800px;
    width: 110%;
    flex-direction: column;
    display: flex;

    align-items: center;
    justify-content: center;
    margin-top: 350px;
    margin-left: -210px;
  }
  #main-progress {
    height: 550px;
    width: 95%;
  }
  #progress-perc-bar {
    margin-top: 5px;
    height: 40px;

    margin-left: 0px;
  }
  #progress-perc-1 {
    height: 8px;
  }
  #progress-perc-2 {
    height: 8px;
  }
  #progress-perc-3 {
    height: 8px;
  }
  #progress-perc-4 {
    height: 8px;
  }
  .sub-head {
    width: 100%;
    font-size: 70%;
  }
  .main-sr {
    background: white;
    margin-top: -255px;
    height: 250px;
    width: 90%;
  }
  .main-sr i {
    margin-left: 250px;
  }

  #feed {
    height: 150px;
    width: 90%;
    background: white;
    /* display:inline-block; */
    border-radius: 10px;
  }
  #feed-summary {
    width: 40%;
    height: 100px;
    margin: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    margin-top: 15px;
  }
  #feed-summary h1 {
    font-weight: bold;
    margin-left: 50px;
    font-size: 20px;
  }

  .header-sr {
    width: 100%;
    height: 80px;
  }
  .btn-sm {
    width: 100px;
    margin-left: 110px;
  }
  .h1-num {
    margin-left: 250px;
    font-size: 20px;
    font-weight: bold;
  }
  .btn-sm {
    width: 100px;
    height: 18px;
    font-size: 10px;
    margin-top: 13px;
    background: white;
    border-radius: 5px;
    border: 1px solid black;
  }
}
</style>
