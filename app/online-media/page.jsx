export const metadata = {
    title: 'Acme Global | Online Media Advertising',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Online Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/online-media',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Online Media Advertising',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  


import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Onlinemedia() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Online Media"
        pageName="Online Media"
      />
      <AboutSection
      image="/images/ONLINE-MEDIA.webp"
      imageAlt="About Acme Global"
      heading="ONLINE"
      highlightedText="MEDIA"
      paragraphs={[
        "Online media primarily refers to technical media where digital content is transmitted from any kind of server to distant receivers via the Internet. Acme Global gives online media services that are presented on a computer or a comparable terminal device like notebook, personal digital assistant or mobile phone. It is mostly noted that digital media is not an online media. Online media broadcasting with digital content which is broadly transmitted by terrestrial or satellite broadcasting or broadband cable to all receptive devices. In online media a client computer requests specific content from a server that, in turn, directly points-to-point or delivers the content. According to online media it is a broad variety of different forms of computer-mediated communication. Online media can contain different forms of digital content ranging from text, photographs, drawings, sound clips, videos, and animations to get any imaginable information service or software application. Thus, online media can display all kinds of content from the traditional media.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}