<template>
  <div class="container">

    <div class="head-title">
      <div class="left"></div>
      <ul class="box-info">
        <li v-for="card in cards" :key="card.id"    :style="{  background: card.backgroundColorblock }">
            
          <div class="IconBx">
                <i
            class="bx"
            :class="card.icon"
            :style="{ color: card.color, background: card.backgroundColor }"
            ></i>

          </div>
          

          <span class="text">
            <h3>{{ card.number }}</h3>
            <h2>{{ card.name }}</h2>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  name: "DashboardTrack",
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"); */
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");

body {
  --dark: #000000;
  --jumbo: #7f8087;
  --light: #f9f9f9;
  --lighty: #ece7e7;
}
.head-title{

  margin-left:-150px;
 
}
.container {

  max-width: 100%;
  height:300px;
  padding: 0px 8rem;
  margin-left:0px ;
  position: absolute;
}


.left{
   display: flex;
  justify-content: center;
  align-items: center;
}
.box-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left:10px;
  grid-gap: 50px;
  margin-top: 25px;


 
  width:100%;
}

.box-info li {
  padding: 5px;
 
  border-radius: 6px;
  grid-gap: 15px;
  display: table-cell;
  vertical-align: middle;
  box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
  /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
  cursor: pointer;
  background: #9BB4DA;
 
}

.box-info li:hover{


  
}
.box-info li .bx {
  width: 300px;
  height: 30px;
  border-radius: 5px;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.IconBx{
   display: flex;
  justify-content: center;
  align-items: center;
  

}

h2{
  font-size:70%;
  color: #083346;
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:150%;
   margin-top:10px;
    display: flex;
  justify-content: center;
  align-items: center;
  color: #083346;
}

h1{

 font-size:200%;
 color:black;

 width:100%;
 font-weight: 200;
}


.btns{
  margin-left:10px;
}
/* 
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 640px)and (max-width: 767px) {
.box-info li .bx{

 


}
h3{
   font-size:95%;
 
} 
.box-info {
 
  grid-template-columns: repeat(2, 2fr);
  margin-left:-60px;
  grid-gap: 20px;

}
.box-info li .bx {
  width: 200px;
  height: 30px;
  
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
/* h3{
   font-size:120%;
   margin-top:10px;
 
}
h2{
  font-size:55%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

} */
/* h1{
margin-left: -20px;
 font-size:150%;
 color:black;
 margin-top:20px;
 width:100%;
 font-weight: 200;
}
h5{
  font-size:15px;
  display:none;
} */
/* p{
  margin-left:-60px;
}
.box-info {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-left:-80px;
  grid-gap: 10px;
  margin-top: 25px;
  /* border:3px solid var(--dark);  */
  /* width:300px; */
/* } */
/* button{
  border:1px solid green;
 font-size: 11px;

  height:20px;
  width: 100px;

}
.btns{
  margin-left:-20px;
}
.message{
  display: none;
} */
}
/* mobile devices */
@media only screen and (min-width: 360px)and (max-width: 384px) {
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
.box-info li .bx {
  width: 300px;
  height: 30px;
  
  font-size: 15px;
  
  
}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}

}
@media only screen and (min-width: 385px)and (max-width: 400px) {
.box-info li .bx {
  width: 320px;
  height: 30px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 401px)and (max-width: 459px) {
.box-info li .bx {
  width: 365px;
  height: 30px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 460px)and (max-width: 495px) {
.box-info li .bx {
  width: 395px;
  height: 30px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 496px)and (max-width: 520px) {
.box-info li .bx {
  width: 435px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 521px)and (max-width: 550px) {
.box-info li .bx {
  width: 480px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 551px)and (max-width: 640px) {
.box-info li .bx {
  width: 505px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(1, 1fr);
  margin-left:-230px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px)and (max-width: 799px) {
 .box-info {
 margin-left:-150px;
 grid-gap: 15px;

} 
.box-info li .bx{
  
  font-size: 25px;
    width: 150px;
  height: 30px;
} 

.btns{
  margin-left:80px;
} 
h1{
margin-left: 80px;
 font-size:80%;
 color:black;
 margin-top:20px;
 width:100%;
 font-weight: 200;
}
.greeting{
  font-size:15px;
  margin-left: 80px;
 
} 
.message{
  margin-left:80px;
} 
}
@media only screen and (min-width: 800px)and (max-width:850px) {
.box-info li .bx {
  width: 165px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 850px)and (max-width:915px) {
.box-info li .bx {
  width: 180px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 916px)and (max-width:950px) {
.box-info li .bx {
  width: 185px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 951px)and (max-width:990px) {
.box-info li .bx {
  width: 195px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:70%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:100%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 991px)and (max-width:1029px) {
.box-info li .bx {
  width: 208px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
/* Large devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 1030px) and (max-width:1100px){

.box-info li .bx {
  width: 208px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}


.box-info li .bx {
  width: 208px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width: 1150px) and (max-width:1300px){
.box-info li .bx {
  width: 600px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}


.box-info li .bx {
  width: 208px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width:1320px) and (max-width:1400px){

.box-info li .bx {
  width: 285px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:0px;
  grid-gap: 30px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}


.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
@media only screen and (min-width:1401px) and (max-width:1600px){

.box-info li .bx {
  width: 325px;
  height: 50px;
  
  font-size: 15px;
  
  
}
.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:0px;
  grid-gap: 30px;

}
h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}


.box-info {
 
  grid-template-columns: repeat(4, 1fr);
  margin-left:-180px;
  grid-gap: 20px;

}

h2{
  font-size:75%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:130%;
}

h1{

 font-size:150%;
 color:black;
 width:100%;
 font-weight: 200;
}
}
</style> 


