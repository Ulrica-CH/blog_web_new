<template>
  <ul class="example-2">
    <li class="icon-content" v-for="social in socials" :key="social.name">
      <a
      @click="onSocialClick(social)"
        
        :aria-label="social.name"
        target="_blank"
        :data-social="social.tips.toLowerCase()"
      >
        <div class="filled"></div>

        <img class="social-icon" :src="social.icon" alt="social.name" />
      </a>
      <div class="tooltip">{{ social.name }}</div>
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive } from 'vue'

import weichatSvg from '@/assets/imgs/index/weichat.svg'
import qqSvg from '@/assets/imgs/index/QQ.svg'
import githubtSvg from '@/assets/imgs/index/github.svg'

import changeSvg from '@/assets/imgs/index/change.svg'
import { defineEmits } from 'vue'

const emit = defineEmits(['change'])

const socials = ref([
  {
    name: 'MichstaBe_XY_',
    tips: '微信',
    link: '',
    icon: weichatSvg
  },
  {
    name: '210871791',
    tips: 'qq',
    link: '',
    icon: qqSvg
  },
  {
    name: 'GitHub',
    tips: 'github',
    link: 'https://dribbble.com/',
    icon: githubtSvg
  },
  {
    name: 'change',
    tips: 'switch',
    link: '',
    icon: changeSvg
  }
])
const onSocialClick = (social) => {
  console.log(social.name)

  if(social.name === 'change') {
   emit('change',social.name)
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.example-2 {
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-content {
    margin: 0 10px;
    position: relative;

    .tooltip {
      position: absolute;
      top: -30px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      padding: 6px 10px;
      border-radius: 15px;
      opacity: 0;
      visibility: hidden;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    &:hover .tooltip {
      opacity: 1;
      visibility: visible;
      top: -50px;
    }

    a {
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 20%;
      color: #4d4d4d;
      //   background-color: #ffff;
      background: transparent;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 50%);
        color: white;

        .filled {
          height: 100%;
        }
      }

      .social-icon {
        position: relative;
        z-index: 1;
        width: 30px;
        height: 30px;
      }

      .filled {
        position: absolute;
        top: auto;
        bottom: 0;
        left: 0;
        width: 200%;
        height: 0;
        background-color: #000;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  a[data-social='微信'] .filled {
    background-color: transparent;
  }
  a[data-social='微信'] ~ .tooltip {
    background-color: #24b139;
  }
  a[data-social='qq'] .filled {
    background-color: transparent;
  }
  a[data-social='qq'] ~ .tooltip {
    background-color: #5d98c7;
  }
  a[data-social='github'] .filled {
    background-color: transparent;
  }
  a[data-social='github'] ~ .tooltip {
    background-color: #000;
  }
  a[data-social='switch'] .filled {
    background-color: transparent;
  }
  a[data-social='switch'] ~ .tooltip {
    background-color: #F17E56;
  }
}
</style>
