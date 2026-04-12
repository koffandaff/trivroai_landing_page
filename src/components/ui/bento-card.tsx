import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; 
import Image from "next/image";

// CVA for card variants
const cardVariants = cva(
  'group relative flex flex-col overflow-hidden rounded-[2rem] border bg-card text-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-md border-card-border hover:border-[#E5D08C]/30',
  {
    variants: {
      variant: {
        default: 'p-6',
        featured: 'flex-col md:flex-row',
        gold: 'bg-[#E5D08C] text-black border-none', // Special accent block
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Interface for component props
export interface BlogPostCardProps extends Omit<HTMLMotionProps<"div">, "variant">, VariantProps<typeof cardVariants> {
  tag: string;
  date?: string;
  title: string;
  description: string;
  imageUrl?: string;

  href?: string;
  icon?: React.ReactNode;
}

const BentoCard = React.forwardRef<HTMLDivElement, BlogPostCardProps>(
  ({ className, variant, tag, date, title, description, imageUrl, href = "#", icon, ...props }, ref) => {
    
    const cardHover: Variants = {
      hover: {
        y: -5,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    };
    
    const isGold = variant === 'gold';
    
    const content = (
      <>
        {variant === 'featured' && imageUrl && (
          <div className="relative w-full overflow-hidden md:w-1/2 lg:w-3/5">
            <Image
              src={imageUrl}
              alt={title || "Bento image"}
              fill
              unoptimized
              className="object-cover grayscale opacity-50 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className={cn(
                "flex items-center gap-4 text-xs font-semibold uppercase tracking-wider",
                isGold ? "text-black/60" : "text-muted"
              )}>
                <span className={cn(
                  "rounded-full px-3 py-1",
                  isGold ? "bg-black/10 text-black border border-black/20" : "bg-accent/10 border border-accent/20 text-accent"
                )}>
                  {tag}
                </span>
                {date && <span>{date}</span>}
              </div>
              {icon && (
                <div className={cn("text-2xl", isGold ? "text-black" : "text-white")}>
                  {icon}
                </div>
              )}
            </div>

            <h3 className={cn(
              "mb-3 text-2xl font-medium leading-tight lg:text-3xl tracking-tight",
              isGold ? "text-black" : "text-foreground"
            )}>
              {title}
            </h3>
            
            <p className={cn(
              "leading-relaxed",
              isGold ? "text-black/70" : "text-muted"
            )}>
              {description}
            </p>
          </div>

          <div className="mt-8 flex justify-end">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              isGold ? "bg-black text-[#E5D08C] group-hover:scale-110" : "bg-card border border-white/10 group-hover:bg-[#E5D08C] group-hover:text-black group-hover:border-transparent"
            )}>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </>
    );

    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        variants={cardHover}
        whileHover="hover"
        {...props}
      >
        <a href={href} className="absolute inset-0 z-10" aria-label={`Read more about ${title}`}>
          <span className="sr-only">Read More</span>
        </a>
        <div className="relative z-0 flex h-full w-full flex-col md:flex-row bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none">
          <div className="absolute inset-0 pointer-events-auto" />
          {content}
        </div>
      </motion.div>
    );
  }
);

BentoCard.displayName = 'BentoCard';

export { BentoCard };
