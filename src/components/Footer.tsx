import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-[#020617] pt-20 pb-10 overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                CITC
                            </h2>
                            <p className="text-sm text-slate-500 font-mono mt-2">
                                EST. 2026
                            </p>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering students at NCIT to innovate, collaborate, and build the future of technology.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Github, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all duration-300 border border-white/5"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Events', 'Our Team', 'Alumni'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2 group w-fit">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-8">Resources</h3>
                        <ul className="space-y-4">
                            {['Constitution', 'Code of Conduct', 'Project Showcase', 'Join Discord', 'Press Kit'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-8">Get in Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Email Us</span>
                                    <a href="mailto:citc@ncit.edu.np" className="text-white hover:text-blue-400 transition-colors">citc@ncit.edu.np</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                                    <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Visit Us</span>
                                    <span className="text-white block">NCIT, Balkumari, Lalitpur</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} CITC. Built with <span className="text-red-500 animate-pulse">❤</span> by the Tech Team.
                    </p> */}
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
