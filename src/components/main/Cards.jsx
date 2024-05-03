import { PlusOutlined, SearchOutlined, UpOutlined } from "@ant-design/icons";

class CardInfo {
  constructor(
    imageSource,
    title,
    price,
    storageCapacity,
    usersAllowed,
    sendUpTo
  ) {
    this.imageSource = imageSource;
    this.title = title;
    this.price = "$" + price;
    this.storageCapacity = storageCapacity + " Storage";
    this.usersAllowed = usersAllowed;
    this.sendUpTo = "Send up to " + sendUpTo;
  }
}

const Card = ({ cardInfo }) => {
  return (
    <div className="my-4 w-full rounded-xl p-4 shadow-2xl duration-300 hover:scale-105">
      {cardInfo.imageSource}
      <h2 className="py-8 text-center text-2xl font-bold">{cardInfo.title}</h2>
      <div className="mt-8 text-center font-medium">
        <ol>
          <li>{cardInfo.storageCapacity}</li>
          <li>{cardInfo.usersAllowed}</li>
          <li>{cardInfo.sendUpTo}</li>
        </ol>
      </div>
    </div>
  );
};

const icons = {
  search: <SearchOutlined style={{ fontSize: 64, marginLeft: 148 }} />,
  decision: <PlusOutlined style={{ fontSize: 64, marginLeft: 148 }} />,
  promotion: <UpOutlined style={{ fontSize: 64, marginLeft: 148 }} />,
};

const Cards = () => {
  const cardDataArray = [
    new CardInfo(
      icons.search,
      "Pesquisa de mercado simplificada",

      "Diga adeus aos métodos tradicionais de pesquisa de mercado.",
      "AMMIL agiliza o processo de coleta de inteligência de mercado, economizando tempo e recursos,",
      "ao mesmo tempo em que fornece dados abrangentes sobre mercados informais"
    ),
    new CardInfo(
      icons.decision,
      "Melhoria da decisão",
      "Tome decisões mais inteligentes com confiança. ",
      " navegar na dinâmica dos mercados,",
      " mitigar riscos e capitalizar as oportunidades de crescimento."
    ),
    new CardInfo(
      icons.promotion,
      "Promoção da inovação",
      "Inovação e criatividade de combustível",
      "dentro de sua organização."
    ),
  ];

  return (
    <div className="w-full bg-white px-4 py-10">
      <div className="mx-auto grid max-w-screen-xl gap-8 md:grid-cols-3">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardInfo={cardData} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
