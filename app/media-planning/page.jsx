export const metadata = {
    title: 'Acme Global | Media Planning',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Media Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/media-planning',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Media Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  



import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Mediaplanning() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Media planning"
        pageName="Media planning"
      />
      <AboutSection
      image="/images/MEDIA-PLANNING.webp"
      imageAlt="About Acme Global"
      heading="MEDIA"
      highlightedText="PLANNING"
      paragraphs={[
        "Acme Global provides media planning services. Our customers better know that we will provide a mere hoarding list with cost effective media planning services. At ACME Global a media plan is at the zenith. At the bottom of which lies a complete understanding of advertising and media objectives we thereby setting the outdoor objectives with good media plannings.It is knowledgeable on who and how we will reach the most messages with media planning with a clear idea on which geographies, locations and media vehicles would help achieve the desired results. It doesn't end with that. We generate multiple potential plans which are combinations of various scheduling, media assemblies and balance of reach and frequency.Our job as a media specialist is to ensure that our client's precious money is not wasted. We achieve that by evaluating the media plan before it gets executed, and also after it's up and running. For us nothing is impossible to set the effective planning process. It has taken years of effort and massive investments in research and developing and buying tools.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}