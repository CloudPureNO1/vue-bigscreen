<template>
    <div class="main-data-views">
        <div class="header">
            <h1>残疾人安置数据</h1>
        </div>
        <div class="main-box">

            <div class="column">
                <div class="panel bar">
                    <div class="title">
                        <h2>
                            柱状图
                            <a class="a-active" href="javascript:;">2020</a>
                            <a href="javascript:;">2021</a>
                        </h2>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>

                <div class="panel line">
                    <div class="title">
                        <div class="title-content">
                            <div class="item"><span>折线图</span></div>
                            <div class="item btn"><span>2020</span></div>
                            <div class="item btn"><span>2021</span></div>
                        </div>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie">
                    <div class="title">
                        <h2>
                            饼图
                            <a class="a-active" href="javascript:;">2020</a>
                            <a href="javascript:;">2021</a>
                        </h2>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>
            </div>
            <div class="column">
                <div class="panel-num">
                    <div class="panel-num-header">
                        <ul>
                            <li>98777452</li>
                            <li>123455</li>
                        </ul>
                    </div>
                    <div class="panel-num-body">
                        <ul>
                            <li>申报人数</li>
                            <li>核定人数</li>
                        </ul>
                    </div>
                </div>
                <div class="panel-map">
                    <div class="map-bg1"></div>
                    <div class="map-bg2"></div>
                    <div class="map-bg3"></div>
                    <div class="content"></div>
                </div>
            </div>
            <div class="column">
                <div class="panel bar2">
                    <div class="title">
                        <h2>
                            柱状图
                            <a class="a-active" href="javascript:;">2020</a>
                            <a href="javascript:;">2021</a>
                        </h2>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel line2">
                    <div class="title">
                        <h2>
                            折线图
                            <a class="a-active" href="javascript:;">2020</a>
                            <a href="javascript:;">2021</a>
                        </h2>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>
                <div class="panel pie2">
                    <div class="title">
                        <h2>
                            饼图
                            <a class="a-active" href="javascript:;">2020</a>
                            <a href="javascript:;">2021</a>
                        </h2>
                    </div>
                    <div class="content"></div>
                    <div class="panel-footer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./js/DataViews.js"></script>

<style scoped>
@import '../assets/css/dataView.css'; /* 这个分号一定要写，要不会报错 */
</style>