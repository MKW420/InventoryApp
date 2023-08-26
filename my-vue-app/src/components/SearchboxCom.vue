<template>
<div class="banner">
  <div class="search-box">

    <i class='bx bx-align-left bx-sm ' id="menu"></i>

    
    <input id="search-input"  type="text" placeholder="Search..." />
     
    <i class='bx bx-bell bx-sm bx-tada' id="left-icon"></i>
     <i class='bx bxs-moon  bx-sm'></i>
     <div class="img">
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



#search-input {
  width: 400px;
  border: 1px solid  rgba(12,12,12,0.2);
  padding: 10px 50px;
  border-radius: 0px;
  outline: none;
  color: #040303;
  transition-duration: 0.3s;
   box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
   border-radius: 20px;
}
i{
 
 margin-right:10px;

}
#left-icon{
  margin-left:300px;
}
.img{

  border:3px solid green;
  /* background-color: green; */
  height:20px;
  width:20px;
  border-radius: 20px;
  display: inline-block;
  margin-left:50px;
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
 
}
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (max-width: 600px)  {

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {


}
</style>
