<template>
    <div>
        <embed v-if="isShow" id="pdfUrl" src="data:application/pdf;base64,xxx" type="application/pdf" width="100%" height="1000"></body>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data () {
        return {
            isShow: false,
            pdfUrl: ''
        }
    },
    mounted () {
        let params = {
            tranNo: '20001',
            fileID: '330000100020220318154154084'
        }
        axios.post('http://127.0.0.1:9999/api/gateway/20001', params).then(res => {
            if (res.code !== '0') {
                this.isShow = false
                alert(res.message)
                return
            }
            this.isShow = true
            this.pdfUrl = res.data.base64
        }).catch(err => {
            this.isShow = false
            alert(err.message || err)
            console.log(err)
        })
    }
}

</script>
