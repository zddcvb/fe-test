<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";

    export let title;
    export let data;
    export let refresh;
    let container;
    let map;
    let options = {
        title: {
            text: title + " (MB)",
            top: 10,
            bottom: 10,
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985",
                },
            },
        },
        legend: {
            data: ["IPv4", "IPv6"],
            top: 10,
            bottom: 10,
        },
        toolbox: {
            // feature: {
            //     saveAsImage: {},
            // },
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                nameLocation: "center",
                axisLabel: {
                    rotate: 20,
                    margin: 20,
                },
                nameTextStyle: {
                    fontStyle: "oblique",
                    fontSize: 10,
                },
                data: [],
            },
        ],
        yAxis: [
            {
                type: "value",
            },
        ],

        series: [
            {
                name: "IPv4",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: {
                    focus: "series",
                },
                data: [],
                smooth: true,
            },
            {
                name: "IPv6",
                type: "line",
                stack: "Total",
                areaStyle: {},
                emphasis: {
                    focus: "series",
                },
                data: [],
                smooth: true,
            },
        ],
    };
    let sevenFlowData = data;
    function initData() {
        //build data
        let series = options.series;
        for (var i = 0; i < sevenFlowData.ipv4.length; i++) {
            var flowData = sevenFlowData.ipv4[i];
            options.xAxis[0].data[i] = flowData.day;
            series[0].data[i] = (Math.random() * 20000 + 1).toFixed(0);
        }
        for (var i = 0; i < sevenFlowData.ipv6.length; i++) {
            var flowData = sevenFlowData.ipv6[i];
            series[1].data[i] = (Math.random() * 20000 + 1).toFixed(0);
        }
    }
    onMount(() => {
        map = echarts.init(container);
        updateMap();
    });
    function updateMap() {
        setInterval(() => {
            initData();
            map.setOption(options);
        }, refresh);
    }
</script>

<div class="chart" bind:this={container} style="width: 700px;height:400px;">{title}
</div>
