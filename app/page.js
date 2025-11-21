"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react"; // Import statements remain unchanged

const projectsSeed = [
  {
    id: "examzen",
    title: "ExamZen — IB Practice Platform",
    images: [
      "/gallery/project1-1.png",
      "/gallery/project1-2.png",
      "/gallery/project1-3.png",
    ],
    blurb:
      "ExamZen helps IB students prepare by generating exam-style questions, step-by-step solutions, and instant feedback aligned to the syllabus for fast, focused practice.",
    stack: ["Next.js", "Tailwind", "Supabase", "PostgreSQL", "Vercel", "OpenAI", "Django", "Redis"],
  },
  {
    id: "gamepulse",
    title: "GamePulse (HackGT PrizePicks 🥈)",
    images: [
      "/gallery/project2-1.jpeg",
      "/gallery/project2-2.jpeg",
      "/gallery/project2-3.jpeg",
    ],
    blurb:
      "GamePulse turns live play-by-play into quick prediction prompts where friends compete in real-time rooms with buy-ins, leaderboards, and instant results.",
    stack: ["React Native", "WebSockets", "Supabase", "PostgreSQL", "OpenAI", "SportsDataIO"],
  },
  {
    id: "teng",
    title: "TriboElectric Nanogenerators (TENG) — Materials Research",
    images: [
      "/gallery/project3-1.jpeg",
      "/gallery/project3-2.jpeg",
      "/gallery/project3-3.jpeg",
    ],
    blurb:
      "Built a hybrid energy demo that harvests motion and sunlight, streams device data, and forecasts output to show how small sensors can power autonomous IoT systems.",
    stack: ["C++", "Arduino", "MQTT", "Firebase", "TensorFlow", "LightGBM"],
  },
  // Centered second-row card (T layout)
  {
    id: "pathfindr",
    title: "PathFindr (AI ATL Hackathon 🥇)",
    video: "https://www.youtube.com/embed/0d27K5rJvG0",
    blurb:
      "PathFindr is an iOS application designed to help people who are visually impaired navigate their surroundings. The app provides real-time obstacle detection, spatial audio guidance, haptic feedback, and conversational assistance—through a voice interface.",
    stack: ["Swift", "Flask", "ARKit", "ADK", "Firebase", "LiDAR", "Gemini LLM"],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const projects = useMemo(() => projectsSeed, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
  <Header mounted={mounted} />
      <Hero mounted={mounted} />
      <InViewMount>
        <Education mounted={mounted} />
      </InViewMount>
      <InViewMount>
        <Timeline mounted={mounted} />
      </InViewMount>
      <InViewMount>
        <Projects items={projects} mounted={mounted} />
      </InViewMount>
      <InViewMount>
        <TechStack />
      </InViewMount>
      <Footer mounted={mounted} />

    </div>
  );
}

function TechStack() {
  const tech = [
    // Requested items first
  "Python","Django","React Native","Next.js","TypeScript","Tailwind","TensorFlow","Firebase","PostgreSQL","Git","Docker","AWS",
  // Newly added for PathFindr
  "Swift","Flask","ARKit","ADK","LiDAR","Gemini LLM",
    // Additional tools
    "React","JavaScript","C++","Node.js","Supabase","Redis","OpenAI","PyTorch","scikit-learn","Pandas","Streamlit","FastAPI"
  ];
  return (
    <section id="stack" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <p className="mt-1 text-sm text-zinc-600">Tools, frameworks, and platforms I use.</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {tech.map((t, i) => (
            <li key={t} className="transition-all duration-500" style={{ transitionDelay: `${80 + i * 20}ms` }}>
              <span className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50 hover-lift">
                <StackIcon name={t} />
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Header({ mounted }) {
  const links = [
    { href: "#education", label: "Education" },
    { href: "#timeline", label: "Experience & Research" },
    { href: "#projects", label: "Projects" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#top" className={`font-medium text-zinc-900 transition-opacity ${mounted ? 'opacity-100' : 'opacity-0'}`}>Elchin Hasanov</a>
        <nav className="flex items-center gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:inline-flex rounded-full px-3 py-1.5 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              style={{ transitionDelay: `${80 + i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="#1f2937" strokeWidth="1.5"/>
              <path d="M14 3v5h5" stroke="#1f2937" strokeWidth="1.5"/>
            </svg>
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero({ mounted }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-12 pt-24 sm:flex-row sm:gap-12 sm:pt-28">
        <div
          className={`order-2 max-w-2xl text-center sm:order-1 sm:text-left transition-all duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Hi, I’m <span className="shine">Elchin Hasanov</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            I’m a software engineer and ML researcher interested in scalable systems, data pipelines, and models that move from theory to deployment.
          </p>
          <div
            className={`mt-6 flex flex-wrap items-center gap-3 transition-all duration-700 delay-150 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500/30 hover-lift"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" stroke="#1f2937" strokeWidth="1.5"/>
                <path d="M14 3v5h5" stroke="#1f2937" strokeWidth="1.5"/>
                <path d="M9 14h6M9 18h6M9 10h2" stroke="#3b82f6" strokeWidth="1.5"/>
              </svg>
              View Resume
            </a>
          </div>
        </div>
        <div
          className={`order-1 shrink-0 sm:order-2 transition-all duration-700 delay-150 ${
            mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
    <div className="relative h-40 w-40 overflow-hidden rounded-2xl ring-1 ring-zinc-200 shadow-md sm:h-48 sm:w-48 hover-lift">
            <Image
              src="/me.jpeg"
              alt="Elchin Hasanov"
              fill
              sizes="(max-width: 768px) 10rem, 12rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// About section removed per request

function Projects({ items, mounted }) {
  return (
  <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14">
    <div className="mb-8 flex items-end justify-between">
          <h2
      className={`text-2xl font-bold transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Projects
          </h2>
          <p
            className={`text-sm text-zinc-500 transition-all duration-700 delay-100 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Click a card to view screenshots
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <li
              key={p.id}
              className={`${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} transition-all ${p.id === 'pathfindr' ? 'lg:col-start-2 lg:row-start-2' : ''}`}
              style={{ transitionDelay: `${150 + i * 60}ms` }}
            >
              <ProjectCard p={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  const [hover, setHover] = useState(false);
  const [idx, setIdx] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Disable auto-advance when video present
    if (p.video) {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      return;
    }
    if (!hover) {
      setIdx(0);
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      return;
    }
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % (p.images?.length || 1));
    }, 1100);
    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [hover, p.images?.length, !!p.video]);

  const current = p.images?.[idx] || p.images?.[0];
  return (
    <div
      className="group w-full overflow-hidden rounded-xl border border-zinc-200 bg-white text-left shadow-sm transition-all hover:shadow-md hover-lift"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-40 w-full overflow-hidden bg-zinc-100">
        {p.video ? (
          <iframe
            src={`${p.video}?rel=0&modestbranding=1`}
            title={p.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : current ? (
          <Image
            key={current}
            src={current}
            alt={p.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        {/* small dot indicators on hover */}
        {!p.video && p.images?.length > 1 && (
          <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {p.images.map((_, i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === idx ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-zinc-600">{p.blurb}</p>
        {p.stack?.length ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s}><TechBadge name={s} /></li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function TechBadge({ name }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700">
      <StackIcon name={name} />
      {name}
    </span>
  );
}

function StackIcon({ name }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24" };
  switch (name) {
    case "Next.js":
      return (
        <svg {...common} fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
      );
    case "JavaScript":
      return (
        <svg {...common} fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>
      );
    case "TypeScript":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 16h3M6 12h5M11 8h4"/></svg>
      );
    case "React":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>
      );
    case "Tailwind":
      return (
        <svg {...common} fill="currentColor"><path d="M12 6c-2 0-3.33 1.33-4 4 1-1.33 2.17-2 3.5-2 2 0 2.5 1.33 3.5 2-.67-2.67-2-4-3-4Zm-4 8c1-1.33 2.17-2 3.5-2 2 0 2.5 1.33 3.5 2-.67-2.67-2-4-3-4-2 0-3.33 1.33-4 4Z"/></svg>
      );
    case "Supabase":
      return (
        <svg {...common} fill="currentColor"><path d="M12 2 4 14h8l-4 8 12-12h-8l4-8Z"/></svg>
      );
    case "PostgreSQL":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 9c0-4 10-4 10 0 0 5-3 10-5 10S7 14 7 9Z"/><path d="M9 9c0 2 6 2 6 0"/></svg>
      );
    case "PostGIS":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20l6-8 4 3 6-9"/><circle cx="18" cy="7" r="2"/></svg>
      );
    case "Vercel":
      return (
        <svg {...common} fill="currentColor"><path d="M12 4 22 20H2L12 4Z"/></svg>
      );
    case "OpenAI":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M19.07 4.93l-2.83 2.83M7.76 16.24l-2.83 2.83"/></svg>
      );
    case "Node.js":
    case "NodeJs":
    case "NodeJS":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z"/><path d="M9 13h6M9 11h6"/></svg>
      );
    case "Git":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12l8-8 8 8-8 8-8-8Z"/><circle cx="12" cy="12" r="2"/><path d="M12 10V8M12 14v2"/></svg>
      );
    case "MongoDB":
      return (
        <svg {...common} fill="currentColor"><path d="M12 3s5 5 5 10-3 8-5 8-5-3-5-8 5-10 5-10Z"/></svg>
      );
    case "PyTorch":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 6l4-3 4 3"/><circle cx="12" cy="13" r="5"/></svg>
      );
    case "FastAPI":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 4"/></svg>
      );
    case "React Native":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/></svg>
      );
    case "WebSockets":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 8h14M5 16h14"/><path d="M8 8v8M16 8v8"/></svg>
      );
    case "SportsDataIO":
      return (
        <svg {...common} fill="currentColor"><path d="M4 12a8 8 0 1 0 16 0H4Z"/></svg>
      );
    case "C++":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3 4 8v8l8 5 8-5V8l-8-5Z"/><path d="M9 12h2M13 12h2"/></svg>
      );
    case "Arduino":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 12a5 5 0 0 1 10 0 5 5 0 0 1-10 0Z"/><path d="M8 12h2M14 12h2"/></svg>
      );
    case "MQTT":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18V6l12 12"/></svg>
      );
    case "LightGBM":
      return (
        <svg {...common} fill="currentColor"><path d="M6 18 12 6l6 12H6Z"/></svg>
      );
    case "Python":
      return (
        <svg {...common} fill="currentColor"><path d="M8 4h5a3 3 0 0 1 3 3v3H9a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Zm8 16H11a3 3 0 0 1-3-3v-3h7a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2Z"/></svg>
      );
    case "Django":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10h8M8 14h5"/></svg>
      );
    case "NumPy":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 16V8l8 8V8"/></svg>
      );
    case "Pandas":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4v16M15 4v16"/></svg>
      );
    case "SciPy":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4a8 8 0 1 0 0 16 6 6 0 1 1 0-12Z"/></svg>
      );
    case "Matplotlib":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="M12 4v8l6 6"/></svg>
      );
    case "LaTeX":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 8h14M7 16h10M9 12h6"/></svg>
      );
    case "Redis":
      return (
        <svg {...common} fill="currentColor"><path d="M12 4 20 8l-8 4-8-4 8-4Zm0 6 8 4-8 4-8-4 8-4Z"/></svg>
      );
    case "AWS":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18c3-2 9-2 12 0"/><path d="M4 6h16v8H4z"/></svg>
      );
    case "Docker":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="10" width="4" height="4"/><rect x="11" y="10" width="4" height="4"/><rect x="9" y="6" width="4" height="4"/><path d="M3 16h18l-2 3H5z"/></svg>
      );
    case "Celery":
      return (
        <svg {...common} fill="currentColor"><path d="M12 2 8 8l4 14 4-14-4-6Z"/></svg>
      );
    case "Firebase":
      return (
        <svg {...common} fill="currentColor"><path d="M6 18 12 2l6 16-6 4-6-4Z"/></svg>
      );
    case "XGBoost":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 18 10 8l4 4 6-8"/></svg>
      );
    case "SHAP":
      return (
        <svg {...common} fill="currentColor"><path d="M4 12h16v2H4z"/></svg>
      );
    case "scikit-learn":
      return (
        <svg {...common} fill="currentColor"><circle cx="9" cy="12" r="3"/><circle cx="15" cy="12" r="3"/></svg>
      );
    case "Optuna":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="7"/><path d="M12 5v7l4 4"/></svg>
      );
    case "GridSearch":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16M4 10h16M4 16h16"/></svg>
      );
    case "TensorFlow":
      return (
        <svg {...common} fill="currentColor"><path d="M12 4 6 7v4l3-1.5V9l3-1.5V20h3V6l-3-2Z"/></svg>
      );
    case "FlashAttention":
      return (
        <svg {...common} fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg>
      );
    case "DeepSpeed":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h12M8 6l8 6-8 6"/></svg>
      );
    case "FSDP":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9z"/></svg>
      );
    case "Playwright":
      return (
        <svg {...common} fill="currentColor"><path d="M6 6h12v8a6 6 0 1 1-12 0V6Z"/></svg>
      );
    case "asyncio":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></svg>
      );
    case "BERTopic":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 18V6l8-2 8 2v12"/><path d="M8 14h8"/></svg>
      );
    case "SentenceTransformers":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6h12v12H6z"/><path d="M9 9h6M9 13h6"/></svg>
      );
    case "HDBSCAN":
      return (
        <svg {...common} fill="currentColor"><path d="M4 16c3-6 13-6 16 0"/></svg>
      );
    case "FAISS":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="5" width="14" height="14" rx="3"/><path d="M8 8l8 8"/></svg>
      );
    case "RoBERTa":
      return (
        <svg {...common} fill="currentColor"><path d="M6 7h12v10H6z"/><circle cx="9" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></svg>
      );
    case "Streamlit":
      return (
        <svg {...common} fill="currentColor"><path d="M12 4 20 10l-8 10L4 10l8-6Z"/></svg>
      );
    case "Plotly":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18V9M12 18V6M18 18v-5"/></svg>
      );
    case "Swift":
      return (
        <svg {...common} fill="currentColor"><path d="M20 8c-1-2-3-3-5-3-1 0-2 .3-3 .8-2.5-2-4.6-3.2-4.6-3.2s1.8 2.7 4.1 5C9.8 6.8 7.8 5 7.8 5s2.4 3.7 5.1 6c-.6.3-1.3.5-2 .5-2 0-3.9-1.5-3.9-1.5s1.7 3.4 4.9 4.2c1.7.4 3.4.2 4.8-.5.7.4 1.3.8 1.8 1.3.4.3.9.5 1.3.2.5-.4.4-1.1.2-1.6-.3-.8-.9-1.8-1.8-2.7Z"/></svg>
      );
    case "Flask":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3h8M9 7h6M7 7s0 5 5 10 5 10 5 10"/></svg>
      );
    case "ARKit":
    case "ADK":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 10l4-2 4 2M8 14h8"/></svg>
      );
    case "LiDAR":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8"/><path d="M4 12h4M16 12h4M12 4v4M12 16v4"/></svg>
      );
    case "Gemini LLM":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="12" r="3"/><circle cx="15" cy="12" r="3"/><path d="M12 9v6"/></svg>
      );
    default:
      return null;
  }
}

function Education({ mounted }) {
  return (
    <section id="education" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className={`mx-auto rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm sm:p-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-semibold">Education</h2>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 pulse-dot">GPA 4.0</span>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-12">
            <div className="sm:col-span-7">
              <div className="flex items-start gap-3">
                <SchoolIcon />
                <div>
                  <p className="font-medium">Georgia Institute of Technology</p>
                  <p className="text-sm text-zinc-600">B.S. in Computer Science • Expected May 2027</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <ThreadsIcon />
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">Theory</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Intelligence</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm font-medium text-zinc-700">Coursework</p>
                <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                  <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">Data Structures and Algorithms</li>
                  <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">Object Oriented Programming (Java)</li>
                  <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">Multivariable Calculus</li>
                  <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">Linear Algebra</li>
                  <li className="rounded-lg bg-white px-3 py-2 ring-1 ring-zinc-200">Discrete Mathematics</li>
                </ul>
              </div>
            </div>
            <div className="sm:col-span-5">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200">
                <div className="flex items-center gap-2">
                  <ClubsIcon />
                  <p className="font-medium">Clubs & Activities</p>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {['Data Science @ GT','Competitive Programming', 'Brazilian Jiu-Jitsu', 'Weightlifting'].map((c) => (
                    <li key={c} className="rounded-full bg-zinc-50 px-3 py-1 text-sm text-zinc-700 ring-1 ring-inset ring-zinc-200">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Timeline({ mounted }) {
  // Combine experience and research into a single timeline.
  // Replace these items with your real entries and dates from your resume.
  const items = [
    {
      type: "experience",
      title: "Software Engineering Intern",
      org: "Baku Stock Exchange",
      location: "Remote",
      date: "Feb 2024 – Mar 2025",
      desc: [
        "Modified real-time trading analytics in Django/PostgreSQL, streaming multi-GB order-book feeds via Redis; optimized NumPy/Pandas transforms reducing query latency from 25 s to 4.7 s.",
        "Developed React.js dashboards with WebSocket channels & REST APIs for liquidity, VPIN, and volatility metrics accessed by 15+ analysts daily.",
        "Orchestrated Dockerized microservices on AWS EC2 with GitHub Actions CI/CD; integrated latency anomaly detection to scale from 5K to 30K daily requests without regressions.",
      ],
      tech: ["Python","Django","PostgreSQL","Redis","NumPy","Pandas","React","WebSocket","AWS","Docker"],
    },
    {
      type: "experience",
      title: "Software Engineering Intern",
      org: "Agrar Insurance Fund",
      location: "Baku, Azerbaijan",
      date: "May 2025 – Aug 2025",
      desc: [
        "Designed an ETL pipeline combining climate APIs & satellite imagery in PostgreSQL; applied scikit-learn preprocessing + PCA to process 100K+ data points.",
        "Optimized climate feature computation via a C++ module (OpenMP) accelerating NDVI & drought index calculations by 38% for downstream pipelines.",
        "Configured an ensemble (XGBoost DART + Stacked Logistic Regression) for drought & claim-risk scoring on AWS Batch/Docker; automated 1,200+ claim reviews cutting analysis time from 4 h to 30 m.",
      ],
      tech: ["Python","PostgreSQL","scikit-learn","PCA","C++","OpenMP","XGBoost","LogReg","AWS","Docker"],
    },
    {
      type: "research",
      title: "Undergraduate Researcher — Predictive Analytics in Recruitment",
      org: "ADA University",
      location: "Baku, Azerbaijan",
      date: "Jul 2024 – Nov 2024",
      desc: [
        "Applied ensemble learning (Random Forest, AdaBoost, Gradient Boosting) to hiring-outcome forecasting across 60K-record dataset; achieved +29% predictive lift and −22% false-positive rate over baseline classifiers.",
        "Used scikit-learn + Optuna hyperparameter search (5-fold CV) with early stopping and feature importance + SHAP analysis to surface bias patterns.",
        "Produced explainable fairness insights informing conference-published results presented to 200+ researchers.",
      ],
      tech: ["Python","scikit-learn","Optuna","SHAP"],
    },
    {
      type: "research",
      title: "Undergraduate Researcher — AI for Social Impact Lab",
      org: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      date: "May 2025 – Present",
      desc: [
        "Prototyped structured Mamba + Transformer model for implied volatility forecasting: PCA, CNN encoders, Pandas preprocessing, differentiable SVI decoder for arbitrage-free outputs.",
        "Implemented selective state-space layers, gated mixing & residual attention in PyTorch with CUDA kernels, Lightning loops, and DeepSpeed optimization for long-range SPX dynamics.",
        "Evaluated LSTM, Transformer, and Mamba baselines using surface-MSE & arbitrage metrics on Kubernetes; custom C++ kernels enabled 22% lower error & 31% fewer violations.",
      ],
      tech: ["PyTorch","CUDA","DeepSpeed","Pandas","PCA","SVI","C++"],
    },
    {
      type: "research",
      title: "Research Assistant — Breakthrough Research Trend Forecasting",
      org: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      date: "Jul 2025 – Present",
      desc: [
        "Built Playwright + asyncio ingestion pipeline scraping 20K+ papers into structured MySQL dataset; generated SentenceTransformers embeddings for semantic comparison.",
        "Applied UMAP + HDBSCAN (BERTopic) and integrated Semantic Scholar/OpenAlex APIs with FAISS to group related research & compute growth/momentum signals for emerging topics.",
        "Embedded Power BI reports into Next.js frontend surfacing papers & topics with highest early-impact potential.",
      ],
      tech: ["Playwright","asyncio","MySQL","SentenceTransformers","UMAP","HDBSCAN","BERTopic","FAISS","PowerBI","Next.js"],
    },
  ];

  // Sort items reverse-chronologically using end date (or Present as most recent)
  const orderValue = (d) => {
    const months = { Jan:1, Feb:2, Mar:3, Apr:4, May:5, Jun:6, Jul:7, Aug:8, Sep:9, Oct:10, Nov:11, Dec:12 };
    const present = /Present/i.test(d);
    const yearMatches = d.match(/\d{4}/g) || ["0"];
    const year = parseInt(yearMatches[yearMatches.length - 1], 10);
    if (present) return year * 100 + 99;
    const monthMatches = d.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/g) || [];
    const endMonth = monthMatches.length ? months[monthMatches[monthMatches.length - 1]] || 0 : 0;
    return year * 100 + endMonth;
  };
  const sorted = [...items].sort((a, b) => orderValue(b.date) - orderValue(a.date));

  return (
    <section id="timeline" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2
          className={`text-2xl font-semibold transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Experience & Research
        </h2>
        <div className="relative mt-8">
          <div className="absolute left-5 top-0 h-full w-px bg-zinc-200 sm:left-1/2" aria-hidden="true" />
          <ul className="space-y-8">
            {sorted.map((it, i) => {
              const left = i % 2 === 0; // alternate sides on desktop
              return (
                <InViewReveal key={it.title + it.date}>
                  <li className="relative sm:grid sm:grid-cols-2 sm:items-start sm:gap-10">
                    {/* Dot */}
                    <span
                      className="absolute left-5 z-10 mt-2 inline-flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full bg-white ring-2 ring-blue-500 sm:left-1/2"
                      aria-hidden="true"
                    >
                      <span className={`block h-2 w-2 rounded-full ${it.type === 'experience' ? 'bg-blue-500' : 'bg-rose-500'}`} />
                    </span>

                    {/* Date + side filler on the opposite side of the card */}
        <div className={`${left ? 'sm:col-start-1 sm:pr-8 sm:text-right' : 'sm:col-start-2 sm:pl-8 sm:text-left'}`}>
                      <div className="relative hidden sm:block">
                        <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white/80 p-3 shadow-sm">
          {/* Date: left panels -> top-left, right panels -> top-right; add a bit more top margin */}
          <span className={`absolute ${left ? 'left-2' : 'right-2'} top-2 z-10 text-[11px] text-zinc-500`}>{it.date}</span>
                          <div className="relative z-10">
                            <p className="text-xs font-medium text-zinc-700">{it.org}</p>
                            {it.location ? (
                              <p className="text-[11px] text-zinc-500">{it.location}</p>
                            ) : null}
                            {Array.isArray(it.tech) && it.tech.length ? (
                              <div className="mt-2 flex items-center justify-end gap-1">
                                {it.tech.slice(0, 2).map((t) => (
                                  <span key={t} className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-zinc-600" title={t}>
                                    <StackIcon name={t} />
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`${left ? 'sm:col-start-2 sm:pl-8' : 'sm:col-start-1 sm:pr-8'}`}>
                      <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                        <div className="flex items-center gap-2">
                          <TypeIcon type={it.type} />
                          <p className={`text-xs font-medium uppercase tracking-wide ${it.type === 'experience' ? 'text-blue-600' : 'text-rose-600'}`}>{it.type}</p>
                        </div>
                        <h3 className="mt-1 font-medium text-zinc-900">{it.title}</h3>
                        {/* Removed org • location per request */}
                        <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                          {it.desc.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                        {it.tech?.length ? (
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {it.tech.map((t) => (
                              <li key={t}><TechBadge name={t} /></li>
                            ))}
                          </ul>
                        ) : null}
                        {it.links?.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {it.links.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-50"
                              >
                                {l.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                </InViewReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TypeIcon({ type }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24" };
  if (type === 'experience') {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6h6v3h4a1 1 0 0 1 1 1v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a1 1 0 0 1 1-1h4V6Z"/><path d="M9 6a3 3 0 0 1 6 0"/></svg>
    );
  }
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20V7l8-3 8 3v13"/><path d="M12 10v10"/></svg>
  );
}

function InViewReveal({ children }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current || vis) return;
    const io = new IntersectionObserver((ents) => {
      if (ents[0].isIntersecting) {
        setVis(true);
        io.disconnect();
      }
    }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [vis]);
  return (
    <div ref={ref} className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

// Lazy-mount children when scrolled into view
function InViewMount({ children, rootMargin = '0px 0px -10% 0px' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible, rootMargin]);
  return <div ref={ref}>{visible ? children : <div className="h-[1px]" />}</div>;
}

function Footer({ mounted }) {
  const contact = [
    { href: "mailto:ehasanov6@gatech.edu", label: "ehasanov6@gatech.edu", icon: "mail" },
    { href: "tel:+14706620509", label: "+1 470 662 0509", icon: "phone" },
  ];
  const social = [
    { href: "https://www.linkedin.com/in/elchin-hasanov1/", label: "LinkedIn", icon: "linkedin" },
    { href: "https://github.com/elchin-hasanov?tab=repositories", label: "GitHub", icon: "github" },
    { href: "https://www.instagram.com/elchinhsnv/", label: "Instagram", icon: "instagram" },
  ];
  return (
    <footer className="border-t border-zinc-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p
          className={`text-sm text-zinc-500 transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          © {new Date().getFullYear()} Elchin Hasanov
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {contact.concat(social).map((s, i) => (
            <li key={s.href}>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                href={s.href}
                target={s.href.startsWith('http') ? "_blank" : undefined}
                rel={s.href.startsWith('http') ? "noopener noreferrer" : undefined}
                style={{ transitionDelay: `${100 + i * 40}ms` }}
                aria-label={s.label}
              >
                <SocialIcon name={s.icon} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  const common = {
    width: 16,
    height: 16,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  };
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path fill="currentColor" stroke="none" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.05 11.05 0 0 1 5.8 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.65.23 2.87.12 3.17.75.81 1.2 1.85 1.2 3.11 0 4.44-2.69 5.41-5.25 5.7.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .5Z"/>
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.37c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.85v5.45H9.47V9h3.41v1.56h.05c.48-.9 1.66-1.84 3.41-1.84 3.65 0 4.33 2.4 4.33 5.51v6.22ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z"/>
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="12" r="3.5" fill="#fff" stroke="none"/>
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none"/>
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
        <path d="M4 8l8 5 8-5" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.23c1 .4 2.1.62 3.2.62a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.8 21 3 13.2 3 3a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.1.22 2.2.62 3.2a1 1 0 0 1-.23 1.1l-2.2 2.2Z" />
      </svg>
    );
  }
  return null;
}

// (removed modal viewer; hover-based previews implemented inside ProjectCard)

// (moved footer measurement useEffect inside Lightbox)

// Small icons for the Education card
function SchoolIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
      <path d="M3 10l9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 12v5a5 5 0 0 0 10 0v-5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ClubsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 21a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-violet-700">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12c0-2 2-3.5 4-3.5s4 1.5 4 3.5-2 3.5-4 3.5c-1.2 0-2.3-.4-3-1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M9 9c1.2 1 3 2 3 3 0 1.5-2 2-3.5 2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}
