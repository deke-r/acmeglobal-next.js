export const metadata = {
    title: 'Acme Global | Digital Planning',
    description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
    author: 'Sense Project Pvt Ltd',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    openGraph: {
      title: 'Acme Global | Digital Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      url: 'https://acmeglobal.in/digital-planning',
      images: ['/images/erik-mclean-aielvGxZB0g-unsplash.webp'],
      site_name: 'Acme Global',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@acmeglobal',
      title: 'Acme Global | Digital Planning',
      description: 'We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.',
      image: '/images/erik-mclean-aielvGxZB0g-unsplash.webp',
    },
  };
  




import TestimonialsSection from "@/components/TestimonialsSection";
import PageBanner from "../../components/PageBanner";
import ClientLogos from "@/components/ClientLogo";
import AboutSection from "@/components/AboutSection";

export default function Digitalplanning() {
    return (
        <>
     <PageBanner
        image="/images/erik-mclean-aielvGxZB0g-unsplash.webp"
        title="Digital Planning"
        pageName="Digital Planning"
      />
      <AboutSection
      image="/images/PRINT-MEDIA.webp"
      imageAlt="About Acme Global"
      heading="DIGITAL PLANNING"
      highlightedText="PLANNING"
      paragraphs={[
        "We provide our digital planning services to our customers to solve their problem immediately. At the most simple way digital planning is a computerized method of doing something that otherwise would have to be done in another and often slower and more time consumed way. To put it another way, we’re talking about using technology to help streamline processes or to solve problems. As every technology has improved in giving digital solutions we have been developed to handle a huge range of tasks and to solve many different kinds of problems. There is one important thing to remember, these aren’t just tools, they are meant to be solutions.Many businesses have moved from in-person operations to fully remote or flexible work environments. With that shift has come the idea of digital transformation, a sweeping paradigm and shift for business operations strategy.When you commit to digital transformation you are enabling your company to modernize systems to meet evolving customer demands. We leverage new strategies that are the driving force behind a new technical revolution.",
      ]}
     
    />
      <TestimonialsSection/>
      <ClientLogos/>
        </>
    );
}