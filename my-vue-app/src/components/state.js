import{ref,computed} from 'vue'
// //define a reactive value that you can toggle on and off
// export const collapsed = ref(false)
// export const toggleSideBar = () => (collapsed.value = !collapsed.value)


// //export a pixel with value
// export const SIDEBAR_WIDTH =180
// export const SIDEBAR_WIDTH_COLLAPSED = 38
// export const sidebarWidth = computed(
//     () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
// )

const counter = document.querySelector(".counter");
let count = 0;
setInterval(() =>{
    if(count == 80)
    {
        clearInterval(count);
    }
    else{
        count+=1;
        counter.textContent = count + "%";
    }
},42);
