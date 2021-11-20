import React from "react";
import { DashboardWrapper } from "./../../styles/dashboardStyles";
import { useHistory } from "react-router-dom";
import { MdOpenInNew, MdOutlineHome } from "react-icons/md";

import {
  BarChart,
  Legend,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
const Dashboard = (props) => {
  const history = useHistory();
  console.log(props);
  const { answer, countUpdated, correctCount } = props?.location?.state;
  console.log(
    countUpdated.filter(Boolean).length,
    !countUpdated.filter(Boolean).length
  );
  // console.log(answer, countUpdated, correctCount);

  const handleClick = () => {
    history.push({ pathname: "/view-answers", answer: answer });
  };

  return (
    <DashboardWrapper>
      <div className="marks-scored">
        You have scored {countUpdated.filter(Boolean).length} Marks
      </div>

      <div className="graph-container">
        <div className="graph-item">
          {/* <ResponsiveContainer> */}
          <BarChart
            width={300}
            height={300}
            barGap={20}
            data={[
              {
                name: "",
                correct: countUpdated.filter(Boolean).length,
                wrong: !countUpdated.filter(Boolean).length,
                unanswered:
                  countUpdated.filter(Boolean).length -
                  !countUpdated.filter(Boolean).length,
              },
            ]}
          >
            <XAxis
              dataKey="name"
              tick={{ stroke: "#123456", strokeWidth: 0 }}
              tickLine={false}
              tickSize={10}
              fill="#123456"
              color="#123456"
            />
            <YAxis tick={{ stroke: "#123456" }} />
            <Tooltip />
            <Legend />
            <Bar
              label={{ position: "top" }}
              dataKey="correct"
              fill="#5BDA12"
              width={30}
              height={25}
              barSize={40}
            />
            <Bar
              label={{ position: "top" }}
              dataKey="wrong"
              fill="#F44840"
              width={30}
              height={25}
              barSize={40}
            />
            <Bar
              label={{ position: "top" }}
              dataKey="unanswered"
              fill="#EEB316"
              width={30}
              height={25}
              barSize={40}
            />
          </BarChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
      <div className="buttons-container">
        <button className="view-answer" onClick={() => handleClick()}>
          View Answers{" "}
          <span>
            <MdOpenInNew />
          </span>
        </button>
        <button className="back-home" onClick={() => history.push("/")}>
          <span>
            <MdOutlineHome />
          </span>
          Home{" "}
        </button>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
