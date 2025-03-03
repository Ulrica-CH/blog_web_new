<template>
  <div class="card">
    <div class="card-content">
      <slot>
        <h2>CARD</h2>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Component logic can be added here if needed
</script>

<style lang="scss" scoped>
/* From Uiverse.io by bhaveshxrawat */
.card {
  color: #fff;
  margin: 8px;
  width: 440px; // Increased from 190px
  min-height: 360px; // Increased from 254px
  background: transparent;

  position: relative;
  display: flex;
  place-content: center;
  place-items: center;
  overflow: hidden;
  border-radius: 25px; // Slightly increased to maintain proportion
  .card-content {
    z-index: 10;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &::before {
    content: '';
    position: absolute;
    width: 205px; // Increased from 100px to maintain proportion
    background-image: linear-gradient(180deg, #72b5bd, #00242c);

    height: 160%;
    animation: rotBGimg 3s linear infinite;
    // transition: all 2s linear;
  }

  &::after {
    content: '';
    position: absolute;
    // background: #387A82;
    background: linear-gradient(0deg, #387A82 0%, #0E4C52 100%, #0E4C52 100%);
    inset: 6px; // Slightly increased from 5px
    border-radius: 19px; // Slightly increased from 15px
  }
}

@keyframes rotBGimg {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
