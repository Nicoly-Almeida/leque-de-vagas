import Botao from "@/components/botao/botao";

// Placeholder: esta rota existe só para o link do cabeçalho não quebrar.
// A tela "Vagas · 1440" do Figma (node 14:88) ainda não foi implementada.
export default function Vagas() {
  return (
    <div className="lv-pagina">
      <div className="lv-container lv-pagina__conteudo">
        <p className="lv-eyebrow">MURAL COMPLETO</p>
        <h1 className="lv-titulo">
          Todas as <span className="lv-texto-gradiente">vagas</span>
        </h1>
        <p className="lv-lead">Em construção.</p>
        <Botao tipo="secundario" href="/sobre">
          Ver a trilha do projeto
        </Botao>
      </div>
    </div>
  );
}
