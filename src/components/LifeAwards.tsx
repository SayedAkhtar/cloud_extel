import { useState } from 'react';

const tabs = [
  {
    id: 1,
    label: "CEO Awards Oct'24",
    content: <p>Life Awards</p>,
    awards: 8,
    prefix: 'nov',
  },
  {
    id: 2,
    label: "CEO Awards Apr’24",
    content: <p>Life Awards</p>,
    awards : 10,
    prefix: 'Apr',
  },
  
  {
    id: 3,
    label: "Loyalty Awards",
    content: <p>Life Awards</p>,
    awards: 8,
    prefix: 'Loyalty',
  },
];

export default function LifeAwards() {
  const [activeTab, setActiveTab] = useState<any>(tabs[0]!.id);

  return (
    <section className="bg-[#233852] w-full">
    <div className="container py-[120px]">
    <div className="tabs-container">
      {/* Tab Headers */}
      <h2 className='text-white text-[64px] font-semibold mb-3'>Awards ✨ </h2>
      <div className="tabs-header flex space-x-4 border-b pb-2 relative">
        {tabs.map((tab) => (
         <>
          <button
            key={tab.id}
            className={`tab-button px-4 py-2 relative ${
              activeTab === tab.id
                ? "text-[#37C4CD] font-bold"
                : "text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className={`absolute ${
            activeTab === tab.id
              ? "w-full h-1 bg-[#37C4CD] bottom-[-10px] left-0"
              : ""
          }`}>

          </span>
          </button>
          
          </>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-content grid grid-cols-1 md:grid-cols-4 gap-10">
                {
                  Array.from({ length: tab.awards }, (_, index) => (
                    
                        <img src={`/images/awards/${tab.prefix}-0${index+1}.png`} alt="" className="max-w-full max-h-full w-full" />
                      
                  )) 
                }
              </div>
            )
        )}
      </div>
    </div>
    </div>
  </section>
  )
}
