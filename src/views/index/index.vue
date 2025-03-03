<template>
  <div class="app-container" :style="{ backgroundImage: `url(${bg})` }">
    <div class="left">
      <Clock />
      <FrostedGlassCard>
        <template #header> MichStaBe Blog </template>
        <p>Hi, I'm MichStaBe, a FE developer<br /></p>
        <template #footer>
          <div class="footer-content"><ToolTip1 @change="onToolTipChange" /></div>
        </template>
      </FrostedGlassCard>

      <FrostedGlassCard>
        <template #header> Current Location: {{ state.city }} </template>
        <div class="weather-content">
          <img
            class="weather-icon animated-icon"
            :src="yintianSvg"
            alt="Weather Icon"
          />
          <span>{{ state.weatherTime }}°</span>
        </div>
      </FrostedGlassCard>
    </div>
   
    <div class="right">
      <FrostedGlassCard>
        <template #header> My Skills </template>
        <div class="skills-content">
          <Progress
            v-for="(skill, index) in skills"
            :key="index"
            :percent="skill.percent"
            width="90%"
            strokeWidth="10"
            strokeLinecap="round"
            :stroke-color="{
              '0%': 'transparent',
              '100%': 'green',
              direction: 'right'
            }"
          >
            <template #format>
              <span style="color: #fff">{{ skill.name }}</span>
            </template>
          </Progress>
        </div>
        <div class="btn-wrapper">
          <Button2 />
          <Button2 text="my" />
          <Button2 text="list" />
        </div>
      </FrostedGlassCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import FrostedGlassCard from '@/components/FrostedGlassCard/index.vue'
import { Progress } from 'vue-amazing-ui'
import Button1 from '@/components/Button1/index.vue'
import Clock from '@/components/clock/index.vue'
import Button2 from '@/components/Button2/index.vue'
import BCard4 from '@/components/BCard4/index.vue'
import BCard1 from '@/components/BCard1/index.vue'
// import ToolTip1 from '@/components/ToolTip1/index.vue' // Commented out due to error
import { pinyin } from 'pinyin-pro'
import qingtianSvg from '@/assets/imgs/index/weather/qingtian.svg'
import yintianSvg from '@/assets/imgs/index/weather/yintian.svg'
import yunSvg from '@/assets/imgs/index/weather/yun.svg'
import leiyuSvg from '@/assets/imgs/index/weather/leiyu.svg'
import xueSvg from '@/assets/imgs/index/weather/xue.svg'
import wuSvg from '@/assets/imgs/index/weather/wu.svg'
import fengSvg from '@/assets/imgs/index/weather/feng.svg'
import sandSvg from '@/assets/imgs/index/weather/sand.svg'

import shachenSvg from '@/assets/imgs/index/weather/shachen.svg'
import bingbaoSvg from '@/assets/imgs/index/weather/bingbao.svg'

import bg1 from '@/assets/imgs/index/index_bg.jpg'
import bg2 from '@/assets/imgs/index/index_bg2.jpg'
import bg3 from '@/assets/imgs/index/index_bg1.jpg'
           

const bg = ref(bg1)
const skills = ref([
  { name: 'HTML5', percent: 90, startColor: '#002427', endColor: '#468C93' },
  { name: 'CSS3', percent: 80, startColor: '#002427', endColor: '#468C93' },
  {
    name: 'JavaScript',
    percent: 60,
    startColor: '#002427',
    endColor: '#468C93'
  },
  {
    name: 'TypeScript',
    percent: 40,
    startColor: '#002427',
    endColor: '#468C93'
  },
  { name: 'Vue2.js', percent: 60, startColor: '#002427', endColor: '#468C93' },
  { name: 'Vue3.js', percent: 40, startColor: '#002427', endColor: '#468C93' },
  { name: 'React', percent: 40, startColor: '#002427', endColor: '#468C93' },
  { name: 'Node.js', percent: 60, startColor: '#002427', endColor: '#468C93' },
  { name: 'Webpack', percent: 40, startColor: '#002427', endColor: '#468C93' }
])

const state = reactive({
  weatherTime: '',
  city: '',
  weather: ''
})

const weather = async () => {
  const response1 = await axios.get(
    'https://restapi.amap.com/v3/ip?key=34aa8332e46f972bb6b52ffc62c5c619'
  )
  state.city = response1.data.city
  const weatherResponse = await axios.get(
    'https://restapi.amap.com/v3/weather/weatherInfo',
    {
      params: {
        city: response1.data.city,
        key: '34aa8332e46f972bb6b52ffc62c5c619',
        extensions: 'base'
      }
    }
  )

  if (
    weatherResponse.status === 200 &&
    Array.isArray(weatherResponse.data.lives) &&
    weatherResponse.data.lives.length
  ) {
    state.weatherTime = weatherResponse.data.lives[0].temperature
    state.weather = pinyin(weatherResponse.data.lives[0].weather, {
      toneType: 'none'
    })
  }
}
const onToolTipChange = (social) => {
 if(social === 'change') {
    changeBgc()
 }
}   

const changeBgc = () => {
  const bgImages = [bg1, bg2, bg3];
  let nextIndex = (bgImages.indexOf(bg.value) + 1) % bgImages.length;
  bg.value = bgImages[nextIndex];
      
  
}
onMounted(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(latitude, longitude)
    weather()
  })
})
</script>

<style lang="scss">
.app-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background: url('@/assets/imgs/index_bg2.jpg') no-repeat;
  background-size: cover;
  overflow: hidden;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 100%;
    .home-btn {
      margin: 4px;
      height: 3em;
      width: 8em;
      border: none;
      border-radius: 10em;
      background: #000;
      font-size: 17px;
      color: #ffffff;
      font-family: inherit;
      font-weight: 500;

      &:hover {
        animation: a 0.3s linear infinite both;
      }
    }
    .frosted-card {
      width: fit-content;
    }
  }
  .mid {
    display: flex;
    width: 40%;
    height: 100%;
    .mid-header {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .right {
    width: 60%;
    height: 98%;
    .frosted-card {
      height: 100%;
    }
    .btn-wrapper {
      margin-top: 16px;
      padding: 24px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
  }
  .skills-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
.weather-icon {
  width: 80px;
  height: 80px;
}
.animated-icon {
  animation: rotate 3s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-20px);
  }
}
@keyframes a {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
