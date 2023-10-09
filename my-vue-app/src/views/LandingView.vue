<template>
<body>
  
      <LoadingTracker v-if="isLoading"></LoadingTracker>

 
    <section class="containerp">
      <div class="header">
        <h1>Inventory System Management</h1>

        <p>
          Get your stock on lock. Inventory Management system for Retail
          businesses Worldwide!
        </p>

        <button @click="LoginPage">Sign Up</button>
      </div>
      <div class="sqaurebx">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="circlebx">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>

</body>
</template>

<script>

  import LoadingTracker from "../components/LoadingCom.vue"
export default {
  name: "App",
  components: {
  
    LoadingTracker
  },
  
  methods: {
    
    LoginPage() {
      this.$router.push("/Login");
    },
  },
  

  mounted(){
    setTimeout(() => { this.isLoading =false;},
    4000);
},
  data() {
        return {
          
          isLoading: true,
        }
  },  
};
</script>

<style scoped>
body{
  /* box-sizing: border-box; */
  margin: 0px auto;
  padding: 0;
    height: 100vh;
}



a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}
a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
}
.containerp {
  background:  #f3f6fd;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", serif;
}
h1{
     display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
}

.header h1 {
  color: #222B5F;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
  text-decoration: none;
  font-weight:bold;

  

}

.header p {
  color: #222B5F;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  z-index: 1;
}
button {
 
  border: 1px solid #fff;
  border-radius: 10px;
  background: #222B5F;
  position: absolute;
  height: 50px;
  width: 280px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  z-index: 1;
  border-radius: 80px;
  border: 2px solid #222B5F;
  box-shadow: 0 0 20px #222B5F;
  border-radius: 4px;
  color:white;
}
.btn {
  top: 65%;
  left: 50%;
}
button:hover {
  
  cursor: pointer;
}

ul li {
  position: absolute;
  border: 1px solid #EB3E1B;
  width: 30px;
  height: 30px;
  list-style: none;
  opacity: 0;
  background: #EB3E1B;
}

.link1 {
  display: inline;
  color: #EB3E1B;
  font-weight: bold;
}
.link1 a::after {
  display: inline-block;
  color: #fff;
  font-size: 150%;
  font-weight: bold;
  padding: 0 3px;
}
.sqaurebx li {
  top: 50vh;
  left: 45vh;
  animation: sqaure 10s linear infinite;
}

.sqaurebx li:nth-child(2) {
  top: 200vh;
  left: 10vh;
  animation-delay: 1s;
}
.sqaurebx li:nth-child(3) {
  top: 200vh;
  left: 85vh;
  animation-delay: 2s;
}
.sqaurebx li:nth-child(4) {
  top: 190vh;
  left: 70vh;
  animation-delay: 3s;
}
.sqaurebx li:nth-child(5) {
  top: 180vh;
  left: 10vh;
  animation-delay: 4s;
}

@keyframes sqaure {
  0% {
    transform: scale(0) rotateY(0deg);
    opacity: 1;
  }
  100% {
    transform: scale(5) rotateY(1000deg);
    opacity: 0;
  }
}
.circlebx li {
  opacity: 0.4;
  bottom: 0;
  left: 15wv;
  animation: circle 10s linear infinite;
}
.circlebx li:nth-child(2) {
  left: 35vw;
  animation-delay: 1s;
}
.circlebx li:nth-child(3) {
  left: 55vw;
  animation-delay: 2s;
}
.circlebx li:nth-child(4) {
  left: 75vw;
  animation-delay: 3s;
}
.circlebx li:nth-child(5) {
  left: 90vw;
  animation-delay: 4s;
}

@keyframes circle {
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 1;
    bottom: 0;
    border-radius: 0;
  }
  100% {
    transform: scale(5) rotate(1000deg);
    opacity: 0;
    bottom: 90vh;
    border-radius: 50%;
  }
}

@media only screen and (min-width: 360px) and (max-width: 370px) {

.header h1 {
 
  top: 10%;
  left: 50%;
   font-size: 20px;

  

}

.header p {
  color: #222B5F;
  top:12.5%;
  left:40%;
  font-size: 11px;
  z-index: 1;
}
button {
 
  border: 1px solid #fff;
  border-radius: 10px;
  background: #222B5F;
  position: absolute;
  height: 30px;
  width: 180px;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  z-index: 1;
  border-radius: 80px;
  border: 2px solid #222B5F;
  box-shadow: 0 0 20px #222B5F;
  border-radius: 4px;
  color:white;
}
}
@media only screen and (min-width: 371px) and (max-width: 384px) {

.header h1 {
 
  top: 10%;
  left: 50%;
   font-size: 20px;

  

}

.header p {
  color: #222B5F;
  top:12.5%;
  left:40%;
  font-size: 11px;
  z-index: 1;
}
button {
 
  border: 1px solid #fff;
  border-radius: 10px;
  background: #222B5F;
  position: absolute;
  height: 30px;
  width: 180px;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  z-index: 1;
  border-radius: 80px;
  border: 2px solid #222B5F;
  box-shadow: 0 0 20px #222B5F;
  border-radius: 4px;
  color:white;
}
}




</style>
