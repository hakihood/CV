import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

type Language = 'cs' | 'en'

const EMAIL = 'lukasbui2005@gmail.com'
const PHONE = '+420 774 962 568'
const LINKEDIN = 'https://www.linkedin.com/in/dai-duong-bui/'

type IconType = 'email' | 'phone' | 'linkedin' | 'pin'

function ContactIcon({ type }: { type: IconType }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="contact-icon">
      {type === 'email' && <path d="M3 6h18v12H3zM3 7l9 6 9-6" {...common} />}
      {type === 'phone' && <path d="M6 3h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L16 13l5 2v3c0 1.7-1.4 3-3.1 3C9.7 20.5 3.5 14.3 3 6.1 3 4.4 4.3 3 6 3Z" {...common} />}
      {type === 'linkedin' && <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2.5 6.2V17M7.5 6.5v.1M11 17v-4.3a2.6 2.6 0 0 1 5.2 0V17M11 12.7V17" {...common} />}
      {type === 'pin' && <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Zm0-8.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" {...common} />}
    </svg>
  )
}

function FlagCZ() {
  return (
    <svg aria-hidden="true" viewBox="0 0 30 20" className="flag" preserveAspectRatio="xMidYMid slice">
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#d7141a" />
      <path d="M0 0 15 10 0 20Z" fill="#11457e" />
    </svg>
  )
}

function FlagUS() {
  return (
    <svg aria-hidden="true" viewBox="0 0 38 20" className="flag" preserveAspectRatio="xMidYMid slice">
      <rect width="38" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="38" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="15.2" height={(20 * 7) / 13} fill="#3c3b6e" />
    </svg>
  )
}

/* Glass pill with both flags; the glass knob slides under the active one. */
function LanguageToggle({ language, onToggle, label }: { language: Language; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={language === 'en'}
      aria-label={label}
      title={label}
      className="lang-toggle"
      data-lang={language}
      onClick={onToggle}
      data-testid="language-toggle"
    >
      <span className="lang-knob" aria-hidden="true" />
      <span className="lang-option" data-active={language === 'cs'}>
        <FlagCZ />
      </span>
      <span className="lang-option" data-active={language === 'en'}>
        <FlagUS />
      </span>
    </button>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="download-icon">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return <span aria-hidden="true" className="link-arrow">↗</span>
}

type SkillGroup = { label: string; items: string }
type Entry = { period: string; note: string; role: string; org: string; bullets: string[]; links?: { label: string; href: string }[] }
type Project = {
  label: string
  title: string
  org?: string
  year?: string
  /* A short prose description, for cards that read better as one paragraph. */
  text?: string
  bullets?: string[]
  stack?: string
  links?: { label: string; href: string; note: string; status?: string }[]
}
type Study = { school: string; field: string; period: string }

type Copy = {
  toolbar: string
  print: string
  languageButton: string
  about: string
  nickname: string
  location: string
  licence: string
  contact: string
  skills: string
  education: string
  certificates: string
  languages: string
  community: string
  communityText: string
  experience: string
  selectedWork: string
  summary: string
  skillGroups: SkillGroup[]
  entries: Entry[]
  projects: Project[]
  studies: Study[]
  certificateList: string[]
  languageList: { name: string; level: string }[]
}

const cs: Copy = {
  toolbar: 'Životopis · 2026',
  print: 'Stáhnout PDF',
  languageButton: 'Switch to English',
  about: 'O mně',
  nickname: 'Lukáš',
  location: 'Plzeň',
  licence: 'Řidičský průkaz · skupina B',
  contact: 'Kontakt',
  skills: 'Dovednosti',
  education: 'Vzdělání',
  certificates: 'Certifikáty',
  languages: 'Jazyky',
  community: 'Komunita',
  communityText: 'Pravidelně se účastním AI meetupů, hackathonů a tech konferencí v Česku i zahraničí. Jsem také aktivním členem komunity The Vibe Coders.',
  experience: 'Zkušenosti',
  selectedWork: 'Projekty',
  summary:
    'Jsem webový vývojář a automatizační specialista a studuji Informační management na ZČU v Plzni. Předtím jsem vystudoval obor Vývoj aplikací a webových stránek na SPŠE Plzeň. Pokročile ovládám WordPress, HTML, CSS, JavaScript a SQL, základy mám v Reactu a Pythonu. Nejvíc mě baví automatizace a AI, protože si s nimi můžu zjednodušit práci i život.',
  skillGroups: [
    { label: 'Web', items: 'WordPress · Webflow · HTML/CSS · JavaScript · React · SQL' },
    { label: 'Automatizace', items: 'Python · Playwright · n8n' },
    { label: 'AI', items: 'agentic engineering · využití LLM · evaluace modelů' },
  ],
  entries: [
    {
      period: 'od 11/2026',
      note: 'remote',
      role: 'Webflow & Automation Developer',
      org: 'Nameless',
      bullets: ['Tvorba a správa webů ve Webflow', 'Automatizace manuální práce v n8n a kódem'],
    },
    {
      period: 'od 09/2026',
      note: 'komunitní role',
      role: 'n8n Ambassador',
      org: 'n8n · Praha',
      bullets: [
        'Rozšiřování pražské komunity n8n: meetupy, hackathony a přednášky',
        'Spoluorganizace celodenní n8n coworking session na VŠE v rámci festivalu Dny AI: úvodní přednáška o n8n a pomoc ~35 účastníkům',
      ],
    },
    {
      period: '08/2025–09/2026',
      note: 'hybridně',
      role: 'Juniorní webový vývojář',
      org: 'Mravenci.cz',
      bullets: [
        'Weby ve WordPressu a Elementoru podle zadání i podle návrhů z Figmy',
        'Testování a zapracování zpětné vazby klientů i seniorních kolegů',
        'Servis, aktualizace a dlouhodobá údržba webů',
      ],
      links: [
        { label: 'jetmasters.cz', href: 'https://jetmasters.cz' },
        { label: 'ckvltava.cz', href: 'https://www.ckvltava.cz/' },
        { label: 'suchacart.cz', href: 'https://suchacart.cz' },
        { label: 'vip.petrranda.cz', href: 'https://vip.petrranda.cz/' },
      ],
    },
  ],
  projects: [
    {
      label: 'Automatizace / AI',
      title: 'DOD hlídač pro Studujvpk.cz',
      org: 'Mravenci.cz',
      year: '2026',
      bullets: [
        'Nahradil ruční obcházení webů 55 středních škol v Plzeňském kraji, termíny se hledají samy',
        'Pipeline v Pythonu: stažení webů, klasifikace úryvků přes LLM, porovnání s minulým během a zápis do tabulky, ze které si web klienta bere obsah',
        'Součástí je i audit s knihovnou Playwright, který projde i weby vykreslované JavaScriptem a termíny schované v kalendářích, a vlastní evaluační sada na porovnávání AI modelů',
      ],
    },
    {
      label: 'Vlastní automatizace',
      title: 'Job Finder',
      year: '2026',
      bullets: [
        'n8n workflow každý den sbírá nabídky z pracovních portálů a odstraňuje duplicity. LLM hodnotí, jak odpovídají mému profilu, a nejlepší pošle na Discord.',
        'Zadání jsem prověřil skillem grill-me (Matt Pocock), sepsal PRD a rozdělil ho na issues. Podle nich AI agent stavěl workflow přes n8n MCP a oficiální plugin.',
        'Výstup kontrolovali dva automatičtí revieweři: jeden hlídal konvence (pojmenování uzlů, poznámky, globální error trigger), druhý funkčnost a testovací běhy.',
      ],
    },
    {
      label: 'Samostatné webové projekty',
      title: '',
      bullets: [
        'Kompletní realizace projektu – od komunikace s klientem přes návrh struktury a vizuálu až po tvorbu obsahu a finální předání',
      ],
      links: [
        { label: 'DS Wantíci', href: 'https://dswantici.cz/', note: 'dětská skupina' },
        { label: 'DS Wanted', href: 'https://www.dswanted.cz/', note: 'taneční skupina', status: 'Ve vývoji' },
        { label: 'Mérica Horses', href: 'https://mericahorses.cz/', note: 'stáj a zookoutek' },
      ],
    },
    {
      label: 'Maturitní projekt',
      title: 'LaceHub',
      stack: 'React · Tailwind CSS',
      text: 'Webová platforma pro přeprodejce tenisek, která automaticky páruje nabídku s poptávkou. Když se inventář prodejce shoduje s poptávkou kupujícího, oběma stranám automaticky přijde e-mail.',
    },
    {
      label: 'Hackathon · 3. místo · tým 3 lidí',
      title: 'Nudge',
      org: 'AI Tinkerers Prague',
      year: '11/2026',
      text: 'Hlasový AI doučovatel matematiky pro děti 6–10 let. Dítě vyfotí úkol a Nudge ho látku naučí mluvením, bez psaní a čtení, a pak mu dá podobné příklady na procvičení. Výsledek neprozradí a díky vektorové databázi se učí z každé lekce.',
      links: [{ label: 'GitHub', href: 'https://github.com/pylyf/hackathon1311', note: 'ElevenLabs · Qdrant' }],
    },
  ],
  studies: [
    { school: 'Západočeská univerzita, Fakulta ekonomická', field: 'Informační management', period: 'od 2026/27' },
    { school: 'SPŠE Plzeň', field: 'Vývoj aplikací a webových stránek', period: '2021–2025' },
  ],
  certificateList: ['n8n Academy: AI, Testing & Best Practices · 2026', 'n8n Academy: Integrations & APIs · 2026', 'n8n Academy: Essentials · 2026'],
  languageList: [
    { name: 'Čeština', level: 'rodilý' },
    { name: 'Vietnamština', level: 'C2 / B1' },
    { name: 'Angličtina', level: 'B2' },
  ],
}

const en: Copy = {
  toolbar: 'Résumé · 2026',
  print: 'Download PDF',
  languageButton: 'Přepnout do češtiny',
  about: 'About me',
  nickname: 'Lukáš',
  location: 'Pilsen, CZ',
  licence: 'Driving licence · category B',
  contact: 'Contact',
  skills: 'Skills',
  education: 'Education',
  certificates: 'Certificates',
  languages: 'Languages',
  community: 'Community',
  communityText: 'I regularly attend AI meetups, hackathons and tech conferences in Czechia and abroad. I’m also an active member of The Vibe Coders community.',
  experience: 'Experience',
  selectedWork: 'Projects',
  summary:
    'I’m a web developer and automation specialist, studying Information Management at the University of West Bohemia in Pilsen. Before that, I graduated in application and web development at SPŠE Plzeň. I have advanced skills in WordPress, HTML, CSS, JavaScript and SQL, and the basics of React and Python. I enjoy automation and AI most, because they make both work and life simpler.',
  skillGroups: [
    { label: 'Web', items: 'WordPress · Webflow · HTML/CSS · JavaScript · React · SQL' },
    { label: 'Automation', items: 'Python · Playwright · n8n' },
    { label: 'AI', items: 'agentic engineering · applied LLMs · model evaluation' },
  ],
  entries: [
    {
      period: 'since 11/2026',
      note: 'remote',
      role: 'Webflow & Automation Developer',
      org: 'Nameless',
      bullets: ['Building and maintaining websites in Webflow', 'Automating manual work with n8n and code'],
    },
    {
      period: 'since 09/2026',
      note: 'community role',
      role: 'n8n Ambassador',
      org: 'n8n · Prague',
      bullets: [
        'Growing the Prague n8n community through meetups and hackathons',
        'Co-hosted a whole-day n8n coworking session at VŠE as part of the Dny AI festival: intro talk on n8n, then hands-on help for ~35 attendees',
      ],
    },
    {
      period: '08/2025–09/2026',
      note: 'hybrid',
      role: 'Junior web developer',
      org: 'Mravenci.cz',
      bullets: [
        'WordPress and Elementor websites from written briefs or Figma designs',
        'Testing and folding in feedback from clients and senior colleagues',
        'Servicing, updates and long-term maintenance of client sites',
      ],
      links: [
        { label: 'jetmasters.cz', href: 'https://jetmasters.cz' },
        { label: 'ckvltava.cz', href: 'https://www.ckvltava.cz/' },
        { label: 'suchacart.cz', href: 'https://suchacart.cz' },
        { label: 'vip.petrranda.cz', href: 'https://vip.petrranda.cz/' },
      ],
    },
  ],
  projects: [
    {
      label: 'Automation / AI',
      title: 'Open Day Radar for Studujvpk.cz',
      org: 'Mravenci.cz',
      year: '2026',
      bullets: [
        'Replaced manual checking of 55 school websites, the dates now find themselves',
        'Python pipeline: fetch the sites, classify the snippets with an LLM, diff against the previous run and write to the sheet the client’s website reads its content from',
        'Includes a deeper audit built on Playwright that also covers JavaScript-rendered sites and dates buried in calendars, plus my own evaluation set for comparing AI models',
      ],
    },
    {
      label: 'Personal automation',
      title: 'Job Finder',
      year: '2026',
      bullets: [
        'The n8n workflow collects listings from job boards every day and removes duplicates. An LLM scores how well they match my profile and sends the best ones to Discord.',
        'I stress-tested the brief with the grill-me skill (Matt Pocock), wrote a PRD and split it into issues. Following them, an AI agent built the workflow through the n8n MCP and the official plugin.',
        'Two automated reviewers checked the output: one watched conventions (node naming, notes, a global error trigger), the other functionality and test runs.',
      ],
    },
    {
      label: 'Independent web builds',
      title: '',
      bullets: [
        'Full delivery – from talking to the client through structure and visual design to producing the content and handing the site over',
      ],
      links: [
        { label: 'DS Wantíci', href: 'https://dswantici.cz/', note: 'children’s group' },
        { label: 'DS Wanted', href: 'https://www.dswanted.cz/', note: 'dance group', status: 'In progress' },
        { label: 'Mérica Horses', href: 'https://mericahorses.cz/', note: 'stable & mini zoo' },
      ],
    },
    {
      label: 'Final-year project',
      title: 'LaceHub',
      stack: 'React · Tailwind CSS',
      text: 'Web platform for sneaker resellers that automatically matches supply with demand. When a seller’s inventory matches a buyer’s request, both sides get an email automatically.',
    },
    {
      label: 'Hackathon · 3rd place · team of 3',
      title: 'Nudge',
      org: 'AI Tinkerers Prague',
      year: '11/2026',
      text: 'Voice AI maths tutor for children aged 6–10. The child takes a photo of their homework and Nudge teaches the topic by talking, with no reading or writing, then gives similar problems to practise. It never gives away the answer, and a vector database lets it learn from every lesson.',
      links: [{ label: 'GitHub', href: 'https://github.com/pylyf/hackathon1311', note: 'ElevenLabs · Qdrant' }],
    },
  ],
  studies: [
    { school: 'University of West Bohemia, Faculty of Economics', field: 'Information Management', period: 'from 2026/27' },
    { school: 'SPŠE Plzeň', field: 'Application & web development', period: '2021–2025' },
  ],
  certificateList: ['n8n Academy: AI, Testing & Best Practices · 2026', 'n8n Academy: Integrations & APIs · 2026', 'n8n Academy: Essentials · 2026'],
  languageList: [
    { name: 'Czech', level: 'native' },
    { name: 'Vietnamese', level: 'C2 / B1' },
    { name: 'English', level: 'B2' },
  ],
}

const copy: Record<Language, Copy> = { cs, en }

function RailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rail-section">
      <h2 className="rail-title">{title}</h2>
      {children}
    </section>
  )
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section className="block" aria-labelledby={id}>
      <h2 className="block-title" id={id}>
        {title}
      </h2>
      {children}
    </section>
  )
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => (
        /* The first card carries the accent tint: it is the piece of work
           worth reading if a recruiter only reads one. */
        <article className={index === 0 ? 'project is-featured' : 'project'} key={project.label}>
          <div className="project-head">
            <p className="project-label">{project.label}</p>
            {project.year ? <span className="project-year">{project.year}</span> : null}
          </div>
          {project.title ? (
            <h3>
              {project.title}
              {project.org ? <span> @ {project.org}</span> : null}
            </h3>
          ) : null}
          {project.text ? <p className="project-text">{project.text}</p> : null}
          {project.bullets ? (
            <ul className="bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {project.links ? (
            <ul className="project-links">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ArrowIcon />
                  </a>
                  <i>{link.note}</i>
                  {link.status ? <em className="link-status">{link.status}</em> : null}
                </li>
              ))}
            </ul>
          ) : null}
          {project.stack ? <p className="stack">{project.stack}</p> : null}
        </article>
      ))}
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>('cs')
  const t = copy[language]

  return (
    <main className="cv-shell" data-testid="cv-page">
      <div className="screen-toolbar">
        <span className="toolbar-note">{t.toolbar}</span>
        <div className="toolbar-actions">
          <LanguageToggle language={language} onToggle={() => setLanguage(language === 'cs' ? 'en' : 'cs')} label={t.languageButton} />
          {/* Downloads a pre-generated text PDF (real text layer + clickable
              links, single A4 page) instead of window.print(). The browser
              print dialog rasterizes to multiple pages when the user leaves
              margins on "Default" / picks "Microsoft Print to PDF", which breaks
              ATS parsing — this side-steps that entirely.
              The files live in public/ and are regenerated with
              scripts/export-pdf.py. Keep them in sync whenever the CV content
              changes. */}
          <a
            className="toolbar-button is-primary"
            href={`/Dai_Duong_Bui_CV_${language}.pdf`}
            download="Dai Duong Bui - CV.pdf"
            data-testid="print-cv"
          >
            <DownloadIcon />
            {t.print}
          </a>
        </div>
      </div>

      <div className="paper-frame">
        <article className="page" lang={language} aria-label="Dai Duong Bui — CV">
          <aside className="rail">
            <h1 className="rail-name">
              Dai Duong
              <br />
              <i>Bui</i> <span>({t.nickname})</span>
            </h1>
            <img className="portrait" src="/photo.jpg" alt="Dai Duong Bui" width={1382} height={1569} />

            <RailSection title={t.contact}>
              <address className="rail-contact">
                <a className="contact-line" href={`mailto:${EMAIL}`}>
                  <ContactIcon type="email" />
                  <span>{EMAIL}</span>
                </a>
                <a className="contact-line" href={`tel:${PHONE.replace(/\s/g, '')}`}>
                  <ContactIcon type="phone" />
                  <span>{PHONE}</span>
                </a>
                <a className="contact-line" href={LINKEDIN} target="_blank" rel="noreferrer">
                  <ContactIcon type="linkedin" />
                  <span>linkedin.com/in/dai-duong-bui</span>
                </a>
                <span className="contact-line">
                  <ContactIcon type="pin" />
                  <span>{t.location}</span>
                </span>
              </address>
              <p className="rail-muted">{t.licence}</p>
            </RailSection>

            <RailSection title={t.skills}>
              <dl className="rail-skills">
                {t.skillGroups.map((group) => (
                  <div key={group.label}>
                    <dt>{group.label}</dt>
                    <dd>{group.items}</dd>
                  </div>
                ))}
              </dl>
            </RailSection>

            <RailSection title={t.education}>
              <ul className="rail-list">
                {t.studies.map((study) => (
                  <li key={study.school}>
                    <strong>{study.school}</strong>
                    <span>{study.field}</span>
                    <em>{study.period}</em>
                  </li>
                ))}
              </ul>
            </RailSection>

            <RailSection title={t.certificates}>
              <ul className="rail-list">
                {t.certificateList.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RailSection>

            <RailSection title={t.languages}>
              <ul className="rail-languages">
                {t.languageList.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <b>{item.level}</b>
                  </li>
                ))}
              </ul>
            </RailSection>

            <RailSection title={t.community}>
              <p className="rail-text">{t.communityText}</p>
            </RailSection>
          </aside>

          <div className="sheet-main">
            <Block id="about" title={t.about}>
              <p className="intro">{t.summary}</p>
            </Block>

            <Block id="experience" title={t.experience}>
              {t.entries.map((entry) => (
                <article className="entry" key={entry.period + entry.role}>
                  <div className="entry-meta">
                    <strong>{entry.period}</strong>
                    <span>{entry.note}</span>
                  </div>
                  <div className="entry-body">
                    <h3>
                      {entry.role} <span>@ {entry.org}</span>
                    </h3>
                    <ul className="bullets">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {entry.links ? (
                      <p className="entry-links">
                        {entry.links.map((link, index) => (
                          <span key={link.href}>
                            {index > 0 ? ' · ' : null}
                            <a href={link.href} target="_blank" rel="noreferrer">
                              {link.label} <ArrowIcon />
                            </a>
                          </span>
                        ))}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </Block>

            <Block id="work" title={t.selectedWork}>
              <ProjectList projects={t.projects} />
            </Block>

          </div>
        </article>
      </div>
    </main>
  )
}
