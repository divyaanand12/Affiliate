import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Product One",
    description: "An amazing product that solves your problem.",
    image: "https://via.placeholder.com/300",
    link: "https://affiliate-link.com/product1",
  },
  {
    name: "Product Two",
    description: "Another must-have item for everyday use.",
    image: "https://via.placeholder.com/300",
    link: "https://affiliate-link.com/product2",
  },
  {
    name: "Product Three",
    description: "Top-rated and recommended by experts.",
    image: "https://via.placeholder.com/300",
    link: "https://affiliate-link.com/product3",
  },
];

const blogPosts = [
  {
    title: "How to Choose the Best Products for Affiliate Marketing",
    excerpt: "Learn the key factors to consider when selecting affiliate products to promote.",
    link: "#",
  },
  {
    title: "SEO Tips for Affiliate Sites",
    excerpt: "Boost your site's visibility and ranking with these proven SEO techniques.",
    link: "#",
  },
];

export default function AffiliateMarketingSite() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <head>
        <title>Affiliate Hub - Top Product Picks</title>
        <meta name="description" content="Discover top affiliate products and expert blog tips to boost your online income." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>
      </head>

      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Top Picks for You</h1>
        <p className="text-gray-600 mt-2">Curated products with affiliate links</p>
      </header>

      <main>
        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="rounded-2xl shadow-md">
              <img src={product.image} alt={product.name} className="rounded-t-2xl w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button asChild className="w-full">
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">From the Blog</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <Card key={index} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={post.link} className="text-blue-500 hover:underline">Read More</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md w-72"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </section>
      </main>

      <footer className="text-center mt-16 text-gray-500 text-sm">
        <p>&copy; 2025 Affiliate Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
