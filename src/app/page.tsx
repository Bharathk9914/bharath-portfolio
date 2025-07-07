"use client";

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-b from-slate-100 via-white to-gray-50 px-8 py-12 space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <motion.section 
        className="text-center space-y-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-indigo-800">Bharath Sai</h1>
        <p className="text-lg text-sky-700">
          Senior UI/UX Developer | React, Angular, Next.js, GraphQL
        </p>
        <a href="https://www.linkedin.com/in/bharath-k-948a33321"
         className="w-full text-sky-700 border-sky-500 px-8 py-3 text-base">
          LinkedIn</a>
        <p className="text-gray-600">
          Building accessible, scalable, and high-performance digital experiences.
        </p>
        
      </motion.section>

      {/* About Me */}
      <motion.section
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">About Me</h2>
        <p className="text-gray-700">
          Highly skilled UI/UX Developer with over 8 years of experience building scalable SPAs, PWAs, and AI-driven interfaces using React, Angular, Next.js, GraphQL, and cloud services like AWS and Azure. Passionate about accessibility, performance optimization, and real-time data visualization.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-indigo-800">CivicConnect (State of Texas)</h3>
                <p className="text-sky-700 text-sm">React 18+, Next.js, GraphQL, AWS Amplify</p>
                <p className="mt-2 text-gray-700">
                  Built an AI-driven digital services platform ensuring accessibility, security, and real-time data visualization. Integrated GraphQL APIs and chatbots with secure RBAC.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-indigo-800">Target eCommerce Platform</h3>
                <p className="text-sky-700 text-sm">Angular 10+, GraphQL, Firebase</p>
                <p className="mt-2 text-gray-700">
                  Developed high-performance UIs, AI-powered recommendations, and real-time cart tracking using WebSockets and PWA features for cross-device support.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Tech Stack</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-slate-800">
          <li>React 18+</li><li>Angular 10+</li><li>Next.js</li><li>GraphQL</li>
          <li>Figma</li><li>Tailwind CSS</li><li>TypeScript</li><li>Jest & Cypress</li>
          <li>AWS / Azure</li><li>Firebase</li><li>D3.js / Chart.js</li><li>OAuth 2.0</li>
        </ul>
      </motion.section>

      {/* Resume Download */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* <Button variant="default" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-base">Download Resume</Button> */}
      </motion.section>

      {/* Contact */}
      <motion.section 
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-indigo-700">Get in Touch</h2>
        <p className="text-gray-600">bharathsai9063@gmail.com | +1 (940)-280-2748</p>
      </motion.section>
    </motion.div>
  );
}
