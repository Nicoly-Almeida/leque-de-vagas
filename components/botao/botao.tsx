import Link from "next/link";
import type { ReactNode } from "react";
import "./botao.css";

type BotaoProps = {
  children: ReactNode;
  /** "primario" é a ação principal da tela; "secundario" é a de apoio */
  tipo?: "primario" | "secundario";
  desabilitado?: boolean;
  /** Se vier href, o botão vira um link de navegação */
  href?: string;
  /** Só usados junto com href */
  target?: string;
  rel?: string;
  /** Só usado sem href */
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export default function Botao({
  children,
  tipo = "primario",
  desabilitado = false,
  href,
  target,
  rel,
  type = "button",
  onClick,
  className,
}: BotaoProps) {
  const classes = ["btn", `btn-${tipo}`, className].filter(Boolean).join(" ");

  // Com href é navegação, então vira um link.
  // <a> não tem disabled nativo: o estado vai por aria-disabled.
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
        aria-disabled={desabilitado || undefined}
        tabIndex={desabilitado ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  // Sem href é ação, então vira um botão de verdade.
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={desabilitado}
    >
      {children}
    </button>
  );
}
