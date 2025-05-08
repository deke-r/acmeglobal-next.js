export const metadata = {
    title: 'Acme Global | Media Buying & Implementation',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Media Buying & Implementation',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/media-buying-implementation',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Media Buying & Implementation',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  



import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Mediabuyingimp() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Media Buying & implementation"
        pageName="Media Buying & implementation"
      />
      <AboutSection
      image="/images/MEDIA-BUYING.webp"
      imageAlt="About Acme Global"
      heading="MEDIA"
      highlightedText="BUYING IMPLEMENTATION"
      paragraphs={[
        "Acme Global has great access to media buying and implementation which is an integral part of running a holistic digital marketing campaign. While your content strategy does speak for itself, media planning and buying helps to boost the brand advertising.It reaches a larger target audience and resonates even further with them.The Acme Global team in Delhi is connected with a large, extensive network of media partners who help us offer your users an immersive, fully-integrated experience.We have many accredited communication patterns and solutions that can help to build your campaign further.Media buying and implementation include websites, apps, television, radio, newspapers, magazines, billboards, buses, bus shelters, webpages, mail drops, and various other niche and media that we evaluate according to your requirements and target audience. We help you select the optimal combination of various media platforms and outlets so that your message translates into the minds of your audience effectively.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}