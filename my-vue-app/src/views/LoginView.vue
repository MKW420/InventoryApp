<template>
<div class="body">
       
 <LoadingTracker v-if="isLoading"></LoadingTracker>
  <div class="container">
     <img alt="Inventory App logo" src="../assets/LOGOIN.png" />
   
    <p class="login-info">Please enter your login credentials</p>
    <form>
      <div class="form-group">
       
        <input type="text" id="username" name="username" required placeholder="Enter your username" />
      </div>
      <div class="form-group">
    
        <input type="password" id="password" name="password" required placeholder="Enter your password"/>
      </div>
      <div class="form-group">
        <input class="submit" type="submit" value="Sign In" />
      </div>
      <div class="form-group link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
 import LoadingTracker from "../components/LoadingCom.vue"


export default({
    name: "LoginView",
  components: {   LoadingTracker },

   
  
  // Necessary component logic here
   
  mounted(){
    setTimeout(() => { this.isLoading =false;},
    4000);
},
  data() {
        return {
          
          isLoading: true,
        }
  },  
 
});
</script>

<style scoped>
/* Component-specific styles */
.container {
  max-width: 700px;
  margin: 100px auto;
  padding: 50px;
  height:500px;
  background-color: #7d84ab;
  border-radius: 10px;
 box-shadow: 0  0 20px #7d84ab;
   font-family: 'Roboto', serif;

}

.body{
  background:#000080;
    height:100vh;
    width:100%;
    overflow:hidden;
    width: 100%;
    height: 100vh;
  background: linear-gradient(-45deg, #00000e 0%, #7d84ab 23%, #222B5F 50%100%);;
  background-size: 400% 400%;
 display: flex;
  align-items: center;
  justify-content: center;
  animation: animate 7.5s ease-in-out infinite;
 

}


.header h1 {

  color: #fff;
}
.login-info {
  text-align: center;
  
  /* color: #f49e06; */
  color:#fff;
}

.form-group {
  margin-bottom: 20px;
  color:#fff;
 
 display: flex;
  align-items: center;
  justify-content: center;

}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color:grey;
  background: #f3f6fd;
  border: 1px solid #ccc;
}

.form-group input[type="submit"] {

  
  cursor: pointer;
     color:#ccc;
    border: 1px solid #fff;
    border-radius: 10px;
    background:#222B5F;
   
    height:50px;
    width:300px;
   
    font-size:15px;
    z-index:1;
  
    border: 2px solid #222B5F;
    box-shadow: 0  0 20px #222B5F;
    border-radius: 4px;
}

.form-group .link {
  text-align: center;
  
}
img{
  width:140px;
  height: 140px;
  margin-left: 110px;
}
a{
  color:black;
}
@keyframes animate{
  0%{
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
@media (max-width: 480px) {
  .container {
 
  }
}
</style>
