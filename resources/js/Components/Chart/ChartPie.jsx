import Chart from "react-apexcharts";

function ChartPie() {
    let state = {
        series: [30, 1, 69],

        options: {
            theme: {
                mode: "light",
                palette: "palette2",
            },

            chart: {
                height: 300,
                type: "pie",
                background: "transparent",
            },
            labels: ["Derrotas", "Empates", "Vitórias"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    };

    return (
        <>
            <Chart options={state.options} series={state.series} type="pie" />
        </>
    );
}

export default ChartPie;
