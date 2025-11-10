import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function Hero() {
  const whatsappLink = "https://wa.me/8801631137868?text=আসসালামু%20আলাইকুম।%20স্যার্ভিসটি%20নিতে%20চাচ্ছি"

  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">দ্রুত ফলোয়ার গ্রোথ Solution </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
          দ্রুত ফলোয়ার গ্রোথ, <span className="text-primary">দৃশ্যমান রেজাল্ট!</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          আপনার বিসনেস  পেজ হোক আরও জনপ্রিয় ও বিশ্বাসযোগ্য — বাড়বে ফলোয়ার, বাড়বে ক্রেতাদের ট্রাস্ট।
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button size="lg" className="bg-[#25D366] text-primary-foreground hover:bg-[#25D366]/90 text-base px-8" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              এখনই অর্ডার করুন
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent hover:bg-[#25D366]" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              আরও জানুন
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
