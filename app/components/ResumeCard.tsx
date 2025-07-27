import React from "react";
import {Link} from "react-router-dom";

const ResumeCard: React.FC<{ resume: Resume }> = ({ resume }) => {
    return (
        <Link to={`/resume/${resume.id}`}>
            <div> CV </div>
        </Link>
    )
}

export default ResumeCard;