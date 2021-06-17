<template>
  <div class="found">
    <section class="same-mv">
      <h4>相似MV</h4>
      <mv-list
        @change-mv-id="changeMvId"
        :mv-list="sameMv"
        @change-com-name="changeComName"
      />
    </section>
    <section class="recommend-mv">
      <h4>推荐MV</h4>
      <mv-list
        @change-mv-id="changeMvId"
        :mv-list="recommendMv"
        @change-com-name="changeComName"
      />
    </section>
  </div>
</template>

<script>
import { MvList } from '../../components705'
import { getSameList, getRecommendList } from '@/api705'

export default {
  components: { MvList },
  data () {
    return {
      mvId: 5436712,
      offset: 1,
      limit: 4,
      sameMv: [],
      recommendMv: [],
      topMv: []
    }
  },
  created () {
    this.getSameList()
    this.getRecommendList()
  },
  methods: {
    getSameList () {
      getSameList(this.mvId).then(response => {
        this.sameMv = response.mvs.slice(0, 4)
      })
    },
    getRecommendList () {
      getRecommendList().then(response => {
        this.recommendMv = response.result
      })
    },
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
</style>
