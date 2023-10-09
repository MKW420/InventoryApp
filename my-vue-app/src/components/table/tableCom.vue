<template>
<div class="user-table">

    <table class="tbl"  >
        <colgroup>
             <col style="width:15%"/>
             <col style="width:20%"/>
             <col style="width:20%"/>
              <col style="width:20%"/>


        </colgroup>

<thead>
   
    <tr >
        <th>ID<i class='bx bx-sort' ></i></th> 
        <th>Category<i class='bx bx-sort' ></i></th> 
        
        <th>Stock<i class='bx bx-sort' ></i></th> 
        <th>Sales<i class='bx bx-sort' ></i></th> 
       <th>Status<i class='bx bx-sort' ></i></th> 
             

    </tr>


</thead>    
<tbody>
    <tr  v-for="row in rows" :key="row.id" >
        <td> {{row.id}}</td>
        <td>{{row.col1}}</td>
        <td>{{row.col2}}</td>
        <td>{{row.col3}}</td>
        <td><button id="btn-green" :style="{background: row.backgroundColor, color:row.color}">{{row.status}}</button></td>


    </tr>

</tbody>

    </table>




</div>

</template>
<script>


export default ({
    name:'AppTbl',
    props: {
          rows:{

           type:Array,
           required:true  
          },
      
    },
        
    
});
</script>
<style scoped>

th{
    border:none;
 color: #7d84ab;
}
.user-table {
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 1rem;
 
}
tbody{
  color: #7d84ab;
}
table{
    margin-top:50px;
    
}
table.tbl {
  border:none;
   border-collapse: collapse; /* Hücre içi çizgileri birleştir */
    background-color: white;
   overflow: hidden;
   width: 100%;
   text-align: center;
   table-layout: fixed;
   border-radius:10px;
    
}

table.tbl th {
   font-size: 15px;
}
td{
    font-size:14px;
}

table.tbl th,
table.tbl td {
   padding: 0.5rem 2rem;
   margin: 3px;
    
}

table.tbl th {
   cursor: pointer;
   background-color:#EDEEF3;
}
.table-user-name p {
   font-weight: bold;
   cursor: pointer;
   color: rgb(86, 81, 81);
  
   display: inline;
   transition: all 0.2s ease-in-out;
}

.table-user-name p:hover {
  
}
tr{
    border:none;
    border-radius: 50px;
  
}
tr:hover{
    background-color:#EDEEF3;
      border-radius: 50px;
      
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.mainhead th{
   border-bottom: 1px solid #E4E4E4;
}
#btn-green{
   border: none;
 color: #2ba972;
    background-color: rgba(43, 169, 114, 0.2);

    height:22px;
    width:62px;
    border-radius: 5px;
}

</style>