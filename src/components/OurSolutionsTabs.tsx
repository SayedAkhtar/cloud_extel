import { forwardRef, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import _ from 'lodash';

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
                        <h3 class="heading-3 my-6">Underground Fiber</h3>
                        <p>Secure your network with our high-density and reliable underground fiber—tailored for maximum performance and minimal disruption.</p>
                        <p>We offer bespoke dark fiber leasing services to telecom operators at cost-effective rates, maintaining the highest tenancies in the industry. As the only independent provider in the region with such a dense network, we stand out with superior service levels compared to the in-house networks of many established players.</p>
                        <h3 class="heading-3 my-6">Overhead Fiber Connectivity (OHFC)</h3>
                        <p>Connecting cities with our high-speed, scalable overhead fiber networks—delivered with industry-leading feasibility rates, lowest churn, and fastest time to market. CloudExtel's Overhead Fiber network delivers exceptional metro core connectivity, data center to data center links, and seamless last-mile connectivity. </p>
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
    const [state, setState] = useState<Number>(0);
    const sectionRefs = useRef<HTMLDivElement[]>([]);
    const handleClick = (index: number) => {
        setState(index);
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry : IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const ele = entry.target as HTMLElement;
                    const index =ele.dataset['index'] ?? "0";
                    document.querySelectorAll('[data-nav-index]').forEach((ele) => {
                      const eleAsHTMLElement = ele as HTMLElement;
                      if(eleAsHTMLElement.dataset.navIndex == index){
                        ele.classList.add('text-primary-color');
                        ele.classList.add('border-primary-color');
                        ele.classList.add('font-semibold');
                        ele.classList.add('border-b-4');
                      }else{
                        ele.classList.remove('text-primary-color');
                        ele.classList.remove('border-primary-color');
                        ele.classList.remove('font-semibold');
                        ele.classList.remove('border-b-4');
                      }
                    })
                }
            });
        }, { threshold: 0.5, root: null});
        sectionRefs.current.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });
        return () => sectionRefs.current.forEach((section) => {
            if (section) {
                observer.unobserve(section);
            }
        })
    }, []);

  return (
    <>
      {/* Navigation */}
      <div id="our-solutions-nav" className="pt-8">
        <section className="container bg-white">
          <nav className="flex space-x-8 border-b border-gray-300 w-full justify-between">
            {data.map((item, index) => {
              return (
                <a
                  key={_.kebabCase(item.title) + "_" + index}
                  data-nav-index={index}
                  className={twMerge(
                    "border-b-4  hover:text-primary-color pb-4 cursor-pointer",
                    state == index
                      ? "text-primary-color border-primary-color font-semibold"
                      : "text-gray-500 border-b-0 font-medium"
                  )}
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                </a>
              );
            })}
            <label
            htmlFor="nav-toggle"
            className={`h-full flex flex-col items-center justify-center rounded-full border-[#233852] border bg-transparent py-3 px-4 text-gray-600 
            transition hover:text-gray-600/75
            hover:bg-[#233852]
            hover:text-white
            group cursor-pointer
            -mt-3
            `}
          >
            <span
              className={`h-[10px] w-[32px] border-[#233852] group-hover:border-white border-t border-b block `}
            ></span>
            <span className="sr-only">Toggle menu</span>
          </label>
          </nav>
        </section>
      </div>
      <section className="container">
        <div className="w-full mx-auto py-[100px]">
          {data.map((item, index) => {
            return (
              <div key={_.uniqueId()}>
                {index !== 0 ? <hr className="my-[100px]" /> : null}
                <CardTile
                  data-aos="fade-up" data-aos-duration="500" data-aos-delay={index*100}
                  ref={(ele: HTMLDivElement) =>
                    (sectionRefs.current[index] = ele!)
                  }
                  index={index}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  layout={item.layout}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
interface CardTileProps {
  image: string;
  title: string;
  description: string;
  layout: string;
  index: number
}

const CardTile = forwardRef<HTMLDivElement,CardTileProps>(({image, title, description, layout, index }, ref) => {
    if(layout === 'end'){
        return (
          <div className="flex flex-col lg:flex-row-reverse items-start gap-8 mt-8" ref={ref} data-index={index}>
            <div 
            data-aos="fade-right" data-aos-duration="500"
            className="w-full lg:w-1/2 h-auto">
              <img
                src={image}
                alt={title}
                className="object-fit h-full"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="500" className="w-full lg:w-1/2">
              <h3 className="heading-1 font-bold text-gray-800">
                {title}
              </h3>
              <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        );
    }
    return (
      
        <div className="flex flex-col lg:flex-row items-start justify-start gap-8" ref={ref} id={"section-id-"+index} data-index={index}>
          <div data-aos="fade-right" data-aos-duration="500" className="w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className=""
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="500" className="w-full lg:w-1/2">
            <h2 className="heading-1 font-bold text-gray-900 max-w-[456px]">
              {title}
            </h2>
            <div className="mt-8 text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
    );
})
