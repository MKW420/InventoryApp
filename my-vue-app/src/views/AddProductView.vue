<template>
  <div id="main">
     <LoadingTracker v-if="isLoading"></LoadingTracker>
    <Sidebar v-if="!isLoading" />

    <div id="form">
      <img
        alt="Inventory App logo"
        class="img-logoprod"
        src="../assets/Logo(4).png"
      />
      <h3>Add a new Product</h3>
      <div class="row">
        <label class="lbltext">Current Date: </label>
        <input class="textbx" type="text" placeholder=" 29/05/2023 " />
        <div class="error" v-show="errorNameFail">Error</div>
        <label class="lbltext">Employee ID: </label>
        <input class="textbx" type="text" placeholder=" EMP56936" />
        <div class="error" v-show="errorNameFail">Error</div>
        <label class="lbltext">Employee Name: </label>
        <input class="textbx" type="text" placeholder=" Carol Smith" />
        <div class="error" v-show="errorNameFail"></div>
      </div>
      <!-- Add product -->

      <div class="row rowbyproduct">
        <label class="lbltext">Product Barcode: </label>
        <input class="textbx" type="text" placeholder=" PC000602" />
        <label class="lbltext">Category: </label>
        <select class="textbx" name="category">
          <option>Category A</option>
          <option>Category B</option>
          <option>Category C</option>
          <option>Category D</option>
          <option>Category A</option>
          <option>Category B</option>
          <option>Category C</option>
          <option>Category D</option>
        </select>
        <div class="error" v-show="errorNameFail">Error</div>
      </div>
      <div class="row rowbyproduct rows">
        <label class="lbltext">Product Name: </label>
        <input class="textbx bx-second" type="text" placeholder=" PC000602" />
        <label class="lbltext">Qauntity: </label>
        <input class="textbx" type="number" placeholder=" 50" />
        <div class="error" v-show="errorNameFail">Error</div>
        <label class="lbltext">Unit price: </label>
        <input class="textbx" type="text" placeholder=" $150.00" />
        <div class="error" v-show="errorNameFail">Error</div>
      </div>
      <div class="row rowbyproduct rows">
        <label class="lbltext">Re-order Level: </label>
        <input class="textbx bx-second" type="number" placeholder=" 50" />
        <label class="lbltext">Supplier: </label>
        <select class="textbx" name="category">
          <option>Supplier A</option>
          <option>Supplier B</option>
          <option>Supplier C</option>
          <option>Supplier D</option>
          <option>Supplier A</option>
          <option>Supplier B</option>
          <option>Supplier C</option>
          <option>Supplier D</option>
        </select>
        <div class="error" v-show="errorNameFail">Error</div>
      </div>
      <div class="row rowbyproduct rowsdescription">
        <label class="lbltext">Description: </label>
        <textarea
          class="textbx"
          type="text"
          placeholder=" Product Description"
        ></textarea>
        <div class="error" v-show="errorNameFail">Error</div>
      </div>
      <div class="row rowbyproduct rowsbrowse">
        <label class="lbltext"
          >Please Upload documents only in 'jpg','png', jpeg' format:
        </label>

        <input class="choosefile" type="file" placeholder="" />
      </div>

      <button class="btnProdSub">Submit</button>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
 import LoadingTracker from "../components/LoadingCom.vue"
export default {
  components: {
    Sidebar,
      LoadingTracker
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
  setup() {},
};
</script>
<style scoped>
#main {
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", serif;
}
.img-logoprod {
  height: 50px;
  width: 50px;
  margin-left: 470px;
  margin-top: 20px;
}
#form {
  width: 65%;
  height: 750px;

  margin-top: 0px;
  
}
.row {
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 50px;
  margin-top: 50px;
}
.textbx {
  margin-top: 10px;
  margin-left: 5px;
  width: 180px;
  background: #f1f1f1;
  border: none;
  padding: 10px;
}

.lbltext {
  margin-left: 8px;
}
.rowbyproduct {
  margin-top: 55px;
}
.rows {
  margin-top: 5px;
}
.rowsdescription {
  margin-top: 5px;
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 80px;
}
.rowsbrowse {
  margin-top: 5px;
  border: 1px solid #f1f1f1;
  width: 100%;
  height: 50px;
}
.textheading {
  float: left;
  margin-left: 20px;
  
}
.bx-second {
  margin-left: 20px;
}
.btnProdSub {
  color: white;

  background: #f49e06;
  border: 2px solid #f49e06;
  box-shadow: 0 0 20px #f49e06;
  border-radius: 4px;
  padding: 16px 20px;
  margin: 35px;
  border: none;
  cursor: pointer;
  width: 500px;
  opacity: 0.9;
  margin-left: 230px;
  font-size: 18px;
}
</style>
