<script setup lang="ts">
const getBg = (url: string) => `url(${url})`
const { data } = defineProps<{ data: any }>()

const emit = defineEmits<{ onBtnClick: [] }>()
</script>
<template>
  <div class="common-bg" :style="{ backgroundImage: getBg(data.imgUrl) }">
    <div class="title">
      {{ data.title }}
    </div>
    <div class="desc">{{ data.desc }}</div>
    <div v-if="data.showBtn" class="apply" @click="emit('onBtnClick')">
      {{ data.apply }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-bg {
  position: relative;
  padding: 20px;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: var(--border-radius);
  color: #fff;

  .title {
    font-size: 24px;
  }
  .desc {
    position: absolute;
    left: 20px;
    bottom: 20px;
    padding: 10px;
    font-size: 18px;
    backdrop-filter: saturate(180%) blur(20px);
    border-radius: var(--border-radius);
  }
  .apply {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 18px;
    padding: 10px 14px;
    background-color: rgba(120, 120, 120, 0.3);
    backdrop-filter: saturate(180%) blur(20px);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
}
@media screen and (max-width: 768px) {
  .common-bg {
    height: 140px;
    font-size: 16px;
    .title {
      font-size: 18px;
    }
    .desc{
      font-size: 16px;
    }
    .apply{
      font-size: 16px;
    }
  }
}
</style>
