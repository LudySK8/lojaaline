import { FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#14110F] text-[#938E89] py-12 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white">
            <div className="bg-[#E67E22] p-2 rounded-lg">
              <FaHome size={22} className="text-[#14110F]" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Casa & Lar</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Produtos para transformar cada canto da sua casa em um lugar especial. 
            Qualidade, carinho e preço justo.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-white font-semibold text-lg">Links Úteis</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white cursor-pointer transition-all">Início</li>
            <li className="hover:text-white cursor-pointer transition-all">Produtos</li>
            <li className="hover:text-white cursor-pointer transition-all">Sobre Nós</li>
            <li className="hover:text-white cursor-pointer transition-all">Política de Troca</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-white font-semibold text-lg">Contato</h3>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#E67E22]" />
              <a href="mailto:contato@casaelar.com.br" className="hover:text-white cursor-pointer transition-colors">
                contato@casaelar.com.br
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#E67E22]" />
              <span>(32) 9915-2257</span>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <a 
              href="https://www.instagram.com/lojadaaline_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#24211F] p-2.5 rounded-lg hover:bg-[#332F2C] cursor-pointer transition-colors"
            >
              <FaInstagram size={18} className="text-white" />
            </a>

            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#24211F] p-2.5 rounded-lg hover:bg-[#332F2C] cursor-pointer transition-colors"
            >
              <FaFacebookF size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-[#24211F] text-center text-xs text-[#5A5550]">
        <p>© 2026 Casa & Lar. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;