import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function CTA() {
  const whatsappLink = "https://wa.me/8801631137868?text=আসসালামু%20আলাইকুম।%20স্যার্ভিসটি%20নিতে%20চাচ্ছি"

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-card border border-border rounded-2xl p-12 md:p-16">
        <TrendingUp className="h-16 w-16 text-primary mx-auto" />

        <h2 className="text-3xl md:text-5xl font-bold text-balance">
          আজই বাড়ান আপনার <span className="text-primary">ফলোয়ার সংখ্যা</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          হাজার হাজার সন্তুষ্ট গ্রাহক ইতিমধ্যে Nexsolution ব্যবহার করে তাদের সোশ্যাল মিডিয়া প্রোফাইল গ্রো করেছে। আপনিও যোগ দিন আজই!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="bg-[#25D366] text-primary-foreground hover:bg-[#25D366]/90 text-base px-8" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              হোয়াটসঅ্যাপ করুন
            </a>
          </Button>
  
        </div>

        <p className="text-sm text-muted-foreground">১০০% নিরাপদ • ১০০% রিয়েল look like ফলোয়ার • দ্রুত ডেলিভারি</p>
      </div>
    </section>
  )
}
