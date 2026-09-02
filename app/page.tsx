import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#062225] text-[#e38d4f]">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <div className="flex justify-center mb-8">
          <Image 
            src="/Urburban-logo-1.png" 
            alt="Urburban Designs Logo" 
            width={600} 
            height={256} 
            priority 
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">
          Privacy-First AI Services for Modern Businesses
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-[#e38d4f]/80">
          Document summarization, white papers, and custom AI automation. Your data never leaves your server. We build systems that respect your privacy and work for your business.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/services" className="px-8 py-3 bg-[#e38d4f] text-[#062225] rounded-lg font-semibold hover:bg-[#c47a41] transition">
            Our Services
          </Link>
          <Link href="/contact" className="px-8 py-3 border border-[#e38d4f] text-[#e38d4f] rounded-lg font-semibold hover:bg-[#e38d4f] hover:text-[#062225] transition">
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 border-t border-[#e38d4f]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Urburban?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Data Sovereignty",
                description: "Your documents never leave our servers. We use local, open-source AI.",
              },
              {
                title: "Premium Quality",
                description: "Professional reports and systems that meet the highest standards.",
              },
              {
                title: "Custom Solutions",
                description: "Every business is different. We build systems tailored to your needs.",
              },
            ].map((feature, index) => (
              <div key={feature.title} className="border border-[#e38d4f]/30 rounded-lg p-6 hover:bg-[#0a3338] transition">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#e38d4f]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
