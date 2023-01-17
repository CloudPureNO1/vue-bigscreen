<template>
    <div id="app">

        <!-- 高拍仪视频预览区 -->
        <div class="view-box">
            <el-card>
                <img class="view" src="http://127.0.0.1:38088/video=stream&camidx=0" alt="主摄像头">
            </el-card>
            <el-card>
                <img v-for="(photo,index) in listPhoto" :key="index" :src="photo" class="img-cls">
            </el-card>
            <el-card>
                <el-button type="primary" @click="takePhoto">拍照</el-button>
            </el-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            listPhoto: []
        }
    },
    methods: {

        takePhoto () {
            let params = {
                "filepath": "base64",
                "rotate": "0",
                "cutpage": "0",
                "camidx": "0",
                "watermark": {
                    "pos": "4",
                    "content": '', //空时默认为时间
                    "transparency": '5',//0-255
                    "fontsize": '32',
                    "color": 'magenta'
                }
            }
            axios.post("http://127.0.0.1:6543/video=grabimage", JSON.stringify(params)).then((res) => {
                console.log('>>>>', res)
                if (res.data.code !== '0') {
                    console.log('拍照失败：', res.data.message)
                    return
                }
                this.listPhoto.push(`data:image/jpg;base64,${res.data.photoBase64}`)
            }).catch(err => {
                console.log('拍照异常：', err)
            })
        }
    }

}
</script>
<style>
.view-box {
    width: 500px;
    height: 500px;
}

.view-box .view {
    width: 450px;
    height: 420px;
}

.img-cls {
    width: 450px;
    height: 420px;
}
</style>
