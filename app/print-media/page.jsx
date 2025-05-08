export const metadata = {
    title: 'Acme Global | Print Media Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Print Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/print-media',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Print Media Advertising',
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
        title="Print Media"
        pageName="Print Media"
      />
      <AboutSection
      image="/images/PRINT-MEDIA.webp"
      imageAlt="About Acme Global"
      heading="PRINT"
      highlightedText="MEDIA"
      paragraphs={[
        "Acme Global is one of the most trending agencies of digital advertising markets. We have 22 years of experience in print media advertising which is a form or structure of advertising that makes use of physically or objectively printed media. Being a magazines and newspapers marketing agency it reaches consumers, customers, and business prospects more advantageous. Nowadays advertisers broadly believe in using digital media, essentially banner ads, mobile advertising, and advertising in social media, to gain a similar target audience. The abundance of digital media has led to toppling or downfall in traditional print media's advertisement expenditure, but the print isn't dead. Advertisers can choose from an enormous range of distinct kinds of newspapers, that include local, regional or national titles published in daily, evening, weekly, or Sunday editions. Acme Global prominently works as newspapers cater to get divergent readerships with a mixture of content, often counting sports, entertainment, fashion, business and politics in addition to local, national or world news. Our potential advertisers or customers can buy divergent sizes of advertising space, from small classified ads with text only, to display ads promoting text, photographs, illustrations and graphics in sizes up to a full page.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}