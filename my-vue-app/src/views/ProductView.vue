<template>
<div id="main-prod">
    <Sidebar/>
     <nav>
    <SearchboxCom />
    </nav>
    <div id="prod-banner">

    <Banner-com/>
    </div>
    <div id="prod-Tbl">
    <TblTrackCom :rows="Tbldata"/>
    </div>
</div>

  

</template>
<script>

import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import BannerCom from "../components/bannerCom.vue";
import TblTrackCom from "../components/table/tableCom.vue";

export default ({
     components:{
    
         Sidebar,
         SearchboxCom,
        BannerCom,
        TblTrackCom,
   
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
        
    },
})
</script>
<style scoped>
#main-prod{
     font-family: "Roboto", serif;
}
#prod-Tbl{
    width:80%;
    height:100vh;
    /* border:3px solid red; */
    margin-left:200px;
    margin-top:80px;
}
#prod-banner{
    width:80%;
    height:200px;
    margin-left:250px;
    /* border:3px solid red; */
}
</style>
