<template>
 <!-- will add style and toggle active function -->
 <div class="menu-item" :class="{expanded:expanded}">
       <i class="fa fa-home" aria-hidden="true"></i>
         
        <div class="label"
         @click="toggleMenu()"
        :style="{
            paddingLeft:depth * 20 + 20 + 'px'
        }"
        
        >

       <font-awesome-icon icon="fa-solid fa-user-secret" size="lg"/>

           <span>{{label}}</span>
            
        </div>
        <div v-show="showChildren" class="items-container" ref="container" :style="{height:containerHeight}">
            <menu-item
                v-for="item, index in data"
                :key="index"
                :label="item.label"
                :icon="item.icon"
                :depth="depth + 1"
                :data="item.children"
                />
            </div>
    </div>

    
</template>


<script>



export default ({
     name:'menu-item',

     data: () =>({
        showChildren: false,
        expanded:false,
        containerHeight: 0
     }),

    props:{
         label:{
            type:String,
            required:true
         },
         icon:{
            type:String
         },
         depth:{
            type:Number,
            require:true
         },
         data:{
            type:Array
         }
    },
    methods:{
        toggleMenu(){
            this.expanded = !this.expanded;
            //if menu item is closed
            if(!this.showChildren){

                this.showChildren = true;
                this.$nextTick(() => {
                    //we get the height of whats inside the container to start the animation
                    this.containerHeight = this.$refs["container"].scrollHeight + "px";
                    setTimeout(() =>{
                          this.containerHeight = "fit-content";
                          //we set the overflow of the conatiner to visible at the end of the animation
                            this.$refs["container"].style.overflow = "visible"
                    },300) //duration of animation

                })
            }
            else{
                this.containerHeight = this.$refs["container"].scrollHeight + "px";
                   //we set the overflow of the conatiner to hidden at the end of the animation
                this.$refs["container"].style.overflow = "hidden";
                //this trick allows us to play the animation when CSS is all set well
                  setTimeout(() =>{
                        this.containerHeight = 0 + "px";
                    },10) //duration of animation

                    setTimeout(() =>{
                        this.showChildren = false;
                    },300) //duration of animation

                this.showChildren = false;
            }
         
        }
    }
  // foward the prop icon as classes
  
})
</script>

<style scoped>
.menu-item{
  position: relative;
    width:100%;
    top:10px;
}
.menu-item > .label{
  color:white;
   width:100%;
   display:flex;
/* 
   align-items: center;
   justify-content: center; */
   flex-direction: row; 
  margin-left:20px;
   white-space: nowrap;
   user-select: none;
   height:50px;

   box-sizing:border-box;
   color: white;


   

}

.menuitem div{

    display: flex;
    align-items: center;
    gap:10px;


}
i{
    font-size: 20px;
    color:black;
    transition: all .3s ease;

}

:expand{
    font-size: 16px;
    color:#cacaca;
    

}

.menu-item:hover{
    /* background-color:; */
   
    cursor: pointer;
    color:black;
}
.label:hover{
      color:#f49e06;
}
.items-container{
    width:100%;
    overflow: hidden;
    transition: height .3s ease;
}


</style>