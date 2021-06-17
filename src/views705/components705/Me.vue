<template>
  <div class="me">
    <section>
      <img class="thimble" src="../../assets705/RecordThimble.png">
      <img class="note" src="../../assets705/note.png">
      <img class="record" src="../../assets705/record.png" />
      <img class="avatar record" src="https://oss.cshisan.com/app/blog/images/avatar_1621961305157.jpg"/>
    </section>
    <section>
      软工7班
    </section>
    <section>
      201835020705
    </section>
    <section>
      陈泽汝
    </section>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@keyframes rotation{
    from { -webkit-transform: rotate(0deg);}
    to { -webkit-transform: rotate(360deg); }
}

.me{
  position: relative;
  padding: 50px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  .record{
    position: absolute;
    left: calc(50% - 75px);
    width: 150px;
    height: 150px;
    border-radius: 75px;
    transition: all 3s;
    animation: rotation 3s linear infinite;
  }
  .avatar{
    opacity: 0.17;
  }
  .note{
    position: absolute;
    top: 15px;
    left: calc(50% - 130px);
    width: 260px;
    height: 220px;
  }
  .thimble{
    position: absolute;
    top: 45px;
    left: calc(50% - 10px);
    width: 150px;
    height: 150px;
    z-index: 1;
  }
  section{
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: 700;
    &:nth-child(2){
      margin-top: 200px;
    }
  }
}
</style>
