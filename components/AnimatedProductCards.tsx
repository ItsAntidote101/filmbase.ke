"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  title: string;
  description: string;
  href: string;
  image: string;
}

export default function AnimatedProductCards({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, i) => (
        <motion.div
          key={product.href}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={product.href}
            className="group flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)",
              border: "1px solid #e5e5e5",
              borderLeft: "4px solid #054e72",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 12px 32px rgba(5,78,114,0.12), 0 4px 12px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 1px 4px rgba(0,0,0,0.05)";
            }}
          >
            <div className="aspect-[4/3] overflow-hidden relative bg-brand-alt">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-7 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-brand-ink mb-3 group-hover:text-brand-ink-light transition-colors duration-200">
                {product.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed font-light mb-5 flex-1">
                {product.description}
              </p>
              <span className="inline-flex items-center gap-2 text-brand-ink text-sm font-medium">
                Learn more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
