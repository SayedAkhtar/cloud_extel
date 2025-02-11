import { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";

const JobApplicationModalButton = ({ job }: { job: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="min-w-[158px] gap-2 flex justify-center items-center px-4 py-4 bg-primary-color text-white text-xs font-medium rounded-full"
      >
        Apply Now
        <svg
          width={17}
          height={8}
          viewBox="0 0 17 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3536 4.35355C16.5488 4.15829 16.5488 3.84171 16.3536 3.64645L13.1716 0.464466C12.9763 0.269204 12.6597 0.269204 12.4645 0.464466C12.2692 0.659728 12.2692 0.976311 12.4645 1.17157L15.2929 4L12.4645 6.82843C12.2692 7.02369 12.2692 7.34027 12.4645 7.53553C12.6597 7.7308 12.9763 7.7308 13.1716 7.53553L16.3536 4.35355ZM0 4.5H16V3.5H0V4.5Z"
            fill="white"
          />
        </svg>
      </button>
      {/* Open Button */}

      {/* Show Modal when isOpen is true */}
      {isOpen && (
        <JobApplicationModal job={job} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default JobApplicationModalButton;
