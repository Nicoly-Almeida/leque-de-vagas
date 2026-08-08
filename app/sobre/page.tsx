import type { Metadata } from "next";
import Botao from "@/components/botao/botao";
import "./sobre.css";

export const metadata: Metadata = {
  title: "Sobre · Leque de Vagas",
  description:
    "Um mural feito por quem está chegando: a trilha do projeto, aula por aula.",
};

const TRILHA = [
  {
    aula: "Aula 04",
    titulo: "A interface",
    descricao:
      "Frontend puro: Next.js 16, App Router, rotas, layouts, componentes, useState, formulários com validação e deploy. Todos os dados moram num arquivo do projeto.",
  },
  {
    aula: "Aula 05",
    titulo: "Os dados vêm de fora",
    descricao:
      "O servidor entra: async/await, consumir uma API, loading.tsx, Suspense e o filtro migrando do useState pra URL.",
  },
  {
    aula: "Aula 06",
    titulo: "Escrever dados",
    descricao:
      "Server Actions: o formulário de cadastro passa a criar conta de verdade, e dá pra publicar uma vaga e se candidatar.",
  },
  {
    aula: "Aula 07",
    titulo: "Contas e área logada",
    descricao:
      "Login funcionando, sessão, rotas protegidas com proxy.ts e as vagas salvas migrando do navegador pro servidor.",
  },
  {
    aula: "Aula 08",
    titulo: "Acabamento e portfólio",
    descricao:
      "Acessibilidade, performance, SEO, testes básicos e o projeto virando peça central do seu portfólio.",
  },
];

export default function Sobre() {
  return (
    <div className="lv-pagina">
      <div className="lv-container lv-pagina__conteudo">
        <p className="lv-eyebrow">SOBRE O PROJETO</p>

        <h1 className="lv-titulo sobre__titulo">
          Um mural feito por quem{" "}
          <span className="lv-texto-gradiente">está chegando</span>
        </h1>

        <p className="lv-lead">
          O Leque de Vagas nasceu na aula 04 do curso de Frontend da NickDev e
          vai crescer junto com a turma até o fim do módulo. Cada aula adiciona
          uma peça nova — e tudo que a gente aprende entra aqui.
        </p>

        <h2 className="lv-rotulo-secao sobre__secao">A TRILHA DO PROJETO</h2>

        <ol className="trilha">
          {TRILHA.map((etapa) => (
            <li key={etapa.aula} className="trilha__item">
              <span className="trilha__selo">{etapa.aula}</span>
              <div className="trilha__texto">
                <h3 className="trilha__titulo">{etapa.titulo}</h3>
                <p className="trilha__descricao">{etapa.descricao}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="sobre__acoes">
          <Botao href="/vagas">Ver as vagas →</Botao>
          <Botao
            tipo="secundario"
            href="https://github.com/Nicoly-Almeida/leque-de-vagas"
            target="_blank"
          >
            Código no GitHub
          </Botao>
        </div>

        <p className="lv-nota">
          As vagas deste mural são fictícias, criadas para fins didáticos.
        </p>
      </div>
    </div>
  );
}
