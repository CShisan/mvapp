<template>
  <div class="search-box">
    <input class="search-input" v-model="context" placeholder="搜索" @keyup.enter="search"/>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      context: ''
    }
  },
  methods: {
    search () {
      if (!this.context) return
      this.$emit('search', this.context)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box{
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242424;
  padding: 10px 50px;
  .search-input{
    width: 100%;
    height: 28px;
    border: 1px solid #ccc;
    border-radius: 15px;
    outline: none;
    font-size: 15px;
    font-weight: 540;
    text-align: center;
    &::-webkit-input-placeholder {
      color: #ccc;
    }
  }
}
</style>
