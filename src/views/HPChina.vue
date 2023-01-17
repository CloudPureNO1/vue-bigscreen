<template>
    <div id="app">
        <el-button type="primary" @click="find_device">查找设备</el-button>
        <el-dialog title="拍照信息" :visible.sync="dialogFormVisible" :show-close="false" :before-close="beforeClose" width="700px">
            <div slot="title" style="height:1px;">拍照信息</div>
            <div class="box">
                <div class="column">
                    <el-card :body-style="elCardBodyStyle">
                        <div class="view-box">
                            <img v-show="isShowVideo" :src="video" :class="['view',isCameraActive?'camera-active':'']" alt="主摄像头" />
                        </div>
                    </el-card>
                </div>
                <div class="column">
                    <el-card :body-style="elCardBodyStyle">
                        <div class="img-box">
                            <img v-for="(photo,index) in listPhoto" :key="index" :src="photo" class="img-cls" alt="">
                        </div>
                    </el-card>
                </div>
            </div>

            <el-card :body-style="elCardBodyStyle">
                <el-form :model="deviceForm">
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="设备信息">
                                <el-select v-model="deviceForm.deviceId" placeholder="设备信息">
                                    <el-option v-for="(item,index) in deviceList" :key="item.dev_idx" :label="item.name" :value="item.dev_idx" style="width:65%;"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="设备信息">
                                <el-select v-model="deviceForm.resolutionId" placeholder="分辨率信息" style="width:60%;">
                                    <el-option v-for="(item,index) in resolutionList" :key="index" :label="getLabel(item)" :value="index"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="图片保存路径">
                                <el-input v-model="deviceForm.imagePath" placeholder="图片路径" style="width:50%;"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>

                </el-form>
            </el-card>
            <el-card :body-style="elCardBodyStyle">
                <el-button type="primary" @click="startPreview">打开视频</el-button>
                <el-button type="primary" @click="stopPreview">关闭视频</el-button>
                <el-button type="primary" @click="rotate">旋转</el-button>
                <el-button type="primary" @click="deskImage(true)">纠偏</el-button>
                <el-button type="primary" @click="getPic">拍照</el-button>
                <el-button type="primary" @click="handlerFinished">完成</el-button>
            </el-card>
        </el-dialog>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*/*'
axios.defaults.withCredentials = true


/* eslint-disable */
import $jquery from 'jquery'
export default {
    data () {
        return {
            urlPrefix: 'http://127.0.0.1:6543',
            deviceList: [],
            resolutionList: [],
            listPhoto: [],
            video: '',
            isShowVideo: false,
            timer: null,
            deviceForm: {
                deviceId: 0,
                resolutionId: 0,
                pixfmt: '',
                imagePath: '/tmp'
            },

            dialogFormVisible: false,
            elCardBodyStyle: { padding: '.0125rem' },
            isCameraActive: false
        }
    },
    watch: {
        deviceList: {
            handler (val) {
                this.resolutionList = this.deviceList[this.deviceForm.deviceId].resolution
            },
            deep: true
        },
        device: {
            handler (val) {
                this.resolutionList = this.deviceList[this.deviceForm.deviceId].resolution
            },
            deep: true
        }
    },
    methods: {

        //创建XMLHttpRequest 对象
        //参数：无
        //返回值：XMLHttpRequest 对象
        createXHR () {
            var XHR = [  //兼容不同浏览器和版本得创建函数数组
                function () { return new XMLHttpRequest() },
                function () { return new ActiveXObject("Msxml2.XMLHTTP") },
                function () { return new ActiveXObject("Msxml3.XMLHTTP") },
                function () { return new ActiveXObject("Microsoft.XMLHTTP") }
            ];
            var xhr = null;
            //尝试调用函数，如果成功则返回XMLHttpRequest对象，否则继续尝试
            for (var i = 0; i < XHR.length; i++) {
                try {
                    xhr = XHR[i]();
                } catch (e) {
                    continue  //如果发生异常，则继续下一个函数调用
                }
                break;  //如果成功，则中止循环
            }
            return xhr;  //返回对象实例
        },
        handlerFinished () {
            console.log('最终数据：', this.listPhoto)
            this.$message({
                type: 'success',
                message: '完成'
            })
            this.beforeClose()
        },
        getLabel (item) {
            return item.width + '*' + item.height
        },

        find_device () {
            this.getAllDisplayInfo().then(data => {
                console.log('设备信息：', data)
                this.deviceList = data
                this.dialogFormVisible = true
            }).catch(err => {
                console.log(err.message || err)
            })
        },
        getAllDisplayInfo () {

            return new Promise((resolve, reject) => {
                $jquery.ajax({
                    type: 'GET',
                    url: `${this.urlPrefix}/GetAllDisplayInfo`,
                    success: (result) => {
                        if (result.returnCode != 0) {
                            reject('高拍仪设备获取失败：' + res.data.returnMsg)
                            return
                        }
                        resolve(result.data)
                    },
                    error: (xhr, status, error) => {
                        reject(error.message || error)
                    }
                })
                /*   axios.get(`${this.urlPrefix}/GetAllDisplayInfo`).then((res) => {
                      if (res.data.returnCode != 0) {
                          reject('高拍仪设备获取失败：' + res.data.returnMsg)
                          return
                      }
                      resolve(res.data.data)
                  }).catch(err => {
                      reject(err.message || err)
                  }) */

                /*      try {
                         var xhr = that.createXHR()  //实例化XMLHttpRequest 对象
                         xhr.onreadystatechange = () => {  //绑定响应状态事件监听函数
                             if (xhr.readyState == 4) {  //监听readyState状态
                                 if (xhr.state == 200 || xhr.status == 0) {  //监听HTTP状态码
                                     let data = eval("(" + xhr.responseText + ")" + "()");  //用eval()把字符串转换为脚本
                                     if (data.returnCode != 0) {
                                         reject('高拍仪设备获取失败：' + res.data.returnMsg)
                                         return
                                     }
                                     resolve(data.data)
                                 } else {
                                     reject('高拍仪设备请求失败')
                                     return
                                 }
                             } else {
                                 reject('高拍仪设备请求失败')
                                 return
                             }
                         }
                         xhr.open("GET", `${this.urlPrefix}/GetAllDisplayInfo`, false)
                         xhr.send(null)  //发送请求
                     } catch (err) {
                         reject(err.message || err)
                     } */

            })
        },
        startPreview () {
            let that = this
            if (window.current_dev != null) {
                this.stopPreview()
            }
            axios.get(`${this.urlPrefix}/StartPreview?dev_idx=${this.deviceForm.deviceId}&res_id=${this.deviceForm.resolutionId}&pixfmt=pixfmt`).then((res) => {
                if (res.data.returnCode != 0) {
                    console.log('设备影像打开失败：' + res.data.returnMsg)
                    return
                }
                this.dialogFormVisible = true
                window.current_dev = that.deviceForm.deviceId
                //启动定时器
                that.timer = setInterval(() => {
                    that.getFrame()
                }, 3000)//对于配置差的电脑可降低刷新频率
            }).catch(err => {
                console.log(err.message || err)
            })
        },
        getFrame () {
            let that = this
            axios.get(`${this.urlPrefix}/getFrame`).then((res) => {
                if (res.data.returnCode == 0) {
                    that.video = `data:image/jpg;base64,${res.data.data.img}`
                    this.isShowVideo = true
                    this.isCameraActive = true
                }
            }).catch(err => {
                clearInterval(this.timer)
                console.log(err.message || err)
            })
        },
        beforeClose () {
            this.dialogFormVisible = false
            this.isCameraActive = false
            this.stopPreview()
        },
        stopPreview () {
            if (window.current_dev == null) {
                return
            }
            axios.get(`${this.urlPrefix}/StopPreview?dev_idx=${window.current_dev}`).then((res) => {

                if (res.data.returnCode != 0) {
                    console.log(res.data.returnMsg)
                    return
                }

                window.current_dev = null
                //关闭定时器
                clearInterval(this.timer)
                this.isShowVideo = false
            }).catch(err => {
                console.log(err.message || err)
            })
        },
        getPic () {
            axios.get(`${this.urlPrefix}/getPic?savepath=${this.deviceForm.imagePath}&quality=80`).then((res) => {
                if (res.data.returnCode != 0) {
                    console.log(res.data.returnMsg)
                    return
                }
                this.listPhoto.push(`data:image/jpg;base64,${res.data.data.img}`)
            }).catch(err => {
                console.log(err.message || err)
            })
        },
        rotate () {
            axios.get(`${this.urlPrefix}/getRotate`).then((res) => {
                if (res.data.returnCode != 0) {
                    console.log(res.data.returnMsg)
                    return
                }
                let newRotate = parseInt(res.data.data) + 1
                newRotate = newRotate > 3 ? 0 : newRotate
                axios.get(`${this.urlPrefix}/Rotate?count=${newRotate}`).then(res => {
                    if (res.data.returnCode != 0) {
                        console.log(res.data.returnMsg)
                    }
                })
            }).catch(err => {
                console.log(err.message || err)
            })

        },
        deskImage (enable) {
            axios.get(`${this.urlPrefix}/EnableDeskImage?enable=${enable}`).then((res) => {
                if (res.data.returnCode != 0) {
                    console.log(res.data.returnMsg)
                    return
                }
            }).catch(err => {
                console.log(err.message || err)
            })
        }

    }
}

</script>
<style>
.view-box {
    width: 100%;
    height: 565px;
    box-sizing: border-box;
    overflow: auto;
    background-color: black;
}

.camera-active {
    background-color: black;
}
.view-box .view {
    width: 100%;
    height: 560px;
}

.img-box {
    height: 560px;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
}
.img-cls {
    width: 130px;
    height: 130px;
}
.box {
    display: flex;
    box-sizing: border-box;
}

.column {
    flex: 20;
}

.column:nth-child(2) {
    flex: 4;
    padding-left: 10px;
}
</style>
