/* eslint-disable sort-imports */
import { Component, createElement } from "react";
import { Cell, Pie, PieChart } from "recharts";

export class FlatPieChart extends Component {
    render() {
        const { activeBarColor, inActiveBarColor, mainTextColor, subTextColor, percentage, subText } = this.props;
        if (activeBarColor.status === "available" && percentage.status === "available") {
            const percentageValue = parseInt(percentage.value);
            return (
                <div className="widget-flatpie">
                    <PieChart width={300} height={200}>
                        <text fontSize={35} x={130} y={85} dy={20} textAnchor="middle" fill={mainTextColor.value}>
                            {percentage.value}%
                        </text>
                        <text fontSize={18} x={125} y={105} dy={20} textAnchor="middle" fill={subTextColor.value}>
                            {subText.value}
                        </text>
                        <Pie
                            data={[
                                { name: "percentage", value: percentageValue },
                                { name: "empty", value: 100 - percentageValue }
                            ]}
                            cx={120}
                            cy={100}
                            innerRadius={70}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"
                        >
                            <Cell key={`cell-${0}`} fill={activeBarColor.value} />
                            <Cell key={`cell-${1}`} fill={inActiveBarColor.value} />
                        </Pie>
                    </PieChart>
                </div>
            );
        } else {
            return "loading ...";
        }
    }
}
