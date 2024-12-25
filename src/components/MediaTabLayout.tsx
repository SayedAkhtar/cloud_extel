import { useState, type Key } from "react";

const MediaTabLayout = ({ mediaData, pressData}: any) => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className=" md:pb-[100px]">
      {/* Tabs */}
      <div className="flex justify-start border-b border-gray-300 mb-4">
        <button
          className={`px-6 text-lg font-medium py-[25px] ${
            activeTab === "news"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("news")}
        >
          In the News
        </button>
        <button
          className={`px-6 text-lg font-medium py-[25px] ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mediaData.map((card: any, index: Key) => (
              <div
                key={index}
                className="bg-white border rounded-none shadow-sm p-4"
              >
                <a href={card.link} target="_blank">
                  <img
                    src={card.image ?? "/images/blogs/placeholder.jpg"}
                    alt={card.article_name}
                    className="h-[220px] w-full object-cover mb-4"
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 min-h-[58px]">
                      {card.article_name}
                    </h3>
                    <div>
                      <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
                        {card.meta_text}
                      </p>
                      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                        <span>{card.date}</span>
                        <span className="text-blue-600 font-medium">→</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}

        {activeTab === "press" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pressData.map((card: any, index: Key) => (
              <a href={card.link} target="_blank">
                <div
                  key={index}
                  className="bg-white border rounded-none shadow-sm p-6 flex flex-col items-center justify-center min-h-[204px]"
                >
                  <div className="flex justify-between w-full items-center">
                  <span className="text-[#37C4CD]">{card.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-3 mt-4">
                    {card.name}
                  </h3>
                  {/* <img src={card.image} alt={card.title} className="h-[220px] w-[295px] object-contain mb-4" /> */}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaTabLayout;
