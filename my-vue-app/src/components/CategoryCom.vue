<template>
 
 <div id="main-cat">
       

         <div v-for="category in categories" :key="category.id" class="row-ctnr "  >

           
                <div class="" id="containerl">
            
                    <h3>{{category.name}}</h3>
                    <h5>{{category.description}}</h5>
                </div>
        
            <div class="row-main">
            <ul class="details">
             <li class="data-info">
                <label>Number of items in category</label>
                <p>{{category.number}}</p>


            </li>
           </ul>
         </div>
         </div>          
     </div> 

</template>


<style scoped>

h3{

     top:-50px;
    font-family: "Roboto", serif;
      height: 2.5rem;
    margin: 0.75rem 0;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
    color:#323232;
}
h5{
     font-family: "Roboto", serif;
     font-weight: 300;
}
@media screen and (max-width:992px) {
   main{
    padding-left:0;
   } 
}
main-cat{
  height:100vh;
  width:100%;
}
row-main{
    height:100px;

    
}
ul{
    display: flex;
    justify-content: space-between;
    margin-top:-2px;
    border-radius:3px;
    background-color:#2e6dd8 ;
    border: 1px solid #BAB9B9;
    
    color:white;
   list-style: none;
    text-align: center;
}
#containerl:hover{
  border-bottom:8px solid #f49e06 ; 
}
.data-info{
     line-height: 1.3;
}
.row-ctnr{


  position: relative;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  border-radius: 5px;
  backface-visibility: hidden;
text-align: center;
  z-index: 1;
 width:260px;

}
a{
 
    text-decoration: none;
    color:black;
}

#containerl{
padding: 30px;
border: 1px solid #BAB9B9;
   background:linear-gradient(135deg, #61b2d8 0%, #2E6DD8 100%);
opacity: 0.6;
  border-radius: 6px;
height: 100px;
width:200px;
cursor: pointer;
color:black;
margin-left: 0px;

}
#containerl:hover{
    opacity:1;
    background-color:#f49e06 ;
    
}
#smallCtnr{
/* padding: 20px; */
}

#B-container{
   width: 50%; 
}
</style>

<script>


export default ({
   name:"HomeseeCom",
   props:{
    categories:{
        type:Array,
        required:true,
    },
   }
})



</script>
