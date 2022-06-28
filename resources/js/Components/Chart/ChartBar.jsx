import React, { useState } from "react";
import Chart from "react-apexcharts";

function ChartBar(props) {
    let state = {
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
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
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                ],
            },
            yaxis: {
                title: {
                    text: "$ (thousands)",
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    },
                },
            },
        },

        series: [
            {
                name: "Deposito",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: "Lucro",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: "Retirada",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
    };

    return (
        <>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
            />
        </>
    );
}

export default ChartBar;
