<template>
    <div class="maino">

    <div class="main">
        <p>Hello there, any alerts will appear here.....</p>
        <button>Click here</button>
    </div>

    </div>   
</template>

<script>


export default ({
  name:'BannerCom'
})
</script>





<style scoped>
.main{
    width:100%;
    height:35px;
    background: white;
    color:black;
    /* border:1px solid #2E6DD8; */
    margin-bottom: 20px;
    margin-top:-5px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.maino{
   margin-left:205px;
     border-radius: 10px;
    box-shadow: 0  0 10px #2E6DD8;
}
p{
    bottom:5px;
    font-size:15px;
    font-weight: 400;
}
button{
      
     cursor: pointer;
     color:#000080;
    border: 1px solid #000080;
    border-radius: 10px;
    background:white;
     margin-top:10px;
     margin-left: 15px;
    height:20px;
    width:100px;
     display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 10px;
}
</style>