<template>
  <div class="glass-card">
    <div class="card-content">
      <slot>
        <h2>Gradient Glass Card</h2>
        <p>This card complements the beautiful gradient background.</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Component logic can be added here if needed
</script>

<style lang="scss" scoped>
.glass-card {
  margin: 8px;
  width: 300px;
  height: 200px;
  //   background: linear-gradient(
  //     135deg,
  //     rgba(36, 0, 0, 0.3) 0%,
  //     rgba(9, 90, 121, 0.3) 100%
  //   );
  background: transparent;
  border-radius: 16px;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(5px);
    box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.5);
    background: linear-gradient(
      135deg,
      rgba(36, 0, 0, 0.4) 0%,
      rgba(9, 90, 121, 0.4) 100%
    );
  }

  .card-content {
    color: #ffffff;
    text-align: center;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
