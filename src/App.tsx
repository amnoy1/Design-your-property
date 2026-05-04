import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  Camera, 
  TrendingUp, 
  ChevronRight, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import ComparisonSlider from './components/ComparisonSlider';

export default function App() {
  const [activeTab, setActiveTab] = useState('living');

  const stagingExamples: { [key: string]: { before: string; after: string; title: string; desc: string } } = {
    living: {
      before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1616489953149-75577aaf4d5f?q=80&w=2070&auto=format&fit=crop",
      title: "סלון מודרני",
      desc: "הפיכת חלל ריק ומנוכר לסלון חם, מזמין ומלא חיים."
    },
    bedroom: {
      before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
      title: "חדר שינה יוקרתי",
      desc: "עיצוב רך ונעים המשרה רוגע ונינוחות בחדר השינה."
    }
  };

  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-md border-b border-natural-border px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-natural-accent rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-natural-accent/20">
              <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-xl text-natural-heading tracking-tight leading-none">AURA VIRTUAL</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-natural-muted font-bold">Staging Studio</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-natural-text/80">
            <a href="#how" className="hover:text-natural-accent transition-colors">התהליך</a>
            <a href="#benefits" className="hover:text-natural-accent transition-colors">יתרונות</a>
            <a href="#gallery" className="hover:text-natural-accent transition-colors">גלריה</a>
            <div className="w-px h-4 bg-natural-border mx-2"></div>
            <button className="bg-natural-text text-white px-6 py-2.5 rounded-full hover:bg-natural-heading transition-all font-semibold shadow-md">
              פרויקט חדש
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top_right,_#E5E1D8_0%,_transparent_60%)] -z-10 opacity-30" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-natural-accent/10 text-natural-accent rounded-full text-xs font-bold self-start border border-natural-accent/20">
              <Sparkles size={14} />
              <span className="uppercase tracking-widest">AI Staging Engines 2.0</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.95] text-natural-heading">
              בית מרהיב <br />
              <span className="text-natural-accent italic font-normal tracking-tight">כבר מהקליק הראשון</span>
            </h1>
            
            <p className="text-xl text-natural-text/70 leading-relaxed max-w-xl font-medium italic">
              "אנחנו לא רק מרהיבים את החלל, אנחנו עוזרים לקונים להתאהב בבית שלהם עוד לפני שהם נכנסו בדלת."
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="px-10 py-5 bg-natural-accent text-white rounded-2xl font-bold text-lg shadow-xl shadow-natural-accent/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-3">
                התחל הדמיה עכשיו
                <ArrowRight size={22} className="rotate-180" />
              </button>
              <button className="px-10 py-5 bg-white text-natural-text border border-natural-border rounded-2xl font-bold text-lg hover:bg-natural-surface transition-all shadow-sm">
                צפה בחבילות
              </button>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-natural-border/60">
              <div className="flex -space-x-3 space-x-reverse">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-natural-bg bg-natural-muted/20 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/120?u=natural${i}`} alt="user" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-natural-muted font-bold uppercase tracking-wider">
                נבחר על ידי <span className="text-natural-accent">המומחים</span> לעיצוב נכסים
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex bg-white/60 p-1.5 rounded-2xl shadow-sm border border-natural-border backdrop-blur-sm self-center">
              <button 
                onClick={() => setActiveTab('living')}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all ${activeTab === 'living' ? 'bg-natural-accent text-white shadow-md' : 'text-natural-muted hover:text-natural-heading'}`}
              >
                חלל מגורים
              </button>
              <button 
                onClick={() => setActiveTab('bedroom')}
                className={`px-8 py-2.5 rounded-xl text-sm font-bold tracking-tight transition-all ${activeTab === 'bedroom' ? 'bg-natural-accent text-white shadow-md' : 'text-natural-muted hover:text-natural-heading'}`}
              >
                סוויטת הורים
              </button>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="relative p-3 bg-white rounded-[2.5rem] shadow-2xl border border-natural-border"
              >
                <ComparisonSlider 
                  beforeImage={stagingExamples[activeTab].before}
                  afterImage={stagingExamples[activeTab].after}
                />
                <div className="mt-4 p-6 bg-natural-surface/50 rounded-2xl border border-natural-border/30 text-right">
                  <h3 className="font-serif font-bold text-2xl text-natural-heading mb-1 italic">{stagingExamples[activeTab].title}</h3>
                  <p className="text-natural-text/60 font-medium italic">{stagingExamples[activeTab].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-[#EBE9E4] py-28 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-natural-accent/5 -z-0 rounded-l-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
            <div className="text-right">
              <h2 className="text-5xl font-serif font-bold text-natural-heading mb-6 tracking-tight">למה Aura AI?</h2>
              <p className="text-natural-muted text-lg font-medium uppercase tracking-[0.2em] leading-tight">THE ART OF VIRTUAL STAGING</p>
            </div>
            <p className="max-w-md text-natural-text/60 italic text-right text-lg border-r-2 border-natural-accent pr-6">
              בעולם הנדל"ן המודרני, הרושם הראשוני הוא הכל. אנחנו משתמשים בטכנולוגיה המתקדמת ביותר כדי להבטיח שהנכס שלכם יבלוט מעל כולם.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <TrendingUp size={28} />,
                title: "השבחת ערך מוכחת",
                desc: "נכסים מרוהטים מושכים קונים איכותיים יותר המוכנים לשלם פרמיה עבור עיצוב מנצח."
              },
              {
                icon: <Zap size={28} />,
                title: "מהירות תגובה",
                desc: "האלגוריתם שלנו מנתח את התאורה הטבעית בחלל ומייצר הדמיה ריאליסטית תוך זמן שיא."
              },
              {
                icon: <Sparkles size={28} />,
                title: "דיוק עיצובי",
                desc: "סגנונות שנבחרו בקפידה להתאמה מקסימלית לטרנדים החמים ביותר בעולם עיצוב הפנים."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-natural-border text-right group hover:shadow-xl hover:border-natural-accent/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-natural-bg rounded-2xl flex items-center justify-center mb-8 mr-0 ml-auto text-natural-accent group-hover:bg-natural-accent group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-natural-heading italic">{feature.title}</h3>
                <p className="text-natural-text/60 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-28 px-6 bg-natural-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-natural-heading mb-4 italic">הדרך אל הבית המושלם</h2>
            <div className="w-20 h-1 bg-natural-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <Camera size={24} />, title: "צילום חלל", desc: " העלאת צילום גולמי של החלל הקיים" },
              { step: "02", icon: <Maximize2 size={24} />, title: "בחירת קונספט", desc: "התאמת סגנון הריהוט לקהל היעד" },
              { step: "03", icon: <Sparkles size={24} />, title: "עיבוד חכם", desc: "שילוב רהיטים לפי זוויות הצילום" },
              { step: "04", icon: <Zap size={24} />, title: "מסירה מהירה", desc: "תמונה מוכנה לפרסום באיכות 4K" }
            ].map((step, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-natural-border hover:shadow-lg transition-all text-right relative overflow-hidden flex flex-col items-end">
                <span className="text-xs font-black text-natural-muted/20 absolute top-6 left-6 -rotate-90 group-hover:text-natural-accent/10">
                  STEP {step.step}
                </span>
                <div className="w-14 h-14 bg-natural-surface border border-natural-border text-natural-accent rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-natural-heading mb-3">{step.title}</h3>
                <p className="text-sm text-natural-muted leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-16 px-8 border-t border-natural-border bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-natural-heading rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-bold text-xl text-natural-heading italic">AURA</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-natural-muted font-black">AI STAGING</span>
            </div>
          </div>
          
          <div className="flex gap-10 text-xs font-bold text-natural-muted tracking-widest uppercase">
            <a href="#" className="hover:text-natural-accent transition-colors">Client Area</a>
            <a href="#" className="hover:text-natural-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-natural-accent transition-colors">Documentation</a>
          </div>
          
          <div className="text-xs text-natural-muted/60 font-medium italic">
            © 2026 Aura AI Staging Studio. Crafted with natural precision.
          </div>
        </div>
      </footer>
    </div>
  );
}
