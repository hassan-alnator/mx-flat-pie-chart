import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { FlatPieChart } from "./components/FlatPieChart";
import "./ui/FlatPieChart.css";

class Chart extends Component {
    render() {
        return <FlatPieChart {...this.props} />;
    }
}

export default hot(Chart);
