import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface AnimatedHeroProps {
  badgeText?: string;
  badgeLink?: string;
  leadPrefix?: string;
  titles?: string[];
  description?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  className?: string;
}

function Hero({
  badgeText = "Explore 2026 Engineering Portfolio",
  badgeLink = "#work",
  leadPrefix = "Architecting",
  titles: customTitles,
  description = "Full-stack engineer crafting resilient web architectures, intelligent ML pipelines, and production-grade applications under pranataa-labs.",
  primaryCtaText = "View Selected Work",
  primaryCtaLink = "#work",
  secondaryCtaText = "Get in Touch",
  secondaryCtaLink = "#contact",
  className = "",
}: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () =>
      customTitles || [
        "robust systems",
        "smart workflows",
        "modern web apps",
        "ML pipelines",
        "clean architectures",
      ],
    [customTitles]
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex gap-6 py-12 md:py-20 lg:py-28 items-center justify-center flex-col text-center">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href={badgeLink}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-3 rounded-full border border-border/80 px-4 py-2 text-xs font-mono uppercase tracking-wider shadow-sm hover:border-foreground/30 transition-all"
                >
                  {badgeText} <MoveRight className="w-3.5 h-3.5" />
                </Button>
              </a>
            </motion.div>
          )}

          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl tracking-tighter text-center font-display font-medium leading-[1.08]">
              <span className="block text-foreground/80">{leadPrefix}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 min-h-[1.25em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-foreground underline decoration-foreground/20 decoration-wavy underline-offset-8"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: "0%",
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? "-120%" : "120%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-4 font-sans">
              {description}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto px-6"
          >
            {primaryCtaText && (
              <a href={primaryCtaLink} className="w-full sm:w-auto">
                <Button size="lg" className="gap-3 w-full sm:w-auto font-medium">
                  {primaryCtaText} <MoveRight className="w-4 h-4" />
                </Button>
              </a>
            )}
            {secondaryCtaText && (
              <a href={secondaryCtaLink} className="w-full sm:w-auto">
                <Button size="lg" className="gap-3 w-full sm:w-auto" variant="outline">
                  {secondaryCtaText} <PhoneCall className="w-4 h-4" />
                </Button>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
export default Hero;
