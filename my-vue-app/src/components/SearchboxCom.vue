<template>
  <div class="search-box">
    <input type="text" placeholder="Search..." />
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
  position: relative;
  background: #f49e06;
}
input {
  width: 170px;
  border: 1px solid #f49e06;
  padding: 10px 20px;
  border-radius: 50px;
  outline: none;
  color: #040303;
  transition-duration: 0.3s;
}
</style>
