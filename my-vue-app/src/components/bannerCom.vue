<template>
    
 <div id="main-banner">

  <h1 id="banner-Text">Welcome to the Dashboard, John!</h1>
  <!-- <p id="banner-para">View Recent Trends in your Inventory</p> -->
 </div>




</template>

<script>


export default ({
    setup() {
        
    },
})
</script>
<style scoped>

#main-banner{
    /* border:1px solid blue; */
     font-family: "Roboto", serif;
     display: flex;
     justify-content: center;
     align-items: center;
    width:100%;
    height:200px;
    border-radius: 5px;
    margin-left:-20px;
     background:linear-gradient(135deg, #61b2d8 0%, #2E6DD8 100%);
      animation: animate 7.5s ease-in-out infinite;
      background: linear-gradient(315deg,3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
     animation:  gradient 15s ease infinite;
}
#banner-Text{
    color: white;
    margin-left:40px;
     
}
#banner-para{
color: white;
    margin-left:0px;
     
}
</style>