<script>
    import { onMount } from "svelte";
    import EchartCompoent from "../../components/EchartCompoent.svelte";
    import FlowEchartCompoent from "../../components/FlowEchartCompoent.svelte";
    let itTitle = "IT Lanaguage List";
    let itdata = [
        { value: 16.33, name: "Python" },
        { value: 9.98, name: "C" },
        { value: 9.53, name: "C++" },
        { value: 8.69, name: "Java" },
        { value: 6.49, name: "C#" },
        { value: 3.01, name: "Javascript" },
        { value: 2.01, name: "Visual Basic" },
        { value: 1.6, name: "Go" },
        { value: 1.44, name: "SQL" },
        { value: 1.24, name: "Fortran" },
        { value: 1.24, name: "DOP" },
        { value: 1.07, name: "Assembly Lnaguage" },
        { value: 1.06, name: "Ruby" },
        { value: 1.06, name: "Matlab" },
        { value: 1.01, name: "Swift" },
    ];
    let timeRefresh = 2000;
    let flowTitle = "7-day capacity statistics";
    let sevenFlowData = {
        ipv4: [
            { day: "2024-07-01", flow: 26314 },
            { day: "2024-07-02", flow: 36314 },
            { day: "2024-07-03", flow: 46314 },
            { day: "2024-07-04", flow: 16314 },
            { day: "2024-07-05", flow: 66314 },
            { day: "2024-07-06", flow: 56314 },
            { day: "2024-07-07", flow: 76314 },
        ],
        ipv6: [
            { day: "2024-07-01", flow: 36524 },
            { day: "2024-07-02", flow: 26314 },
            { day: "2024-07-03", flow: 36314 },
            { day: "2024-07-04", flow: 56314 },
            { day: "2024-07-05", flow: 66314 },
            { day: "2024-07-06", flow: 86314 },
            { day: "2024-07-07", flow: 76314 },
        ],
    };
    let flowTimeRefresh = 5000;
    async function initSevenFlowData() {
        try {
            const response = await fetch("http://localhost:8080/flow");
            if (response.code == 200) {
                //udpate new data to flow data,otherwise use default data
                sevenFlowData = await response.data.json;
            }
        } catch (error) {
            // use default data
            console.log(error);
        }
        return sevenFlowData;
    }
    async function initITLanaguageListData() {
        try {
            const response = await fetch("http://localhost:8080/lanaguage");
            if (response.code == 200) {
                //udpate new data to flow data,otherwise use default data
                itdata = await response.data.json;
            }
        } catch (error) {
            // use default data
            console.log(error);
        }
        return itdata;
    }
    onMount( () => {
       initMount();
    });
   function initMount(){
        console.log("=====");
        // init sevenFlowData
        initSevenFlowData();
        // init IT Language List Data
        initITLanaguageListData();
    }
</script>

<div class="flex flex-row" data-testid="echart-container">
    <div data-testid="echart-container-1">
        <EchartCompoent title={itTitle} data={itdata} refresh={timeRefresh} />
    </div>
    <div data-testid="echart-container-2">
        <FlowEchartCompoent
            title={flowTitle}
            data={sevenFlowData}
            refresh={flowTimeRefresh}
        />
    </div>
</div>
