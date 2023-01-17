<template>
    <div>
        <el-card title="数字">
            <el-row>
                <el-col :offset="1" span="11">
                    <num-scroll></num-scroll>
                </el-col>
                <el-col :offset="1" span="11">
                    <count-to></count-to>
                </el-col>
            </el-row>
        </el-card>
        <el-card title="列表">
            <list-scroll></list-scroll>
        </el-card>

        <el-card title="图片">
            <img-view></img-view>
        </el-card>
    </div>
</template>
<script>
import NumScroll from './NumScroll.vue'
import ListScroll from './ListScroll.vue'
import CountTo from './CountTo.vue'
import ImgView from './ImgView.vue'

export default {
    components: {
        NumScroll,
        ListScroll,
        CountTo,
        ImgView
    },
    data () {
        return {

        }
    }
}
</script>
