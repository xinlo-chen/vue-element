<template>
<div>
  会员等级 ID={{id}}
</div>
</template>

<script>
export default {
  props:['id'],
  name:"MemberLevel",
  beforeRouteEnter:(to,from,next) => {
    next(vm =>{
          vm.getData();
    });
  },
  beforeRouteLeave:(to,from,next)=>{
    next();
  },
  methods:{
    getData:function (){
      this.axios({
        method:'get',
        url:'http://localhost:8080/data.json',
      }).then(function (repos){
        console.log(repos);
      }).catch(function (error){
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
