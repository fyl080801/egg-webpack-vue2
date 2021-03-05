<template>
  <div>
    <p>aaa</p>
    <el-select v-model="selected"></el-select>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      selected: 0,
    };
  },
});
</script>
