export const metadata = {
    title: 'Acme Global | Market Consultancy',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Market Consultancy',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/marketing-consultancy',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Market Consultancy',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  




import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Printmedia() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Market consultancy"
        pageName="Market consultancy"
      />
      <AboutSection
      image="/images/MARKETING-CONSULTANCY.webp"
      imageAlt="About Acme Global"
      heading="MARKET"
      highlightedText="CONSULTANCY"
      paragraphs={[
        "Acme Global is a market consulting agency that understands its role as “the business of analyzing and offering solutions to complex challenges within a demanded organization. We offer an outside and unbiased perspective to the challenges and we are fully devoted to paying the full attention of our consulting team who solve queries through smart consultancy. Acme Global has established itself as a management consulting firm known for helping clients to solve complex challenges related to performance improvement, strategic planning, customer experience, technology and digital, and transformation.Our passion is helping clients to find a way through simple addressing to their challenges with three core lenses, ‘customer’, ‘workforce’, and ‘operation’. We’ll work with you to understand your needs to define the right product roadmap, and map out the operational investments needed to make that vision a reality.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}