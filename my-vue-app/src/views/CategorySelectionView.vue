<template>

<main>  
  <nav>
  <h1>Categories</h1>
  </nav>
<div  class="main1">
 
  <Sidebar/>
 
  <CategoryCom :categories="CategoryData" />
 
</div>
</main>
</template>

<script>

import CategoryCom from '../components/CategoryCom.vue'
import Sidebar from "../components/sidebar.vue";


export default ({

 components:{
    CategoryCom,
    Sidebar,
   
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
div{
  background: white;
 
  height: 100vh;
  width:100%;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: center;
  align-items:center;
  grid-gap: 0px;
 
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
</style>