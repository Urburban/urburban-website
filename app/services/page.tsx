import Link from "next/link";
export const metadata: Metadata = {
  title: "B2B AI Services | Document Summarization, White Papers, Custom AI Agents | Urburban",
  description: "High-value B2B AI services: document summarization, white paper writing, data enrichment, and custom AI agents. Privacy-first with local AI.",
  keywords: ["document summarization", "white paper writing", "B2B AI services", "data enrichment", "custom AI agents", "privacy-first"],
};
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#062225]">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#e38d4f]">Our Services</h1>
        <p className="mt-4 text-lg text-[#e38d4f]/70 max-w-3xl mx-auto">
          High-value B2B services with privacy at the core. Your data stays yours.
        </p>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-[#e38d4f]/20 bg-[#0a3338] p-6 hover:bg-[#0d3b40] transition">
                <h2 className="text-xl font-semibold text-[#e38d4f]">{service.title}</h2>
                <p className="mt-2 text-sm text-[#e38d4f]/70">{service.description}</p>
                <div className="mt-6">
                  <p className="text-2xl font-bold text-[#e38d4f]">{service.price}</p>
                  <p className="text-sm text-[#e38d4f]/60">{service.deliverable}</p>
                  <p className="text-sm text-[#e38d4f]/60">{service.timeline}</p>
                </div>
                <Link href="/contact" className="mt-4 inline-block rounded-md bg-[#e38d4f] px-4 py-2 text-sm font-medium text-[#062225] hover:bg-[#c47a41]">
                  Request Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  { title: "Document Summarization", description: "Upload your PDFs and we'll deliver a structured summary.", price: "From $150", deliverable: "Structured summary (PDF/DOCX)", timeline: "24-48 hours" },
  { title: "Data Extraction from PDFs", description: "Extract key data points from contracts and reports.", price: "From $200", deliverable: "CSV/Excel with key data points", timeline: "2-3 days" },
  { title: "White Paper (15-20 pages)", description: "Research-backed white paper with citations.", price: "From $750", deliverable: "Professional report with citations", timeline: "5 business days" },
  { title: "Custom AI Agent (Customer Service)", description: "Build a chatbot using MAi-RAG-PA trained on your data.", price: "From $1,500", deliverable: "Chatbot using MAi-RAG-PA", timeline: "1-2 weeks" },
  { title: "Custom AI Agent (Lead Qualification)", description: "Automated lead scoring and response system.", price: "From $2,000", deliverable: "Automated lead scoring system", timeline: "2-3 weeks" },
  { title: "Business Process Automation", description: "Multiple workflows automated (bookkeeping, email, etc.).", price: "From $3,000", deliverable: "Multiple workflows automated", timeline: "3-6 weeks" },
];
