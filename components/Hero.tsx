"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToOrder = () => {
    document.getElementById("order-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full pt-20 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-brand-light to-white overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-brand-green bg-brand-green/10 text-brand-dark w-fit">
              🔥 স্টক ফুরিয়ে যাওয়ার আগেই অর্ডার করুন
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              রান্নাঘরের কাজ হোক <br />
              <span className="text-brand-green">আরও সহজ ও দ্রুত!</span>
            </h1>
            <p className="text-lg text-slate-600 md:text-xl max-w-[600px]">
              ৪-ইন-১ রিচার্জেবল ইলেকট্রিক চপার দিয়ে রসুন, পেঁয়াজ, সবজি বা মাংস কাটুন মাত্র কয়েক সেকেন্ডে। কোনো তারের ঝামেলা নেই।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToOrder}
                size="lg" 
                className="bg-brand-green hover:bg-brand-dark text-white rounded-full text-lg h-14 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                অর্ডার করুন (Order Now)
              </Button>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-brand-green"/> ক্যাশ অন ডেলিভারি (Cash on Delivery)</li>
              <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-brand-green"/> ৭ দিনের রিপ্লেসমেন্ট গ্যারান্টি</li>
              <li className="flex items-center"><CheckCircle2 className="mr-2 h-4 w-4 text-brand-green"/> সারা বাংলাদেশে দ্রুত ডেলিভারি</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1596647901198-5c4d324b11f2?q=80&w=800&auto=format&fit=crop"
              alt="4-in-1 Electric Chopper"
              width={600}
              height={600}
              className="relative z-10 object-contain drop-shadow-2xl animate-float rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
