import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          © 2024 Ledex Company. Todos los derechos reservados.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#" className="hover:underline">
              Política de Privacidad
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Términos de Uso
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
