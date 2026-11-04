import HeroAvatar from "../components/HeroAvatar";

const L = {
  github: "https://github.com/RazvanAndrei2005",
  linkedin: "https://www.linkedin.com/in/borca-razvan-andrei/",
  mail: "mailto:razvanborca592@yahoo.com",
  cv: "/Razvan-Borca-CV.pdf", // the PDF lives in /public with this exact name
};

const fill = "inline-flex items-center gap-2 rounded-full border border-burgundy bg-burgundy px-6 text-sm font-medium tracking-wide text-cream transition hover:border-ink hover:bg-ink";
const line = "inline-flex items-center gap-2 rounded-full border-2 border-burgundy px-6 text-sm font-medium tracking-wide text-burgundy transition hover:bg-burgundy hover:text-cream";
const h2 = "text-4xl font-normal leading-[1.08] text-burgundy md:text-5xl";
const h3 = "text-2xl font-semibold text-burgundy sm:text-3xl";
const wrap = "mx-auto w-full max-w-[1200px] px-6 lg:px-[120px]";

const availability = "Bucharest, Romania · Open to remote"; // edit this line if it changes
const beyond = ["Hackathons & workshops", "Robotics club", "GDG Europe", "Student community", "Video editing"];
const languages = [
  ["Romanian", "Native"],
  ["English", "C1 · Cambridge"],
];

const featured = [
  {
    tag: "BACKEND / API",
    status: "IN PROGRESS",
    title: "Inventory Manager",
    text: "A REST API for managing inventory, with JWT-secured endpoints. Still in development, now running on a local PostgreSQL database.",
    points: [
      "Authentication and authorization with Spring Security + JWT",
      "Persistence with Spring Data JPA / Hibernate",
      "Request validation with Jakarta Bean Validation",
      "Interactive API docs with OpenAPI 3 (Swagger UI)",
    ],
    stack: ["Java 23", "Spring Boot 4.1.1", "PostgreSQL", "Maven"],
    repo: `${L.github}/inventory-manager`,
    visual: "api",
  },
  {
    tag: "EMBEDDED / IOT",
    status: "",
    title: "Smart Pet Feeder",
    text: "A WiFi-enabled automated pet feeder built with async Rust on the Raspberry Pi Pico 2 W, with a web dashboard for viewing logs and triggering manual feeds.",
    points: [
      "Gram-precise portions using a load cell",
      "Jam detection that automatically reverses the motor",
      "RTC keeps feeding schedules running even without internet",
      "PIR sensor logs every bowl visit to a MicroSD card",
    ],
    stack: ["Rust (async)", "Pico 2 W", "Load cell", "RTC", "PIR"],
    repo: `${L.github}/Smart-Pet-Feeder`,
    visual: "feeder",
  },
];
const more = [
  ["FULL-STACK", "Event Discovery Platform", "A cross-platform app that delivers real-time event alerts, with a synchronized experience across web and mobile.", "IN PROGRESS"],
  ["DATABASES", "Veterinary Clinic Database", "A relational database system for managing clinic operations, from patient records to appointment scheduling.", ""],
  ["JAVA", "2D Java Platformer", "An interactive 2D platformer with custom physics, precise collision detection and progressively harder levels.", ""],
  ["LINUX / BASH", "Bash Authentication System", "A secure Linux login system that connects Bash scripting to a MySQL database, with encrypted credentials.", ""],
];
const stats = [
  ["9.38", "/ 10", "CURRENT GPA", ""],
  [`${featured.length + more.length}+`, "", "PERSONAL PROJECTS", "More coming soon"],
];

