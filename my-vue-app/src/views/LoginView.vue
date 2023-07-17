<template>
<div class="body">
       
  <div class="container">
     <img alt="Inventory App logo" src="../assets/img/logoill.png" />
    <div class="header">
   
    
    </div>
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

export default {
  // Necessary component logic here
    name: "LoginView",
  components: {
   
  },
};
</script>

<style scoped>
/* Component-specific styles */
.container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #2E6DD8;
  border-radius: 10px;
 box-shadow: 0  0 20px #2E6DD8;
   font-family: 'Roboto', serif;
}
.body{
  background:#000080;
    height:100vh;
    width:100%;
    overflow:hidden;
    width: 100%;
    height: 100vh;
  background: linear-gradient(-45deg, #00000e 0%, #2E6DD8 23%, #000080 50%100%);;
  background-size: 400% 400%;

  animation: animate 7.5s ease-in-out infinite;
 

}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.header h1 {
  margin-right: 10px;
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
  margin-left:50px;
 

}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  color:#F49E06;
  background: #2E6DD8;
  border: 1px solid #ccc;
}

.form-group input[type="submit"] {

  
  cursor: pointer;
     color:#000080;
    border: 1px solid #fff;
    border-radius: 10px;
    background:#F49E06;
   
    height:50px;
    width:300px;
   
    font-size:15px;
    z-index:1;
    border-radius: 80px;
    border: 2px solid #F49E06;
    box-shadow: 0  0 20px #F49E06;
    border-radius: 4px;
}

.form-group .link {
  text-align: center;
  
}
img{
  width:140px;
  height: 140px;
  margin-left: 140px;
}
a{
  color:#F49E06;
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
    margin: 50px 10px;
    padding: 10px;
  }
}
</style>
