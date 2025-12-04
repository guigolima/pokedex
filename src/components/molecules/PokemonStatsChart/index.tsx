import React, { useRef, useLayoutEffect } from "react";

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from "@amcharts/amcharts5/radar";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { typeColors } from "../../../constants/typeColors";
import { PokemonStatsChartProps } from "./types";

const PokemonStatsChart: React.FC<PokemonStatsChartProps> = ({
  stats,
  pokemonType = "normal",
}) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    if (!chartRef.current || !stats || stats.length === 0) return;

    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        radius: am5.percent(80),
        innerRadius: am5.percent(30),
      })
    );

    let xRenderer = am5radar.AxisRendererCircular.new(root, {
      minGridDistance: 20,
    });

    xRenderer.labels.template.setAll({
      radius: 15,
      textAlign: "center",
      fontSize: 12,
      fontWeight: "600",
      fill: am5.color(0x666666),
    });

    xRenderer.grid.template.setAll({
      strokeOpacity: 0.1,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "stat",
        renderer: xRenderer,
      })
    );

    let yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 30,
    });

    yRenderer.labels.template.setAll({
      fontSize: 10,
      fill: am5.color(0x999999),
    });

    yRenderer.grid.template.setAll({
      strokeOpacity: 0.1,
    });

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
        min: 0,
        max: 150,
        strictMinMax: true,
      })
    );

    const typeColor =
      typeColors[pokemonType.toLowerCase()] || typeColors.normal;
    const typeColorObj = am5.color(typeColor);

    let series = chart.series.push(
      am5radar.RadarLineSeries.new(root, {
        name: "Stats",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "stat",
        fill: typeColorObj,
        stroke: typeColorObj,
        tooltip: am5.Tooltip.new(root, {
          labelText: "{stat}: {value}",
        }),
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 3,
      strokeOpacity: 0.9,
    });

    series.fills.template.setAll({
      fillOpacity: 0.25,
      visible: true,
    });

    series.bullets.push(function () {
      let circle = am5.Circle.new(root, {
        radius: 6,
        fill: typeColorObj,
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });
      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    const chartData = stats.map((stat) => {
      const statName = stat.stat.name;
      const displayName =
        statName === "special-attack"
          ? "Sp. Atk"
          : statName === "special-defense"
          ? "Sp. Def"
          : statName.charAt(0).toUpperCase() + statName.slice(1);

      return {
        stat: displayName,
        value: stat.base_stat,
      };
    });

    series.data.setAll(chartData);
    xAxis.data.setAll(chartData);

    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [stats, pokemonType]);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "350px", marginBottom: "20px" }}
    ></div>
  );
};

export default PokemonStatsChart;
