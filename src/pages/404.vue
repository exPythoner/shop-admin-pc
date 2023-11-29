<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const timer = ref(0);
const jumpTime = ref(100);


const timeChange = () => {
  let timer = null;
  timer = setInterval(() => {
    if (jumpTime.value > 0) {
      jumpTime.value--;
    } else {
      // 指定返回的路径
      router.push("/");
      clearInterval(timer);
    }
  }, 1000);
};

onMounted(() => {
  timeChange();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

</script>

<template>
    <h2>{{ $route.params }}}</h2>
  <div class="oops">
    <div class="left-err-num">
      <span class="err-num">404</span>
    </div>
    <div class="right-info">
      <p class="tip-text">抱歉!</p>
      <p class="tip-desc">当前页面不存在...</p>
      <p class="tip-msg">请检查您输入的网址是否正确，或点击下面的按钮返回首页。</p>
      <a href="/">
        <span>({{ jumpTime }}s)&nbsp; 返回首页 </span>
      </a>
    </div>
  </div>


</template>

<style lang="less" scoped>

body {
  background: #f6f8f9;
}

.oops {
  display: flex;
  position: relative;
  width: 800px;
  height: 300px;
//   background-color: #fff;
  margin-left: 25%;
  margin-top: 15%;
  justify-content: space-between;
}

.oops .right-info {
  .tip-text {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    color: #409eff;
  }
  .tip-desc {
    margin: 10px 0;
    font-size: 14px;
    font-weight: 900;
    color: #222;
  }
  .tip-msg {
    font-size: 12px;
    color: #999;
    font-weight: 400;
  }
  a {
    display: block;
    margin-top: 10px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50px;
    font-size: 12px;
    padding: 0 5px;
    background-color: #409eff;
    color: #fff;
  }
}
.oops .left-err-num {
  font-size: 100px;
  font-weight: bold;
  line-height: 40px;
  color: #999;
  text-shadow: 0 5px 30px rgba(0 0 0 / 0.15);
  transform: translate3d(0, -4px, 0);
}
</style>
