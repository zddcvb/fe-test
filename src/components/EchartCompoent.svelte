<script>
    import * as echarts from "echarts";
    import { onDestroy, onMount } from "svelte";

    export let title;
    export let data;
    export let refresh;
    let container;
    let map;
    let options = {
        title: {
            text: title,
            left: "center",
            top: 20,
            textStyle: {
                color: "#000",
            },
        },
        tooltip: {
            trigger: "item",
        },
        legend: {
            type: "scroll",
            orient: "vertical",
            left: 10,
            top: 10,
            bottom: 10,
        },
        series: [
            {
                type: "pie",
                radius: "55%",
                center: ["50%", "50%"],
                data: data.sort(function (a, b) {
                    return a.value - b.value;
                }),
                // roseType: "radius",
                labelLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.3)",
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20,
                },
                animationType: "scale",
                animationEasing: "elasticOut",
                animationDelay: function () {
                    return Math.random() * 200;
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    onMount(() => {
        map = echarts.init(container);
        setInterval(() => {
            updateMap();
        }, refresh);
    });

    onDestroy(() => {
        // map && map.dispose();
    });
    //1s update chart
    function updateMap() {
        let datas = options.series[0].data;
        for (let index = 0; index < datas.length; index++) {
            const element = datas[index];
            element.value = (Math.random() * 25 + 1).toFixed(2);
        }
        options.series[0].data = datas;
        map.setOption(options);
    }
</script>

<div class="chart" bind:this={container} style="width: 600px;height:400px;" data-testid="chartId"> 
    {title}
</div>
