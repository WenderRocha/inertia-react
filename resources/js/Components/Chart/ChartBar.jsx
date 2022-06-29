import Chart from "react-apexcharts";

function ChartBar(props) {
    const currency = function (number) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
        }).format(number);
    };

    let state = {
        options: {
            theme: {
                mode: "light",
                palette: "palette2",
            },

            chart: {
                type: "bar",
                height: 350,
                background: "transparent",
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "80%",
                    endingShape: "rounded",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Fev",
                    "Mar",
                    "Abr",
                    "Mai",
                    "Jun",
                    "Jul",
                    "Ago",
                    "Set",
                    "Out",
                    "Nov",
                    "Dez",
                ],
            },

            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return currency(val) + " Reais";
                    },
                },
            },
        },

        series: [
            {
                name: "Deposito",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 63, 60, 66],
            },
            {
                name: "Receita",
                data: [36, 85, 101, 98, 87, 105, 91, 114, 94, 91, 114, 94],
            },
            {
                name: "Lucro",
                data: [12, 41, 36, 26, 45, 48, 52, 53, 41, 52, 53, 41],
            },
        ],
    };

    return (
        <>
            <Chart options={state.options} series={state.series} type="bar" />
        </>
    );
}

export default ChartBar;
