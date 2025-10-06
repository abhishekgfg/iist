import React from 'react';

// SkillDevelopmentPage.jsx
// Single-file React component styled with Tailwind CSS.
// Default export a React component that renders a long-form, responsive page
// describing Skill Development in India, NCVET, NSDC, PMKK and roadmap.

export default function SkillDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Skill Development in India</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base opacity-90">
            Building a future-ready workforce through inclusive vocational education, quality standards,
            and industry-aligned training.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#overview"
              className="inline-flex items-center justify-center rounded-2xl bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm hover:bg-white/30"
            >
              Read the overview
            </a>
            <a
              href="#initiatives"
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20"
            >
              Key initiatives
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview + key stat */}
        <section id="overview" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <article className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold">Why skill development matters</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Skill development is a critical component in India’s drive to become a global economic
              powerhouse. With a large youth population, ensuring employability through quality
              training and upskilling is essential to convert demographic advantage into economic
              growth.
            </p>

            <h3 className="mt-6 text-lg font-semibold">The gap in vocational training</h3>
            <p className="mt-2 text-sm leading-relaxed">
              National Sample Survey Office (NSSO) 2011-12 (68th round) highlighted a noticeable
              gap in participation in formal vocational training. Among individuals aged 15–59 years:
            </p>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              <li><strong>2.2%</strong> reported having received formal vocational training.</li>
              <li><strong>8.6%</strong> reported having received non-formal vocational training.</li>
            </ul>

            <p className="mt-4 text-sm leading-relaxed">
              This underlines the need for an inclusive vocational education framework that reaches
              every corner of the country and aligns training with market needs.
            </p>
          </article>

          <aside className="bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-semibold">Quick facts</h4>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium">Demographic focus</dt>
                <dd className="opacity-90">Youth (15–59), employability & upskilling</dd>
              </div>
              <div>
                <dt className="font-medium">Primary aim</dt>
                <dd className="opacity-90">Bridge skill gaps & improve industry readiness</dd>
              </div>
              <div>
                <dt className="font-medium">Long-term outcome</dt>
                <dd className="opacity-90">Economic growth, entrepreneurship, reduced unemployment</dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* Initiatives */}
        <section id="initiatives" className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Major institutions & initiatives</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Several institutions and national programs work together to strengthen the skill
              ecosystem in India. Below are the key players and what they do.
            </p>

            <div className="mt-6 space-y-6">
              {/* NCVET Card */}
              <article className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold">National Council for Vocational Education and Training (NCVET)</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Established on <strong>5th December 2018</strong>, NCVET is the regulatory body that
                  sets and enforces quality standards for vocational education and training.
                </p>

                <dl className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-3 border rounded">
                    <dt className="font-semibold">Standardization</dt>
                    <dd className="mt-1 opacity-90">Guidelines & benchmark setting</dd>
                  </div>
                  <div className="p-3 border rounded">
                    <dt className="font-semibold">Quality Assurance</dt>
                    <dd className="mt-1 opacity-90">Monitoring & evaluation of institutes</dd>
                  </div>
                  <div className="p-3 border rounded">
                    <dt className="font-semibold">Accreditation</dt>
                    <dd className="mt-1 opacity-90">Certifying institutions and learners</dd>
                  </div>
                </dl>

              </article>

              {/* NSDC Card */}
              <article className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold">National Skill Development Corporation (NSDC)</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  NSDC is a public-private partnership that catalyses the creation of large, quality
                  training institutions and acts as a market maker to align training with industry
                  demand.
                </p>
                <ul className="mt-4 list-disc list-inside text-sm space-y-2">
                  <li><strong>Mobilizing funds:</strong> Resource mobilization for scaling initiatives.</li>
                  <li><strong>Institutes:</strong> Establishing skill development institutes across India.</li>
                  <li><strong>Industry partnerships:</strong> Keeps curriculum industry-aligned and aids placements.</li>
                </ul>
              </article>

              {/* Skill India + PMKK Card */}
              <article className="bg-white shadow rounded-lg p-6">
                <h3 className="text-xl font-semibold">Skill India Mission & Pradhan Mantri Kaushal Kendras (PMKK)</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  Skill India is a national movement to upskill and reskill millions of youth. PMKKs
                  are model centers, intended to be district-level hubs with high-quality infrastructure.
                </p>

                <h4 className="mt-4 font-semibold">PMKK features</h4>
                <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                  <li>State-of-the-art labs and training tools that simulate real job environments.</li>
                  <li>Focus on sectors with high demand: manufacturing, IT, healthcare, construction, hospitality.</li>
                  <li>Secured subsidized loan (up to Rs. 70 lakhs) for private training partners to set up labs.</li>
                </ul>
              </article>

            </div>
          </div>

          {/* Sidebar: NSDC-Industry, Impact */}
          <aside className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="font-semibold">NSDC & Industry Collaboration</h4>
              <p className="mt-2 text-sm leading-relaxed">
                By collaborating with industry leaders, NSDC ensures curricula remain current with
                technology and business practices, improving job-readiness and placement outcomes.
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="font-semibold">Impact on economy</h4>
              <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                <li>Reduces unemployment by making workers job-ready.</li>
                <li>Boosts entrepreneurship by enabling self-employment.</li>
                <li>Attracts investment and promotes industrial growth with a skilled workforce.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="mt-12 bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold">Future Roadmap</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Continued expansion of vocational centers, inclusive outreach, and lifelong learning
            pathways are central to the roadmap. The focus will be on upskilling existing workers,
            broadening access to underrepresented groups, and creating continuous learning models.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h5 className="font-semibold">Upskilling</h5>
              <p className="mt-2 text-sm opacity-90">Short courses & micro-credentials tied to industry needs.</p>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-semibold">Inclusion</h5>
              <p className="mt-2 text-sm opacity-90">Targeted programs for women, rural youth & disadvantaged groups.</p>
            </div>
            <div className="p-4 border rounded">
              <h5 className="font-semibold">Lifelong learning</h5>
              <p className="mt-2 text-sm opacity-90">Continuous pathways for reskilling across careers.</p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-10 bg-gradient-to-r from-slate-50 to-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Want to implement a local skilling program?</h3>
            <p className="mt-2 text-sm opacity-90">Use this page to brief stakeholders, propose PMKK-style centers, or design curricula aligned with NCVET standards.</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-semibold hover:bg-indigo-700">Download brief</button>
            <button className="rounded-xl border border-indigo-600 text-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-50">Contact a partner</button>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Content compiled for a Skill Development overview page. Data point: NSSO 2011-12 (68th round).</p>
        </footer>
      </main>
    </div>
  );
}
