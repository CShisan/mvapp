<template>
  <div class="navigation">
    <section @click="toHome">
      首页
    </section>
    <section @click="changeComName('Found')">
      发现
    </section>
    <section @click="changeComName('Me')">
      我
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    toHome () {
      this.$emit('to-home')
    },
    changeComName (name) {
      this.$emit('change-com-name', name)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation{
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #242424;
  section{
    width: 40px;
    margin: 10px;
    border-radius: 20px;
    padding: 5px 20px;
    background-color: #FF3C2F;
    text-align: center;
    cursor: pointer;
    transition: all .5s;
    &:hover {
      background-color: #FF2419;
    }
  }
}
</style>
