<template>

<div>
   
  <div id="app">
    <Sidebar />
    <nav>
     
       <SearchboxCom />
    </nav>
    
    <div>
    <DashBanner/>
          <!-- <h1>Dashboard</h1> -->
    <DashboardTrack :cards="dashboardData" />
    </div>
  <div class="tbls">
     <div class="smlTable">
          <TblTrackCom class="othertbl" :rows="Tbldata"/>
     </div>
     <div class="table">
    
     <TblTrackCom :rows="Tbldata"/>
      
    </div> 
  </div>
  </div>

  
</div>
</template>

<script >
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import DashboardTrack from "../components/block.vue";
import TblTrackCom from "../components/table/tableCom.vue"
import DashBanner from "../components/bannerCom.vue"

export default( {
  components: {

    Sidebar,
    SearchboxCom,
    DashboardTrack,
    TblTrackCom,
    DashBanner
  
    
 
  },

  data() {
    return {
      Tbldata:[{
           id:1,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
    },{
           id:2,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
    },
    {
           id:3,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
    },
    {
           id:4,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
    },
     {
           id:4,
          col1:"Nope",
          col2:"Nope",
          col3:"Nope",
          col4:"Nope",
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
          color: "#f4ac0c",
          backgroundColor: "",

        },
        {
          id: 3,
          icon: "bx bx-building",
          number: 690,

          name: "Total Products",
          color: "#000080",
          backgroundColor: "",

        },
        {
          id: 4,
          icon: "bx bx-money",
          number: 7250,

          name: "Total Categories",
          color: "#f4ac0c",
          backgroundColor: "",

        },

        // Add more data for other cards if needed
      ],

    }
  }
});
 
  
</script>

<style scoped>

#app {
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
h1{
  margin-left:50%;
}
.smlTable{
     height: 500px;
    gap: 2rem;
    margin-top:100px;
    max-height:500px;
    max-width: 50%;
      flex: 3;
     
       
}
.othertbl{
 margin-left:180px;
}
.tbls{
  display: flex;
    width: 100%;
    height: 500px;
      margin-top:250px;
}
.table {
   
   height: 500px;
   gap: 2rem;
   margin-top:100px;
   margin-left:-200px;
   max-height: 500px;
   max-width: 50%;
 flex: 5;
}


</style>
