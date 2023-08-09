<template>
  <div class="search-box">

    <i class='bx bx-align-left bx-sm '></i>
    
    <input  type="text" placeholder="Search..." />
    <p class="fa fa-search"></p>
    

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
.search-box {
  padding: 10px;

  margin-left:20%;
 
}
input {
  width: 600px;
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
 
 margin-right:15px;

}
</style>
