export const metadata = {
    title: 'Acme Global | Electronic Media Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Electronic Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/electronic-media',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Electronic Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  


import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Electronicmedia() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Electronic Media"
        pageName="Electronic Media"
      />
      <AboutSection
      image="/images/ELECTRONIC-MEDIA.webp"
      imageAlt="About Acme Global"
      heading="ELECTRONIC"
      highlightedText="MEDIA"
      paragraphs={[
        "Electronic Media Initiating with the media journey that has been amazing and worth applauding to you. As today's new advertising mediums, electronic media has built its own base where every firm or sole proprietor wishes to market its stuff for earning name and fame.TV, which is now the member of household, is one of the best illustrations of electronic media. At every stage of our life electronic media involves more effectively with us. Whether an individual is enjoying daily movies, soaps operas, the news, football commentaries or anything, advertisements are all around. Even if we wish to see them or not, they surely enter our lives anyhow. The reason to use electronic media can be for many valid reasons, one of the reasons is using it to show off your skills and anything special from businesses to stuff and so on. In the present day context electronic media is an economic way to connect to one another, either by using media appliances and networks or social media resources like Television or Internet. These are some common techniques to use electronic media to your benefit.There are a wide range of electronic media to broadcast a variety of contrasting things like marketing and promotions.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}