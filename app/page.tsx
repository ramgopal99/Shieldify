"use client"

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { RiShieldKeyholeLine, RiNewspaperLine, RiLockPasswordLine, RiCodeSSlashLine } from "react-icons/ri";
import { siteConfig } from "@/config/site";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "framer-motion";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 bg-white/20 text-white">
            <span className="font-semibold">Stay Protected</span> - Your Cybersecurity Hub
          </Badge>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl text-white">
            Secure Your Digital World
          </h1>
          <p className="mb-10 text-xl text-gray-300 max-w-2xl mx-auto">
            {siteConfig.description} Empowering you with the latest cybersecurity news, tools, and insights to protect your digital assets.
          </p>
          <Link href="/dashboard">
            <RainbowButton className="text-lg px-8 py-3">Explore Our Tools 🛡️</RainbowButton>
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          <FeatureCard
            icon={<RiNewspaperLine className="w-12 h-12 text-teal-400" />}
            title="Cybersecurity News"
            description="Stay informed with the latest cybersecurity threats, breaches, and best practices."
            onHover={() => setHoveredCard("news")}
            isHovered={hoveredCard === "news"}
          />
          <FeatureCard
            icon={<RiShieldKeyholeLine className="w-12 h-12 text-teal-400" />}
            title="Email Breach Checker"
            description="Verify if your email has been compromised in known data breaches."
            onHover={() => setHoveredCard("email")}
            isHovered={hoveredCard === "email"}
          />
          <FeatureCard
            icon={<RiLockPasswordLine className="w-12 h-12 text-teal-400" />}
            title="Password Strength Checker"
            description="Assess the strength of your passwords and get recommendations for improvement."
            onHover={() => setHoveredCard("password")}
            isHovered={hoveredCard === "password"}
          />
          <FeatureCard
            icon={<RiCodeSSlashLine className="w-12 h-12 text-teal-400" />}
            title="Code Vulnerability Checker"
            description="Scan your code for potential security vulnerabilities and get remediation advice."
            onHover={() => setHoveredCard("code")}
            isHovered={hoveredCard === "code"}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            With cutting-edge tools and real-time insights, we ensure your digital safety is always a priority. Discover, explore, and secure with confidence.
          </p>
        </motion.div>
        </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onHover: () => void;
  isHovered: boolean;
}

function FeatureCard({ icon, title, description, onHover, isHovered }: FeatureCardProps) {
  return (
    <motion.div 
      className="bg-gray-800 backdrop-blur-lg p-6 rounded-lg shadow-lg transition-all duration-300 transform"
      whileHover={{ scale: 1.05 }}
      onHoverStart={onHover}
      animate={{
        boxShadow: isHovered ? "0 0 25px 5px rgba(20, 184, 166, 0.5)" : "0 0 0 0 rgba(0, 0, 0, 0)"
      }}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-400/20 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}