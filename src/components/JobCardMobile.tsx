import React from "react";
import _ from "lodash";
import JobApplicationModalButton from "./JobApplicationModalButton";

interface JobCardMobileProps {
  job: any;
  title: string;
  location: string;
  department: string;
  postedOn: string;
  know_more_url: string;
}

const JobCardMobile: React.FC<JobCardMobileProps> = ({
  title,
  location,
  department,
  postedOn,
  know_more_url,
  job,
}) => {
  return (
    <div className="rounded-lg border-b bg-white py-6">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase text-gray-500">Location</p>
        <p className="text-xl text-black">{location}</p>
      </div>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase text-gray-500">Department</p>
        <p className="text-xl text-black">{department}</p>
      </div>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase text-gray-500">Posted On</p>
        <p className="text-xl text-black">{postedOn}</p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        {!_.isEmpty(know_more_url) && (
          <a
            href={know_more_url}
            className="text-sm font-bold text-primary-color underline"
          >
            Know More
          </a>
        )}
        <JobApplicationModalButton job={job} />
      </div>
    </div>
  );
};

export default JobCardMobile;
