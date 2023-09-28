<template>
  <!-- will add style and toggle active function -->
  <div class="menu-item" :class="{ opened: expanded }">
    <div
      class="label"
      @click="toggleMenu()"
      :style="{ paddingLeft: depth * 20 + 20 + 'px' }"
    >
    <div class="left">
      <span >{{ label }}</span>
      </div>
      <div v-if="data" class="right">
        <i class="" :class="{opened:expanded}"></i>

        </div>
    </div>
    <div
      v-show="showChildren"
      :class="{'small-menu': smallMenuToggle}"
      class="items-container"
      ref="container"
      :style="{ height: containerHeight }"
      
    >
      <menu-item
       :class="{opened:showChildren}"
        v-for="(item, index) in data"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        :depth="depth + 1"
        :data="item.children"
        :smallMenuToggle="smallMenuToggle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-item",

  data: () => ({
    showChildren: false,
    expanded: false,
    containerHeight: 0,
  }),

  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    depth: {
      type: Number,
      require: true,
    },
    data: {
      type: Array,
    },
    smallMenuToggle:{
      type:Boolean
    },
    computed:{
      showLabel(){
        return this.smallMenuToggle ? this.depth > 0: true;
      }
    }
  },
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded;
      //if menu item is closed
      if (!this.showChildren) {
        this.showChildren = true;
        this.$nextTick(() => {
          //we get the height of whats inside the container to start the animation
          this.containerHeight = this.$refs["container"].scrollHeight + "px";
          setTimeout(() => {
            this.containerHeight = "fit-content";
            //we set the overflow of the conatiner to visible at the end of the animation
            this.$refs["container"].style.overflow = "visible";
          }, 300); //duration of animation
        });
      } else {
        this.containerHeight = this.$refs["container"].scrollHeight + "px";
        //we set the overflow of the conatiner to hidden at the end of the animation
        this.$refs["container"].style.overflow = "hidden";
        //this trick allows us to play the animation when CSS is all set well
        setTimeout(() => {
          this.containerHeight = 0 + "px";
        }, 10); //duration of animation

        setTimeout(() => {
          this.showChildren = false;
        }, 300); //duration of animation

        this.showChildren = false;
      }
    },
  },
  // foward the prop icon as classes
};
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css");

.menu-item {
  position: relative;
  width: 100%;
  top: 10px;
}
.menu-item > .label {
  color: white;
  width: 100%;
  display: flex;
  /* 
   align-items: center;
   justify-content: center; */
  flex-direction: row;
  margin-left: 20px;
  white-space: nowrap;
  user-select: none;
  height: 50px;
  margin-top:15px;
  box-sizing: border-box;
   color: black;
     font-weight:500;
}

.menuitem div {
  display: flex;
  align-items: center;
  gap: 10px;
}
i {
  font-size: 20px;

  transition: all 0.3s ease;
 
}

.expand {
  font-size: 16px;
  color: #cacaca;

}

.menu-item:hover {
  /* background-color:; */

  cursor: pointer;
  color: black;
}
.label:hover {
  
}
.items-container {
  width: 100%;
  left:calc(100%+6px);
  overflow: hidden;
  transition: height 0.3s ease;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}
.link:hover {
}
/* Small devices (phones) */

@media only screen and (min-width:640px) and (max-width: 767px){
.menu-item > .label {
font-size:12px;

}
.name{


margin-left:0px;
font-size:13px;

}
.logo{
margin-right:10px;

}
img {
  width: 30px;
  height: 30px;
 margin-right:10px;
}
}
/* mobile devices */
@media only screen and (min-width: 360px)and (max-width: 639px) {
  .menu-item > .label {
font-size:13px;

}
.name{


margin-left:0px;
font-size:10px;

}
.logo{
margin-right:0px;

}
img {
  width: 30px;
  height: 30px;
 margin-right:0px;
}
}

</style>
