import {
  Mail,
  Code,
  BarChart3,
  Layout,
  Cloud,
  Zap,
  ChevronRight,
  Cpu,
  Sparkles,
} from "lucide-react";

function App() {
  // ★重要：ここにあなたのGoogleフォームのURLを貼り付けてください
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSe9VhbQLeMT6VKy9I-BI38hhE25YQqVHkK-7EJHG0_lXqUCBw/viewform?usp=header";

  const personalInfo = {
    name: "AI SOUL LAB",
    title: "Web Developer / Personal Developer",
    email: "contact@example.com",
    location: "Tokyo, Japan",
    description:
      "Generative AIと最新のWeb技術を融合させ、ビジネスに革新を。AIによる高速開発と、人の心に響くUI/UXデザインを提供します。",
  };

  const aiStack = [
    "ChatGPT",
    "Perplexity",
    "Claude",
    "Gemini",
    "Replit",
    "Antigravity",
  ];

  const works = [
    {
      title: "Real-time Probability Analyzer",
      category: "Web Application / Statistical Analysis",
      description:
        "ベイズの定理を用いた統計解析アルゴリズムを搭載したWebアプリ。複雑な計算処理をクライアントサイドで高速に行い、ユーザーの意思決定を支援します。",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      link: "https://grape-reverse.com",
      color: "from-sky-400 to-blue-500",
    },
  ];

  const services = [
    {
      title: "Web App Development",
      icon: <Code size={32} className="text-white" />,
      desc: "React/TypeScriptを用いた、高速で堅牢なWebアプリケーションを開発します。業務ツールからC向けのサービスまで対応可能です。",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "UI/UX Design & LP",
      icon: <Layout size={32} className="text-white" />,
      desc: "ただ動くだけでなく「使いたくなる」デザインを提供します。Tailwind CSSを駆使し、モダンで美しいインターフェースを構築します。",
      gradient: "from-sky-400 to-cyan-500",
    },
    {
      title: "DX & Automation",
      icon: <Zap size={32} className="text-white" />,
      desc: "「手作業をゼロに」。業務フローを分析し、最適な技術選定と自動化ツールの導入で、ビジネスの効率を劇的に改善します。",
      gradient: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-blue-500/30 selection:text-blue-900">
      {/* --- 背景アニメーション --- */}
      <div className="fixed inset-0 -z-10 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-100 via-blue-50 to-white">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-200/40 rounded-full blur-[100px] opacity-60 mix-blend-multiply animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[120px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[10%] -left-[20%] opacity-60 animate-[clouds_30s_linear_infinite] scale-150 text-white">
          <Cloud size={120} fill="currentColor" />
        </div>
        <div className="absolute top-[40%] left-[10%] opacity-40 animate-[clouds_45s_linear_infinite_2s] scale-125 text-white">
          <Cloud size={90} fill="currentColor" />
        </div>
        <div className="absolute top-[15%] left-[60%] opacity-30 animate-[clouds_70s_linear_infinite_5s] scale-75 text-white">
          <Cloud size={150} fill="currentColor" />
        </div>
        <style>{`
          @keyframes clouds {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(120vw); }
          }
        `}</style>
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm supports-[backdrop-filter]:bg-white/40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-black text-xl tracking-tighter text-slate-800 flex items-center gap-2 drop-shadow-sm">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-1.5 rounded-lg shadow-lg shadow-blue-500/30">
              <Sparkles size={18} fill="currentColor" />
            </div>
            {personalInfo.name}
          </span>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-slate-600 hover:text-blue-600 bg-white/50 hover:bg-white/90 transition-all px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-white/60 backdrop-blur-md"
          >
            Contact
          </a>
        </div>
      </header>

      <main className="pt-40 pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-32">
          {/* Hero Section */}
          <section className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-white/40 text-slate-600 text-xs font-bold tracking-widest uppercase backdrop-blur-xl border border-white/60 shadow-sm ring-1 ring-white/40 animate-fade-in-up">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Accepting New Projects
            </div>

            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-slate-900 drop-shadow-xl relative z-10">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-900">
                Infusing Soul
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-500 pb-4">
                into Digital Logic.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-12 md:mx-0 mx-auto font-medium backdrop-blur-md p-0 rounded-3xl">
              {personalInfo.description}
            </p>

            <div className="mb-12">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2 md:justify-start justify-center">
                <Cpu size={14} />
                Powered by Generative AI
              </p>
              <div className="flex flex-wrap gap-3 md:justify-start justify-center">
                {aiStack.map((ai, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-white/40 border border-white/60 text-slate-600 text-sm font-bold shadow-sm backdrop-blur-md hover:bg-white/60 hover:scale-105 transition-all cursor-default select-none"
                  >
                    {ai}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <Layout className="text-blue-500" /> Services
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/30 backdrop-blur-2xl border border-white/60 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:-translate-y-2 ring-1 ring-white/50 overflow-hidden"
                >
                  <div
                    className={`mb-8 p-6 bg-gradient-to-br ${service.gradient} rounded-[1.5rem] inline-flex shadow-lg shadow-blue-500/20 transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">
                    {service.desc}
                  </p>
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Works Section */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <BarChart3 className="text-blue-500" /> Selected Works
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {works.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-2 ring-1 ring-white/50"
                >
                  <div
                    className={`h-64 w-full bg-gradient-to-br ${work.color} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors" />
                    <BarChart3 className="text-white/80 w-32 h-32 filter drop-shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-out" />
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute top-8 right-8 bg-white/60 p-3 rounded-full backdrop-blur text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 shadow-md border border-white/60">
                      <ChevronRight size={20} />
                    </div>
                    <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-wider bg-white/60 inline-block px-4 py-1.5 rounded-full backdrop-blur border border-white/50">
                      {work.category}
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 mb-4 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {work.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100/50 text-slate-600 border border-slate-200/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Contact Section (Google Form) */}
          <section
            id="contact"
            className="py-20 border-t border-slate-200/50 relative"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-sky-200/30 to-indigo-200/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-2xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/70 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-100/50 ring-1 ring-white/50 text-center">
              <h2 className="text-4xl font-black mb-6 text-slate-800 tracking-tight">
                Contact Us
              </h2>
              <p className="text-slate-600 font-medium mb-10 text-lg">
                ご依頼、お見積もり、その他ご相談はこちらからお気軽にどうぞ。
                <br />
                Googleフォームへ移動します。
              </p>

              {/* Google Form Button */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden"
              >
                <Mail
                  size={24}
                  className="group-hover:rotate-12 transition-transform text-blue-400"
                />
                <span>お問い合わせフォームを開く</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer"></div>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-xs font-bold uppercase tracking-widest relative z-10 bg-white/30 backdrop-blur-md border-t border-white/40">
        &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
