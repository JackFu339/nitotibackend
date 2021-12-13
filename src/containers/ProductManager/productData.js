/**
Id		                    Id
CompanyId		            公司ID
ProductNo		            商品編號
ProductName	 		        商品名稱
VenderBrandId		        品牌ID，一個供應商會有1到多個品牌
Thermosphere		        溫層
Unit	                    存貨單位
Cost		                成本
ListPrice		            訂價
SalePrice		            售價
Variatio	                是否有顏色大小其他規格
Review		                審核
Status		                狀態(1.審查 2上架.3.下架)
IsDisplay	                前台先是否？	
CreateDate		            建立日期
CreateId		            建立者Id
UpdateDate			        更新日期
UpdateId		            更新者Id
     
 */
const fackData1 = [
  {
    Id: 1, //Id
    CompanyId: 1, //公司ID
    ProductNo: "", //商品編號
    ProductName: "", //商品名稱
    VenderBrandId: 1, //品牌ID，一個供應商會有1到多個品牌
    Thermosphere: 3, //溫層
    Unit: "個", //存貨單位
    Cost: 50, //成本
    ListPrice: 150, //訂價
    SalePrice: 120, //售價
    Variatio: "N", //是否有顏色大小其他規格
    Review: "", //
    Status: 1, //狀態(1.審查 2上架.3.下架)
    IsDisplay: true, //前台先是否？
    CreateDate: "", //建立日期
    CreateId: "", //建立者Id
    UpdateDate: "", //更新日期
    UpdateId: "", //更新者Id
  },
];

