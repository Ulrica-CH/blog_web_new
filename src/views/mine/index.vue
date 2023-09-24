<script setup lang="ts">

</script>

<template>
    <div class="mine">
        问题记录先放到这吧<br>
        1、props 结构赋值响应式问题<br>
        2、useAttrs 类型问题<br>
        3、defineProps放到自定义hooks问题（2023.9.24解决）<br>
        4、左侧统计数据不显示问题（2023.9.24解决，watch问题）<br>
        5、目前来看去写js的时候用的是React的useState思想，页面的逻辑也抽离为hooks，但是有一个数组返回类型的问题<br>
        6、关于css，目前来看有点混乱，应该都是定义好变量在引入，目前是有scss的变量，css的变量，后续都要改为css原生变量（这个周末要重构一下）（2023.9.23解决，全局css变量）<br>
        7、关于defineProps,defineEmits等这些宏定义不能拆到自定义hooks里，要在.vue里定义，并通过传值给hooks
        8、router-view是可以接受传值及时间回调的（以前没试过）<br>
    </div>
</template>

<style scoped lang="scss">
.mine{
    
}
</style>