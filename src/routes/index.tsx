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

function ArrowIcon() {
  return <span aria-hidden="true" className="link-arrow">↗</span>
}

type SkillGroup = { label: string; items: string }
type Entry = { period: string; note: string; role: string; org: string; bullets: string[]; links?: { label: string; href: string }[] }
type Project = { label: string; title: string; org?: string; year?: string; bullets: string[]; stack?: string; links?: { label: string; href: string; note: string; status?: string }[] }
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
  experience: string
  selectedWork: string
  summary: string
  skillGroups: SkillGroup[]
  entries: Entry[]
  projects: Project[]
  studies: Study[]
  certificateList: string[]
  languageList: { name: string; level: string }[]
  communityText: string
}

const cs: Copy = {
  toolbar: 'Životopis · 2026',
  print: 'Stáhnout PDF',
  languageButton: 'English',
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
  experience: 'Zkušenosti',
  selectedWork: 'Vybraná tvorba',
  summary:
    'Juniorní webový vývojář a student Informačního managementu na Západočeské univerzitě v Plzni. Na SPŠE Plzeň jsem vystudoval Vývoj aplikací a webových stránek. Mám pokročilé znalosti WordPressu, HTML, CSS, JavaScriptu a SQL, k tomu základy Reactu a Pythonu. Rád poznávám nové lidi a učím se novým věcem. Nejvíc mě baví automatizace, umělá inteligence a hledání způsobů, jak si s ní zjednodušit život.',
  skillGroups: [
    { label: 'Web', items: 'WordPress · HTML/CSS · JavaScript · React · SQL' },
    { label: 'Automatizace', items: 'Python · Playwright · n8n' },
    { label: 'AI', items: 'agentic engineering · integrace LLM · prompt engineering · evaluace modelů' },
    { label: 'Nástroje', items: 'Git · Figma' },
  ],
  entries: [
    {
      period: 'od 09/2026',
      note: 'komunitní role',
      role: 'n8n Ambassador',
      org: 'n8n · Praha',
      bullets: ['Rozšiřování pražské komunity n8n: organizace meetupů, hackathonů a přednášek'],
    },
    {
      period: 'od 08/2025',
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
    {
      period: '2023 a 2024',
      note: 'dvoutýdenní praxe',
      role: 'Stážista webového vývoje',
      org: 'Robology, ANT Studio',
      bullets: [
        'Robology (2024): Elementor, převod návrhů z Figmy do WordPressu',
        'ANT Studio (2023): obsahová editace v Elementoru, modernizace starších webů, blog, responzivita',
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
        'Součástí je i důkladnější audit s knihovnou Playwright, který projde i weby vykreslované JavaScriptem a termíny schované v kalendářích',
        'Vlastní evaluační sada na porovnávání AI modelů',
      ],
      stack: 'Python · Playwright · API',
    },
    {
      label: 'Maturitní projekt',
      title: 'LaceHub',
      bullets: [
        'Webová platforma pro přeprodejce tenisek',
        'Automatické párování nabídky a poptávky',
        'Při shodě inventáře odchází e-mail oběma stranám',
      ],
      stack: 'React · Tailwind CSS',
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
        { label: 'Malá Levná Auta', href: 'https://malalevnaauta.cz/', note: 'autopůjčovna' },
      ],
    },
  ],
  studies: [
    { school: 'Západočeská univerzita, Fakulta ekonomická', field: 'Informační management', period: 'od 2026/27' },
    { school: 'Západočeská univerzita, Fakulta aplikovaných věd', field: 'Softwarové inženýrství', period: '2025–2026' },
    { school: 'SPŠE Plzeň', field: 'Vývoj aplikací a webových stránek', period: '2021–2025' },
  ],
  certificateList: ['n8n Academy: AI, Testing & Best Practices · 2026', 'n8n Academy: Integrations & APIs · 2026', 'n8n Academy: Essentials · 2026'],
  languageList: [
    { name: 'Čeština', level: 'rodilý' },
    { name: 'Vietnamština', level: 'C2 / B1' },
    { name: 'English', level: 'B2' },
  ],
  communityText:
    'Pravidelně se účastním AI meetupů, hackathonů a tech konferencí v Česku i zahraničí. Jsem také aktivním členem komunity The Vibe Coders. Ve volném čase hraji na trubku v několika orchestrech a rekreačně se věnuji šachu.',
}

