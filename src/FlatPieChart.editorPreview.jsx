import { Component, createElement } from "react";
import { FlatPieChart } from "./components/FlatPieChart";

export class preview extends Component {
    render() {
        return <FlatPieChart sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss() {
    return require("./ui/FlatPieChart.css");
}
