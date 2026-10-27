import { useNavigate } from "react-router";

const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const icons = {
  package: (
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.4c2 .7 3.5 2.6 3.5 5.6" />
    </>
  ),
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.1 8 7.5 9.5 4.4-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20Z" />
  ),
  bolt: <path d="M13.5 2 4 13.5h6.2L9 22l10-12.2h-6.4L13.5 2Z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

const stats = [
  { icon: "package", value: "20K+", label: "Products" },
  { icon: "users", value: "50K+", label: "Happy Customers" },
  { icon: "star", value: "4.9", label: "Avg. Rating" },
  { icon: "truck", value: "99%", label: "On-time Delivery" },
];

const values = [
  { icon: "shield", title: "Trust", text: "Every product is verified for quality and authenticity before listing." },
  { icon: "truck", title: "Speed", text: "We obsess over delivery times so your orders arrive when promised." },
  { icon: "heart", title: "Community", text: "Built around real customer feedback, not just business metrics." },
  { icon: "star", title: "Quality", text: "We curate the best — no filler, no junk, just great products." },
];

const team = [
  { name: "Aryan Shah", role: "Founder & CEO", color: "bg-[#c8f500] text-black" },
  { name: "Priya Mehta", role: "Head of Product", color: "bg-blue-500 text-white" },
  { name: "Rohan Verma", role: "Lead Engineer", color: "bg-purple-500 text-white" },
  { name: "Sneha Kapoor", role: "Design Director", color: "bg-rose-500 text-white" },
];

const card = "rounded-2xl border border-white/15 bg-[#0f0f0f]";

export default function About() {


    let navigate = useNavigate()
    
  return (
    <div className="min-h-screen bg-[#0d0d0d] font-sans text-white">
      <main className="mx-auto max-w-275 px-4 pb-24 pt-12 sm:px-6">
        {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <span className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[#c8f500] text-black">
            <Icon className="h-8 w-8">{icons.bolt}</Icon>
          </span>
          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-[56px]">
            About <span className="text-[#c8f500]">SkyMart</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            SkyMart is a next-generation e-commerce platform built to make online shopping fast,
            fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* Stats */}
        <section className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className={`${card} flex flex-col items-center px-4 py-6`}>
              <span className="text-[#c8f500]">
                <Icon className="h-4.5 w-4.5">{icons[s.icon]}</Icon>
              </span>
              <p className="mt-3 text-[28px] font-bold leading-none">{s.value}</p>
              <p className="mt-2 text-xs text-neutral-500">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Our Story */}
        <section className="mt-16 rounded-3xl border border-white/15 bg-[#0f0f0f] p-8 sm:p-11">
          <h2 className="text-[28px] font-bold tracking-tight">Our Story</h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-neutral-300">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated,
              slow e-commerce experiences. We asked ourselves: what if shopping online was
              actually <em className="font-medium text-white">enjoyable</em>?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock
              electronics, fashion, jewelry, and everyday essentials — all at prices that don't
              require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you
              feel good about every purchase you make here.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-16">
          <h2 className="text-center text-[28px] font-bold tracking-tight">What We Stand For</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className={`${card} flex items-start gap-4 p-6`}>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c8f500]/10 text-[#c8f500]">
                  <Icon className="h-5 w-5">{icons[v.icon]}</Icon>
                </span>
                <div>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-400">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mt-16">
          <h2 className="text-center text-[28px] font-bold tracking-tight">Meet the Team</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className={`${card} flex flex-col items-center px-4 py-6`}>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold ${m.color}`}
                >
                  {m.name.charAt(0)}
                </span>
                <p className="mt-3 text-[15px] font-semibold">{m.name}</p>
                <p className="mt-1 text-xs text-neutral-500">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-white/10 bg-[#0f0f0f] px-6 py-12 text-center">
          <h2 className="text-[28px] font-bold tracking-tight">Ready to shop?</h2>
          <p className="mt-3 text-[15px] text-neutral-400">
            Explore thousands of products at unbeatable prices.
          </p>
          <button
          
          
            type="button"
            onClick={()=> navigate("/shop")}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#c8f500] px-7 py-3.5 text-[15px] font-semibold text-black transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8f500]"
          >
            Browse Products
            <Icon className="h-4 w-4">{icons.arrow}</Icon>
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/15 py-10 text-center">
        <p className="text-lg font-medium text-[#c8f500]">SkyMart</p>
        <p className="mt-2 text-xs text-neutral-500">
          © 2025 SkyMart • Built with React + Redux + TanStack Query
        </p>
      </footer>
    </div>
  );
}