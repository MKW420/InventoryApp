<template>
  <div class="container">
    <div class="header">
      <h1>Login</h1>
      <img alt="Inventory App logo" src="../assets/resized.png" />
    </div>
    <p class="login-info">Please enter your login credentials</p>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="form-group">
        <input type="submit" value="Sign In" />
      </div>
      <div class="form-group link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // Necessary component logic here
};
</script>

<style scoped>
/* Component-specific styles */
.container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.header h1 {
  margin-right: 10px;
  color: #f49e06;
}
.login-info {
  text-align: center;
  font-weight: bold;
  /* color: #f49e06; */
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.form-group input[type="submit"] {
  background-color: #000080;
  color: #fff;
  cursor: pointer;
}

.form-group .link {
  text-align: center;
}

@media (max-width: 480px) {
  .container {
    margin: 50px 10px;
    padding: 10px;
  }
}
</style>
