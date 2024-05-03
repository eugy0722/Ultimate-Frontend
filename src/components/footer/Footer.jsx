import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import ReactLogo from "../header/ReactLogo";

const Footer = () => {
  return (
    <footer className="mx-auto grid max-w-screen-xl gap-6 px-4 py-8 text-gray-300 lg:grid-cols-3">
      <div>
        <ReactLogo />
        <p className="pb-4 mt-8">
          Sua porta de entrada para desbloquear o potencial dos mercados
          informais. Explore, analise e prospere no vibrante mundo do comércio
          informal com nossa solução de mapeamento inovadora.
        </p>

        <div className="flex">
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.facebook.com">
              <FacebookOutlined />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.instagram.com">
              <InstagramOutlined />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.twitter.com">
              <TwitterOutlined />
            </button>
          </form>
          <form method="GET" className="pr-1 duration-300 hover:scale-110">
            <button formAction="https://www.github.com">
              <GithubOutlined />
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-around lg:col-span-2 lg:mt-20">
        <div>
          <h6 className="font-medium text-gray-400">Soluções</h6>
          <ul>
            <li className="footer-page-link">Análises</li>
            <li className="footer-page-link">Marketing</li>
            <li className="footer-page-link">Productos</li>
            <li className="footer-page-link">Informações</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Supporte</h6>
          <ul>
            <li className="footer-page-link">Serviços</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Organização</h6>
          <ul>
            <li className="footer-page-link">Sobre</li>
            <li className="footer-page-link">Blog</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="footer-page-link">Políticas</li>
            <li className="footer-page-link">Termos</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
