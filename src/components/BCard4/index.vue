<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p class="title">FLIP CARD</p>
        <p>Hover Me</p>
      </div>
      <div class="flip-card-back">
        <p class="title">BACK</p>
        <p>Leave Me</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* From Uiverse.io by joe-watson-sbf */ 
.flip-card {
    margin: 6px;
  background-color: transparent;
  width: 240px;
  height: 344px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 3px dashed #387A82;
  border-radius: 1rem;
}

.flip-card-front {
  /* background: linear-gradient(120deg, #387A82 60%, #387A82 88%,
  #387A82 40%, #216069 48%); */
  background: transparent;
  color: white;
}

.flip-card-back {
    /* background: linear-gradient(120deg, #216069 60%, #216069 88%,
    #216069 40%, #387A82 48%); */
    background: transparent;
  color: white;
  transform: rotateY(180deg);
}
</style>
