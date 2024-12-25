import { useState } from "react";
import communityData from "../data/community.json";
import Modal from "react-modal";
import _ from "lodash";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 99999,
    overflow: "auto",
    background: "taransparent",
    border: "none",
  },
};
Modal.setAppElement("#mainBody");

type ModalDataProps = {
  name: string;
  position: string;
  image: string;
  linkedin: string;
  details: string[];
};
export default function AboutBoardMembers() {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalDataProps>({
    name: "",
    position: "",
    image: "",
    linkedin: "",
    details: [],
  });

  function openModal(index: number) {
    if (index < 0 || index > communityData.length - 1) return;
    if (communityData[index] !== undefined) {
      setModalData(communityData[index]);
      setIsOpen(true);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="bg-[#F5FAFE] py-[120px]" id="our-board">
      <div className="container text-center">
        <h2 className="heading-1">Our Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {communityData.map((member, index) => (
            <div 
            data-aos="fade-up" data-aos-duration="500" data-aos-delay={index*100}
            className="bg-white p-6" key={index+'_'+member.name}>
              <div className="flex flex-col items-center gap-4 h-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[280px] object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <div className="flex items-center gap-2 mt-4 justify-between w-full">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <svg
                      width={40}
                      height={40}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="0.000976562"
                        width={40}
                        height={40}
                        rx="19.7256"
                        fill="#1456A2"
                        fillOpacity="0.06"
                      />
                      <path
                        d="M13.0616 12.001C11.815 12.001 11 12.8195 11 13.8954C11 14.9475 11.7907 15.7894 13.0138 15.7894H13.0374C14.3084 15.7894 15.0993 14.9475 15.0993 13.8954C15.0756 12.8195 14.3084 12.001 13.0616 12.001Z"
                        fill="#1456A2"
                      />
                      <path
                        d="M11.2153 17.2861H14.8596V28.2499H11.2153V17.2861Z"
                        fill="#1456A2"
                      />
                      <path
                        d="M23.8045 17.0291C21.8386 17.0291 20.5203 18.8764 20.5203 18.8764V17.2864H16.876V28.2502H20.5201V22.1276C20.5201 21.7998 20.5439 21.4725 20.6401 21.2381C20.9036 20.5836 21.5031 19.9056 22.5099 19.9056C23.8286 19.9056 24.356 20.911 24.356 22.3849V28.2502H27.9999V21.9637C27.9999 18.5961 26.2019 17.0291 23.8045 17.0291Z"
                        fill="#1456A2"
                      />
                    </svg>
                  </a>
                  <button
                    onClick={() => openModal(index)}
                    className="text-primary-color font-medium text-sm mt-4 hover:underline"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          id="modalContent"
          className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg md:max-w-[960px]"
        >
          <div className="bg-white  max-h-[516px] h-full overflow-hidden md:px-[56px] md:py-[56px] sm:p-6 sm:pb-4">
            <button
              className="self-start text-white text-xl mb-6 absolute top-4 right-4"
              aria-label="Close"
              id="closeModalBtn"
              onClick={closeModal}
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.686523 1.68652L23.3139 24.3139" stroke="#7B8897" />
                <path d="M0.686523 23.314L23.3139 0.686548" stroke="#7B8897" />
              </svg>
            </button>
            <div className="sm:flex sm:items-start ">
              <div className="mx-auto h-full">
                <img
                  src={modalData.image}
                  alt={modalData.name}
                  className="min-w-[260px] h-full"
                />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3
                  className="text-base font-semibold text-gray-900 heading-6"
                  id="modal-title"
                >
                  {modalData.name}
                </h3>
                {/* <p>{modalData?.position}</p> */}
                <div className="mt-8 overflow-y-scroll max-h-[360px] no-scrollbar">
                  {modalData.details.map((detail, index) => (
                    <p className="text-sm mb-4" key={index}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}
