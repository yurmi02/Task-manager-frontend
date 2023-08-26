import React from "react";
import TaskGroup from "../assets/icons/TaskGroup.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container vh-100 d-flex justify-content-between gap-4 w-100 my-5 task-1">
      <div className="text-start w-50 my-5 task-1">
        <h1 className="py-3">
          Manage yourTasks on <span>TaskDuty</span>
        </h1>
        <p className="py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quidem
          cum facilis id inventore deserunt illo fugit, similique omnis fuga sit
          adipisci sunt debitis in quam sint sed nisi mollitia.
        </p>
        <Link
          to="./my-task"
          className="w-20 bg-main-color py-2 px-3 rounded-2 text-white border-0 text-decoration-none btn"
        >
          {" "}
          Go to My Tasks
        </Link>
      </div>
      <div className="w-50">
        <img src={TaskGroup} alt="TAskGroup" />
      </div>
    </div>
  );
};

export default LandingPage;
