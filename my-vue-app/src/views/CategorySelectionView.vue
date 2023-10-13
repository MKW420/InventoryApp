<template>
  <main>
	<LoadingTracker v-if="isLoading"></LoadingTracker>
    <nav>
      <SearchboxCom />
    </nav>
    <div id="cat-banner">

      
     
    </div>
    <div class="main1">
          <Sidebar v-if="!isLoading"></Sidebar>
      <div id="main-category-section">
        <div id="main-category-block">
          <CategoryCom :categories="CategoryData" />
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CategoryCom from "../components/CategoryCom.vue";
import Sidebar from "../components/sidebar.vue";
import SearchboxCom from "../components/SearchboxCom.vue";

  import LoadingTracker from "../components/LoadingCom.vue"


export default {
  components: {
    CategoryCom,
    Sidebar,
    SearchboxCom,

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


  setup() {
    return {
      CategoryData: [
        {
          id: 1,
          name: "Category 1",
          description: "Description of category 1",
          number: "4",
        },
        {
          id: 2,
          name: "Category 2",
          description: "Description of category 2",
          number: "4",
        },
        {
          id: 3,
          name: "Category 3",
          description: "Description of category 3",
          number: "4",
        },
        {
          id: 4,
          name: "Category 4",
          description: "Description of category 4",
          number: "4",
        },
        {
          id: 5,
          name: "Category 5",
          description: "Description of category 4",
          number: "4",
        },
        {
          id: 6,
          name: "Category 6",
          description: "Description of category 4",
          number: "4",
        },
      ],
    };

  }

};
</script>

<style scoped>


main {
  font-family: "Roboto", serif;
  background-color: white;
}
#cat-banner {
  width: 80%;
  height: 200px;

  margin-left: 250px;
}
#main-category-section {
  /* border:3px solid red;  */
  height: 100vh;
  width: 100%;
}

#main-category-block {
  background: white;
  /* border:3px solid red;  */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 700px;
  width: 60%;
  margin-left: 350px;
  margin-top: 80px;
  display: flex;
}
h1 {
  text-align: center;
  font-weight: 200;
}

nav {
  background-color: white;
  height: 100px;
  width: 100%;
  top: -20px;
}
#cat-add {
  width: 60%;
  height: 80px;
  border: 1px solid grey;
  background-color: white;
  z-index: 9;
  opacity: 0.9;
  border-radius: 5px;
  margin-top: -50px;
  margin-left: 200px;
}
#cat-input {
  width: 300px;
  height: 35px;
  border: 1px solid grey;
  color: black;
  text-align: center;
  border-radius: 5px;
  float: right;
  margin-top: 20px;
  margin-right: 50px;
}
#cat-h2 {
  float: left;
  font-size: 150%;
  margin-left: 50px;
  color: black;
  font-weight: 300;
}

@media only screen and (min-width: 640px) and (max-width: 767px) {
  #cat-banner {
    width: 100%;
    margin-left: 0;
  }

  #main-category-block {
    width: 100%;
    margin-left: 0;
  }


  #cat-add {
    width: 80%;
    height: 80px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10%;
  }

  #cat-input {
    width: 70%;
    height: 35px;
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-right: 50px;
  }

  #cat-h2 {
    font-size: 150%;
    margin-left: 20px;
    color: black;
    font-weight: 300;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  #cat-banner {
    width: 100%;
    margin-left: 0;
    height: 150px; /* Adjust the height for the specified screen size range */
  }

  #main-category-block {
    width: 100%;
    margin-left: 120px;
  }

  #cat-add {
    width: 80%;
    height: 80px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10%;
  }

  #cat-input {
    width: 65%;
    height: 35px;
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-right: 50px;
  }

  #cat-h2 {
    font-size: 150%;
    margin-left: 20px;
    color: black;
    font-weight: 300;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 180px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 23%;
    margin-top: 80px;
    justify-content: space-around;
  }

  #cat-add {
    width: 70%;
    height: 100px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 65%;
    height: 40px;
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 100px;
  }

  #cat-h2 {
    font-size: 180%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}

@media only screen and (min-width: 1320px) and (max-width: 1605px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 200px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 18%; /* Center category blocks */
    margin-top: 100px; /* Adjust top margin */
    display: flex;
    justify-content: space-around; /* Adjust spacing between category items */
  }

  #cat-add {
    width: 70%;
    height: 120px; /* Adjust the height for the specified screen size range */
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 60%;
    height: 50px;

    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px; /* Adjust the top margin */
    margin-right: 40px;
  }

  #cat-h2 {
    font-size: 200%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}

@media only screen and (min-width: 360px) and (max-width: 384px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 200px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 10%;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }

  #cat-add {
    width: 70%;
    height: 120px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 60%;
    height: 50px;
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
    margin-right: 40px;
  }

  #cat-h2 {
    font-size: 200%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}

@media only screen and (min-width: 385px) and (max-width: 400px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 180px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 18%;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }

  #cat-add {
    width: 70%;
    height: 120px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 60%;
    height: 50px; /* height for this screen size range */
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px; /* Adjust top margin */
    margin-right: 40px;
  }

  #cat-h2 {
    font-size: 200%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}

@media only screen and (min-width: 401px) and (max-width: 495px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 180px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 18%;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }

  #cat-add {
    width: 70%;
    height: 120px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 60%;
    height: 50px; /* height for this screen size range */
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px; /* Adjust top margin */
    margin-right: 40px;
  }

  #cat-h2 {
    font-size: 200%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}

@media only screen and (min-width: 496px) and (max-width: 520px) {
  #cat-banner {
    width: 90%;
    margin-left: 5%;
    height: 180px;
  }

  #main-category-block {
    width: 80%;
    margin-left: 22%;
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }

  #cat-add {
    width: 70%;
    height: 120px;
    border: 1px solid grey;
    background-color: white;
    z-index: 9;
    opacity: 0.9;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
  }

  #cat-input {
    width: 60%;
    height: 50px;
    border: 1px solid grey;
    color: black;
    text-align: center;
    border-radius: 5px;
    margin-top: 15px;
    margin-right: 60px;
  }

  #cat-h2 {
    font-size: 200%;
    margin-left: 30px;
    color: black;
    font-weight: 400;
  }
}
</style>
