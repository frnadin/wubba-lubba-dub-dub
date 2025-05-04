import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <p><span className="label">Desenvolvido por:</span> Fernando Mendes Gutilla</p>
      <p><span className="label">Data última revisão:</span> 04/05/2025</p>
      <p><span className="label">Autor:</span> FMG</p>
      <p><span className="label">Descrição:</span> Aplicativo de busca de personagens de Rick and Morty.</p>
      <p><span className="label">Contato:</span> <a href="mailto:fernandogutilla@hotmail.com">fernandogutilla@hotmail.com</a></p>
      <p className="footer-text">© 2025 FMG. Todos os direitos reservados.</p>

      <div className="social-icons">
        <a href="https://www.linkedin.com/in/fernandomendesgutilla/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/frnadin" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
