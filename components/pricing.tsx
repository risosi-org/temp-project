import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "স্টার্টার",
    price: "১,৫০০",
    followers: "১০,০০০",
    features: ["১০,০০০ ফলোয়ার", "১০০% রিয়েল look like অ্যাকাউন্ট", "দ্রুত ডেলিভারি", "২৪/৭ সাপোর্ট", "নিরাপদ ও সুরক্ষিত"],
  },
  {
    name: "গ্রোথ",
    price: "৭,৫০০",
    followers: "৫০,০০০",
    features: [
      "৫০,০০০ ফলোয়ার",
      "১০০% রিয়েল look like অ্যাকাউন্ট",
      "অগ্রাধিকার ডেলিভারি",
      "২৪/৭ প্রিমিয়াম সাপোর্ট",
      "নিরাপদ ও সুরক্ষিত",
      "লাইফটাইম গ্যারান্টি",
    ],
    popular: true,
  },
  {
    name: "প্রো",
    price: "১৪,৫০০",
    followers: "১,০০,০০০",
    features: [
      "১,০০,০০০ ফলোয়ার",
      "১০০% রিয়েল look like অ্যাকাউন্ট",
      "সুপার ফাস্ট ডেলিভারি",
      "ডেডিকেটেড সাপোর্ট",
      "নিরাপদ ও সুরক্ষিত",
      "লাইফটাইম গ্যারান্টি",
      "ফ্রি রিফিল সার্ভিস",
    ],
  },
]

export function Pricing() {
  const whatsappLink = "https://wa.me/8801631137868?text=আসসালামু%20আলাইকুম।%20স্যার্ভিসটি%20নিতে%20চাচ্ছি"

  return (
    <section id="pricing" className="container mx-auto px-4 py-20 md:py-32 scroll-mt-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          আপনার জন্য <span className="text-primary">সঠিক প্যাকেজ</span> খুঁজে নিন
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          স্বচ্ছ মূল্য, কোনো লুকানো খরচ নেই। ১০০% নিরাপদ ও কার্যকর।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`p-8 bg-card border-border relative ${plan.popular ? "border-primary border-2" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  জনপ্রিয়
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold">৳{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.followers} ফলোয়ার</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-[#25D366] text-primary-foreground hover:bg-[#25D366]/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                অর্ডার করুন
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
