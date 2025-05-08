export const metadata = {
    title: 'Acme Global | Outdoor Media Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Outdoor Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/outdoor-media',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Outdoor Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  


import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Outdoormedia() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Outdoor Media"
        pageName="Outdoor Media"
      />
      <AboutSection
      image="/images/OUTDOOR-MEDIA.webp"
      imageAlt="About Acme Global"
      heading="OUTDOOR"
      highlightedText="MEDIA"
      paragraphs={[
        "Acme Global makes more proficiency in outdoor media that has become an essential part for large scale and small scale organizations. It is a digital out-of- home which is also called (DOOH) where advertising is placed in commercial spaces such as cafes, restaurants, health clubs, colleges, gas stations, convenience stores, salons, and public spaces. Digital out-of-home is a medium that engages customers to extend the reach and effectiveness of marketing messages. Displays advertising allow consumers to get additional information at the moment of decision on a product or service. Nowadays, more advertisers are moving to digital signage as it is cost effective. Low cost digital signage is making it easier to reach consumers at a larger scale.Outdoor media always benefits the outdoor audience targets in the mass market, billboard advertising re-enforces the availability of the brand. Outdoor advertising assures the consumer of the brand choice. It reaches markets fast and quickly that no other advertising medium can do. Hoarding advertising increases the visibility of a brand.Outdoor media builds brand loyalty in billboard advertising that helps advertisers to maintain brand dominance over markets. Hoarding advertising is strategically located in prime locations to media buying that helps advertisers to achieve high coverage frequency.Outdoor media is the procurement of media inventory which falls under advertising management. The outdoor media function negotiates price and placement for advertisements.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}