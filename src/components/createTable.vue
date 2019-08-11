<template>
    <div class="BusinessLines">
        <label >业务线：</label>
        <RadioGroup v-model="BusinessLinesSelect">
            <Radio v-for="(value,name) in BusinessLinesList" :label="name" :key="name" size="large" ></Radio>
        </RadioGroup>
    </div>

</template>

<script>
    export default {
        name: "createTable",
        data(){
            return{
                BusinessLinesSelect:'',
                BusinessLinesList:{}
            }
        },
      created(){
          let userMsg=JSON.parse(localStorage.getItem("LoginMsg"));
        this.axios.get('/user/powers',{
            params:{
                user:userMsg.user,
            }
        }).then((response)=>{
            let list=response.data.data[0].powers;
            this.BusinessLinesList=list.powersList;
            console.log(this.BusinessLinesList)
        })
      }
    }
</script>

<style scoped>
    .BusinessLines{
         display: flex;
        margin-left: 90px;
        margin-top: 20px;
    }
</style>