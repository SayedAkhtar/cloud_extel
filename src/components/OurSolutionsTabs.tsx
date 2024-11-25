import { useState } from 'react'
import { twMerge } from 'tailwind-merge';

const data = [
    {
        image: '/images/our-solutions/cell.png',
        title: 'Small Cells Hosting',
        description: `<p>Think of small cells as the extra oxygen telecom operators need to handle growing data demands. These 5G-ready cells are the future-ready 
          champions of next-generation communication, offering high-density user capacity, improved strength, and efficiency. Discreet in size, 
          capable of being installed almost anywhere, small cells can be strategically placed in urban landscapes while making a massive impact 
          on network performance.</p>`,
        layout: 'start',
    },
    {
        image: '/images/our-solutions/fiber.png',
        title: 'Fiber',
        description: `<p>Our extensive underground and overhead fiber network, the backbone of modern connectivity, spans across India, powering 4G/5G towers, and enterprises. We pride ourselves on rapid deployment while maintaining the highest standards of quality and uptime. With CloudExtel, your data travels faster, safer, and more reliably.</p>
                        <h3 class="heading-3">Underground Fiber</h3>
                        <p>Secure your network with our high-density and reliable underground fiber—tailored for maximum performance and minimal disruption.</p>
                        <p>We offer bespoke dark fiber leasing services to telecom operators at cost-effective rates, maintaining the highest tenancies in the industry. As the only independent provider in the region with such a dense network, we stand out with superior service levels compared to the in-house networks of many established players.</p>
                        <h3 class="heading-3">Overhead Fiber Connectivity (OHFC)</h3>
                        <p>Connecting cities with our high-speed, scalable overhead fiber networks—delivered with industry-leading feasibility rates, lowest churn, and fastest time to market. Cloudextel's Overhead Fiber network delivers exceptional metro core connectivity, data center to data center links, and seamless last-mile connectivity. </p>
                        <p>With the best-in-class Service Level Agreements (SLAs), Cloudextel guarantees superior performance and peace of mind for your critical connections.</p>
                        `,
        layout: 'end',
    },
    {
        image: '/images/our-solutions/ftth.png',
        title: 'Fiber to the Home (FTTH)',
        description: `<p>CloudExtel's FTTH technology brings ultra-high-speed connectivity to residential and commercial areas, supporting multiple telecom operators and internet service providers. You get to stream, work, and connect without limits. With our end-to-end service, we ensure that you have the high-speed connectivity needed to unlock everything today's technology has to offer, from smart home devices to 4K streaming. Elevate your every day with our FTTH solution where the Internet comes directly to your doorstep with blazing speed.</p>`,
        layout: 'start',
    },
    {
        image: '/images/our-solutions/virtualized.png',
        title: 'Virtualized Networks',
        description: `<p>A revolutionary approach to network infrastructure that delivers unmatched performance and flexibility in dense urban environments. We are transforming telecom with an end-to-end managed neutral Shared RAN solution which is designed to meet the demands of tomorrow's networks. As India’s first and one of less than ten players globally, in neutral host Shared RAN, we deliver a scalable, shared architecture that integrates both passive and active network layers.</p>`,
        layout: 'start',
    }

]

export default function OurSolutionsTabs() {
    const [state, setState] = useState(0);
    const handleClick = (index: Number) => {
        console.log(index, "Logging");
    }
  return (
    <div className="py-8">
      {/* Navigation */}
      <nav className="flex space-x-8 border-b border-gray-300w-full justify-between">
        {data.map((item, index) => {
          return (
            <a
            //   href="javascript:void(0)"
              className={twMerge(
                "font-semibold border-b-4  hover:text-primary-color pb-4",
                state == index
                  ? "text-primary-color border-primary-color"
                  : "text-gray-500 border-b-0"
              )}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </a>
          );
        })}
        {/* <a href="#" className="text-primary-color font-semibold border-b-4 border-primary-color pb-4">Small Cells Hosting</a>
    <a href="#" className="text-gray-500 hover:text-primary-color pb-4">Fiber</a>
    <a href="#" className="text-gray-500 hover:text-primary-color pb-4">FTTH</a>
    <a href="#" className="text-gray-500 hover:text-primary-color pb-4">Virtualized Networks</a> */}
      </nav>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {data.map((item, index) => {
        return (
          <>
            {index !== 0 ?<hr className='my-[100px]'/>: null}
            <CardTile
              image={item.image}
              title={item.title}
              description={item.description}
              layout={item.layout}
            />

          </>
        );
      })}
      </div>
    </div>
  );
}

function CardTile({image, title, description, layout }: any){
    if(layout === 'end'){
        return (
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 mt-8">
            <div className="w-full lg:w-1/2">
              <img
                src={image}
                alt={title}
                className=""
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="heading-1 font-bold text-gray-800">
                {title}
              </h3>
              <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        );
    }
    return (
      
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className=""
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="heading-1 font-bold text-gray-900">
              {title}
            </h2>
            <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
    );
}
