'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { MessengerButton } from './components/messenger.component';

import { Copy } from 'lucide-react';

const product = {
  name: 'Premium Hoodie',
  price: 59.99,
  rating: 4.8,
  reviews: 132,
  description:
    'A premium cotton hoodie designed for comfort and style. Perfect for everyday wear with a modern minimalist look.',
  images: [
    'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610858562676-a65264bef29b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  specs: {
    Material: '100% Cotton',
    Fit: 'Regular Fit',
    Weight: '350 GSM',
    Origin: 'Made in Philippines',
    Care: 'Machine wash cold',
  },
};

const relatedProducts = [
  {
    name: 'Classic Tee',
    price: 29,
    image:
      'https://images.unsplash.com/photo-1610858562676-a65264bef29b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Minimal Jacket',
    price: 89,
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Essential Cap',
    price: 19,
    image:
      'https://images.unsplash.com/photo-1714928829549-b6d9964e7459?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [tab, setTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const [copied, setCopied] = useState(false);

  const copyMessage = () => {
    const message = `Hello! I would like to inquire about this item: ${window.location.href}`;
    navigator.clipboard.writeText(message);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32">
      {/* PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
          <motion.div
            className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image src={selectedImage} alt="product" fill className="object-cover" />
          </motion.div>

          {/* Thumbnail images */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border ${
                  selectedImage === img ? 'border-white' : 'border-transparent'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <Star className="text-yellow-400" size={18} />
            <span>{product.rating}</span>
            <span className="text-zinc-400 text-sm">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-semibold mb-4">${product.price}</p>

          {/* Description */}
          <p className="text-zinc-400 mb-6 max-w-xl">{product.description}</p>

          {/* Copy Message & Social Links */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            {/* Copy Button */}
            <button
              onClick={copyMessage}
              className="flex items-center gap-2 px-5 py-3 text-sm rounded-xl bg-white/10 hover:bg-gray-800 transition font-medium"
            >
              <Copy size={18} />
              {copied ? (
                <span className="text-green-400 text-sm">Message copied ✔</span>
              ) : (
                'Copy details'
              )}
            </button>

            {/* {copied && <span className="text-green-400 text-sm">Message copied ✔</span>} */}
          </div>

          {/* Social Links */}
          <MessengerButton />
        </div>
      </div>

      {/* TABS SECTION */}
      <div className="max-w-7xl mx-auto py-28">
        {/* GLASS CONTAINER */}
        <div className="">
          {/* TABS */}
          <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-800 pb-6">
            {['description', 'specs', 'reviews'].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`capitalize px-5 py-2 rounded-full text-sm transition-all duration-300
          
          ${
            tab === t
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_5px_20px_rgba(168,85,247,0.4)]'
              : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
          }
          
          `}
              >
                {t}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="min-h-[180px]">
            {tab === 'description' && (
              <p className="text-zinc-400 leading-relaxed w-full text-[15px]">
                This hoodie is crafted from high-quality cotton to provide ultimate comfort and
                durability. Designed with a minimalist silhouette, it pairs effortlessly with any
                outfit. Perfect for casual wear, travel, and everyday style.
              </p>
            )}

            {/* SPECS */}
            {tab === 'specs' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur hover:border-purple-500/30 transition"
                  >
                    <span className="text-zinc-400 text-sm">{key}</span>

                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* REVIEWS */}
            {tab === 'reviews' && (
              <div className="space-y-6 w-full">
                <div className="p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur hover:border-purple-500/30 transition">
                  <p className="font-medium text-white mb-2">John D.</p>
                  <p className="text-zinc-400 text-sm">
                    Super comfortable hoodie. The quality is excellent and fits perfectly!
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur hover:border-purple-500/30 transition">
                  <p className="font-medium text-white mb-2">Maria S.</p>
                  <p className="text-zinc-400 text-sm">
                    Love the minimal design. Definitely buying another color.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <h2 className="text-3xl font-semibold mb-10 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
          Related Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {relatedProducts.map((item, i) => (
            <motion.div
              key={i}
              className="group cursor-pointer aspect-[328/494] rounded-2xl overflow-hidden border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
              transition={{ duration: 0.25 }}
            >
              {/* IMAGE */}
              <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* INFO PANEL */}
                <div className="absolute bottom-0 left-0 w-full p-1">
                  <div className="p-4 rounded-xl bg-gradient-to-b from-zinc-900/90 to-zinc-900/70 backdrop-blur border border-white/5 shadow-lg">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-medium text-white leading-tight">
                          {item.name}
                        </h3>

                        <div className="mt-1">
                          <span className="text-xl font-semibold text-white">${item.price}</span>

                          <span className="text-xs text-zinc-400 ml-1">Suggested Donation</span>
                        </div>
                      </div>

                      <button className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-purple-500 transition group-hover:rotate-90 duration-300">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
