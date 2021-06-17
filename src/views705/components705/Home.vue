<template>
  <div class="home">
    <mv-list
      :mv-list="mvList"
      @change-com-name="changeComName"
      @change-mv-id="changeMvId"
    />
  </div>
</template>

<script>
import { MvList } from '../../components705'

export default {
  props: {
    mvList: {
      type: Array,
      Default: []
    }
  },
  components: { MvList },
  data () {
    return {

    }
  },
  methods: {
    changeMvId (id) {
      this.$emit('change-mv-id', id)
    },
    changeComName (name) {
      this.$emit('change-com-name', name)
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  max-height: calc(50% - 90px);
  margin: 10px 0;
}
</style>
