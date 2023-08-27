<template>

<div id="main-section">

    <Sidebar /> 
    <nav id="nav-bar">
       <SearchboxCom />
    </nav>

      <div id="main-board">
       <BannerCom/>
        <div id="main-stats">

          <DashboardTrack :cards="dashboardData" />
        </div>
        
        <div id="main-bottom">
            <div id="main-Tbl">
              <div id="Tbl-Com">
               <TblTrackCom class="" :rows="Tbldata"/>
              </div>
            </div>
            <div id="main-progress">
              <!-- <ProgressCom/> -->
      <div id="progress-header">
        <h3>Progress</h3>
        <div id="icons">
        <i></i>
        </div>
      </div>
        <div id="progress-bar-section">
            <p id="name-bar">Brand 1</p>
            <div id="progress-perc-bar">
                <div id="progress-perc-1">
                </div>

            </div>
             <p id="name-bar">Brand 2</p>
            <div id="progress-perc-bar">
                <div id="progress-perc-2">
                </div>
            </div>
                <p id="name-bar">Brand 3</p>
            <div id="progress-perc-bar">
                <div id="progress-perc-3">
                </div>
            </div>
                <p id="name-bar">Brand 4</p>
            <div id="progress-perc-bar">
                <div id="progress-perc-4">
                </div>
            </div>
    </div>
    
     
           

            </div>
          </div>
      </div>
      
    
       
 
    

 
         

    
 
  </div>

  

</template>

<script >

import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import DashboardTrack from "../components/block.vue";
import TblTrackCom from "../components/table/tableCom.vue";
// import ProgressCom from "../components/progressCom.vue"
import BannerCom from "../components/bannerCom.vue"


export default( {
  components: {

    Sidebar,
    SearchboxCom,
    DashboardTrack,
    TblTrackCom,
    //  ProgressCom
   BannerCom
  
    
 
  },
 
  data() {
    return {
      Tbldata:[{
           id:1,
          col1:"Name",
          col2:"Name",
          col3:"Name",
          col4:"Name",
    },{
           id:2,
          col1:"Name",
          col2:"Name",
          col3:"Name",
          col4:"Name",
    },
    {
           id:3,
          col1:"Name",
          col2:"Name",
          col3:"Name",
          col4:"Name",
    },
    {
           id:4,
          col1:"Name",
          col2:"Name",
          col3:"Name",
          col4:"Name",
    },
     {
           id:4,
          col1:"Name",
          col2:"Name",
          col3:"Name",
          col4:"Name",
    },
     {
           id:4,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
    },
    ]
  }
  },


   

  setup() {
    return {
      dashboardData: [
        {
          id: 1,
          icon: "bx bxs-calendar-check",
          number: 200,

          name: "Total Suppliers",
          color: "#2e6dd8",
          backgroundColor: "",

        },
        {
          id: 2,
          icon: "bx bx-box",
          number: 550,

          name: "Total Brands",
          color: "#2e6dd8",
          backgroundColor: "",

        },
        {
          id: 3,
          icon: "bx bx-building",
          number: 690,

          name: "Total Products",
          color: "#2e6dd8",
          backgroundColor: "",

        },
        {
          id: 4,
          icon: "bx bx-money",
          number: 7250,

          name: "Total Categories",
          color: "#2e6dd8",
          backgroundColor: "",

        },

        // Add more data for other cards if needed
      ],

    }
  }
});
 

</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");
@import url('https://api.iconify.design/mingcute/notification-line.svg');
#main-section {
  font-family: "Roboto", serif;
  
  background-color:#F5F6F8;
  height: 1000px;
  width:100%;
  margin-top:-5px;
}
nav{
  
  height:70px;
  background: white;

}
#main-section{

}
#main-stats{
  /* border:3px solid green; */
  width:100%;
  height:250px;
}
#nav-bar{
   /* border:3px solid blue; */
}
#main-board{
  /* border:3px solid red; */
  height:920px;
  width:85%;
  margin-left:220px;
}
#main-bottom{
  /* border:3px solid purple; */
  height:600px;
   width:100%;
  display: flex;
  justify-content: center;

}
#main-Tbl{
   /* border:3px solid orange; */
   height:400px;
   width:60%;
    display: inline-block;

 
}
#Tbl-Com{
  /* border:3px solid black; */
  width: 100%;
  height:350px;
  margin-top:40px;
}
#main-progress{
  /* border:1px solid blue; */
  height:400px;
  width:40%;
   display: inline-block;
  
    
}

#progress-bar-section{

width:80%;
height: 300px;
/* border:3px solid red; */
margin-left:70px;
margin-top:20px;
}
#progress-perc-bar{
width:70%;
height: 12px;
margin-top:10px;
/* border:3px solid blue; */
margin-left:20px;
}
#progress-perc-1{
  width:80%;
    height:15px;
  background-image: linear-gradient(#2e6dd8, #000080,#2e6dd8);
 
}

#progress-perc-2{
  width:50%;
    height:15px;
 background-image: linear-gradient(#2e6dd8, #000080,#2e6dd8);
}

#progress-perc-3{
    width:20%;
    height:15px;
    background-image: linear-gradient(#2e6dd8, #000080,#2e6dd8);
}
#progress-perc-4{
  width:70%;
    height:15px;
  background-image: linear-gradient(#2e6dd8, #000080,#2e6dd8);
}
#progress-header{
  
width:80%;
height: 50px;
/* border:3px solid red; */
margin-left:0px;
font-size:10px;

}
#name-bar{
  margin-left:20px;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
/* .smlTable{
     
    margin-left: 70px;
   width: 75%;
} */
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
/* .smlTable{
     
    margin-left: 70px;
    margin-top:300px;
    width: 15%;
} */


} 
  



</style>
