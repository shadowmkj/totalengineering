import type { Metadata } from "next";
import ContactUs from "../../_components/contact-us";
import { IMAGE, LOGO, NAME, URL } from "@/lib/constants";
import type { Graph} from "schema-dts";


const description ="Specializing in custom metal fabrication for architectural and industrial projects. Our engineers bring your vision to life with precision and attention to detail"
const title = "Contact Us | Custom Metal Works for Architecture and Design"
const keywords = "Facade Cladding Services in Coimbatore|Stainless Steel Fabrication in Coimbatore|CNC Lathe Turning Services in"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  robots:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph:{
    type:"website",
    url: URL,
    title: title,
    description: description,
    siteName:NAME,
    images:[{
     url: URL
    }]
  },
  
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ContactPage = () => {
  const jsonLd:Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://totaleng.in/#localbusiness",
        "name": NAME,
        "telephone" : "+919514399331",
        "image": IMAGE,
        "url": "https://totaleng.in",
        "logo": LOGO,  
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+919514399331",
          "contactType": "Sales",
          "areaServed": "IN",
          "availableLanguage": "English",
          "email": "Info@totaleng.in"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "MGC Palayam, Coimbatore",  
          "addressLocality": "Coimbatore",  
          "addressRegion": "Thamilnadu", 
          "postalCode": "641107",  
          "addressCountry": "IN"  
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "9:00",
            "closes": "18:00"
          },
          
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "9:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "closed",
            "closes": "closed"
          }
        ],
        
      },
      
      {
        "@type": "WebSite",
        "@id": "https://totaleng.in/#website",
        "url": "https://totaleng.in",
        "name": NAME,  
        "publisher": {
          "@id": "https://totaleng.in/#localbusiness"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": "https://totaleng.in/#image",
        "url": IMAGE,  
        "width": "200",
        "height": "200",
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://totaleng.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://totaleng.in",
              "name": "Home"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": "https://totaleng.in/about",
              "name": "About"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@id": "https://totaleng.in/contact",
              "name": "Contact"
            }
          }
        ]
      }
    ]
    
  };
  
  return (
    <div className="pt-24">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> 
    <ContactUs />
    </div>
  );
};

export default ContactPage;
