import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="cabecalho">
      <Link href="/" className="cabecalho__marca">
        {/* mesma arte do favicon: app/icon.svg, que o Next publica em /icon.svg */}
        <Image
          className="cabecalho__simbolo"
          src="/icon.svg"
          alt=""
          width={30}
          height={30}
          priority
        />
        <span>
          Leque de <span className="lv-texto-gradiente">Vagas</span>
        </span>
      </Link>

      <nav className="cabecalho__nav" aria-label="Navegação principal">
        <Link href="/vagas" className="cabecalho__link">
          Vagas
        </Link>
        <Link href="/sobre" className="cabecalho__link">
          Sobre
        </Link>
        <Link href="/entrar" className="cabecalho__link">
          Entrar
        </Link>
        <Link
          href="/cadastro"
          className="cabecalho__link cabecalho__link--destaque"
        >
          Criar conta
        </Link>
      </nav>
    </header>
  );
}
