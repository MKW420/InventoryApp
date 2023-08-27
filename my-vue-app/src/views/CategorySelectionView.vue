<template>

<main>  
  <nav>
    <SearchboxCom />
  </nav>
  <div id="cat-banner">

   <BannerCom/>
       <div id="cat-add">
        <h2 id="cat-h2">All Categories</h2>
        <input type="text" id="cat-input" placeholder=" 🔍 enter keyword">
    </div>
  </div>
<div  class="main1">
 
  <Sidebar/>
 <div id="main-category-section">
 
  <div id="main-category-block">
    <CategoryCom :categories="CategoryData" />
 </div>
</div>
</div>
</main>
</template>

<script>

import CategoryCom from '../components/CategoryCom.vue'
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";
import BannerCom from "../components/bannerCom.vue"

export default ({

 components:{
    CategoryCom,
    Sidebar,
        SearchboxCom,
           BannerCom
   
 }, 

 setup(){
  return{
    CategoryData:[
      {
        id:1,
        name: "Category 1",
        description:"Description of category 1",
        number:"4"
      },
      {
         id:2,
         name: "Category 2",
         description:"Description of category 2",
         number:"4"
      },
      {
         id:3,
         name: "Category 3",
         description:"Description of category 3",
         number:"4"
      },
      {
         id:4,
         name: "Category 4",
         description:"Description of category 4",
         number:"4"
      },
      {
         id:5,
         name: "Category 5",
         description:"Description of category 4",
         number:"4"
      },
      {
         id:6,
         name: "Category 6",
         description:"Description of category 4",
         number:"4"
      },
    ]
  }
 }
});
</script>

<style scoped>
main{
   font-family: "Roboto", serif;
   background-color: white;
   
}
#cat-banner{
  width:80%;
  height:200px;

  margin-left:250px;
}
#main-category-section{

 /* border:3px solid red;  */
   height: 100vh;
  width:100%;
  

}
#main-category-block{
 background: white;
/* border:3px solid red;  */
 display: grid;
 grid-template-columns: repeat(3, 1fr);
  height: 700px;
  width:60%;
  margin-left:350px;
  margin-top:80px;
 display: flex;
 
}
h1{
  text-align: center;
  font-weight: 200;
}

nav{
  background-color:white;
  height:100px;
  width: 100%;
  top:-20px;
}
#cat-add{
  width:60%;
  height:80px;
  border:1px solid grey; 
  background-color: white;
  z-index:9;
  opacity:0.9;
  border-radius:5px;
  margin-top:-50px;
  margin-left:200px;
}
#cat-input{
  width:300px;
  height:35px;
  border:1px solid grey;
  color:black;
   text-align: center; 
  border-radius: 5px;
  float: right;
  margin-top:20px;
  margin-right: 50px;

}
#cat-h2{
  float:left;
  font-size:150%;
  margin-left:50px;
  color:black;
  font-weight:300;
}
</style>