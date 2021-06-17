<template>
  <div class="index max-width">
    <search-box @search="search" v-if="'Me'!==comName"/>
    <div class="contains">
      <home
        @change-mv-id="changeMvId"
        :mv-list="mvList"
        @change-com-name="changeComName"
        v-if="'Home'===comName"
      />
      <found
        @change-mv-id="changeMvId"
        @change-com-name="changeComName"
        v-if="'Found'===comName"
      />
      <me v-if="'Me'===comName"/>
      <mv-detail :mv-id="mvId" v-if="'MvDetail'===comName"/>
    </div>
    <navigation class="navigation" @change-com-name="changeComName" @to-home="toHome"/>
  </div>
</template>

<script>
import { SearchBox, Navigation } from '../components705'
import { Home, Found, Me, MvDetail } from '@/views705/components705'
import { getList, search } from '@/api705'

export default {
  name: 'Index',
  components: { SearchBox, Navigation, Home, Found, Me, MvDetail },
  data () {
    return {
      mvId: undefined,
      offset: 1,
      limit: 60,
      searchType: 1004,
      mvList: [],
      comName: 'Home'
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取mv列表
    getList () {
      getList(this.offset, this.limit).then(response => {
        this.mvList = response.data
      })
    },
    // 搜索
    search (context) {
      search(context, this.searchType).then(response => {
        this.mvList = response.result.mvs
        this.changeComName('Home')
      })
    },
    toHome () {
      this.getList()
      this.changeComName('Home')
    },
    changeMvId (id) {
      this.mvId = id
    },
    // 切换组件
    changeComName (name) {
      this.comName = name
    }
  }
}
</script>

<style lang="scss" scoped>
$bg_color: #ccc;
$app_width: 400px;
$app_height: 600px;
.index{
  border-radius: 10px;
  position: relative;
  margin-top: 30px;
  width: $app_width;
  height: $app_height;
  margin-left: calc(50% - #{$app_width/2});
  background-color: $bg_color;

  .contains{
    height: calc(#{$app_height} - 90px);
    padding: 0 5px;
    overflow: auto;
  }
  .navigation{
    position: absolute;
    bottom: 0;
    min-width: calc(#{$app_width} - 20px);
    max-width: calc(#{$app_width} - 20px);
  }
}
</style>
