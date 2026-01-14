import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const AIRegistrationPage = () => {
    // Target date: Jan 18, 2026, 00:00 NPT
    const TARGET_DATE = new Date('2026-01-18T00:00:00+05:45').getTime();

    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const checkExpiration = () => {
            const now = new Date().getTime();
            if (now >= TARGET_DATE) {
                setIsExpired(true);
                return true;
            }
            return false;
        };

        if (checkExpiration()) return;

        const timer = setInterval(() => {
            if (checkExpiration()) {
                clearInterval(timer);
            }
        }, 1000);

        // Load Logwork Countdown Script
        const script = document.createElement('script');
        script.src = "https://cdn.logwork.com/widget/countdown.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            clearInterval(timer);
            const scriptTag = document.querySelector('script[src="https://cdn.logwork.com/widget/countdown.js"]');
            if (scriptTag) document.body.removeChild(scriptTag);
        };
    }, [TARGET_DATE]);

    return (
        <div className="min-h-screen pt-32 pb-20 dark:bg-[#020617] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <AnimatePresence mode="wait">
                    {!isExpired ? (
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-cyan-600 dark:text-cyan-400 font-medium"
                            >
                                <Sparkles size={16} />
                                <span>Grand AI Competition 2026</span>
                            </motion.div>

                            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-gradient leading-tight">
                                Competition Starts Officially
                            </h1>

                            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                                Prepare your silicon and fine-tune your weights. The ultimate AI challenge begins soon.
                            </p>

                            <div className="flex justify-center mb-16 overflow-hidden rounded-2xl">
                                <a
                                    href="https://logwork.com/countdown-timer"
                                    className="countdown-timer"
                                    data-style="circles"
                                    data-timezone="Asia/Kathmandu"
                                    data-date="2026-01-18 00:00"
                                    data-background="none"
                                    data-digitscolor="#06b6d4"
                                    data-unitscolor="#94a3b8"
                                    data-responsive="true"
                                >
                                    Countdown Timer
                                </a>
                            </div>

                            <div className="flex flex-col items-center gap-4">
                                <p className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-2">
                                    Starts in : 18 Jan Sunday 00:00 NPT
                                </p>
                                <div
                                    className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-transparent rounded-full"
                                />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="registration-form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="glass-card rounded-3xl p-8 md:p-12">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">
                                        The Arena is Open
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Register now for the Grand AI Competition 2026 and showcase your skills to the world.
                                    </p>
                                </div>

                                {/* Placeholder for Registration Form */}
                                <form className="space-y-6 max-w-2xl mx-auto">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Team Name</label>
                                            <input
                                                type="text"
                                                placeholder="Enter your team name"
                                                className="w-full px-4 py-3 rounded-xl glass border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Contact Email</label>
                                            <input
                                                type="email"
                                                placeholder="team@example.com"
                                                className="w-full px-4 py-3 rounded-xl glass border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1">Proposed Project Description</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us briefly about what you're planning to build..."
                                            className="w-full px-4 py-3 rounded-xl glass border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                                        />
                                    </div>

                                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 group transition-all">
                                        Submit Registration
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </button>
                                </form>

                                <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-cyan-500 mb-1">Rs 50K+</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-tighter">Prize Pool</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-cyan-500 mb-1">48H</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-tighter">Hack Time</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-cyan-500 mb-1">Top 10</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-tighter">Finalist</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-cyan-500 mb-1">24/7</div>
                                            <div className="text-xs text-slate-500 uppercase tracking-tighter">Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AIRegistrationPage;
