"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#062225] text-[#e38d4f] py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Urburban Designs</h1>
        {!submitted ? (
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
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-lg border border-[#e38d4f]/30 bg-transparent px-4 py-3 text-[#e38d4f] placeholder-[#e38d4f]/50 focus:outline-none focus:border-[#e38d4f]"
                placeholder="How can we help?"
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#e38d4f] text-[#062225] py-3 font-semibold hover:bg-[#c47a41]">
              Send Message
            </button>
          </form>
        ) : (
          <div className="rounded-lg bg-green-50 p-6 text-green-800">
            <h2>Thank you!</h2>
            <p>We'll respond within 24 hours.</p>
          </div>
        )}
      </div>
    </main>
  );
}
