<script>
  export default {
    props:{
      title: String,
      originalTitle: String,
      language : String,
      vote: Number
    }
  
  }
</script>
<template>
  <div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{ title }}</li>
    <li class="list-group-item">{{ originalTitle }}</li>
    <li class="list-group-item">{{ language }}</li>
    <li class="list-group-item">{{ vote }}</li>
  </ul>
</div>
</template>


<style>

</style>