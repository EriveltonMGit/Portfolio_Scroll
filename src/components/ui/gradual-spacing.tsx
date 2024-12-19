"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "./lib/utils";

interface GradualSpacingProps {
  text: string; // O texto é uma string fixa passada como prop
  duration?: number; // Duração da animação
  delayMultiple?: number; // Multiplicador para atrasos entre caracteres
  framerProps?: Variants; // Configurações de animação do framer-motion
  className?: string; // Classes CSS personalizadas
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 }, // Animação inicial
    visible: { opacity: 1, x: 0 },  // Animação ao aparecer
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex justify-center flex-wrap space-x-1 text-center sm:space-x-0">
      <AnimatePresence>
        {/* Divide o texto em palavras e depois em caracteres */}
        {text.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="flex">
            {word.split("").map((char, charIndex) => (
              <motion.h1
                key={charIndex}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={framerProps}
                transition={{
                  duration,
                  delay: wordIndex * 0.2 + charIndex * delayMultiple,
                }}
                className={cn("drop-shadow-sm", className)}
              >
                {char === " " ? <span>&nbsp;</span> : char}
              </motion.h1>
            ))}
            {/* Adiciona espaço entre palavras */}
            <span>&nbsp;</span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
