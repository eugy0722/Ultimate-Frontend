export const backendRoutes = {
  // Session Routes
  Login: "/login",
  // User Routes
  RegisterUser: "/user/register",
  FindUsers: "/user/find/all",
  FindUser: "/user/find/",
  DeleteUser: "/user/delete/",
  UploadImage: "/user/avatar",
  // Market Routes
  RegisterMarket: "/market/register",
  FindMarkets: "/market/find/all",
  FindMarket: "/market/find/",
  DeleteMarket: "/market/delete/",
  // Sector Routes
  RegisterSector: "/sector/register",
  FindSectors: "/sector/find/all",
  FindSector: "/market/find/",
  DeleteSector: "/market/delete/",
  // Business Routes
  RegisterBusiness: "/business/register",
  FindBusinesses: "/business/find/all",
  FindBusinessesAboutSector: "/business/find/all/sector/",
  FindBusiness: "/business/find/",
  DeleteBusiness: "/business/delete/",
  // Sectorization Routes
  RegisterSectorization: "/user/sectorization/register",
  FindAllRelations: "/user/sectorization/list/",
  SearchInfoMarketman: "/user/sectorization/info/",
  DeleteSectorization: "/user/sectorization/delete/",
  FindByMarketmanSector: "/user/sectorization/",
  // Marketman-Business
  RegisterMarketmanBusiness: "/marketmanbusiness/register",
  FindByPK: "/marketmanbusiness/",
  FindAllMarketmanBusiness: "/marketmanbusiness/find/all/",
  FindAllBusinessesAboutThis: "/marketmanbusiness/exactsearch",
  FindAllBusinessesAboutThisSimilar: "/marketmanbusiness/similarsearch",
  DeleteMarketmanBusiness: "/marketmanbusiness/delete/",
  // Market-Sector
  RegisterMarketSector: "/marketsectors/register",
  FindAllRelationshipAboutThisMarket: "/marketsectors/find/all/",
  DeleteRelationshipMarketSector: "/marketsectors/delete/",
};
