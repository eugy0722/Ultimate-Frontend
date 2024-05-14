const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-emerald-400 rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] pb-[1.5rem]">
            <strong>AMMIL </strong>
            Search
          </h1>
        </div>
        <p className=" pb-[13px] opacity-70 leading-7">
          Sua porta de entrada para desbloquear o potencial dos mercados
          informais. Explore, analise e prospere no vibrante mundo do comércio
          informal com nossa solução de mapeamento inovadora.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] ">
          Projecto
        </span>
        <div className="grid gap-3">
          <li className="opacity-[.7] hover:opacity-[1]">Sobre</li>
          <li className="opacity-[.7] hover:opacity-[1]">Caracteristicas</li>
          <li className="opacity-[.7] hover:opacity-[1]">Novo</li>
          <li className="opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] ">
          Recursos
        </span>
        <div className="grid gap-3">
          <li className=" opacity-[.7] hover:opacity-[1]">Perfil</li>
          <li className=" opacity-[.7] hover:opacity-[1]">Feedback</li>
          <li className=" opacity-[.7] hover:opacity-[1]">Contactos</li>
        </div>
      </div>

      {/* 
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] ">
          Support
        </span>
        <div className="grid gap-3">
          <li className=" opacity-[.7] hover:opacity-[1]">Events</li>
          <li className=" opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className=" opacity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className=" opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div> */}

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] ">
          Contactos para mais Info.
        </span>
        <div>
          <small className="text-[14px] ">ed072267@gmail.com</small>
          <div className="icons flex gap-4 py-[1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
