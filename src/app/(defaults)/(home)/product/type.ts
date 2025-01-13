export enum DataType {
  Category = "Category",
  Store = "Store",
  Product = "Product",
}

export enum DisplayType {
  Circle = "Circle",
  Summary = "Summary",
  Thumbnail = "Thumbnail",
  Slide = "Slide",
}

export enum DisplayWay {
  Horizontal = "H",
  Vertical = "V",
}

export interface IEntity {
  id: number;
  createAt: string;
  updateAt: string;
  isRemoved: boolean;
  removeAt: null | string;
}

export interface IHome {
  id: number;
  title: string;
  sequence: number;
  hasMore: boolean;
  dataType: DataType;
  displayType: DisplayType;
  displayWay: DisplayWay;
  data: (ICategory | IProduct | IStore)[];
  requestURL: null | string;
}

export interface ICategory extends IEntity {
  parentId: number | null;
  parent?: ICategory | null;
  code: string;
  title: string;
  description: null | string;
  imageCode: string;
  pin?: string | null;
  level: number;
  isAvailable: boolean;
  isDisabled: boolean;
  disableAt: null | string;
}

export interface IProduct extends IEntity {
  title: string;
  description: string;
  shortDescription: string;
  systemCategoryId: number;
  systemCategoryTitle: string;
  storeCategoryId: number;
  storeCategoryTitle: string;
  imageCode: string;
  brand: null | string;
  origin: null | string;
  manufacturer: null | string;
  crId: number;
  crName: string;
  priceTypeId: number;
  priceName: string;
  price: number;
  ePrice: number;
  discount: number;
  eDiscount: number;
  discountStartAt: string;
  discountEndAt: null | string;
  rate: number;
  rateCount: number;
  commentCount: number;
  wishlistCount: number;
  isPublished: boolean;
  publishAt: string;
  storeId: number;
  storeName: string;
  storeImageCode: string;
  pin?: string | null;
  tags: string[];
  variants: IVariants[];
  products: IProducts[];
  productCount: number;
  availableProductCount: number;
  isAvailable: boolean;
  notifyQty: number;
  purchasedQty: number;
  salesQty: number;
  stockQty: number;
  orderQty: number;
  cartQty: number;
  orderCount: number;
  offerCount: number;
  cartCount: number;
  shopperActivity: IShopperActivity;
  isDisabled: boolean;
  disableAt: null | string;
}

export interface IShopperActivity {
  inCart: boolean;
  inWishlist: boolean;
  isRated: boolean;
  isReviewed: boolean;
  rate: null | number;
  comment: null | string;
}

export interface IVariants {
  key: string;
  values: IValues[];
}

export interface IValues {
  value: string;
}

export interface IProducts extends IEntity {
  groupId: number;
  firstName: string;
  secondName: string;
  barcode: null | string;
  systemCategoryId: number;
  systemCategoryTitle: string;
  storeCategoryId: number;
  storeCategoryTitle: string;
  costCrId: number;
  costCrName: string;
  cost: number;
  hasExpiry: boolean;
  location: null | string;
  description: null | string;
  reminder: null | string;
  notifyQty: null | string;
  purchasedQty: number;
  salesQty: number;
  stockQty: number;
  orderQty: number;
  cartQty: number;
  orderCount: number;
  offerCount: number;
  cartCount: number;
  wishlistCount: number;
  rate: number;
  rateCount: number;
  commentCount: number;
  imageCode: string;
  pin?: string | null;
  storeId: number;
  properties: IProperties;
  variants: IVariants[];
  attributes: IVariants[];
  prices: IPrices[];
  stocks: IStocks[];
  activePriceTypeIds: number[];
  productGroupPriceTypeId: number;
  isAvailable: boolean;
  isDisabled: boolean;
  disableAt: null | string;
}

export interface IPrices {
  priceTypeId: number;
  priceTypeName: string;
  crId: number;
  crName: string;
  price: number;
  ePrice: number;
  profitPercent: number;
  minProfitPercent: number;
  autoChangePrice: boolean;
  isEComPrice: boolean;
  discount: number;
  eDiscount: number;
  discountStartAt: null | string;
  discountEndAt: null | string;
  hasDiscount: boolean;
  isDiscountActive: boolean;
}

export interface IProperties {
  gender: string | null;
  type: string | null;
  brand: string | null;
  origin: string | null;
  company: string | null;
  manufacturer: string | null;
  amount: string | null;
  dosage: string | null;
  model: string | null;
  color: string | null;
  size: string | null;
  weight: string | null;
}

export interface IStocks {
  id: number;
  productId: number;
  expiryAt: string;
  qty: number;
  inStock: boolean;
  expired: boolean;
}

export interface IStore extends IEntity {
  categoryId: number;
  categoryTitle: string;
  code: null | string;
  phoneNo: null | string;
  username: null | string;
  name: null | string;
  about: null | string;
  imageCode: null | string;
  language: null | string;
  crId: number;
  crName: null | string;
  exRate: number;
  country: null | string;
  governorate: string;
  area: string;
  nearestPoint: string;
  longitude: number;
  latitude: number;
  class: null | string;
  rate: number;
  rateCount: number;
  commentCount: number;
  followers: number;
  isActive: boolean;
  changeActiveAt: null | string;
  isVerified: boolean;
  changeVerifiedAt: null | string;
  isOfficial: boolean;
  changeOfficialAt: null | string;
  links: any[];
  tags: any[];
  deliveryFees: any[];
  backgroundsImageCode: IValues[];
  isAvailable: boolean;
  shopperActivity: IShopperActivityStory;
}

export interface IShopperActivityStory {
  isFollowed: boolean;
  isMuted: boolean;
  topics: any[];
  isRated: boolean;
  isReviewed: boolean;
  rate: null | number;
  comment: null;
}
