import { Award, TrendingUp, Target } from "lucide-react";

export function HighlightSection() {
  return (
    <section className="py-16 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Card 1 */}
            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 backdrop-blur border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                সবচেয়ে এক্সপার্ট সার্ভিস প্রভাইডার 💼
              </h3>
            </div>
            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 backdrop-blur border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                দেশের পুরনো ও নাম্বার ওয়ান পেজ গ্রোথ সলিউশন! 🚀
              </h3>
            </div>

            {/* Card 3 */}
            <div className="text-center space-y-3 p-6 rounded-xl bg-background/50 backdrop-blur border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                আপনার পেজের সাফল্য এখান থেকেই শুরু
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
