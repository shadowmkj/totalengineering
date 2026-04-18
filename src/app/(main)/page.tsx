import { HydrateClient } from "@/trpc/server";
import HeroSection from "../_components/hero-section";
import QuoteSection from "../_components/quote-section";
import GallerySection from "../_components/gallery-section";
import CardSection from "../_components/card-section";
import ImageContentSection from "../_components/image-section";
import Faq from "../_components/faq-section";
import AddressMap from "../_components/address-map";
import { NAME, URL,IMAGE, LOGO } from "@/lib/constants";
import type { Metadata} from "next";
import { Graph } from "schema-dts"

const description ="Discover precision metal fabrication, architectural metal works, CNC lathe machining, stainless steel fabrication, and facade cladding services. Excellence and innovation guaranteed."
const title = "Expert Metal Fabrication & Architectural Metal Works | CNC, Stainless Steel & Cladding"
const keywords = "Facade Cladding Solutions|Stainless Steel Fabrication|CNC Lathe Turning Services"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords:keywords,
  robots:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph:{
    type:"website",
    url: URL,
    title: title,
    description: description,
    siteName:NAME,
    images:[{
     url: IMAGE
    }]
  },
  
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
export default async function Home() {

    const jsonLd: Graph = {
      '@context': 'https://schema.org',
      "@graph": [
        {
              "@type": "Organization",
              "@id": 'https://totaleng.in/#organization',
              "name": NAME,
              "url":"https://totaleng.in",
              "logo":{"@type":"ImageObject",
              "@id":"https://totaleng.in/#logo",
              "url": LOGO,
              "contentUrl":LOGO,
              "caption":"totaleng.in",
              "inLanguage":"en-GB",
              "width":"500",
              "height":"500"}},
               
            {
            "@type":"WebSite","@id":"https://totaleng.in/#website",
            "url":"https://totaleng.in",
            "name": NAME,
            "publisher":{"@id":"https://totaleng.in/#organization"},
            "inLanguage":"en-US",
            "potentialAction":{"@type":"SearchAction",
            "target":"https://totaleng.in/?s={search_term_string}",
            "query": "Search",
            }},
            {"@type":"ImageObject",
              "@id":IMAGE,
              "url":IMAGE,
              "width":"200","height":"200",
              "inLanguage":"en-US"},
            {"@type":"BreadcrumbList",
              "@id":"https://totaleng.in/home/#breadcrumb",
              "itemListElement":[
                {"@type":"ListItem",
                "position":1,
                "item":{"@id":"https://totaleng.in",
                "name":"Home"}},
              ]},
            {"@type":"WebPage","@id":"https://totaleng.in/#webpage",
              "url":URL,
              "name":NAME,
              "datePublished":"2025-02-05T11:26:39+00:00",
              "dateModified":"2025-12-12T19:17:19+00:00",
              "about":{"@id":"https://totaleng.in/#organization"},
              "isPartOf":{"@id":"https://totaleng.in/#website"},
              "primaryImageOfPage":{"@id":IMAGE},
              "inLanguage":"en-US"},
              {"@type":"Person",
                "@id":URL,
                "name":"Johns Abraham",
                "url":URL,
                "image":{"@type":"ImageObject","@id":URL,
                "url":URL,
                "caption":NAME,"inLanguage":"en-US"},"sameAs":[URL],"worksFor":{"@id":"https://totaleng.in/#organization"}},
              {"@type":"Article","headline":title,
                "keywords":keywords,
                "datePublished":"2024-02-05T11:26:39+00:00",
                "dateModified":"2025-12-12T19:17:19+00:00",
                "author":{"@id":URL,"name":"Johns Abraham"},
                "publisher":{"@id":"https://totaleng.in/#organization"},
                "description": description,
                "name":NAME,
                "@id":"https://totaleng.in/#richSnippet",
                "isPartOf":{"@id":"https://totaleng.in/#webpage"},
                "image":{"@id":IMAGE},
                "inLanguage":"en-US","mainEntityOfPage":{"@id":"https://totaleng.in/#webpage"}}
      ]
      
    }
  return (
    
    <HydrateClient>
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> 
      <main className="scroll-smooth text-white">
        <HeroSection />
        <QuoteSection />
        <ImageContentSection />
        <CardSection />
        <GallerySection />
        
        <Faq />
     
        <AddressMap />
      </main>
    </HydrateClient>
  );
}
