<template>
  <div class="mv-detail">
      <section class="info">
          <div>
            <vueMiniPlayer ref="vueMiniPlayer"
              :video="mv"
              :mutex="true"
            />
          </div>
          <div class="info-name">{{info.name}}</div>
          <div class="info-other">
              <span>歌手: {{info.artistName}}</span>
              <span>播放: {{info.playCount/10000}}万</span>
          </div>
          <div>发行日期: {{info.publishTime}}</div>
      </section>
      <section>
          <div class="comment-title">评论</div>
          <div class="comment" v-for="comment in comments" :key="comment.id">
              <section class="avatar">
                  <img class="avatar-img" :src="comment.user.avatarUrl"/>
              </section>
              <section>
                  <div class="user">
                      <span>{{comment.user.nickname}}</span>
                      <span>{{comment.time}}</span>
                  </div>
                  <div class="content">
                      {{comment.content}}
                  </div>
              </section>
          </div>
      </section>
  </div>
</template>

<script>
import { getDetail, getComment, getMv } from '@/api705'

export default {
  props: {
    mvId: {
      type: Number
    }
  },
  components: { },
  data () {
    return {
      mv: {
        url: undefined,
        cover: undefined,
        muted: false,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      info: {
        name: undefined
      },
      offset: 2,
      limit: 20,
      comments: []
    }
  },
  created () {
    this.getDetail()
    this.getMv()
    this.getComment()
  },
  methods: {
    // 获取详情
    getDetail () {
      getDetail(this.mvId).then(response => {
        this.info = response.data
        this.mv.cover = this.info.cover
      })
    },
    // 获取mv
    getMv () {
      getMv(this.mvId).then(response => {
        this.mv.url = response.data.url
      })
    },
    // 获取评论
    getComment () {
      getComment(this.mvId, this.offset, this.limit).then(response => {
        this.comments = response.comments
        this.comments.map(item => {
          item.time = this.getCommentDate(item.time)
        })
      })
    },
    // 格式化时间
    getCommentDate (time) {
      const date = new Date(time)
      return date.getFullYear() + '/' +
      date.getMonth() + '/' +
      date.getDate() + ' ' +
      date.getHours() + ':' +
      date.getMinutes() + ':' +
      date.getSeconds()
    }
  }
}
</script>

<style lang="scss" scoped>
.mv-detail{
    display: flex;
    flex-wrap: wrap;

    .info{
        width: 100%;
        margin-bottom: 20px;
        font-size: 14px;

        .info-name{
            font-size: 16px;
            font-weight: 700;
            margin: 20px 0 10px;
        }
        .info-other{
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;
        }
    }
    .comment-title{
      margin-bottom: 20px;
      padding-top: 10px;
      font-size: 18px;
      font-weight: 700;
      border-top: 1px solid #000;
    }
    .comment{
        display: flex;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px dotted #036;
        .avatar{
            margin-right: 20px;
            .avatar-img{
                width: 40px;
                height: 40px;
                border-radius: 20px;
            }
        }
        .user{
            margin-bottom: 10px;
            display: flex;
            font-size: 12px;
            color: #666;
            justify-content: space-between;
        }
        .content{
            width: 330px;
        }
    }
}
</style>
