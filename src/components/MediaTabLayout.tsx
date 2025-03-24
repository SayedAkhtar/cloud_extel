import { useState, type Key } from "react";

const MediaTabLayout = ({ mediaData, pressData }: any) => {
  const [activeTab, setActiveTab] = useState("news");
  return (
    <>
      <main className="relative mt-[80px] flex h-auto min-h-[340px] w-screen items-center bg-[url('/images/blogs/bg.jpeg')] bg-cover md:mt-[120px]">
        <div className="md:py-none container order-2 w-full px-[20px] py-[20px] md:order-1 md:px-[100px]">
          <h1 className="text-[24px] font-bold text-white md:text-[36px]">
            {activeTab === "news"
              ? "Monetising 5G will be a challenge but huge thirst for connectivity at home: Kunal Bajaj CEO & Co-Founder of CloudExtel"
              : "CloudExtel garners external credit rating of CARE A- for its debut debt fundraise of INR 200 cr. from NIIF IFL and ABFL"}
          </h1>
          <a
            href={
              activeTab === "news"
                ? "https://www.thehindubusinessline.com/companies/monetising-5g-will-be-a-challenge-but-huge-thirst-for-connectivity-at-home-kunal-bajaj-ceo-co-founder-of-cloudextel/article69075773.ece"
                : "https://www.linkedin.com/feed/update/urn:li:activity:7188756231702921217"
            }
            target="_blank"
            className="group mt-6 flex w-fit items-center gap-2 rounded-full border border-white bg-white px-6 py-4 font-medium transition hover:bg-inherit hover:text-white group-hover:fill-white"
          >
            Know More
            <svg
              width="21"
              height="9"
              viewBox="0 0 21 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition group-hover:fill-white"
            >
              <path
                className="fill-[#233852] transition group-hover:fill-white"
                d="M20.3536 4.85477C20.5488 4.65951 20.5488 4.34293 20.3536 4.14767L17.1716 0.965687C16.9763 0.770425 16.6597 0.770425 16.4645 0.965687C16.2692 1.16095 16.2692 1.47753 16.4645 1.67279L19.2929 4.50122L16.4645 7.32965C16.2692 7.52491 16.2692 7.84149 16.4645 8.03675C16.6597 8.23202 16.9763 8.23202 17.1716 8.03675L20.3536 4.85477ZM0 5.00122H20V4.00122H0V5.00122Z"
              ></path>
            </svg>
          </a>
        </div>
      </main>
      <section className="container">
        <div className="md:pb-[100px]">
          {/* Tabs */}
          <div className="mb-4 flex justify-start border-b border-gray-300">
            <button
              className={`px-6 py-[25px] text-lg font-medium ${
                activeTab === "news"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("news")}
            >
              In the News
            </button>
            <button
              className={`px-6 py-[25px] text-lg font-medium ${
                activeTab === "press"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("press")}
            >
              Press Releases
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "news" && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {mediaData.map((card: any, index: Key) => (
                  <div
                    key={index}
                    className="rounded-none border bg-white p-4 shadow-sm"
                  >
                    <a href={card.link} target="_blank">
                      <img
                        src={card.image ?? "/images/blogs/placeholder.jpg"}
                        alt={card.article_name}
                        className="mb-4 h-[220px] w-full object-cover"
                      />
                      <div className="flex flex-col justify-between">
                        <h3
                          className="line-clamp-2 min-h-[58px] text-lg font-semibold text-gray-800"
                          dangerouslySetInnerHTML={{
                            __html: card.article_name ?? "",
                          }}
                        ></h3>
                        <div>
                          <p
                            className="line-clamp-3 min-h-[60px] text-sm text-gray-600"
                            dangerouslySetInnerHTML={{
                              __html: card.meta_text ?? "",
                            }}
                          ></p>
                          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                            <span>{card.date}</span>
                            <span className="font-medium text-blue-600">→</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "press" && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {pressData.map((card: any, index: Key) => (
                  <a href={card.link} target="_blank">
                    <div
                      key={index}
                      className="flex min-h-[204px] flex-col items-center justify-center rounded-none border bg-white p-6 shadow-sm"
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-[#37C4CD]">{card.date}</span>
                      </div>

                      <h3
                        className="mt-4 line-clamp-3 text-lg font-semibold text-gray-800"
                        dangerouslySetInnerHTML={{
                          __html: card.article_name ?? "",
                        }}
                      ></h3>
                      {/* <img src={card.image} alt={card.title} className="h-[220px] w-[295px] object-contain mb-4" /> */}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaTabLayout;
