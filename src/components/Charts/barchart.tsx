"use client"
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sensor } from "@/types/sensor";

const DynamicChart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
    categoria: "temperature" | "pm2_5" | "PM10_ug_m3" | "PM1_ug_m3" | "PM100_ug_m3" | "co2_ppm" | "co2_ppb" | "humedad"
    data: Sensor[];
}

export default function AreaChartOrders({
    data, categoria
}: Props) {

    console.log(data);
    let dataFilter = data.map(item => {
        if (categoria === "temperature") {
            return {
                temperature: item.temperature,
                todate: item.todate
            }
        }
        if (categoria === "pm2_5") {
            return {
                temperature: item.pm2_5,
                todate: item.todate
            }
        }
        if (categoria === "PM10_ug_m3") {
            return {
                temperature: item.pm10,
                todate: item.todate
            }
        }
        if (categoria === "PM1_ug_m3") {
            return {
                temperature: item.pm1,
                todate: item.todate
            }
        }
        if (categoria === "PM100_ug_m3") {
            return {
                temperature: item.pm100,
                todate: item.todate
            }
        }
        if (categoria === "co2_ppm") {
            return {
                temperature: item.co2_ppm,
                todate: item.todate
            }
        }
        if (categoria === "co2_ppb") {
            return {
                temperature: item.co2_ppb,
                todate: item.todate
            }
        }
        if (categoria === "humedad") {
            return {
                temperature: item.humedad,
                todate: item.todate
            }
        }
    })

    return (
        <DynamicChart
            width={"100%"}
            height={"100%"}
            type="area"
            series={[
                {
                    name: categoria,
                    data: dataFilter.map(item => item?.temperature as number),
                },
            ]}
            options={{
                markers: {
                    size: 5,
                    hover: {
                        size: 9,
                    },
                },

                chart: {
                    type: "area",
                },
                colors: ['#000'],

                stroke: {
                    curve: "straight",
                },
                xaxis: {
                    type: "datetime",
                    categories: dataFilter.map(
                        (order) => order!.todate
                    ),
                },
                yaxis: {
                    labels: {
                        formatter(val, opts) {
                            return `${val}`;
                        },
                    },
                },
                tooltip: {
                    x: {
                        format: "dd/MM/yy HH:mm",
                    },
                },
            }}
        />
    );
}
