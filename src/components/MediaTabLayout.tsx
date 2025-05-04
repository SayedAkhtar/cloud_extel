import { useEffect, useState, type Key } from "react";
import _ from "lodash";

const MediaTabLayout = ({ mediaData, pressData }: any) => {
  const [activeTab, setActiveTab] = useState("news");
  const [ajaxMediaData, setAjaxMediaData] = useState<
    {
      article_name: string;
      link: string;
      meta_text: string;
      date: string;
      image: string;
    }[]
  >(mediaData);
  const [ajaxPressData, setAjaxPressData] = useState<
    {
      article_name: string;
      link: string;
      meta_text: string;
      date: string;
      image: string;
    }[]
  >(pressData);
  function formatDate(dateStr: string) {
    // Extract year, month, and day
    const year = dateStr != null ? dateStr.slice(0, 4) : "2010";
    const month = dateStr != null ? dateStr.slice(4, 6) : "01";
    const day = dateStr != null ? dateStr.slice(6, 8) : "01";

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

  useEffect(() => {
    mediaDataSorted();
  }, []);

  const mediaDataSorted = async () => {
    let tempMedia: {
      article_name: string;
      link: string;
      meta_text: string;
      date: string;
      image: string;
    }[] = [];
    let tempPress: {
      article_name: string;
      link: string;
      meta_text: string;
      date: string;
      image: string;
    }[] = [];
    const categoryResponse = await fetch(
      import.meta.env.PUBLIC_API_URL + "wp-json/wp/v2/categories",
    );
    const categoriesJson = await categoryResponse.json();
    const categories: any = {};
    categoriesJson.forEach((category: any) => {
      categories[category.name] = category.id;
    });

    const response = await fetch(
      import.meta.env.PUBLIC_API_URL +
        "wp-json/wp/v2/posts?per_page=100&_embed=1",
    );

    const posts = await response.json();
    posts.forEach(
      (element: {
        title: { rendered: any };
        acf: { article_link: any; published_date: any };
        content: { rendered: any };
        thumbnail_url: any;
        categories: string | string[];
        _embedded: any;
      }) => {
        const post = {
          article_name: element.title.rendered,
          link: element.acf.article_link,
          meta_text: element.content.rendered,
          date: element.acf.published_date,
          image: !_.isEmpty(element._embedded["wp:featuredmedia"])
            ? element._embedded["wp:featuredmedia"][0]?.source_url
            : null,
        };
        if (element.categories.includes(categories["Media"])) {
          tempMedia.push(post);
        }
        if (element.categories.includes(categories["Press"])) {
          tempPress.push(post);
        }
      },
    );
    tempMedia = tempMedia.sort((a, b) => parseInt(b.date) - parseInt(a.date));
    tempPress = tempPress.sort(
      (
        a: { date: string | number | Date },
        b: { date: string | number | Date },
      ) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    setAjaxMediaData(tempMedia);
    setAjaxPressData(tempPress);
  };

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
                {ajaxMediaData.map((card: any, index: Key) => (
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
                            <span>{formatDate(card.date)}</span>
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
                {ajaxPressData.map((card: any, index: Key) => (
                  <a href={card.link} target="_blank">
                    <div
                      key={index}
                      className="flex min-h-[204px] flex-col items-center justify-center rounded-none border bg-white p-6 shadow-sm"
                    >
                      <div className="flex w-full items-center justify-between">
                        <span className="text-[#37C4CD]">
                          {formatDate(card.date)}
                        </span>
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
