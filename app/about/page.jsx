export const metadata = {
    title: "About Us - Acme Global",
    description:
      "We want to be recognized for our contribution to the digital economy of India. We want to be acknowledged and respected for the value we bring to Indian business and society.",
    authors: [{ name: "Sense Project Pvt Ltd" }],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    alternates: {
      canonical: "https://acmeglobal.in/about",
    },
    openGraph: {
      title: "About Us - Acme Global",
      description:
        "Learn about our mission to boost India's digital economy through marketing, branding, and technology.",
      url: "https://acmeglobal.in/about",
      siteName: "Acme Global",
      images: [
        {
          url: "https://acmeglobal.in/images/corporate1.webp",
          width: 1200,
          height: 630,
          alt: "Acme Global Office",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
  




import ClientLogos from "../../components/ClientLogo";
import AboutSection from '@/components/AboutSection';
import Link from "next/link"
import PageBanner from "../../components/PageBanner";


const values = [
    'We create experiences',
    'We simplify marketing',
    'We amplify brands',
    'We communicate with purpose'
];
export default function About() {
    return (
        <>

<PageBanner
        image="/images/swello-VW7ll65EAwA-unsplash.webp"
        title="About Us"
        pageName="About"
      />

<AboutSection
      image="/images/corporate1.webp"
      imageAlt="About Acme Global"
      heading="About"
      highlightedText="Acme Global"
      paragraphs={[
        "Acme Global is one of the leading promotion, branding, advertising and media buying agencies of India. We are widely recognized to have more than 25 years experience in advertising marketing.",
        "Being a full-service advertising agency we offer our customers the entire range of media communication platforms in both classical and digital formats. We are widely known for our blending creativity and techniques that transform and grow our clients businesses. We attempt to move with your needs.",
        "Our target derives to 'motivate our clients' and we make consumers more technology statics that's why we strongly believe in trustful relationships we build. We are widely appreciated to create experience based working availability and intentionally simplify business and brand marketing capabilities to touch worldwide fame.",
      ]}
      points={[
        "We create experiences",
        "We simplify marketing",
        "We amplify brands",
        "We communicate with purpose",
      ]}
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
                        ACME Global is an insight-driven advertising company with roots in the <br/>programmatic space since 2009. We are strongly positioned to capitalise on the <br/>convergence of data, media, insights and technology to revolutionise how <br/>brands connect with consumers.
                        </div>
                    </div>
                </div>
            </div>
        <ClientLogos/>
        </>
    );
}