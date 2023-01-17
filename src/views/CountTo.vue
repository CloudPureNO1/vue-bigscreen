<template>
    <div class="main-box">
        <countTo :startVal='startVal' :endVal='endVal' :duration='duration' :prefix="prefix" class="num"></countTo>
    </div>

</template>

<script>
import countTo from 'vue-count-to';
export default {
    components: { countTo },
    data () {
        return {
            startVal: 0,
            endVal: 2017,
            duration: 3000,
            prefix: '￥'
        }
    }
}
</script>
<style scoped lang="less">
// https://github.com/zhrf/vue-countTo
@font-face {
    font-family: electronicFont;
    src: url('../assets/font/DS-Digital.ttf');
}
.main-box {
    display: flex;
    align-self: center;
    font-size: 1.25rem;
    color: #2645cf;
    font-family: electronicFont;
}
</style>