const fackData = [
  {
    id: "1",
    category: "eyes",
    name: "The expert mascaraa",
    rate: 4,
    price: 35,
    new: true,
    brand: "gucci",
    code: "PM 01",
    point: 30,
    quantity: 0,
    variation: [
      {
        color: "red",
        colorCode: "#8B0000",
        image: "/assets/images/product/3.png",
      },
      {
        color: "blue",
        colorCode: "#4169E1",
        image: "/assets/images/product/4.png",
      },
    ],
    thumbImage: [
      "/assets/images/product/1.png",
      "/assets/images/product/2.png",
    ],
    images: [
      "/assets/images/product/1.png",
      "/assets/images/product/2.png",
      "/assets/images/product/3.png",
      "/assets/images/product/4.png",
    ],
    description: "",
    slug: "the-expert-mascaraa-1",
  },
  {
    id: "2",
    category: "eyes",
    name: "Velvet Melon High Intensity",
    rate: 5,
    price: 38,
    brand: "dolce",
    code: "PM 02",
    point: 28,
    quantity: 12,
    thumbImage: [
      "/assets/images/product/2.png",
      "/assets/images/product/3.png",
    ],
    images: [
      "/assets/images/product/2.png",
      "/assets/images/product/3.png",
      "/assets/images/product/4.png",
      "/assets/images/product/5.png",
    ],
    description: "",
    slug: "velvet-melon-high-intensity-2",
  },
  {
    id: "3",
    category: "eyes",
    name: "Leather shopper bag",
    rate: 4,
    price: 35,
    discount: 30,
    brand: "gucci",
    code: "PM 01",
    point: 30,
    quantity: 3,
    variation: [
      {
        color: "red",
        colorCode: "#8B0000",
        image: "/assets/images/product/5.png",
      },
      {
        color: "blue",
        colorCode: "#4169E1",
        image: "/assets/images/product/6.png",
      },
    ],
    thumbImage: [
      "/assets/images/product/3.png",
      "/assets/images/product/4.png",
    ],
    images: [
      "/assets/images/product/3.png",
      "/assets/images/product/4.png",
      "/assets/images/product/5.png",
      "/assets/images/product/6.png",
    ],
    description: "",
    slug: "leather-shopper-bag-3",
  },
  {
    id: "4",
    category: "eyes",
    name: "Luxe jewel lipstick",
    rate: 5,
    price: 38,
    brand: "kenzo",
    code: "PM 02",
    point: 28,
    quantity: 12,
    thumbImage: [
      "/assets/images/product/4.png",
      "/assets/images/product/5.png",
    ],
    images: [
      "/assets/images/product/4.png",
      "/assets/images/product/5.png",
      "/assets/images/product/6.png",
      "/assets/images/product/7.png",
    ],
    description: "",
    slug: "luxe-jewel-lipstick-4",
  },
  {
    id: "5",
    category: "face",
    name: "Penpoint seamless beauty",
    rate: 5,
    price: 40,
    discount: 20,
    brand: "dolce",
    code: "PM 02",
    point: 28,
    quantity: 12,
    thumbImage: [
      "/assets/images/product/5.png",
      "/assets/images/product/6.png",
    ],
    images: [
      "/assets/images/product/5.png",
      "/assets/images/product/6.png",
      "/assets/images/product/7.png",
      "/assets/images/product/8.png",
    ],
    description: "",
    slug: "penpoint-seamless-beauty-5",
  },
  {
    id: "6",
    category: "face",
    name: "The Sneaky lips",
    rate: 5,
    price: 38,
    brand: "kenzo",
    code: "PM 02",
    point: 28,
    quantity: 12,
    thumbImage: [
      "/assets/images/product/7.png",
      "/assets/images/product/8.png",
    ],
    images: [
      "/assets/images/product/6.png",
      "/assets/images/product/7.png",
      "/assets/images/product/8.png",
      "/assets/images/product/9.png",
    ],
    description: "",
    slug: "the-sneaky-lips-6",
  },
  {
    id: "7",
    category: "face",
    name: "White Facial Cream",
    rate: 4,
    price: 38,
    brand: "dolce",
    code: "PM 02",
    point: 28,
    quantity: 12,
    thumbImage: [
      "/assets/images/product/8.png",
      "/assets/images/product/9.png",
    ],
    images: [
      "/assets/images/product/8.png",
      "/assets/images/product/9.png",
      "/assets/images/product/10.png",
      "/assets/images/product/11.png",
    ],
    description: "",
    slug: "white-facial-cream-7",
  },
  {
    id: "8",
    category: "face",
    name: "Orange Massage Cream",
    rate: 4,
    price: 55,
    brand: "prada",
    code: "PM 03",
    point: 16,
    quantity: 6,
    thumbImage: [
      "/assets/images/product/9.png",
      "/assets/images/product/10.png",
    ],
    images: [
      "/assets/images/product/9.png",
      "/assets/images/product/10.png",
      "/assets/images/product/11.png",
      "/assets/images/product/12.png",
    ],
    description: "",
    slug: "orange-massage-cream-8",
  },
  {
    id: "9",
    category: "lips",
    name: "Valinta Fairness Massage Cream",
    rate: 4,
    price: 27,
    brand: "h&m",
    code: "PM 03",
    point: 16,
    quantity: 6,
    thumbImage: [
      "/assets/images/product/10.png",
      "/assets/images/product/11.png",
    ],
    images: [
      "/assets/images/product/10.png",
      "/assets/images/product/11.png",
      "/assets/images/product/12.png",
      "/assets/images/product/13.png",
    ],
    description: "",
    slug: "valinta-fairness-massage-cream-9",
  },
  {
    id: "10",
    category: "lips",
    name: "Massage Cream Cucumber",
    rate: 4,
    price: 16,
    brand: "dolce",
    code: "PM 03",
    point: 16,
    quantity: 6,
    thumbImage: [
      "/assets/images/product/11.png",
      "/assets/images/product/12.png",
    ],
    images: [
      "/assets/images/product/10.png",
      "/assets/images/product/11.png",
      "/assets/images/product/12.png",
      "/assets/images/product/13.png",
    ],
    description: "",
    slug: "massage-cream-cucumber-10",
  },
  {
    id: "11",
    category: "lips",
    name: "Matte Walnut & Bamboo Scrub",
    rate: 4,
    price: 32,
    brand: "gucci",
    code: "PM 03",
    point: 16,
    quantity: 6,
    thumbImage: [
      "/assets/images/product/12.png",
      "/assets/images/product/13.png",
    ],
    images: [
      "/assets/images/product/12.png",
      "/assets/images/product/13.png",
      "/assets/images/product/14.png",
      "/assets/images/product/15.png",
    ],
    description: "",
    slug: "matte-walnut-&-bamboo-scrub",
  },
  {
    id: "12",
    category: "lips",
    name: "Castor Oil BP",
    rate: 4,
    price: 24,
    brand: "h&m",
    code: "PM 03",
    point: 16,
    quantity: 6,
    thumbImage: [
      "/assets/images/product/13.png",
      "/assets/images/product/14.png",
    ],
    images: [
      "/assets/images/product/13.png",
      "/assets/images/product/14.png",
      "/assets/images/product/1.png",
      "/assets/images/product/2.png",
    ],
    description: "",
    slug: "castor-oil-bp-12",
  },
  {
    id: "13",
    category: "set",
    name: "Metallic Cap Cosmetic",
    rate: 5,
    price: 44,
    brand: "kenzo",
    code: "PM 03",
    point: 17,
    quantity: 1,
    thumbImage: [
      "/assets/images/product/14.png",
      "/assets/images/product/15.png",
    ],
    images: [
      "/assets/images/product/14.png",
      "/assets/images/product/15.png",
      "/assets/images/product/16.png",
      "/assets/images/product/17.png",
    ],
    description: "",
    slug: "metallic-cap-cosmetic-13",
  },
  {
    id: "14",
    category: "set",
    name: "Photo Match Concealer",
    rate: 5,
    price: 39,
    brand: "gucci",
    code: "PM 03",
    point: 17,
    quantity: 1,
    thumbImage: [
      "/assets/images/product/15.png",
      "/assets/images/product/16.png",
    ],
    images: [
      "/assets/images/product/15.png",
      "/assets/images/product/16.png",
      "/assets/images/product/17.png",
      "/assets/images/product/18.png",
    ],
    description: "",
    slug: "photo-match-concealer-14",
  },
  {
    id: "15",
    category: "set",
    name: "Matte Mousse Foundation",
    rate: 5,
    price: 46,
    brand: "kenzo",
    code: "PM 03",
    point: 17,
    quantity: 1,
    thumbImage: [
      "/assets/images/product/16.png",
      "/assets/images/product/17.png",
    ],
    images: [
      "/assets/images/product/16.png",
      "/assets/images/product/17.png",
      "/assets/images/product/18.png",
      "/assets/images/product/19.png",
    ],
    description: "",
    slug: "matte-mousse-foundation-15",
  },
  {
    id: "16",
    category: "set",
    name: "White Sandal Beauty",
    rate: 5,
    price: 67,
    brand: "h&m",
    code: "PM 03",
    point: 17,
    quantity: 1,
    thumbImage: [
      "/assets/images/product/17.png",
      "/assets/images/product/18.png",
    ],
    images: [
      "/assets/images/product/17.png",
      "/assets/images/product/18.png",
      "/assets/images/product/19.png",
      "/assets/images/product/20.png",
    ],
    description: "",
    slug: "white-sandal-beauty-16",
  },
];
