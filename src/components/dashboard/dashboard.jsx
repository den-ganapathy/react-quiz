import React from "react";
import { DashboardWrapper } from "./../../styles/dashboardStyles";
import { useHistory } from "react-router-dom";
import { MdOpenInNew, MdOutlineHome } from "react-icons/md";

import { BarChart, Legend, Bar, Tooltip, XAxis, YAxis } from "recharts";
const Dashboard = (props) => {
  const history = useHistory();
  const answer = props?.location?.state?.answer;
  const countUpdated = props?.location?.state?.countUpdated;
  const noOfQuestion = props?.location?.state?.noOfQuestion;

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
            <BarChart
              width={280}
              height={280}
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
                fill="#48a268"
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
