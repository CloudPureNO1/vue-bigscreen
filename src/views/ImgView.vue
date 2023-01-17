<template>
    <div>
        <div>
            <el-button type="primary" @click="show">Show</el-button>
            <el-button type="" @click="toggleToolbar(true)">Show Toolbar</el-button>
            <el-button type="warning" @click="toggleToolbar(false)">Hide Toolbar</el-button>
        </div>
        <div>
            <el-row>
                <el-col :span="6" :offset="1">
                    <el-input v-model="num" placeholder="" style="width:100%;"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="view">View</el-button>
                </el-col>
            </el-row>
        </div>
        <div v-viewer="options" class="images clearfix">
            <img v-for="{source, thumbnail} in images" :key="source" :src="thumbnail" :data-source="source" class="image" :alt="source.split('?image=').pop()">
        </div>
        <p>
            To show the viewer, you can click these images too.
        </p>
    </div>
</template>

<script>

const sourceImages = []
const base = Math.floor(Math.random() * 60) + 10
for (let i = 0; i < 10; i++) {
    sourceImages.push({
        thumbnail: `https://picsum.photos/id/${base + i}/346/216`,
        source: `https://picsum.photos/id/${base + i}/1440/900`,
    })
}
export default {

    data () {
        return {
            options: {
                toolbar: true,
                url: 'data-source',
            },
            images: [...sourceImages].splice(0, 5),
            num: 0
        }
    },

    methods: {
        toggleToolbar (toolbar) {
            // this.options = Object.assign({}, this.options, {toolbar})
            this.options.toolbar = toolbar
        },

        show () {
            const viewer = this.$el.querySelector('.images').$viewer
            viewer.show()
        },
        view () {
            const viewer = this.$el.querySelector('.images').$viewer
            viewer.view(this.num)  //0开始
            //viewer.view(this.images.findIndex(item => item.thumbnail == file.url))
        }
    },
}
</script>

<style lang="less"  scoped>
.image {
    width: calc(20% - 10px);
    cursor: pointer;
    margin: 5px;
    display: inline-block;
}
</style>