<template>
    <header>
   
        <ul class="navlist">
            <img class="logo" src="../assets/img/logoill.png"> 
        </ul>
     

    </header>
</template>

<script>

export default ({
   name:'HeaderTrack',
   

})
</script>
<style scoped>
    header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom: 0px;
    top:0px;
    height: 200px;
    width: 100%;
    border:3px solid #2E6DD8;
    background: #2E6DD8;
    opacity: 1;
    position: relative;
    }


.logo{
    top:100px;
    height: 200px;
    width:200px;
    position: absolute;
    
    left:50%;
    transform: translate(-50%,-50%);
} 
</style>
