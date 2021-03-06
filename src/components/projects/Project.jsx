import React from "react";

const Project = ({ project, currentProject }) => {

  return (
    <li>
      <button type="button" onClick={(e) => currentProject(project._id)} className="btn btn-blank">
        {project.name}
      </button>
    </li>
  );
};

export default Project;
