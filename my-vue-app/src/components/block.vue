<template>
  <div class="container">

    <div class="head-title">
      <div class="left"></div>
      <ul class="box-info">
        <li v-for="card in cards" :key="card.id">

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

.container {

  max-width: 100%;
  height:300px;
  padding: 0px 8rem;
 
  margin-left:250px ;
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
  margin-left:110px;
  grid-gap: 20px;
  margin-top: 25px;


  /* border:3px solid var(--dark);  */
  width:100%;
}

.box-info li {
  padding: 5px;
  background: var(--light);
  border-radius: 6px;
  grid-gap: 20px;
  display: table-cell;
  vertical-align: middle;
  box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
         /* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
  cursor: pointer;

}

.box-info li .bx {
  width: 80px;
  height: 80px;

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
  font-size:80%;
  color:var(--jumbo);
   display: flex;
  justify-content: center;
  align-items: center;

}
h3{
   font-size:200%;
   margin-top:10px;
    display: flex;
  justify-content: center;
  align-items: center;
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
@media only screen and (max-width: 600px) {
/* .box-info li .bx{
  width: 10px;
  height: 50px;
 border:1px solid black;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

} */
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
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
/* .box-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left:50px;
  grid-gap: 10px;
  margin-top: 25px;
  /* border:3px solid var(--dark);  */
  /* width:450px;
} 
.box-info li .bx{
  width: 100px;
  height: 100px;

  font-size: 25px;
 

} */

/* .btns{
  margin-left:80px;
} */
/* h1{
margin-left: 80px;
 font-size:180%;
 color:black;
 margin-top:20px;
 width:100%;
 font-weight: 200;
}
.greeting{
  font-size:15px;
  margin-left: 80px;
 
} */
/* .message{
  margin-left:80px;
} */
}
</style> 