const journey = [
  ["MAY 2025", "Backend Developer Bootcamp", "CodersLab & TrendyolTech · Remote", "An intensive program on building RESTful APIs and microservices with Java, Spring Boot, SQL and MongoDB."],
  ["2024 — PRESENT", "Computer Engineering (BSc)", "University Politehnica of Bucharest", "Current GPA: 9.38 / 10."],
  ["JULY 2024 — SEPTEMBER 2026", "Freelance Video Editor", "Remote", "Produced video content independently for clients, meeting tight deadlines."],
];
const volunteering = [
  ["ACTIVE MEMBER", "Google Developer Group (GDG Europe)", "Took part in workshops and hackathons."],
  ["TRAINEE", "Robotics Club ‘Roboforges’", ""],
  ["MEMBER", "Faculty of Engineering Students Association", ""],
];
const skills = [
  ["PROGRAMMING & SCRIPTING", ["Java", "C++", "Rust", "Bash", "JavaScript", "HTML", "CSS", "Dart (learning)", "Python (learning)"]],
  ["FRAMEWORKS & ARCHITECTURE", ["Spring Boot", "RESTful APIs", "OOP", "Embassy (Rust)", "Cortex-M", "Flutter (learning)"]],
  ["DATABASES & TOOLS", ["MySQL", "PostgreSQL", "MongoDB", "Git", "GitHub", "VS Code", "KiCAD", "MATLAB", "Linux", "Windows"]],
  ["SOFT SKILLS", ["Communication", "Teamwork", "Adaptability", "Problem solving", "Time management", "Critical thinking"]],
] as const;
const certs = [
  ["Microsoft Azure Fundamentals", ""],
  ["IC3 Global Standard 5", ""],
  ["Backend Developer Bootcamp", "CodersLab & Trendyol Tech"],
  ["Cambridge English Certificate", "Level C1"],
  ["NVIDIA Certificates", "RAG Agents, Industrial Inspection"],
  ["Certificate of Volunteering", "Google Developer Group"],
];

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const contacts = [
  {
    label: "Email",
    value: "razvanborca592@yahoo.com",
    href: L.mail,
    external: false,
    icon: (
      <Svg>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </Svg>
    ),
  },
  {
    label: "GitHub",
    value: "@RazvanAndrei2005",
    href: L.github,
    external: true,
    icon: (
      <Svg>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </Svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/borca-razvan-andrei",
    href: L.linkedin,
    external: true,
    icon: (
      <Svg>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </Svg>
    ),
  },
];

const Chip = ({ children, variant = "solid" }: { children: React.ReactNode; variant?: "solid" | "outline" | "dashed" }) => {
  const style =
    variant === "solid" ? "bg-sand" : variant === "outline" ? "border border-sand" : "border border-dashed border-burgundy/50";
  return <span className={`rounded-full px-4 py-2 text-sm text-burgundy ${style}`}>{children}</span>;
};
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-sand px-3 py-1 text-xs text-burgundy">{children}</span>
);
const Status = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-[10px] font-medium tracking-wider text-burgundy">
    <span className="size-1.5 animate-pulse rounded-full bg-burgundy" />
    {children}
  </span>
);
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-ink">
    <span className="h-[3px] w-6 bg-sand" />
    {children}
  </div>
);

