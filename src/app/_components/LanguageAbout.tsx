"use client";

import { useState } from "react";

export type LanguageAboutProps = "en" | "br";

export function LanguageAbout() {
  const [language, setLanguage] = useState<LanguageAboutProps>("en");

  return (
    <div className="flex w-full flex-col gap-6 px-4">

      {/* ── Language Toggle ── */}
      <div className="flex w-full items-center justify-start gap-2">
        <button
          data-checked={language === "en" ? "true" : undefined}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105 hover:text-red-400 data-[checked]:bg-muted dark:data-[checked]:bg-zinc-900 data-[checked]:text-red-400 data-[checked]:font-bold cursor-pointer"
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <button
          data-checked={language === "br" ? "true" : undefined}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105 hover:text-red-400 data-[checked]:bg-muted dark:data-[checked]:bg-zinc-900 data-[checked]:text-red-400 data-[checked]:font-bold cursor-pointer"
          onClick={() => setLanguage("br")}
        >
          Português
        </button>
      </div>

      {/* ══ PORTUGUESE ══ */}
      {language === "br" ? (
        <div className="flex flex-col gap-10">

          <section>
            <h1 className="text-xl font-bold text-red-400 mb-4" id="about">
              Sobre mim
            </h1>
            <p className="leading-relaxed text-sm sm:text-base">
              Desenvolvedor de Software com experiência em <strong>Backend e DevOps</strong>,
              atuando no desenvolvimento de sistemas web <strong>escaláveis, multi-tenant e de alta
              disponibilidade</strong>. Vivência prática com{" "}
              <strong>.NET 8 (Clean Architecture, EF Core, PostgreSQL)</strong>,{" "}
              <strong>Java (Spring)</strong> e <strong>Python (Django, Flask)</strong> no backend.
              Experiência com <strong>mensageria (RabbitMQ)</strong>, <strong>cache (Redis)</strong>,{" "}
              <strong>CI/CD (Jenkins)</strong> e containerização com{" "}
              <strong>Docker e Docker Compose</strong>. Atuo em ambientes ágeis, com foco em
              qualidade, performance, automação de processos e redução de tempo de entrega.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4" id="journey">
              Minha Jornada
            </h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Minha trajetória na tecnologia começou em 2022 com suporte técnico de TI, o que acendeu
              minha paixão por programação. Busquei formação formal na <strong>Kenzie Academy</strong> como
              Desenvolvedor Fullstack e curso atualmente <strong>Engenharia da Computação</strong> na
              Faculdade Metropolitana de Manaus. Com o tempo, meu foco migrou para o{" "}
              <strong>backend</strong> — construindo arquiteturas distribuídas, APIs RESTful, sistemas
              seguros e infraestrutura automatizada. Hoje desenvolvo sistemas críticos de alta carga com
              múltiplos clientes simultâneos, guiado por princípios de Clean Architecture e entrega contínua.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-6" id="experience">
              Experiências
            </h2>
            <div className="space-y-10">

              {/* Grupo Tapajós */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-semibold">Desenvolvedor Backend — Grupo Tapajós</h4>
                  <span className="text-zinc-400 text-sm">Out 2025 – Presente</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  SNGPC Web — Arquitetura Multi-Tenant Centralizada
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                  <li>Criação completa da API backend multi-tenant, substituindo instalações individuais por cliente por uma única aplicação web compartilhada.</li>
                  <li>APIs RESTful com <strong>Clean Architecture e SOLID</strong> usando <strong>.NET 8 e Entity Framework Core</strong>.</li>
                  <li>Regras de negócio para conformidade com <strong>SNGPC (ANVISA)</strong>.</li>
                  <li>Testes unitários com <strong>xUnit</strong> e mocks para validação isolada de serviços.</li>
                  <li>Padronização da infraestrutura com <strong>PostgreSQL em containers Docker</strong>, eliminando bancos SQL Server locais por cliente.</li>
                  <li>Mensageria assíncrona com <strong>RabbitMQ</strong> e cache com <strong>Redis</strong> para desempenho e desacoplamento.</li>
                  <li>Pipelines de <strong>CI/CD com Jenkins</strong> e ambiente dockerizado para releases estáveis.</li>
                </ul>
              </div>

              {/* Sidia / Samsung */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-semibold">
                    Desenvolvedor Full Stack — Sidia Instituto de Ciência e Tecnologia (Samsung)
                  </h4>
                  <span className="text-zinc-400 text-sm">Jul 2024 – Out 2025</span>
                </div>

                <div className="space-y-4 pl-1">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Gerenciador de Dispositivos Android para Testes Remotos</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Sistema web de gerenciamento remoto de dispositivos Android com <strong>Java e Node.js</strong>, baseado no open source STF.</li>
                      <li>Suporte a múltiplos dispositivos simultâneos, persistência com <strong>RethinkDB</strong> e infraestrutura via <strong>Docker / Shell Script</strong>.</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Sistema de Gerenciamento de Testes em Releases</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Solução automatizada com <strong>Python (Flask)</strong> e <strong>MongoDB</strong> para validação de binários Samsung em pré-lançamento.</li>
                      <li><strong>Redução do tempo de validação de 2–3 dias para ~10 minutos</strong>, acelerando o ciclo de releases.</li>
                      <li>CI/CD com <strong>Docker Compose e Jenkins</strong> em ambiente Scrum.</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Sistema de Coleta e Centralização de Requisitos</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Sistema web com <strong>Python (Django)</strong> e <strong>PostgreSQL</strong> para centralização de requisitos de múltiplas fontes do ecossistema Samsung.</li>
                      <li><strong>Redução do tempo de validação de 3–4 dias para ~7 minutos</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projex */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-semibold">Desenvolvedor Full Stack — Projex Consulting</h4>
                  <span className="text-zinc-400 text-sm">Jun 2023 – Jun 2024</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Plataforma Web — Setor de Energia Elétrica</p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                  <li>Desenvolvimento e manutenção de plataforma de levantamento de carga com <strong>Java e Spring</strong> no backend.</li>
                  <li>Integração frontend/backend via APIs RESTful e padronização de ambientes com <strong>Docker e Docker Compose</strong>.</li>
                  <li>Versionamento e colaboração em equipe com <strong>Git</strong>.</li>
                </ul>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4" id="education">
              Educação
            </h2>
            <div className="space-y-1">
              <h4 className="text-base font-semibold">Faculdade Metropolitana de Manaus</h4>
              <p className="text-zinc-400 text-sm">Bacharelado em Engenharia da Computação · Jan 2020 – Jul 2026</p>
              <p className="text-sm sm:text-base leading-relaxed pt-1">
                Matemática Aplicada, Matemática Discreta, Algoritmos, Bancos de Dados,
                Machine Learning, Cloud Computing, Sistemas Distribuídos.
              </p>
            </div>
          </section>

        </div>

      ) : (
      /* ══ ENGLISH ══ */
        <div className="flex flex-col gap-10">

          <section>
            <h1 className="text-xl font-bold text-red-400 mb-4" id="about">
              About me
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              Software Developer with experience in <strong>Backend and DevOps</strong>, focused on
              building <strong>scalable, multi-tenant, and high-availability web systems</strong>.
              Hands-on expertise with <strong>.NET 8 (Clean Architecture, EF Core, PostgreSQL)</strong>,{" "}
              <strong>Java (Spring)</strong>, and <strong>Python (Django, Flask)</strong>.
              Experienced with <strong>async messaging (RabbitMQ)</strong>, <strong>caching (Redis)</strong>,{" "}
              <strong>CI/CD (Jenkins)</strong>, and containerization with{" "}
              <strong>Docker and Docker Compose</strong>. I thrive in agile environments, prioritizing
              quality, performance, and faster delivery cycles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4" id="journey">
              My Journey
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              My journey in technology started in 2022 with IT support work, which sparked a passion
              for software development. I pursued formal training at <strong>Kenzie Academy</strong> as
              a Fullstack Developer and am currently completing a degree in{" "}
              <strong>Computer Engineering</strong> at Faculdade Metropolitana de Manaus. Over time
              my focus shifted strongly towards <strong>backend engineering</strong> — distributed
              architectures, RESTful APIs, secure systems, and automated infrastructure. Today I design
              and deliver business-critical systems serving multiple clients simultaneously, guided by
              Clean Architecture principles and a continuous delivery mindset.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-6" id="experience">
              Experience
            </h2>
            <div className="space-y-10">

              {/* Grupo Tapajós */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-semibold">Backend Developer — Grupo Tapajós</h4>
                  <span className="text-zinc-400 text-sm">Oct 2025 – Present</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  SNGPC Web — Centralized Multi-Tenant Architecture
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                  <li>Built the full backend of a centralized multi-tenant web system, replacing per-client installations with a single shared application.</li>
                  <li>RESTful APIs following <strong>Clean Architecture and SOLID</strong> using <strong>.NET 8 and Entity Framework Core</strong>.</li>
                  <li>Business rules for compliance with <strong>SNGPC (ANVISA)</strong> regulations.</li>
                  <li>Unit tests with <strong>xUnit</strong> and mocks for isolated business logic validation.</li>
                  <li>Standardized infrastructure with <strong>PostgreSQL in Docker containers</strong>, eliminating local SQL Server databases per client.</li>
                  <li>Async messaging with <strong>RabbitMQ</strong> and caching with <strong>Redis</strong> for decoupling and performance.</li>
                  <li><strong>CI/CD pipelines (Jenkins)</strong> with dockerized deployments for stable automated releases.</li>
                </ul>
              </div>

              {/* Sidia / Samsung */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-semibold">
                    Full Stack Developer — Sidia Institute of Science and Technology (Samsung)
                  </h4>
                  <span className="text-zinc-400 text-sm">Jul 2024 – Oct 2025</span>
                </div>

                <div className="space-y-4 pl-1">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Android Device Manager for Remote Testing</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Built and maintained a web system for remote Android device management using <strong>Java and Node.js</strong>, based on the open-source STF project.</li>
                      <li>Multi-device concurrency with <strong>RethinkDB</strong> for persistence and <strong>Docker / Shell Script</strong> for infrastructure.</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Release Test Management System</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Automated validation of Samsung device binaries in pre-release using <strong>Python (Flask)</strong> and <strong>MongoDB</strong>.</li>
                      <li><strong>Reduced validation time from 2–3 days to ~10 minutes</strong>, significantly accelerating the release cycle.</li>
                      <li>CI/CD with <strong>Docker Compose and Jenkins</strong> in a Scrum environment.</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Requirements Collection &amp; Centralization System</p>
                    <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                      <li>Web system with <strong>Python (Django)</strong> and <strong>PostgreSQL</strong> to centralize requirements from multiple Samsung ecosystem sources.</li>
                      <li><strong>Reduced validation time from 3–4 days to ~7 minutes</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projex */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-base font-semibold">Full Stack Developer — Projex Consulting</h4>
                  <span className="text-zinc-400 text-sm">Jun 2023 – Jun 2024</span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">Web Platform — Electric Energy Sector</p>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base leading-relaxed">
                  <li>Developed and maintained a load-survey platform for the energy sector using <strong>Java with Spring</strong> on the backend.</li>
                  <li>Frontend/backend integration via RESTful APIs; environment standardization with <strong>Docker and Docker Compose</strong>.</li>
                  <li>Version control and team collaboration with <strong>Git</strong>.</li>
                </ul>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-red-400 mb-4" id="education">
              Education
            </h2>
            <div className="space-y-1">
              <h4 className="text-base font-semibold">Faculdade Metropolitana de Manaus</h4>
              <p className="text-zinc-400 text-sm">Bachelor&apos;s in Computer Engineering · Jan 2020 – Jul 2026</p>
              <p className="text-sm sm:text-base leading-relaxed pt-1">
                Applied Mathematics, Discrete Mathematics, Algorithms, Databases,
                Machine Learning, Cloud Computing, Distributed Systems.
              </p>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
