import type { Graph} from "schema-dts";
import type { Metadata } from "next";
import { IMAGE, NAME, URL } from "@/lib/constants";

const description ="We are looking for a skilled Mechanical Engineer to join our team. The ideal candidate will have a strong background in mechanical engineering principles, experience with CAD software, and a passion for innovation in the field of metal fabrication and architectural design."
const title = "Careers | Custom Metal Works for Architecture and Design"
const keywords = "Facade Cladding Services in Coimbatore|Stainless Steel Fabrication in Coimbatore|CNC Lathe Turning Services in Coimbatore"
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

const CareersPage = () => {
 const jsonLd:Graph = {
	 "@context": "https://schema.org",
	 "@graph": [
		{

	  "@type" : "JobPosting",
      "title" : "Mechanical Engineer",
      "description" : "We are looking for a skilled Mechanical Engineer to join our team. The ideal candidate will have a strong background in mechanical engineering principles, experience with CAD software, and a passion for innovation in the field of metal fabrication and architectural design.",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Total Engineering",
        "value": "6161"
      },
	  "datePosted" : "2026-05-01",
      "validThrough" : "2026-06-18T00:00",
      "employmentType" : "FULL_TIME",
      "hiringOrganization" : {
        "@type" : "Organization",
        "name" : "Total Engineering",
        "sameAs" : "https://www.totalengineering.com",
        "logo" : "https://www.totaleng.in/_next/image?url=%2Flogo.webp&w=256&q=75"
      },
	   "jobLocation": {
      "@type": "Place",
        "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sri Kanika Garden,MGC Palayam",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "postalCode": "641107",
        "addressCountry": "IN"
        }
      },
	   "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 15000.00,
          "maxValue": 25000.00,
          "unitText": "MONTH"
        }
      }
	}
	 ]
 }
	const posts = [
		{
			id: '1',
			data: {
				category: 'engineering',
				pubDate: '2026-05-01T08:00:00.000Z',
				title: 'Mechanical Engineer',
				excerpt: 'Currently We are seeking a skilled Mechanical Engineer (BE/Diploma) with 3-5+ years of experience in structural/sheet metal fabrication',
			},
		},
		
	];

	const categoryLabel = (cat: string) => {
		const map: Record<string, string> = {
			engineering: 'Engineering',
			design: 'Design',
			marketing: 'Marketing',
		};
		return map[cat] ?? 'General';
	};

	const categoryBgColor = (cat: string) => {
		switch (cat) {
			case 'engineering':
				return 'bg-blue-500';
			case 'design':
				return 'bg-pink-500';
			case 'marketing':
				return 'bg-yellow-400';
			default:
				return 'bg-gray-300';
		}
	};

	const formatDate = (iso?: string) => {
		if (!iso) return '';
		try {
			return new Date(iso).toLocaleDateString();
		} catch {
			return iso;
		}
	};

    return(
        
        <div className="pt-32 mb-16 flex flex-col items-center text-center justify-center gap-y-6 max-w-3xl mx-auto text-balance">
			  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> 
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">Careers</h1>
            <p>Welcome to our careers page!</p>
<div className="max-w-3xl mx-auto">
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
			className="filter-btn bg-brand-blue text-white border-brand-blue px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer"
			data-filter="all"
		>
			All
		</button>
    </div>

</div>
<div className="flex flex-col gap-6">

	{
		posts.map((post) => (
			<div key={post.id} className="blog-item" data-category={post.data.category}>
				<article className="flex bg-secondary rounded-xl relative hover:translate-x-2 transition shadow-sm hover:shadow-md overflow-hidden">
					<div className={`w-2 shrink-0 ${categoryBgColor(post.data.category)}`} />
					<div className="flex-1 p-5">
						<div className="flex items-center gap-3 mb-2">
							<span className="text-xs font-semibold bg-card rounded-full px-2 py-1">
								{categoryLabel(post.data.category)}
							</span>
							<span className="text-sm text-brand-foreground/50 flex items-center">
								<span className="inline-block mr-1">📅</span>
								{formatDate(post.data.pubDate)}
							</span>
						</div>

						<h2 className="text-xl font-semibold mb-2 ">{post.data.title}</h2>

						<p className="text-base text-brand-foreground/70 mb-4 leading-relaxed ">{post.data.excerpt}</p>

						<a href="https://www.naukri.com/job-listings-300426027875" className="text-brand-blue text-base font-bold ">
							Read more →
							<span className="absolute inset-0" />
						</a>
					</div>
				</article>
			</div>
		))
	}
</div>

</div>
        
    )
}

export default CareersPage;