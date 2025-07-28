import { useEffect, useState } from "react";
import JobCardMobile from "./JobCardMobile";
import JobApplicationModalButton from "./JobApplicationModalButton";
import _ from "lodash";

// Define the job type
interface Job {
  sr_no: number;
  lob: string;
  position: string;
  location: string;
  employment_type: string;
  requisition_date: string;
  linkedin_url: string;
  know_more_url: string;
}

const JobsListing = () => {
  function formatDate(dateStr: string) {
    // Extract year, month, and day
    const year = dateStr.slice(0, 4);
    const month = dateStr.slice(4, 6);
    const day = dateStr.slice(6, 8);

    // Month names array
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Format date
    return `${day} ${monthNames[_.toNumber(month) - 1]} ${year.slice(-2)}`;
  }

  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const tempJobs: Job[] = [];
    fetch(import.meta.env.PUBLIC_API_URL + "wp-json/wp/v2/job")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((job: any, index: number) => {
          if (job.acf.position != "Senior Project Manager") {
            tempJobs.push({
              sr_no: index + 1,
              lob: job.acf.lob,
              position: job.acf.position,
              location: job.acf.location,
              employment_type: _.capitalize(job.acf.employment_type),
              requisition_date: job.acf.requisition_date
                ? formatDate(job.acf.requisition_date)
                : "Not Tracked",
              linkedin_url: job.acf.linkedin_url,
              know_more_url: job.acf.pdf_job_file,
            });
          }
        });
        setJobs(tempJobs);
      });
  }, []);
  return (
    <>
      <div className="hidden md:block">
        <div
          className="no-scrollbar overflow-y-hidden overflow-x-scroll py-8 transition-all"
          id="jobs"
        >
          <table className="w-full border-collapse border-spacing-0">
            <tbody className="space-y-11 divide-y divide-gray-300">
              <tr>
                <td className="px-6 py-4 text-gray-600">Position</td>
                <td className="px-6 py-4 text-gray-600">Location</td>
                <td className="px-6 py-4 text-gray-600">Department</td>
                <td className="px-6 py-4 text-gray-600">Posted On</td>
                <td></td>
              </tr>
              {jobs.map((job) => {
                return (
                  <tr>
                    <td className="px-6 py-12 font-medium text-gray-900">
                      <h6 className="para">
                        <b>{job?.position}</b>
                      </h6>
                      {!_.isEmpty(job?.know_more_url) && (
                        <a
                          className="text-primary-color"
                          href={job.know_more_url}
                          target="_blank"
                        >
                          Know More
                        </a>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{job.location}</td>
                    <td className="px-6 py-4 text-gray-600">{job.lob}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {job.requisition_date}
                    </td>
                    <td className="px-6 py-4">
                      <JobApplicationModalButton job={job} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <span
          className="flex cursor-pointer items-center justify-center gap-2 text-center font-semibold text-primary-color"
          id="loadMore"
        >
          Load More{" "}
          <img src="/images/arrow-down.png" alt="" className="h-[14px]" />
        </span>
      </div>

      <div className="container block md:hidden">
        {jobs.map((job) => {
          return (
            <JobCardMobile
              job={job}
              title={job.position}
              location={job.location}
              department={job.lob}
              postedOn={job.requisition_date}
              know_more_url={job.know_more_url}
            />
          );
        })}
      </div>
    </>
  );
};

export default JobsListing;
