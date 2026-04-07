const skills = [
  {
    category: 'Languages',
    items: ['Go', 'Python', 'Kotlin', 'JavaScript', 'Groovy'],
  },
  {
    category: 'Backend',
    items: ['REST APIs', 'GraphQL APIs', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    category: 'Frameworks',
    items: ['Micronaut', 'Flask', 'Django'],
  },
  {
    category: 'Messaging & Data',
    items: ['Kafka', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Infrastructure & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'CI/CD Pipelines'],
  },
  {
    category: 'Security',
    items: ['Threat Modeling', 'Secure SDLC', 'SAST / DAST / SCA', 'Penetration Testing Coordination'],
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-ink">About</h1>
        <div className="flex flex-col gap-4 text-sm text-ink-2 leading-relaxed max-w-2xl">
          <p>
            I&apos;m a backend software engineer with over five years of experience building distributed
            systems, event-driven microservices, and internal tooling in enterprise environments.
          </p>
          <p>
            Most recently at Target, I worked across a range of backend and platform oriented problems,
            from Kafka-based event stream enrichment and high-traffic API reliability, to automation
            tooling for application deployment and configuration change approvals that cut response times
            from hours to minutes.
          </p>
          <p>
            Alongside the backend work, I developed a strong interest in application security- doing
            threat modeling, coordinating penetration testing, and integrating SAST, DAST, and SCA
            tooling into delivery workflows. I also served as a security champion on multiple teams,
            bridging engineering and daily security practices.
          </p>
          <p>
            I hold a B.S. in Computer Science from Oregon State University and a B.A. in American
            Studies from Macalester College.
          </p>
          <p>
            I&apos;m currently looking for roles in backend engineering, application security, or
            secure software engineering. Ideally on a team that values reliable systems, security-minded
            thinking, and a culture of growth and continuous learning.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="text-sm font-semibold text-ink uppercase tracking-wider">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col gap-2">
              <p className="text-xs font-medium text-ink-3 uppercase tracking-wider">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                  <span
                    key={item}
                    className="text-xs text-ink-2 bg-surface rounded-md px-2 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
