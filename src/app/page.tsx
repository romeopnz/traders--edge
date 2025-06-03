
---

# 7. `src/app/page.tsx`

```tsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function TradersEdge() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submit, replace with Tally.so integration or backend
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-4"
      >
        Trader&apos;s Edge
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl md:text-2xl text-center max-w-2xl mb-8"
      >
        A 5-in-1 AI-powered SaaS bundle for Forex traders. Save time, reduce risk,
        and trade smarter.
      </motion.p>

      <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-2xl p-6">
        {submitted ? (
          <div className="text-center text-green-400 text-xl">
            You&apos;re on the list! Check your inbox for early access. 🚀
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium">Join the waitlist</label>
            <input
              type="email"
              placeholder="you@forexmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border-none"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded"
            >
              Get Early Access
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {[
          "AI Trade Analyzer",
          "Risk Calculator",
          "Signal Generator",
          "Market Calendar Explainer",
          "Telegram Alert Builder",
        ].map((tool, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-4 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold mb-2">{tool}</h3>
            <p className="text-gray-300">
              AI-enhanced tool to help you with {tool.toLowerCase()} and improve your trading decisions.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
