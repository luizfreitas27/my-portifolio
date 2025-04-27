"use client";

import { useState } from "react";

export type LanguageAboutProps = "en" | "br";

export function LanguageAbout() {
  const [language, setLanguage] = useState<LanguageAboutProps>("en");

  const handleLanguageEn = () => {
    setLanguage("en");
  };

  const handleLanguageBr = () => {
    setLanguage("br");
  };

  return (
    <div className="flex w-full flex-col gap-6 px-4">
      <div className="flex w-full items-center justify-start gap-2">
        <button
          data-checked={language === "en" ? "true" : undefined}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105   hover:text-red-400 data-[checked]:bg-gray-200 dark:data-[checked]:bg-zinc-900 data-[checked]:text-red-400 data-[checked]:font-bold cursor-pointer"
          onClick={handleLanguageEn}
        >
          English
        </button>
        <button
          data-checked={language === "br" ? "true" : undefined}
          className="flex items-center gap-2 rounded-md px-4 py-2 text-zinc-400 transition-all duration-200 ease-out hover:scale-105  hover:text-red-400 data-[checked]:bg-gray-200 dark:data-[checked]:bg-zinc-900 data-[checked]:text-red-400 data-[checked]:font-bold cursor-pointer"
          onClick={handleLanguageBr}
        >
          Portuguese
        </button>
      </div>
      {language === "br" ? (
        <div>
          <h1 className="text-xl font-bold text-red-400 mb-4" id="about">
            Sobre mim
          </h1>
          <p className="leading-relaxed text-sm sm:text-base">
            Sou um apaixonado por tecnologia e estou sempre em busca de novas
            oportunidades para aprimorar minhas habilidades e crescer
            profissionalmente. Eu me especializei em stacks modernas como Next,
            React, Node.js e Python (Flask, FastAPI e Django), mas meu
            aprendizado é constante e estou sempre aberto a explorar novas
            ferramentas e linguagens.
          </p>
          <h2 className="text-xl font-bold text-red-400 my-4" id="journey">
            Minhar Jornada
          </h2>
          <p className="leading-relaxed text-sm sm:text-base">
            Minha jornada na tecnologia começou em 2022, quando comecei a
            trabalhar como Técnico de Suporte de TI. Durante esse período,
            descobri minha paixão pela programação, o que me levou a buscar uma
            formação formal na Kenzie Academy, onde me graduei como
            Desenvolvedor Fullstack. No front-end, aprimorei minhas habilidades
            utilizando React e Next.js, criando interfaces modernas e
            responsivas. Motivado a me tornar um desenvolvedor mais completo,
            voltei meu foco para o back-end, começando com Express.js e,
            posteriormente, aprofundando meus conhecimentos em Django e FastAPI.
            Hoje, desenvolvo aplicações escaláveis, seguras e de alta
            performance, sempre guiado por princípios de arquitetura limpa e um
            forte compromisso em oferecer experiências excepcionais aos
            usuários. Minha jornada é um reflexo de crescimento contínuo,
            adaptabilidade e uma paixão pela tecnologia que está sempre
            evoluindo.
          </p>
          <h2 className="text-xl font-bold text-red-400 my-4" id="experience">
            Experiências
          </h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-md font-semibold ">
                Desenvolvedor de Software - Instituto de Tecnologia Sidia
              </h4>
              <h6 className="text-zinc-400 text-sm">
                Jul 2024 - Presente · 10 meses
              </h6>
              <p className="text-sm sm:text-base leading-relaxed">
                Atualmente, sou desenvolvedor de software no Sidia Instituto de
                Ciência e Tecnologia, focado em soluções tecnológicas avançadas
                para atender às necessidades do mercado. Minha experiência
                inclui a criação de sistemas inovadores e eficientes, sempre
                alinhados com as últimas tendências do mercado de tecnologia.
                Estou constantemente buscando aprimorar minhas habilidades e
                contribuir para a evolução da empresa por meio da implementação
                de soluções de alto impacto.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold">
                Desenvolvedor de Software - Projex Consulting
              </h4>
              <h6 className="text-zinc-400 text-sm">
                Jun 2023 - Dez 2023 · 7 meses
              </h6>
              <p className="sm:text-base text-sm leading-relaxed">
                Durante meu estágio na Projex Consulting, atuei com
                desenvolvimento de software utilizando diversas tecnologias. A
                experiência me permitiu aprofundar meus conhecimentos em
                frameworks como AngularJS, além de colaborar com equipes
                multidisciplinares para entregar soluções eficazes e de alto
                valor para os clientes.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold">
                Desenvolvedor de Software - Secretária de Segurança Pública do
                Amazonas - SSP
              </h4>
              <h6 className="text-zinc-400 text-sm">
                Jan 2023 - Jun 2023 · 6 meses
              </h6>
              <p className="text-sm leading-relaxed sm:text-base">
                Como estagiário no Departamento de Desenvolvimento de Sistemas
                da SSP, fui responsável pelo desenvolvimento de sistemas web
                utilizando React.js e Express.js. A oportunidade me proporcionou
                a experiência de trabalhar em um ambiente dinâmico, aplicando
                meus conhecimentos em desenvolvimento de software para criar
                soluções que atendessem às necessidades específicas da
                organização.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold">
                Suporte TI - Departamento de Tecnologia - DETEC/SSP
              </h4>
              <h6 className="text-zinc-400 text-sm">
                Out 2022 - Dez 2022 · 3 meses
              </h6>
              <p className="text-sm leading-relaxed sm:text-base">
                Como Técnico de Suporte de TI, fui responsável por fornecer
                suporte técnico para a infraestrutura de TI da organização. Tive
                a oportunidade de trabalhar diretamente com administração de
                redes e resolver problemas técnicos diários, garantindo que os
                sistemas funcionassem de maneira otimizada.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold">
                Suporte TI - Departamento de Polícia Técnico-Científica.
              </h4>
              <h6 className="text-zinc-400 text-sm">
                Jul 2022 - Out 2022 · 4 meses
              </h6>
              <p className="text-sm leading-relaxed sm:text-base">
                Durante meu estágio no Departamento de Polícia
                Técnico-Científica, trabalhei em suporte técnico, fornecendo
                assistência na manutenção de sistemas e redes. A experiência me
                permitiu desenvolver habilidades importantes em um ambiente de
                alta demanda, onde a confiabilidade dos sistemas era crucial
                para o bom funcionamento das operações.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <main>
          <main>
            <h1 className="text-xl font-bold text-red-400 mb-4" id="about">
              About me
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              I am passionate about technology and I am always seeking new
              opportunities to enhance my skills and grow professionally. I have
              specialized in modern stacks like Next, React, Node.js and Python
              (Flask, FastAPI and Django), but my learning is constant and I am
              always open to exploring new tools and languages.
            </p>
            <h2 className="text-xl font-bold text-red-400 my-4" id="journey">
              My journey
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              My journey into technology began in 2022 when I started working as
              an IT Support Technician. During this time, I discovered my
              passion for programming, which led me to pursue formal education
              at Kenzie Academy, where I graduated as a Fullstack Developer. On
              the front-end, I honed my skills using React and Next.js, creating
              modern and responsive user interfaces. Driven to become a more
              complete developer, I then shifted my focus to the back-end,
              starting with Express.js and later deepening my expertise with
              Django and FastAPI. Today, I build scalable, secure, and
              high-performance applications, always guided by clean architecture
              principles and a strong commitment to delivering exceptional user
              experiences. My journey is a reflection of continuous growth,
              adaptability, and an ever-evolving passion for technology.
            </p>
            <h2 className="text-xl font-bold text-red-400 my-4" id="experience">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="space-y-2">
                <h4 className="text-md font-semibold">
                  Software Developer - Sidia Institute of Science and Technology
                </h4>
                <h6 className="text-zinc-400 text-sm">
                  Jul 2024 - Present · 10 months
                </h6>
                <p className="text-sm leading-relaxed sm:text-base">
                  Currently, I am a software developer at Sidia Institute of
                  Science and Technology, focusing on advanced technological
                  solutions to meet market needs. My experience includes
                  creating innovative and efficient systems, always aligned with
                  the latest technology market trends. I am constantly seeking
                  to improve my skills and contribute to the company's evolution
                  through the implementation of high-impact solutions.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-md font-semibold">
                  Software Developer - Projex Consulting
                </h4>
                <h6 className="text-zinc-400 text-sm">
                  Jun 2023 - Dec 2023 · 7 months
                </h6>
                <p className="text-sm leading-relaxed sm:text-base">
                  During my internship at Projex Consulting, I worked with
                  software development using various technologies. The
                  experience allowed me to deepen my knowledge in frameworks
                  like AngularJS, in addition to collaborating with
                  multidisciplinary teams to deliver effective and high-value
                  solutions to clients.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-md font-semibold">
                  Systems Developer - Systems Development Department - SSP
                </h4>
                <h6 className="text-zinc-400 text-sm">
                  Jan 2023 - Jun 2023 · 6 months
                </h6>
                <p className="text-sm leading-relaxed sm:text-base">
                  As an intern at the Systems Development Department of SSP, I
                  was responsible for developing web systems using React.js and
                  Express.js. The opportunity provided me with the chance to
                  work in a dynamic environment, applying my software
                  development knowledge to create solutions that meet the
                  organization's specific needs.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-md font-semibold">
                  IT Support Technician - Technology Department - DETEC/SSP
                </h4>
                <h6 className="text-zinc-400 text-sm">
                  Oct 2022 - Dec 2022 · 3 months
                </h6>
                <p className="text-sm sm:text-base leading-relaxed">
                  As an IT Support Technician, I was responsible for providing
                  technical support for the organization's IT infrastructure. I
                  had the opportunity to work directly with network
                  administration and resolve daily technical issues, ensuring
                  that systems functioned optimally.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-md font-semibold">
                  IT Support Technician - Technical-Scientific Police Department
                </h4>
                <h6 className="text-zinc-400 text-sm">
                  Jul 2022 - Oct 2022 · 4 months
                </h6>
                <p className="text-sm sm:text-base leading-relaxed">
                  During my internship at the Technical-Scientific Police
                  Department, I worked in technical support, providing
                  assistance in system and network maintenance. The experience
                  allowed me to develop important skills in a high-demand
                  environment, where system reliability was crucial for the
                  proper functioning of operations.
                </p>
              </div>
            </div>
          </main>
        </main>
      )}
    </div>
  );
}
