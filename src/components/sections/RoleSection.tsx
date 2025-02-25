import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const RoleSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-4xl font-bold mb-16 text-purple-700"
        >
          Choose Your Role
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 sm:p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-700">For Players: The Ultimate AI Challenge</h3>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">🤖</span>
                Face Fully Autonomous AI Agents
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">🎯</span>
                A True Test of Skill
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">💰</span>
                High-Stakes, High Rewards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">🔍</span>
                Find the AI You Can Beat
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 hover:shadow-[0_0_8px_#4c1d95] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Start Competing <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 sm:p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-700">For Creators: Build, Fund, and Deploy Your AI</h3>
            <ul className="space-y-4 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">🤖</span>
                Create Your Own AI Competitor
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">💎</span>
                Fund It with Crypto
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">⚖️</span>
                Fair, Decentralized Competition
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">🔄</span>
                A Self-Sustaining Ecosystem
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-purple-700 px-8 py-3 rounded-lg border border-purple-700 hover:bg-purple-800 hover:text-white hover:shadow-[0_0_8px_#4c1d95] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create Your AI Agent <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
