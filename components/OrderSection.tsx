"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Truck } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "আপনার সম্পূর্ণ নাম লিখুন"),
  phone: z.string().regex(/^(01)[3-9][0-9]{8}$/, "সঠিক মোবাইল নম্বর দিন (১১ ডিজিট)"),
  address: z.string().min(5, "আপনার সম্পূর্ণ ঠিকানা লিখুন"),
  district: z.string().min(2, "জেলার নাম লিখুন"),
});

export default function OrderSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      district: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Order Data:", values);
    // Integrate API call to database / webhook here
  }

  const PRICE = 1250;
  const DELIVERY_FEE = 120; // Default outside Dhaka, make dynamic based on district if needed

  return (
    <section id="order-section" className="py-20 bg-slate-100">
      <div className="container max-w-5xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">অর্ডার করতে আপনার তথ্য দিন</h2>
          <p className="text-slate-600">১০০% ক্যাশ অন ডেলিভারি - পণ্য হাতে পেয়ে টাকা দিন</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl rounded-2xl border-0 overflow-hidden">
              <CardHeader className="bg-brand-green text-white">
                <CardTitle className="text-xl">অর্ডার ফর্ম (Order Form)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">আপনার নাম (Name)</label>
                    <Input {...form.register("name")} placeholder="যেমন: মোঃ আব্দুল্লাহ" className="h-12" />
                    {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">মোবাইল নাম্বার (Phone)</label>
                    <Input {...form.register("phone")} type="tel" placeholder="01XXXXXXXXX" className="h-12" />
                    {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">জেলা (District)</label>
                    <Input {...form.register("district")} placeholder="যেমন: ঢাকা" className="h-12" />
                    {form.formState.errors.district && <p className="text-red-500 text-xs">{form.formState.errors.district.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">সম্পূর্ণ ঠিকানা (Full Address)</label>
                    <Input {...form.register("address")} placeholder="বাড়ি নং, রাস্তা, এলাকা" className="h-12" />
                    {form.formState.errors.address && <p className="text-red-500 text-xs">{form.formState.errors.address.message}</p>}
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg bg-brand-green hover:bg-brand-dark rounded-xl mt-4">
                    কনফার্ম অর্ডার (Confirm Order)
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-lg rounded-2xl border-0 bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">অর্ডার সামারি (Order Summary)</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-md overflow-hidden">
                      <Image src="https://images.unsplash.com/photo-1596647901198-5c4d324b11f2?q=80&w=200&auto=format&fit=crop" width={64} height={64} alt="Product" className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">4-in-1 Electric Chopper</h4>
                      <p className="text-xs text-slate-500">Qty: 1</p>
                    </div>
                  </div>
                  <span className="font-bold">৳ {PRICE}</span>
                </div>

                <div className="space-y-2 text-sm border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Subtotal:</span>
                    <span className="font-medium">৳ {PRICE}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Delivery Charge:</span>
                    <span className="font-medium">৳ {DELIVERY_FEE}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2 text-lg font-bold">
                    <span>Total (মোট):</span>
                    <span className="text-brand-green">৳ {PRICE + DELIVERY_FEE}</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg text-brand-dark text-sm">
                    <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                    <p>নিরাপদ পেমেন্ট - পণ্য হাতে পেয়ে টাকা পরিশোধ করুন।</p>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg text-blue-800 text-sm">
                    <Truck className="h-5 w-5 flex-shrink-0" />
                    <p>সারা বাংলাদেশে ২-৩ দিনের মধ্যে হোম ডেলিভারি।</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
