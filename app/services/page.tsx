"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Thanks! We'll get back to you within 24 hours.");
    }
  };

  return (
    <main className="min-h-screen bg-[#062225] text-[#e38d4f]">
      {/* Page Header */}
      <section className="py-12 text-center border-b border-[#e38d4f]/20">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-[#e38d4f]/80 max-w-3xl mx-auto">
          High-value B2B services with privacy at the core. Your data stays yours.
        </p>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[#e38d4f]/30 rounded-lg p-6 hover:bg-[#0a3338] transition"
              >
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-[#e38d4f]/70">{service.description}</p>
                <div className="mt-6">
                  <p className="text-2xl font-bold">{service.price}</p>
                  <p className="text-sm text-[#e38d4f]/60">{service.deliverable}</p>
                  <p className="text-sm text-[#e38d4f]/60 mt-1">{service.timeline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 border-t border-[#e38d4f]/20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-[#e38d4f]/30 bg-transparent px-4 py-3 text-[#e38d4f] placeholder-[#e38d4f]/50 focus:outline-none focus:border-[#e38d4f]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-[#e38d4f]/30 bg-transparent px-4 py-3 text-[#e38d4f] placeholder-[#e38d4f]/50 focus:outline-none focus:border-[#e38d4f]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-lg border border-[#e38d4f]/30 bg-[#062225] px-4 py-3 text-[#e38d4f] focus:outline-none focus:border-[#e38d4f]"
              >
                <option value="">Select a service</option>
                <option value="document-summarization">Document Summarization</option>
                <option value="white-paper">White Paper</option>
                <option value="custom-ai-agent">Custom AI Agent</option>
                <option value="data-enrichment">Data Enrichment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-[#e38d4f]/30 bg-transparent px-4 py-3 text-[#e38d4f] placeholder-[#e38d4f]/50 focus:outline-none focus:border-[#e38d4f]"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[#e38d4f] text-[#062225] py-3 font-semibold hover:bg-[#c47a41] transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Document Summarization",
    description: "Upload your PDFs and we'll deliver a structured summary with key points, timelines, and insights.",
    price: "From $150",
    deliverable: "Structured summary (PDF/DOCX)",
    timeline: "24-48 hours",
  },
  {
    title: "Data Extraction from PDFs",
    description: "Extract key data points from contracts, reports, and documents into CSV/Excel format.",
    price: "From $200",
    deliverable: "CSV/Excel with key data points",
    timeline: "2-3 days",
  },
  {
    title: "White Paper (15-20 pages)",
    description: "Research-backed white paper with citations on your specific industry topic.",
    price: "From $750",
    deliverable: "Professional report with citations",
    timeline: "5 business days",
  },
  {
    title: "Industry Report (30+ pages)",
    description: "Deep-dive with market analysis and strategic recommendations.",
    price: "From $1,500",
    deliverable: "Deep-dive with market analysis",
    timeline: "1-2 weeks",
  },
  {
    title: "Custom AI Agent",
    description: "Build a chatbot using local AI that's trained on your business data.",
    price: "From $1,500",
    deliverable: "Custom AI system",
    timeline: "1-2 weeks",
  },
  {
    title: "Business Process Automation",
    description: "Multiple workflows automated (bookkeeping, email, data entry, etc.).",
    price: "From $3,000",
    deliverable: "Multiple workflows automated",
    timeline: "3-6 weeks",
  },
];