function Visual({ kind }: { kind: string }) {
  return (
    <div className="relative flex h-60 items-center justify-center bg-dusty p-6">
      {kind === "api" ? (
        <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-burgundy font-mono text-cream shadow-[0_12px_30px_rgba(121,13,22,0.25)]">
          <div className="flex items-center justify-between border-b border-cream/20 px-4 py-3">
            <span className="flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="block h-1.5 w-1.5 rounded-full bg-dusty" />)}</span>
            <span className="text-[10px] tracking-wide">swagger-ui</span>
          </div>
          <div className="space-y-3 p-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="rounded bg-cream px-2 py-0.5 text-[10px] font-bold text-burgundy">GET</span>
              <span>/api/inventory</span>
            </div>
            <p className="text-[11px] text-cream/70">Authorization: Bearer ••••••••</p>
            <div className="flex items-center justify-between rounded-lg border border-sand/60 px-3 py-2 text-[11px]">
              <span>200 OK</span>
              <span className="text-cream/70">application/json</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <svg viewBox="0 0 200 212" className="h-full w-auto" aria-hidden="true">
            {/* hopper lid + hopper */}
            <rect x="46" y="8" width="108" height="12" rx="6" className="fill-ink" />
            <path d="M54 20 H146 L134 84 H66 Z" className="fill-burgundy" />
            {/* food window + kibble */}
            <path d="M62 28 H138 L128 76 H72 Z" className="fill-cream" />
            {[[84, 68], [100, 70], [116, 68], [92, 60], [108, 60], [100, 50], [88, 42], [112, 42]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" className="fill-dusty" />
            ))}
            {/* body */}
            <rect x="52" y="84" width="96" height="66" rx="12" className="fill-burgundy" />
            {/* LCD */}
            <rect x="66" y="96" width="44" height="30" rx="5" className="fill-cream" />
            <rect x="72" y="103" width="22" height="3" rx="1.5" className="fill-burgundy" />
            <rect x="72" y="110" width="30" height="3" rx="1.5" className="fill-dusty" />
            <rect x="72" y="117" width="16" height="3" rx="1.5" className="fill-dusty" />
            {/* status LEDs */}
            <circle cx="129" cy="104" r="4" className="fill-dusty" />
            <circle cx="129" cy="118" r="4" className="fill-sand" />
            {/* chute + falling kibble */}
            <path d="M86 150 H114 L110 164 H90 Z" className="fill-ink" />
            <circle cx="101" cy="172" r="3.5" className="fill-cream" />
            <circle cx="99" cy="180" r="3.5" className="fill-cream" />
            {/* bowl */}
            <circle cx="84" cy="187" r="4.5" className="fill-burgundy" />
            <circle cx="100" cy="185" r="4.5" className="fill-burgundy" />
            <circle cx="116" cy="187" r="4.5" className="fill-burgundy" />
            <path d="M56 188 H144 Q140 208 100 208 Q60 208 56 188 Z" className="fill-cream stroke-burgundy" strokeWidth="3" strokeLinejoin="round" />
          </svg>
          <span className="absolute left-5 top-12 rounded-full bg-cream px-3 py-1 font-mono text-[10px] text-burgundy sm:left-10">08:00</span>
          <span className="absolute bottom-14 right-5 rounded-full bg-cream px-3 py-1 font-mono text-[10px] text-burgundy sm:right-10">40 g</span>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-sand/60 bg-cream/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-20">
          <a href="#top" className="flex items-center gap-3">
            <span className="size-3 rounded-[3px] bg-burgundy" />
            <span className="text-lg font-semibold text-burgundy sm:text-xl">Răzvan Borca</span>
            <span className="hidden text-base font-light sm:inline">/ Junior IT Engineer</span>
          </a>
          <div className="flex gap-4 text-sm text-burgundy sm:gap-8 sm:text-base">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hidden hover:underline sm:inline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href={L.cv} target="_blank" rel="noreferrer" className="hidden hover:underline sm:inline">Resume</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[70%] bg-sand [clip-path:polygon(0_0,72%_0,100%_100%,0_100%)] lg:w-[40%]" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 py-12 lg:flex-row lg:gap-20 lg:px-10 lg:py-16">
          <div className="flex w-full max-w-[400px] shrink-0 flex-col items-center gap-6 rounded-[32px] bg-dusty p-6 shadow-[0_16px_40px_rgba(121,13,22,0.08)] sm:p-8">
            <HeroAvatar />
            <p className="text-center text-[30px] leading-[1.05] text-burgundy sm:text-[34px]">Răzvan-Andrei<br />Borca</p>
            <span className="h-0.5 w-16 bg-burgundy" />
            <p className="text-center text-xs font-medium tracking-wider text-burgundy">JUNIOR SOFTWARE ENGINEER</p>
          </div>
          <div className="flex flex-1 flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-cream px-3 py-2 text-xs text-burgundy">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-burgundy opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-burgundy" />
              </span>
              Seeking junior IT roles
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-burgundy/30 px-3 py-2 text-xs text-burgundy">
              <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {availability}
            </span>
            </div>
            <h1 className="text-5xl font-bold leading-[0.98] text-burgundy sm:text-7xl lg:text-[80px]">HELLO, I&apos;M<br />RĂZVAN</h1>
            <p className="text-xl font-light text-burgundy sm:text-2xl">Here&apos;s who I am &amp; what I build.</p>
            <div className="flex flex-wrap gap-4">
              <a href={L.cv} target="_blank" rel="noreferrer" className={`${fill} h-12`}>RESUME ↗</a>
              <a href="#projects" className={`${line} h-12`}>PROJECTS</a>
            </div>
            <p className="max-w-xl text-base font-light leading-7">Computer Science &amp; Engineering student at Politehnica Bucharest. I enjoy understanding systems end-to-end and building reliable software — from clean API design and databases to full application logic.</p>
          </div>
        </div>
      </section>

      <section id="about" className={`${wrap} flex flex-col gap-10 py-10 md:py-14`}>
        <div className="flex flex-col gap-4">
          <Eyebrow>01 / ABOUT</Eyebrow>
          <h2 className={h2}>CURIOUS BY NATURE.</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-6">
            <p className="text-lg font-light leading-7 sm:text-xl">I like understanding systems end to end: the code behind a request, the data it touches and the hardware it can run on.</p>
            <p className="font-light leading-6">So far I&apos;ve worked with Java, Spring Boot, Rust, C++, SQL databases and Linux, through university, a backend bootcamp and personal projects. I&apos;m open to junior roles across software development, backend, embedded and systems, anywhere I can learn from a good team and contribute.</p>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-wider">BEYOND THE CODE</p>
              <div className="flex flex-wrap gap-2">
                {beyond.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map(([value, unit, label, note]) => (
                <div key={label} className="flex flex-col gap-1 rounded-2xl border border-sand bg-white px-4 py-4 sm:px-5">
                  <span className="text-2xl font-semibold text-burgundy sm:text-3xl">
                    {value}
                    {unit && <span className="ml-1 text-base font-normal">{unit}</span>}
                  </span>
                  <span className="text-[10px] font-medium tracking-wider sm:text-xs">{label}</span>
                  {note && (
                    <span className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-light italic sm:text-xs">
                      <span className="size-1.5 animate-pulse rounded-full bg-burgundy" />
                      {note}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium tracking-wider">LANGUAGES</p>
              <div className="flex flex-col divide-y divide-sand rounded-2xl border border-sand bg-white">
                {languages.map(([lang, level]) => (
                  <div key={lang} className="flex items-center justify-between px-5 py-4">
                    <span className="text-lg text-burgundy">{lang}</span>
                    <span className="text-sm font-light">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`${wrap} flex flex-col gap-10 py-10 md:py-14`}>
        <div className="flex flex-col gap-4">
          <Eyebrow>02 / SKILLS &amp; BACKGROUND</Eyebrow>
          <h2 className={h2}>ALWAYS BUILDING. ALWAYS LEARNING.</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-8">
            <h3 className={h3}>MY JOURNEY</h3>
            <div className="flex flex-col">
              {journey.map(([when, title, where, detail], i) => {
                const last = i === journey.length - 1;
                return (
                  <div key={title} className="flex gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <span className="mt-1 size-3 shrink-0 rounded-full bg-sand" />
                      {!last && <span className="w-px flex-1 bg-sand" />}
                    </div>
                    <div className={`flex flex-col gap-1.5 ${last ? "" : "pb-8"}`}>
                      <p className="text-xs font-medium tracking-wide">{when}</p>
                      <p className="text-xl font-medium text-burgundy sm:text-2xl">{title}</p>
                      <p className="text-sm text-burgundy">{where}</p>
                      <p className="font-light leading-6">{detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className={h3}>VOLUNTEERING</h3>
            <div className="flex flex-col gap-4">
              {volunteering.map(([role, org, detail]) => (
                <div key={org} className="flex flex-col gap-1 rounded-3xl bg-cream px-6 py-5 ring-1 ring-sand">
                  <p className="text-xs font-medium tracking-wider">{role}</p>
                  <p className="text-lg text-burgundy">{org}</p>
                  {detail && <p className="text-sm font-light">{detail}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-sand" />

        <div className="flex flex-col gap-8">
          <h3 className={h3}>SKILLS</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map(([label, items]) => (
              <div key={label} className="flex flex-col gap-4">
                <p className="text-xs font-medium tracking-wider">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((t) => (
                    <Chip key={t} variant={label === "SOFT SKILLS" ? "outline" : t.includes("learning") ? "dashed" : "solid"}>
                      {t}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-sand" />

        <div className="flex flex-col gap-8">
          <h3 className={h3}>CERTIFICATIONS</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certs.map(([title, sub]) => (
              <div key={title} className="flex items-center gap-4 rounded-3xl bg-cream px-5 py-4 ring-1 ring-sand sm:px-6">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-burgundy/40 text-xs text-burgundy">✓</span>
                <div className="flex flex-col">
                  <span className="text-base text-burgundy">{title}</span>
                  {sub && <span className="text-sm font-light">{sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-10 md:py-14">
        <div className={`${wrap} flex flex-col gap-10`}>
          <div className="flex flex-col gap-4">
            <Eyebrow>03 / SELECTED PROJECTS</Eyebrow>
            <h2 className={h2}>FROM IDEA TO REALITY.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <article key={p.title} className="flex flex-col overflow-hidden rounded-3xl border border-sand bg-white">
                <Visual kind={p.visual} />
                <div className="flex flex-1 flex-col items-start gap-4 p-6 sm:p-8">
                  <div className="flex w-full items-center justify-between gap-3">
                    <p className="text-xs font-medium tracking-wider">{p.tag}</p>
                    {p.status && <Status>{p.status}</Status>}
                  </div>
                  <h3 className="text-2xl font-semibold text-burgundy sm:text-3xl">{p.title}</h3>
                  <p className="font-light leading-6">{p.text}</p>
                  <ul className="flex flex-col gap-2 text-sm font-light leading-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-burgundy" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <div className="mt-auto pt-2">
                    <a href={p.repo} target="_blank" rel="noreferrer" className={`${fill} h-10 px-5 text-xs`}>GITHUB ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="text-xs font-medium tracking-wider">MORE THINGS I&apos;VE BUILT</p>
          <div className="grid gap-6 md:grid-cols-2">
            {more.map(([tag, title, text, status]) => (
              <article key={title} className="flex flex-col gap-4 rounded-3xl border border-sand bg-white p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] tracking-wider">{tag}</p>
                  {status && <Status>{status}</Status>}
                </div>
                <h3 className="text-2xl font-medium leading-7 text-burgundy">{title}</h3>
                <p className="font-light leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-cream">
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-sand [clip-path:polygon(100%_0,100%_100%,0_100%)] md:h-72 md:w-72" />
        <div className={`${wrap} relative flex flex-col gap-12 py-12 md:py-16 lg:flex-row lg:gap-24`}>
          <div className="flex flex-col gap-6 lg:w-[440px] lg:shrink-0">
            <Eyebrow>04 / CONTACT</Eyebrow>
            <h2 className={h2}>LET&apos;S BUILD<br />WHAT&apos;S NEXT.</h2>
            <p className="font-light leading-7">Have a junior IT opportunity in mind? I&apos;d be happy to connect.</p>
          </div>
          <div className="flex flex-1 flex-col items-start gap-6">
            <p className="text-xs font-medium tracking-wider">SAY HELLO</p>
            <div className="flex w-full flex-col divide-y divide-sand border-y border-sand">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 py-5 text-burgundy transition hover:text-ink"
                >
                  {c.icon}
                  <span className="min-w-0 flex-1 break-words font-mono text-sm group-hover:underline sm:text-base">{c.value}</span>
                  <span className="hidden font-mono text-xs opacity-60 min-[400px]:block sm:text-sm">{c.label}</span>
                </a>
              ))}
            </div>
            <a href={L.cv} download="Razvan-Borca-CV.pdf" className={`${fill} h-12`}>DOWNLOAD CV ↓</a>
          </div>
        </div>
        <div className="relative border-t border-sand">
          <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-2 px-6 py-8 text-xs sm:flex-row lg:px-[120px]">
            <span className="text-burgundy">© Răzvan-Andrei Borca</span>
            <span className="font-light">Backend thinking. Embedded curiosity.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}