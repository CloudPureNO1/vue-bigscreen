<template>
    <div>
        <!--         <vue-seamless-scroll :data="listData" :classOption="classOption" class="warp" ref="seamlessScroll">
            <ul class="item">
                <li v-for="(item, index) in listData" :key="index">
                    <span class="title" v-text="item.title"></span>
                    <span class="date" v-text="item.date"></span>
                </li>
            </ul>
        </vue-seamless-scroll> -->
        <el-table size="mini" :data="data" stripe border highlight-current-row :cell-style="setCellStyle" :header-cell-style="setHeaderCellStyle">
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="地址" prop="address"></el-table-column>
            <el-table-column label="时间" prop="date"></el-table-column>
            <div slot="empty" style="height:0;"> </div>
        </el-table>
        <vue-seamless-scroll :data="tableData" :classOption="classOptionTb" class="warp-table" ref="seamlessScrollTb">
            <el-table :data="tableData" size="mini" stripe border highlight-current-row :show-header="false" :cell-style="setCellStyle" :header-cell-style="setHeaderCellStyle">
                <el-table-column label="姓名" prop="name"></el-table-column>
                <el-table-column label="地址" prop="address"></el-table-column>
                <el-table-column label="时间" prop="date"></el-table-column>
            </el-table>
        </vue-seamless-scroll>

    </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
    name: 'Example10Basic',
    components: {
        vueSeamlessScroll
    },
    data () {
        return {

            listData: [{
                'title': '无缝滚动第一行无缝滚动第一行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第二行无缝滚动第二行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第三行无缝滚动第三行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第四行无缝滚动第四行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第五行无缝滚动第五行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第六行无缝滚动第六行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第七行无缝滚动第七行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第八行无缝滚动第八行',
                'date': '2017-12-16'
            }, {
                'title': '无缝滚动第九行无缝滚动第九行',
                'date': '2017-12-16'
            }],
            classOption: {
                isSingleRemUnit: true,
                singleHeight: 0.375
            },
            classOptionTb: {
                isSingleRemUnit: true,
                singleHeight: 0.5,
                waitTime: 500
            },
            data: [],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1520 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1521 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1522 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1523 弄'
            }, {
                date: '2016-05-09',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1524 弄'
            }

            ]

        }
    },
    methods: {
        setCellStyle ({ row, column, rowIndex, columnIndex }) {
            let obj = {
                height: '.5rem !important',
                lineHeight: '1 !important'
            }
            return obj
        },
        setHeaderCellStyle ({ row, column, rowIndex, columnIndex }) {
            let obj = {
                height: '.5rem !important',
                lineHeight: '1 !important'
            }
            return obj
        }
    }
    /*     mounted () {
            setTimeout(() => {
                this.listData[0] = {
                    title: '我的第一条的title，我被更新了。',
                    date: 'date1'
                }
                this.listData[1] = {
                    title: '我的第二条的title，我被更新了。',
                    date: 'date2'
                }
                this.listData[2] = {
                    title: '我的第三条的title，我被更新了。',
                    date: 'date3'
                }
                this.listData[3] = {
                    title: '我的第四条的title，我被更新了。',
                    date: 'date4'
                }
                this.listData.push()
                // listData length无变化，仅仅是属性变更，手动调用下组件内部的reset方法
                this.$refs.seamlessScroll.reset()
            }, 2000);
        }, */
}
</script>

<style lang="less" scoped>
.warp {
    height: 270px;
    width: auto;
    margin: 0 auto;
    overflow: hidden;
    ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        li,
        a {
            display: block;
            height: 0.375rem;
            line-height: 0.375rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.1875rem;
        }
    }
}

.warp-table {
    height: 270px;
    width: auto;
    margin: 0 auto;
    overflow: hidden;
    ul {
        list-style: none;
        padding: 0;
        margin: 0 auto;
        li,
        a {
            display: block;
            height: 0.306667rem;
            line-height: 0.306667rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.1875rem;
        }
    }
}
/deep/ .el-table__empty-block {
    min-height: 0 !important;
}
</style>
<style >
</style>
