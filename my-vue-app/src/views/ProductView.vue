<template>
  <div id="main-prod">
     <LoadingTracker v-if="isLoading"></LoadingTracker>
    <Sidebar   v-if="!isLoading"/>
   
 
    <div id="prod-Tbl">
      <div id="header-sec">
         
    <input id="search-prod"  type="text" placeholder="Search..." />
    <i class='bx bx-search-alt-2' ></i>
        <button id="btn-filter">
          Filter
        <i class='bx bx-filter-alt' ></i>
        </button>
        <button id="btn-add">
          Add Product
        <i class='bx bx-add-to-queue'></i>
        </button>
        <button id="btn-list">
         <i class='bx bx-list-ul' ></i>
        </button>
        <button id="btn-list">
        <i class='bx bxs-grid'></i>
        </button>
      <div id="dropdown">
        <label for="product-select">Select Category:</label>
        <select id="product-select" v-model="selectedProduct">
          <option
            v-for="product in products"
            :key="product.id"
            :value="product.id"
          >
            {{ product.name }}
          </option>
        </select>
           <button class="filter-button reset">
                Reset
              </button>
              <button class="filter-button apply">
                Apply
              </button>
              
      </div>
  
      </div>
      <TblTrackCom :rows="Tbldata" :selectedProduct="selectedProduct" />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
 import LoadingTracker from "../components/LoadingCom.vue"

import TblTrackCom from "../components/table/tableCom.vue";

export default {
  components: {
    Sidebar,
   
    LoadingTracker,
    TblTrackCom,
  },

  mounted(){
    setTimeout(() => { this.isLoading =false;},
    4000);
},
  
  data() {
    return {
      isLoading: true,
      Tbldata: [
        {
          id: 1,
          col1: "Name",
          col2: "75/500",
          col3: "12",
          col4: "",
          status:"Active",
          backgroundColor: "",
          color:""
        },
        {
          id: 2,
          col1: "Name",
          col2: "65/1500",
          col3: "15",
          col4: "Name",
          status:"Active",
          backgroundColor: "",
          color:""
        },
        {
          id: 3,
          col1: "Name",
          col2: "85/500",
          col3: "15",
          col4: "Name",
          status:"Disabled",
          backgroundColor: "rgba(89, 113, 157, 0.2)",
          color:"#59719d"
        },
        {
          id: 4,
          col1: "Name",
          col2: "25/150",
          col3: "36",
          col4: "Name",
          status:"Disabled",
          backgroundColor: "rgba(89, 113, 157, 0.2)",
          color:"#59719d"
        },
        {
          id: 4,
          col1: "Name",
          col2: "96/1500",
          col3: "15",
          col4: "Name",
          status:"Disabled",
          backgroundColor: "rgba(89, 113, 157, 0.2)",
          color:"#59719d"
        },
        {
          id: 4,
          col1: "Nope",
          col2: "15/500",
          col3: "20",
          col4: "Nope",
          status:"Disabled",
          backgroundColor: "rgba(89, 113, 157, 0.2)",
          color:"#59719d"
        },
   
    
        {
          id: 4,
          col1: "Nope",
          col2: "78/1000",
          col3: "34",
          col4: "Nope",
           status:"Active",
          backgroundColor: "",
          color:""
        },
        {
          id: 4,
          col1: "Nope",
          col2: "45/800",
          col3: "50",
          col4: "Nope",
           status:"Active",
          backgroundColor: "",
          color:""
        },
        {
          id: 4,
          col1: "Nope",
          col2: "86/1000",
          col3: "150",
          col4: "Nope",
           status:"Active"
        },
        {
          id: 4,
          col1: "Nope",
          col2: "59/450",
          col3: "20",
          col4: "Nope",
           status:"Active"
        },
        {
          id: 4,
          col1: "Nope",
          col2: "480/1500",
          col3: "45",
          col4: "Nope",
           status:"Active"
        },
        {
          id: 4,
          col1: "Nope",
          col2: "140/500",
          col3: "30",
          col4: "Nope",
           status:"Active"
        },
        {
          id: 4,
          col1: "Nope",
          col2: "190/250",
          col3: "180",
          col4: "Nope",
           status:"Active"
        },
      ],
      products: [
        { id: 1, name: "Category A" },
        { id: 2, name: "Category B" },
        { id: 3, name: "Category C" },
        // Add more dummy products as needed
      ],
      selectedProduct: null,
    };
  },

  setup() {},
};
</script>
<style scoped>
#main-prod {
  font-family: "Roboto", serif;
  
}
#header-sec{
  
  height:50px;
  margin-left:15px;
}
#prod-Tbl {
  width: 80%;
  height: 100vh;
  /* border:3px solid red; */
  margin-left: 200px;
  margin-top: 80px;
  position: relative;
  
  
}
#product-select{
  
}

#prod-banner {
  width: 80%;
  height: 200px;
  margin-left: 250px;
  /* border:3px solid red; */
}
#dropdown {
  right: 50px;
  position: absolute;
  top: 10px;
background-color: #EDEEF3;
color:#083346;
  border:none;
  padding: 5px;
  border-radius: 4px;
 margin-right:450px;
  transition: .2s;
}
.filter-button {

border:none;
background-color: #EDEEF3;
color:#083346;
    height:25px;
    width:52px;
    border-radius: 5px;
    margin-left:5px;
   border:1px solid grey;
}
#btn-filter{
float: right;
border:none;
background-color: #EDEEF3;
color:#083346;
    height:32px;
    width:82px;
    border-radius: 5px;
    margin-right: 130px;
    margin-top:10px;
}
#btn-filter:hover{
  border:1px solid #6291fd;
  cursor: pointer;
}
#btn-add:hover{
  border:1px solid #6291fd;
  cursor: pointer;
}
#btn-add{
  float: right;
border:none;
background-color: #EDEEF3;
color:#083346;
    height:32px;
    width:152px;
    border-radius: 5px;
    margin-right: 10px;
    margin-top:10px;
}
#btn-list{
    float: right;
border:none;
background-color: #EDEEF3;
color:#083346;
    height:32px;
    width:40px;
    border-radius: 5px;
    margin-right: 10px;
    margin-top:10px;
}
#search-prod{
  background-color: #EDEEF3;
color:#083346;
border:none;
border-radius: 8px;
height:20px;
width:250px;
padding:10px 5px 5px;
 margin-top:10px;
margin-left: 30px;

}
</style>
