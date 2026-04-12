"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 px-6 relative" id="demo">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Watch Trivro AI in Action
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-base leading-relaxed">
            See how founders and teams use Trivro AI to launch campaigns, automate workflows, and scale marketing without large teams.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 group aspect-video bg-black flex items-center justify-center cursor-pointer"
           onClick={() => setIsPlaying(true)}
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div 
                key="preview"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                {/* Max Res YouTube Thumbnail */}
                <Image 
                  src="https://img.youtube.com/vi/fkw-1HrkiIo/maxresdefault.jpg" 
                  alt="Video Preview" 
                  fill
                  unoptimized
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Play Button */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-black flex items-center justify-center shadow-[0_0_40px_rgba(229,208,140,0.4)] group-hover:shadow-[0_0_80px_rgba(229,208,140,0.6)] group-hover:scale-110 transition-all duration-500">
                  <Play size={36} className="ml-1" fill="currentColor" />
                </div>

                {/* Subtitle */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10">
                  <span className="text-white font-medium tracking-widest uppercase text-sm">Click to play preview</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/fkw-1HrkiIo?si=Gs6GnTZazwtJd9Ws&autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
