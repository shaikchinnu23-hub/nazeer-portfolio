import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Cpu,
  Code2,
  Brain,
  Network,
  Wrench,
  GraduationCap,
  Award,
  Rocket,
  Sparkles,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

const Github = ({ size = 18, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);
const Linkedin = ({ size = 18, ...props }: { size?: number } & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.74v20.51C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z" />
  </svg>
);
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { Typewriter } from "@/components/Typewriter";
import profileImg from "@/assets/profile.png";
import jarvisImg from "@/assets/jarvis-circuit.jpeg";
import solar1 from "@/assets/solar-1.jpeg";
import solar2 from "@/assets/solar-2.jpeg";
import certRinexCourse from "@/assets/cert-rinex-course.jpeg";
import certRinexAch from "@/assets/cert-rinex-achievement.jpeg";
import certRinexIntern from "@/assets/cert-rinex-internship.jpeg";
import certNptel from "@/assets/cert-nptel.jpeg";
import certHack from "@/assets/cert-hackathon.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shaik Nazeer Basha — AI Student | Cybersecurity | IoT Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shaik Nazeer Basha — building intelligent, secure and innovative digital solutions with AI, Cybersecurity, IoT and Web.",
      },
      { property: "og:title", content: "Shaik Nazeer Basha — Portfolio" },
      {
        property: "og:description",
        content: "AI · Cybersecurity · IoT · Frontend Developer based in Mangalagiri, India.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "nazeerbashas870@gmail.com";
const PHONE = "8247885058";
const LINKEDIN = "https://www.linkedin.com/in/shaiknazeerbasha2006";
const GITHUB = "https://github.com/shaikchinnu23-hub";
const WHATSAPP = `https://wa.me/91${PHONE}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-5">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12"
        >
          <div className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-3">
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function SocialButtons({ size = "md" }: { size?: "sm" | "md" }) {
  const cls = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <div className="flex items-center gap-3">
      <a
        href={LINKEDIN}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={`${cls} grid place-items-center rounded-xl glass btn-glow text-primary`}
      >
        <Linkedin size={18} />
      </a>
      <a
        href={GITHUB}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={`${cls} grid place-items-center rounded-xl glass btn-glow text-primary`}
      >
        <Github size={18} />
      </a>
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email"
        className={`${cls} grid place-items-center rounded-xl glass btn-glow text-primary`}
      >
        <Mail size={18} />
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className={`${cls} grid place-items-center rounded-xl glass btn-glow text-primary`}
      >
        <MessageCircle size={18} />
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Particles />
      <div className="fixed inset-0 -z-20 bg-aurora" />
      <div className="fixed inset-0 -z-20 bg-cyber-grid opacity-50" />
      <Nav />

      <section id="home" className="relative pt-36 md:pt-44 pb-20 px-5">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono">
              <span className="h-2 w-2 rounded-full bg-[oklch(0.85_0.2_145)] animate-pulse" />
              serching for opportunities
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Shaik <span className="text-gradient-cyber">Nazeer Basha</span>
            </h1>
            <div className="mt-5 text-xl md:text-2xl text-muted-foreground font-mono min-h-[2em]">
              <Typewriter
                words={[
                  "AI Student",
                  "Cybersecurity Enthusiast",
                  "IoT Developer",
                  "Frontend Developer",
                ]}
              />
            </div>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Building Intelligent, Secure and Innovative Digital Solutions through Artificial
              Intelligence, Cybersecurity and Web Development.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold btn-glow"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-strong font-semibold btn-glow"
              >
                <Mail size={16} /> Get in Touch
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <SocialButtons />
              <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <MapPin size={14} className="text-primary" /> Mangalagiri, AP, India
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[oklch(0.82_0.18_195/0.4)] via-[oklch(0.7_0.22_310/0.3)] to-[oklch(0.85_0.2_145/0.3)] blur-2xl" />
            <div className="relative float">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] overflow-hidden glass-strong scanline glow-cyan">
                <img
                  src={profileImg}
                  alt="Shaik Nazeer Basha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-primary/30 rounded-[2rem]" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-strong px-4 py-3 rounded-2xl text-sm font-mono">
                <div className="text-primary">{""}</div>
                <div className="text-muted-foreground text-xs">B.Tech · AI · 3rd Year</div>
              </div>
              <div className="absolute -top-4 -left-4 glass-strong px-3 py-2 rounded-2xl text-xs font-mono flex items-center gap-2">
                <Shield size={14} className="text-[oklch(0.85_0.2_145)]" /> 
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "3+", v: "Projects Built" },
            { k: "2+", v: "Hackathons" },
            { k: "10+", v: "Certifications" },
            { k: "15+", v: "Technologies" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-6 text-center tilt-card">
              <div className="text-3xl md:text-4xl font-bold text-gradient-cyber">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section
        id="about"
        eyebrow="// About Me"
        title={
          <>
            About me
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-2xl p-8 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm <span className="text-foreground font-semibold">Shaik Nazeer Basha</span> from
              Mangalagiri, Andhra Pradesh — currently pursuing B.Tech 3rd Year in{" "}
              <span className="text-primary">Artificial Intelligence</span> at Chalapathi Institute
              of Technology, Guntur.
            </p>
            <p>
              I'm passionate about AI, Cybersecurity, IoT, Networking and Modern Web Technologies.
              Since childhood I've been fascinated by electronic devices, networks and creating
              innovative solutions to real-world problems.
            </p>
            <p>
              I'm a fast learner, multitasker, strong communicator and a natural leader who loves
              collaborating, building teams, and shipping projects that matter.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="glass rounded-xl p-4">
                <div className="text-xs font-mono text-primary mb-1">SHORT TERM</div>
                <div className="text-foreground text-sm">
                  Become a skilled Cybersecurity Analyst & Software Developer.
                </div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-xs font-mono text-[oklch(0.7_0.22_310)] mb-1">LONG TERM</div>
                <div className="text-foreground text-sm">
                  Build innovative tech products and become a technology entrepreneur.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap className="text-primary" size={20} />
              <h3 className="font-semibold">Education</h3>
            </div>
            <ol className="relative border-l border-border/60 ml-2 space-y-6">
              {[
                {
                  y: "2026 — Present",
                  t: "B.Tech, Artificial Intelligence",
                  s: "Chalapathi Institute of Technology, Guntur",
                },
                { y: "2023", t: "Intermediate (586)", s: "VJ Junior College, Mangalagiri" },
                { y: "2021", t: "10th Standard", s: "MTMC High School, Mangalagiri" },
              ].map((e, i) => (
                <li key={i} className="pl-5">
                  <span className="absolute -left-[7px] h-3 w-3 rounded-full bg-primary glow-cyan" />
                  <div className="text-xs font-mono text-primary">{e.y}</div>
                  <div className="text-sm font-semibold mt-0.5">{e.t}</div>
                  <div className="text-xs text-muted-foreground">{e.s}</div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="// Skills & Stack"
        title={
          <>
            Tools I <span className="text-gradient-cyber">build with</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: Code2,
              title: "Web Development",
              items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
            },
            {
              icon: Shield,
              title: "Cybersecurity",
              items: [
                "Ethical Hacking",
                "Cybersecurity Basics",
                "Networking",
                "Security Awareness",
              ],
            },
            { icon: Brain, title: "Programming", items: ["Java (Basics)", "SQL (Basics)"] },
            {
              icon: Cpu,
              title: "IoT & Hardware",
              items: ["ESP32", "Relays", "Sensors", "Voice Automation"],
            },
            { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code"] },
            {
              icon: Network,
              title: "Soft Skills",
              items: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"],
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 tilt-card group"
            >
              <div className="h-11 w-11 rounded-xl glass-strong grid place-items-center text-primary mb-4 group-hover:glow-cyan transition-shadow">
                <c.icon size={20} />
              </div>
              <h3 className="font-semibold mb-3">{c.title}</h3>
              <div className="flex flex-wrap gap-2">
                {c.items.map((x) => (
                  <span
                    key={x}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 text-muted-foreground border border-border/50"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-[oklch(0.85_0.2_145)]" size={18} />
            <h3 className="font-semibold">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Java", "SQL", "Cybersecurity", "Ethical Hacking", "Artificial Intelligence"].map(
              (s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/30"
                >
                  {s}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </Section>
      
<Section
  id="languages"
  eyebrow="// Languages"
  title="Languages I Speak"
>
  <div className="grid md:grid-cols-2 gap-6">

    {/* Telugu */}
    <div className="glass rounded-2xl p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">🇮🇳 Telugu</h3>
        <span className="text-primary font-mono">100%</span>
      </div>

      <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Native Language
      </p>
    </div>

    {/* English */}
    <div className="glass rounded-2xl p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">🇬🇧 English</h3>
        <span className="text-primary font-mono">80%</span>
      </div>

      <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
        <div className="h-full w-[80%] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Professional Working Proficiency
      </p>
    </div>

    {/* Hindi */}
    <div className="glass rounded-2xl p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">🇮🇳 Hindi</h3>
        <span className="text-primary font-mono">70%</span>
      </div>

      <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
        <div className="h-full w-[70%] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Conversational Proficiency
      </p>
    </div>

    {/* Tamil */}
    <div className="glass rounded-2xl p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">🇮🇳 Tamil</h3>
        <span className="text-primary font-mono">50%</span>
      </div>

      <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
        <div className="h-full w-[50%] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <p className="mt-3 text-sm text-muted-foreground">
        Basic Understanding
      </p>
    </div>

  </div>
</Section>
      <Section
        id="projects"
        eyebrow="// Featured Work"
        title={
          <>
            My <span className="text-gradient-cyber">Projects</span>
          </>
        }
      >
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center tilt-card"
          >
            <div>
              <div className="font-mono text-xs text-primary">PROJECT 01 · IoT + AI</div>
              <h3 className="mt-2 text-3xl font-bold">Jarvis Smart Home Assistant</h3>
              <p className="mt-3 text-muted-foreground">
                AI-powered home automation assistant controlling lights, fans, AC and appliances
                through voice commands — built around ESP32, relays and on-device intelligence.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Voice Control",
                  "Good Morning",
                  "Good Night",
                  "Movie Mode",
                  "Study Mode",
                  "Emergency",
                  "AC Automation",
                  "Security Modes",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border/50"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden glass-strong">
              <img src={jarvisImg} alt="Jarvis circuit diagram" className="w-full h-auto" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center tilt-card"
          >
            <div className="md:order-2">
              <div className="font-mono text-xs text-[oklch(0.7_0.22_310)]">
                PROJECT 02 · AI + Web
              </div>
              <h3 className="mt-2 text-3xl font-bold">SolarVerify</h3>
              <p className="mt-3 text-muted-foreground">
                AI-powered solar panel verification and recommendation platform — analyzes
                installations, estimates efficiency, calculates panels per rooftop area and surfaces
                product picks.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Installation Verification",
                  "Panel Angle Analysis",
                  "Efficiency Estimation",
                  "AI Recommendations",
                  "Solar Calculator",
                  "Price Estimation",
                  "AI Chatbot",
                ].map((f) => (
                  <span
                    key={f}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border/50"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:order-1 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden glass-strong">
                <img src={solar2} alt="SolarVerify landing" className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden glass-strong">
                <img src={solar1} alt="SolarVerify calculator" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 md:p-10 tilt-card"
          >
            <div className="font-mono text-xs text-[oklch(0.85_0.2_145)]">
              PROJECT 03 · Frontend
            </div>
            <h3 className="mt-2 text-3xl font-bold">Startup Roll Application</h3>
            <p className="mt-3 text-muted-foreground max-w-3xl">
              Built complete frontend interfaces for a startup ecosystem spanning three connected
              apps.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { t: "Vendor Application", d: "Onboarding & catalog management." },
                { t: "User Application", d: "Discovery, browsing & checkout flows." },
                { t: "Admin Dashboard", d: "Analytics, controls & moderation." },
              ].map((m) => (
                <div key={m.t} className="glass rounded-2xl p-5">
                  <Rocket size={18} className="text-primary mb-2" />
                  <div className="font-semibold">{m.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Agri Rover",
                d: "Agriculture-focused smart farming innovation project — autonomous rover concept for field assistance.",
                c: "Hackathon · Agritech",
              },
              {
                t: "Smart Water",
                d: "Smart water management application designed to improve water monitoring and usage at scale.",
                c: "Hackathon · Sustainability",
              },
            ].map((h) => (
              <motion.div
                key={h.t}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 tilt-card"
              >
                <div className="font-mono text-xs text-primary">{h.c}</div>
                <h4 className="mt-2 text-xl font-bold">{h.t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{h.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="certs"
        eyebrow="// Cretifications"
        title={
          <>
            Certifications & <span className="text-gradient-cyber">Achievements</span>
          </>
        }
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              img: certRinexCourse,
              t: "Cyber Security & Ethical Hacking",
              i: "Rinex — Course Completion",
            },
            {
              img: certRinexAch,
              t: "Cyber Security & Ethical Hacking",
              i: "Rinex — Achievement (Google for Education Partner)",
            },
            { img: certRinexIntern, t: "Cyber Security Internship", i: "Rinex Technology · 2026" },
            { img: certNptel, t: "Programming in Java", i: "NPTEL · IIT Kharagpur" },
            { img: certHack, t: "RoboMelaa National Hackathon", i: "VVIT University · 2025" },
          ].map((c, i) => (
            <motion.a
              key={i}
              href={c.img}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group glass rounded-2xl overflow-hidden tilt-card block"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary/40">
                <img
                  src={c.img}
                  alt={c.t}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-1.5">
                      <Award size={12} /> Certified
                    </div>
                    <div className="font-semibold mt-1">{c.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{c.i}</div>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
              </div>
            </motion.a>
          ))}

        
        </div>

        {/* Hobbies */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-primary" /> Hobbies & Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Exploring Technology",
                "Building Electronics",
                "Networking",
                "Cybersecurity",
                "Video Editing",
                "Photo Editing",
                "Innovation",
                "Traveling",
                "Meeting People",
              ].map((h) => (
                <span
                  key={h}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/60 border border-border/50"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Rocket size={18} className="text-[oklch(0.7_0.22_310)]" /> Career Objective
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To become a successful Cybersecurity Professional, AI Engineer, and Technology
              Innovator by building impactful solutions that improve people's lives.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="// Let's Connect"
        title={
          <>
           Connect <span className="text-gradient-cyber">Me</span>
          </>
        }
      >
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[oklch(0.7_0.22_310/0.2)] blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Have a project, role or idea?</h3>
              <p className="mt-3 text-muted-foreground max-w-md">
                Reach out directly via email, LinkedIn or WhatsApp — I usually respond within a day.
              </p>
              <div className="mt-6">
                <SocialButtons />
              </div>
              <div className="mt-8 space-y-3 text-sm">
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 group">
                  <span className="h-9 w-9 grid place-items-center rounded-lg glass text-primary">
                    <Mail size={16} />
                  </span>
                  <span className="group-hover:text-primary transition-colors">{EMAIL}</span>
                </a>
                <a href={`tel:+91${PHONE}`} className="flex items-center gap-3 group">
                  <span className="h-9 w-9 grid place-items-center rounded-lg glass text-primary">
                    <Phone size={16} />
                  </span>
                  <span className="group-hover:text-primary transition-colors">+91 {PHONE}</span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 grid place-items-center rounded-lg glass text-primary">
                    <MapPin size={16} />
                  </span>
                  <span>Mangalagiri, Guntur, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-6 btn-glow group"
              >
                <Linkedin className="text-primary" />
                <div className="mt-4 font-semibold">LinkedIn</div>
                <div className="text-xs text-muted-foreground mt-1">Connect professionally</div>
                <div className="mt-4 text-xs text-primary flex items-center gap-1">
                  Open <ArrowRight size={12} />
                </div>
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-6 btn-glow group"
              >
                <Github className="text-primary" />
                <div className="mt-4 font-semibold">GitHub</div>
                <div className="text-xs text-muted-foreground mt-1">Browse my code</div>
                <div className="mt-4 text-xs text-primary flex items-center gap-1">
                  Open <ArrowRight size={12} />
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="glass rounded-2xl p-6 btn-glow group">
                <Mail className="text-primary" />
                <div className="mt-4 font-semibold">Email</div>
                <div className="text-xs text-muted-foreground mt-1">Direct inbox</div>
                <div className="mt-4 text-xs text-primary flex items-center gap-1">
                  Send <ArrowRight size={12} />
                </div>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-6 btn-glow group"
              >
                <MessageCircle className="text-primary" />
                <div className="mt-4 font-semibold">WhatsApp</div>
                <div className="text-xs text-muted-foreground mt-1">Chat instantly</div>
                <div className="mt-4 text-xs text-primary flex items-center gap-1">
                  Message <ArrowRight size={12} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/50 py-10 px-5">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm">
            <span className="text-gradient-cyber font-bold">Nazeer</span>
            <span className="text-muted-foreground">.dev</span>
            <span className="text-muted-foreground">
              {" "}
              · © {new Date().getFullYear()} Shaik Nazeer Basha
            </span>
          </div>
          <SocialButtons size="sm" />
        </div>
      </footer>
    </div>
  );
}
