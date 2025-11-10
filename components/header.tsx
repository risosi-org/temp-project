import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const whatsappLink = "https://wa.me/8801631137868?text=আসসালামু%20আলাইকুম।%20স্যার্ভিসটি%20নিতে%20চাচ্ছি"

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481994638_608629058732774_545523277544229596_n%20%284%29-4h0vhXlIa0LgQEJ1CQ0tevxqbyKjAC.png"
            alt="Nexsolution"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl">Nexsolution</span>
        </div>
        <Button 
          size="sm" 
          className="bg-[#25D366] text-primary-foreground hover:bg-[#25D366]/90 relative z-10 cursor-pointer"
          asChild
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            যোগাযোগ করুন
          </a>
        </Button>
      </div>
    </header>
  )
}
