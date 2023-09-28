<template>
<div class="banner">
  <div class="search-box">

    

    
    <input id="search-input"  type="text" placeholder="Search..." />
     
    
     <i class='bx bxs-moon  bx-sm' id="night-mode"></i>
   
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
  // methods: {
  //     handleSearch() {
  //         this. $emit ("search", this.searchQuery)
  //     }
  // }
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
  background-color:#f9f9f9;
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
 #night-mode{
margin-left:8px;
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
