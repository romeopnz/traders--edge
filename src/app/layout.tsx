// src/app/layout.tsx
import './globals.css';

export const metadata = {
  title: "Trader's Edge",
  description: "AI-powered SaaS bundle for Forex traders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
