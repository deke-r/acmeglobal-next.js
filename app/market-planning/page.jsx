export const metadata = {
    title: 'Acme Global | Market Planning',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Market Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/market-planning',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Market Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  


import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Marketplanning() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Market Planning"
        pageName="Market Planning"
      />
      <AboutSection
      image="/images/MARKET-PLANNING.webp"
      imageAlt="About Acme Global"
      heading="MARKET"
      highlightedText="PLANNING"
      paragraphs={[
        "We implement a great marketing strategy which is a key factor for branding reputation, brand establishment, brand recall and brand’s market value. We are the fastest strategy planner who make your marketing so much trending. At flag communications, we believe in pushing limits to produce the best planning and results. A successful strategy is all about planned thinking and mastering the art of perfect timing. A well-organized marketing plan followed by a defined communication strategy enriches creative distinction in planning and implementation that can do the effective tricks.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}