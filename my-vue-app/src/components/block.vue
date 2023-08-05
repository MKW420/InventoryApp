<template>
  <div class="container">
    <h1>Welcome to the Dashboard</h1>
    
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
  components:{
  
  },
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
  max-width: 2500px;
  height:200px;
  padding: 0px 8rem;
  /* border:3px solid var(--dark);  */
  margin-left:50px ;
  position: absolute;
}

body {
  background: var(--lighty);
}
.left{
   display: flex;
  justify-content: center;
  align-items: center;
}
.box-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left:150px;
  grid-gap: 20px;
  margin-top: 0px;
  /* border:3px solid var(--dark);  */
  width:900px;
}

.box-info li {
  padding: 5px;
  background: var(--light);
  border-radius: 40px;
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
  border-radius: 50px;
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
margin-left: 150px;
 font-size:200%;
 color:black;
}
</style>
