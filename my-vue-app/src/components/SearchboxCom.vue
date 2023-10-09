<template>
<div class="banner">
  <div class="search-box">

    

    
    <input id="search-input"  type="text" placeholder="Search..." />
     
      <label class="switch">
        <input type="checkbox" id="checkbox" @click="toggle()">
        <span class="slider"></span>
      </label>
<!--     
     <i class='bx bxs-moon  bx-sm' id="night-mode"></i> -->
    
     <div class="img">
       <img  class="pic" src="../assets/pex2.jpg" />
     
       <div class="dropdown-content">
        <a><i class='bx bxs-user sm' ></i>Profile</a>
        <a><i class='bx bxs-cog sm'></i>Settings</a>
        <a><i class='bx bx-log-out' ></i>Logout</a>

       </div>
     </div>
  </div>

</div>
</template>

<script>
export default {
  name: "SearchboxCom",
  data() {
    return {
      searchQuery: "",
    };
  },
  
  mounted(){
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      window.localStorage.setItem("isDarkMode", "true");
    }
  },
 
  methods: {
      // handleSearch() {
      //     this. $emit ("search", this.searchQuery)
      // }

      toggle(){
        const isDarkMode = window.localStorage.getItem("isDarkMode") == "true";

        if(isDarkMode){
          window.localStorage.setItem("isDarkMode", "false");
          document.body.style.background = "#f3f6fd";
          document.getElementById("sidebardark").style.background = "#f3f6fd";
          document.getElementById("nav-bar").style.background = "#f3f6fd";
          document.getElementById("menu-link").style.color= "#000000";
          document.getElementById("checkbox").checked = true;

        }
        else{
          window.localStorage.setItem("isDarkMode", "true");
          document.body.style.background = "#222B5F";
          document.getElementById("sidebardark").style.background = "#222B5F";
          document.getElementById("menu-link").style.color= "#7d84ab";
          document.getElementById("nav-bar").style.background = "#222B5F";
          document.getElementById("checkbox").checked = false;
        }
      }
  }
};
</script>

<style>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");
.search-box {
  padding: 10px;
 
  margin-left:20%;
 
}
.banner{

}


#search-input {
  width: 400px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
  border-radius: 0px;
  outline: none;
  color: #040303;
  transition-duration: 0.3s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border-radius: 20px;
}
i{
 
 margin-right:10px;

}
#left-icon{
  margin-left:800px;
}
.pic{
    height:40px;
  width:40px;
   border-radius: 20px;
}
.img{

  border:4px solid orange;
  /* background-color: green; */
  height:40px;
  width:40px;
  border-radius: 50px;
  display: inline-block;
 float:right;
 margin-right:50px;
}
.dropdown-content{
  display:none;
  position:absolute;
  background-color:#f3f6fd;
min-width:160px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
color:black;
padding:12px 16px;
text-decoration: none;
display: block;
cursor: pointer;
}
.dropdown-content a:hover{
 
  font-weight:bold;
}
.img:hover .dropdown-content{
  display:block;
}
#night-mode{
margin-left:400px;
margin-top:10px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  border-radius: 50px;
  margin-left:350px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
    border-radius: 50px;;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
   border-radius: 50px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
   border-radius: 50px;;
}

input:checked + .slider {
  background-color: #222B5F;
}

input:focus + .slider {
  box-shadow: 0 0 1px #222B5F;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Large devices (laptops/desktops, 1024px and up) */
@media only screen and (min-width: 1024px) {
 #night-mode{
margin-left:850px;
margin-top:10px;
}



}



/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 640px)and (max-width: 767px) {
#search-input {
  width: 200px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 8px 40px;
 

}
.search-box {
  margin-left:30%;
 
}
.img{

  border:4px solid orange;
  /* background-color: green; */
  height:30px;
  width:30px;
  

}
.pic{
    height:30px;
  width:30px;
 
}
 #night-mode{
margin-left:40px;
margin-top:10px;
}
.dropdown-content{


min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}
/* mobile devices */
@media only screen and (min-width: 385px)and (max-width: 400px) {

  #search-input {
  width: 100px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
  height: 10px;;

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:5px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:20px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 360px)and (max-width: 384px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}

.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
  border-radius: 50px;
  margin-left:0px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
   border-radius: 50px;;
}

}
@media only screen and (min-width: 401px)and (max-width: 459px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 460px)and (max-width: 495px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}

.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 496px)and (max-width: 520px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 521px)and (max-width: 640px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 768px)and (max-width: 799px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 800px)and (max-width: 850px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 851px)and (max-width: 915px) {

  #search-input {
  width: 100px;
  height:5px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
 

}
.search-box {
  margin-left:10%;
 
}
.img{
  height:20px;
  width:20px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:20px;
  width:20px;
 
}
 #night-mode{
margin-left:25px;
margin-top:10px;

}
.dropdown-content{

min-width:140px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:12px;
}
}
@media only screen and (min-width: 1320px)and (max-width: 1600px) {

  #search-input {
  width: 450px;
  
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
  margin-top:-10px;

}
.search-box {
  margin-left:15%;
 
}
.img{
  height:30px;
  width:30px;
  margin-top:10px;
  margin-right:2px;
}
.pic{
    height:30px;
  width:30px;
 
}
 #night-mode{
margin-left:480px;
margin-top:18px;

}
.dropdown-content{

min-width:180px;
box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);
z-index:1;
right:0;
border-radius: 10px;

}
.dropdown-content a{
font-size:15px;
}
}
</style>
