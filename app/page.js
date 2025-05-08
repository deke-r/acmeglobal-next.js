export const metadata = {
  title: 'Acme Global | Digital Marketing and Advertising',
  description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
  author: 'Sense Project Pvt Ltd',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  openGraph: {
    title: 'Acme Global | Digital Marketing and Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    url: 'https://acmeglobal.in/',
    images: ['/images/swello-VW7ll65EAwA-unsplash.webp'],
    site_name: 'Acme Global',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@acmeglobal',
    title: 'Acme Global | Digital Marketing and Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    image: '/images/swello-VW7ll65EAwA-unsplash.webp',
  },
};





import Banner from '@/components/Banner';
import bannerImage from '../public/images/banner.webp';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import OurServicesSection from '@/components/OurServicesSection';
import ClientLogos from '@/components/ClientLogo';
import TestimonialsSection from '@/components/TestimonialsSection';

const values = [
    'From a logical data-driven strategy and emotion-driven creatives to a perfect execution for desired results, we work hard to keep adding value to your brand.',
    'We operate with a purpose, and before we do anything we repetitively ask ourselves why we are doing it, creating an environment of target setting and achievement.',
    'We look for consumer insights, map the consumer journey, and marry them with meaningful data to recommend the strategy and tactics.',
    'All good ideas have the potential to become great if they have the capacity to describe with simple expressions. We work hard to turn complexity into simplicity.',
    'We operate with a purpose, and before we do anything we repetitively ask ourselves why we are doing it, creating an environment of target setting and achievement.',
    'We operate with a purpose, and before we do anything we repetitively ask ourselves why we aredoing it, creating an environment of target setting and achievement.',
    'We strongly believe in the discipline of execution. It’s as important as strategy. We get excited about implementing ideas into reality be it beautiful designs or dynamic feeds and social stories or an event.',
    'Great ideas must be seen and every act must produce results. With that belief, we create meaningful ampaigns and put them in media that get results and help brands grow.'
];
export default function Page() {
    return (
        <>
            <Banner
                title="Promotion Granted"
                highlight="ADVERTISING"
                subtitle="Lead Your Global Business with Market-Driven Advertisement"
                buttonText="Talk with us"
                buttonLink="/contact"
                backgroundImage={bannerImage.src}
            />



<AboutSection
      image="/images/corporate1.webp"
      imageAlt="About Acme Global"
      heading="OUR"
      highlightedText="VISION"
      paragraphs={[
        "We accelerate digital media advertising to globalize your marketing dream. Get an overall digital marketing platform to estimate worldwide branding. We allocate a fast-growing digital frequency to get max revenue. ",
      ]}
      points={values}
    />





            <div className="container-fluid py-5 container-2 position-relative">
                {/* Black overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 0,
                }}></div>

                {/* Content above overlay */}
                <div className="container my-4 position-relative" style={{ zIndex: 1 }}>
                    <div className="row mx-md-5">
                        <div className="col-12 f_30 text-light fw-semibold text-center">
                            We generate a frequency of new businesses to be spread with digital media <br />
                            platforms. We are more recognized for our best assistance to increase the <br />
                            digital economy of India. We acknowledge the value we bring to Indian <br />
                            business and society. We are highly motivated to move forward with our <br />
                            futuristic achievements. We have our complete vision to help society with our <br />
                            motivational ventures. We are promising to create a global economic <br />
                            opportunity. Our imagination is to create a world in which every human being <br />
                            can share a sum of independent economical growth. Our commitment is to <br />
                            make humanity grow with a profitable business workforce.
                        </div>
                    </div>
                </div>
            </div>


            <PortfolioSection 
  items={[
    {
      title: 'Portfolio Title 1',
      description: 'Description of the portfolio item 1',
      imageSrc: '/images/img1.webp',
      link: '#',
    },
    {
      title: 'Portfolio Title 2',
      description: 'Description of the portfolio item 2',
      imageSrc: '/images/img2.webp',
      link: '#',
    },
    {
        title: 'Portfolio Title 3',
        description: 'Description of the portfolio item 3',
        imageSrc: '/images/img3.webp',
        link: '#',
      },
      {
        title: 'Portfolio Title 4',
        description: 'Description of the portfolio item 4',
        imageSrc: '/images/img4.webp',
        link: '#',
      },
      {
        title: 'Portfolio Title 5',
        description: 'Description of the portfolio item 5',
        imageSrc: '/images/img5.webp',
        link: '#',
      },
      {
        title: 'Portfolio Title 6',
        description: 'Description of the portfolio item 6',
        imageSrc: '/images/img6.webp',
        link: '#',
      },
  ]}
/>

<OurServicesSection/>


<TestimonialsSection/>

<ClientLogos/>

        </>
    );
}