const en: Copy = {
  toolbar: 'Résumé · 2026',
  print: 'Download PDF',
  languageButton: 'Česky',
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
  experience: 'Experience',
  selectedWork: 'Selected work',
  summary:
    'Junior web developer and Information Management student at the University of West Bohemia in Pilsen. I graduated in application and web development at SPŠE Plzeň. I have advanced knowledge of WordPress, HTML, CSS, JavaScript and SQL, plus the basics of React and Python. I like meeting new people and picking up new skills. Automation and AI interest me most, along with finding ways to make life simpler with them.',
  skillGroups: [
    { label: 'Web', items: 'WordPress · HTML/CSS · JavaScript · React · SQL' },
    { label: 'Automation', items: 'Python · Playwright · n8n' },
    { label: 'AI', items: 'agentic engineering · LLM integration · prompt engineering · model evaluation' },
    { label: 'Tools', items: 'Git · Figma' },
  ],
  entries: [
    {
      period: 'since 09/2026',
      note: 'community role',
      role: 'n8n Ambassador',
      org: 'n8n · Prague',
      bullets: ['Growing the Prague n8n community by organising meetups, hackathons and talks'],
    },
    {
      period: 'since 08/2025',
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
    {
      period: '2023 & 2024',
      note: '2-week placements',
      role: 'Web development intern',
      org: 'Robology, ANT Studio',
      bullets: [
        'Robology (2024): Elementor builds, Figma designs into WordPress pages',
        'ANT Studio (2023): content editing in Elementor, modernising legacy sites, blog sections, responsive fixes',
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
        'Includes a deeper audit built on Playwright that also covers JavaScript-rendered sites and dates buried in calendars',
        'Own evaluation set for comparing AI models',
      ],
      stack: 'Python · Playwright · API',
    },
    {
      label: 'Final-year project',
      title: 'LaceHub',
      bullets: [
        'Web platform for sneaker resellers',
        'Automatic matching of supply and demand',
        'When inventory matches, an email goes to both sides',
      ],
      stack: 'React · Tailwind CSS',
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
        { label: 'Malá Levná Auta', href: 'https://malalevnaauta.cz/', note: 'car rental' },
      ],
    },
  ],
  studies: [
    { school: 'University of West Bohemia, Faculty of Economics', field: 'Information Management', period: 'from 2026/27' },
    { school: 'University of West Bohemia, Faculty of Applied Sciences', field: 'Software Engineering', period: '2025–2026' },
    { school: 'SPŠE Plzeň', field: 'Application & web development', period: '2021–2025' },
  ],
  certificateList: ['n8n Academy: AI, Testing & Best Practices · 2026', 'n8n Academy: Integrations & APIs · 2026', 'n8n Academy: Essentials · 2026'],
  languageList: [
    { name: 'Czech', level: 'native' },
    { name: 'Vietnamese', level: 'C2 / B1' },
    { name: 'English', level: 'B2' },
  ],
  communityText:
    'I regularly attend AI meetups, hackathons and tech conferences at home and abroad, and I’m an active member of The Vibe Coders. In my free time I play trumpet in several orchestras and play chess for fun.',
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
          <ul className="bullets">
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
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
          <button
            type="button"
            className="toolbar-button"
            onClick={() => setLanguage(language === 'cs' ? 'en' : 'cs')}
            data-testid="language-toggle"
          >
            {t.languageButton}
          </button>
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

            <Block id="community" title={t.community}>
              <p className="intro">{t.communityText}</p>
            </Block>
          </div>
        </article>
      </div>
    </main>
  )
}
