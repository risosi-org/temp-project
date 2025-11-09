import { Users, TrendingUp, Shield, Zap, BarChart3, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: TrendingUp,
    title: "দ্রুত গ্রোথ",
    description: "মাত্র কয়েক দিনেই দেখুন আপনার ফলোয়ার সংখ্যা বৃদ্ধি",
  },
  {
    icon: Users,
    title: "রিয়েল লুক ফলোয়ার",
    description: "১০০% রিয়েল look like অ্যাকাউন্ট এবং অ্যাক্টিভ ফলোয়ার",
  },
  {
    icon: Shield,
    title: "নিরাপদ ও সুরক্ষিত",
    description: "আপনার অ্যাকাউন্ট সম্পূর্ণ নিরাপদ থাকবে",
  },
  {
    icon: Zap,
    title: "তাৎক্ষণিক শুরু",
    description: "অর্ডারের সাথে সাথেই কাজ শুরু হয়ে যাবে",
  },
  {
    icon: BarChart3,
    title: "দৃশ্যমান ফলাফল",
    description: "প্রতিদিন দেখুন আপনার পেজের উন্নতি",
  },
  {
    icon: Award,
    title: "বিশ্বাসযোগ্যতা বৃদ্ধি",
    description: "বেশি ফলোয়ার মানে বেশি ক্রেতার বিশ্বাস",
  },
]

export function Features() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
          কেন <span className="text-primary">Nexsolution</span> বেছে নেবেন?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          আমরা প্রদান করি সবচেয়ে দ্রুত এবং নিরাপদ ফলোয়ার গ্রোথ সার্ভিস
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
