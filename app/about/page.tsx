import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Urburban | Privacy-First B2B AI Solutions",
  description: "Urburban Designs specializes in privacy-first B2B AI services. Learn how we build custom AI systems that keep your data on your servers.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#062225] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#e38d4f] mb-8">About Urburban Designs</h1>
        <div className="space-y-4 text-lg text-[#e38d4f]/70">
          <p>
            Urburban Designs specializes in high-value B2B AI services, including document summarization, white paper creation, and custom AI automation. We are committed to privacy-first solutions that keep your business data on your own servers.
          </p>
          <p>
            One of our frameworks, is an AI system built for local, private use. We help businesses leverage this technology to automate processes, extract insights, and generate professional reports—all without cloud dependency.          </p>
          <p>
            Whether you need a quick summary of a 100-page contract or a fully custom AI agent, we deliver quality work with complete confidentiality.
          </p>
        </div>
        <Link href="/services" className="mt-8 inline-block text-[#e38d4f] underline hover:text-[#c47a41]">
          Explore our services →
        </Link>
      </div>
    </main>
  );
}
