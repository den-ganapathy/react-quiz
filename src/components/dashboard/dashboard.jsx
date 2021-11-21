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
  // const { answer, countUpdated, correctCount } = props?.location?.state;
  const answer = props?.location?.state?.answer;
  const countUpdated = props?.location?.state?.countUpdated;
  const noOfQuestion = props?.location?.state?.noOfQuestion;
  console.log(answer);

  const handleClick = () => {
    history.push({ pathname: "/view-answers", answer: answer });
  };

  return (
    <DashboardWrapper>
      {answer && (
        <div className="marks-scored">
          You scored {countUpdated.filter(Boolean).length} out of {noOfQuestion}
        </div>
      )}

      {answer && (
        <div className="graph-container">
          <div className="graph-item">
            {/* <ResponsiveContainer> */}
            <BarChart
              width={320}
              height={320}
              barGap={30}
              data={[
                {
                  name: "",
                  correct: countUpdated.filter(Boolean).length,
                  wrong: countUpdated.filter((item) => item === false).length,
                  unanswered:
                    noOfQuestion -
                    countUpdated.filter(Boolean).length -
                    countUpdated.filter((item) => item === false).length,
                },
              ]}
            >
              <XAxis dataKey="name" fill="#123456" color="#123456" />
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
      )}
      <div className="buttons-container">
        {answer && (
          <button className="view-answer" onClick={() => handleClick()}>
            View Answers{" "}
            <span>
              <MdOpenInNew />
            </span>
          </button>
        )}
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
