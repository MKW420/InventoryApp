<template>
<div class="user-table">
    <table class="tbl"  >
        <colgroup>
             <col style="width:20%"/>
             <col style="width:35%"/>
             <col style="width:35%"/>
              <col style="width:35%"/>


        </colgroup>

<thead>
    <tr class="mainhead">
        <th>Heading</th> 
        </tr>
    <tr >
        <th>Name</th> 
        <th>Name</th> 
        <th>Name</th> 
        <th>Name</th> 
      
             

    </tr>


</thead>    
<tbody>
    <tr  v-for="row in rows" :key="row.id" >
        <td> {{row.id}}</td>
        <td>{{row.col1}}</td>
        <td>{{row.col2}}</td>
      
        <td><button id="btn-green">Action</button></td>


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
    border-bottom:3px solid black;

}
.user-table {
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 1rem;
}
tbody{
    color:black;
}

table.tbl {
   box-shadow: 4px 8px 12px rgba(28, 6, 49, 0.4);
   border-collapse: collapse; /* Hücre içi çizgileri birleştir */
    background-color: white;
   overflow: hidden;
   width: 100%;
   text-align: center;
   table-layout: fixed;
   border-radius:5px;
}

table.tbl th {
   font-size: 15px;
}
td{
    font-size:15px;
}
td:hover{
    background:#D5D9E5;
    opacity: 1px;
}
table.tbl th,
table.tbl td {
   padding: 0.5rem 2rem;
   margin: 3px;
    
}

table.tbl th {
   cursor: pointer;
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
    border-bottom: 1px solid #E4E4E4;
}
.mainhead th{
   border-bottom: 1px solid #E4E4E4;
}
#btn-green{
    border:1px solid #000080;
    background-color: white;
    height:22px;
    width:62px;
    border-radius: 5px;
}
#btn-green:hover{
    background: #000080;
    color:white;
}
</style>