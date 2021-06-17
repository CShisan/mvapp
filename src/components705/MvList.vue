<template>
  <div class="mv-list">
    <section v-for="mv in mvList" :key="mv.id" @click="toMvDetail(mv.id)">
      <span class="mv-play-count">{{mv.playCount/10000}}万</span>
      <div class="cover">
        <img :src="mv.cover" v-if="mv.cover"/>
        <img :src="mv.picUrl" v-if="mv.picUrl"/>
      </div>
      <div class="mv-name">{{mv.name}}</div>
      <div class="mv-author">{{mv.artistName}}</div>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    mvList: {
      type: Array,
      Default: []
    }
  },
  components: {},
  data () {
    return {

    }
  },
  methods: {
    toMvDetail (id) {
      this.changeMvId(id)
      this.changeComName('MvDetail')
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
.mv-list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  section{
    width: 190px;
    position: relative;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;

    .mv-play-count{
      position: absolute;
      top: 0;
      right: 0;
      color: #fff;
      &:hover{
        color: #000;
        font-weight: 700;
      }
    }
    .mv-name{
      font-weight: 700;
    }
    .mv-author{
      color: #666;
    }
    .cover{
      width: 190px;
      height: 90px;
      overflow: hidden;
      img{
        width: 190px;
        height: 90px;
        transition: all .3s;
        &:hover{
          margin-left: -5px;
          margin-top: -5px;
          width: 200px;
          height: 100px;
        }
      }
    }

  }
}
</style>
