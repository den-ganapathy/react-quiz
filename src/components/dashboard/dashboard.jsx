import React from "react";
import { DashboardWrapper } from "./../../styles/dashboardStyles";
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Dashboard = (props) => {
  console.log(props);
  const correctCount = props.location.state.correctCount;
  return (
    <DashboardWrapper>
      <div>You have scored {correctCount} Marks</div>
      <LineChart
        width={400}
        height={400}
        data={{
          year: 2000,
          value: 123.22995467977901,
          beforeLaunch: 123.22995467977901,
        }}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
        <Line
          type="monotone"
          dataKey="beforeLaunch"
          stroke="#387908"
          yAxisId={1}
        />
      </LineChart>
    </DashboardWrapper>
  );
};

export default Dashboard;
