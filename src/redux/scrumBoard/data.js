/**
 * 
BoardPage
序	欄位名稱	  資料型態	空值	  說明
例如：Home 首頁 About 關於我們  Service 我們的服務...等紀錄有幾頁
3	  PageColumn	NVARCHAR(100)	Y	頁面名稱
4	  PageTitle	NVARCHAR(100)	Y	抬頭

BoardPageCloumn
序	欄位名稱	資料型態	空值	說明
要放版位的柱體，每個頁面共有2個柱體（來源與目的）
3	  BoardPageId	INT	Y	
4	  ColumnTitle	NVARCHAR(100)	Y	
5   ColumnType INT (1 Source 2 Target) 

BoardPagePrototype
序	欄位名稱	資料型態	空值	說明
紀錄每個柱體有多少個版位
3	PageId	INT	Y	
4	ColumnId	INT	Y	
5	DnDId	INT	Y	
6	Description	NVARCHAR(1000)	Y	
 
BoradPrototypes
序	欄位名稱	資料型態	空值	說明
每個個體的的紀錄
3	Title	NVARCHAR(100)	Y	版型類別
4	ComponentName	VARCHAR(500)	Y	
5	Image	VARCHAR(100)	Y	
 /images/prototypes/Blog
 /images/prototypes/Brands
 /images/prototypes/Categories
 /images/prototypes/CTA
 /images/prototypes/DaleOfWeek
 /images/prototypes/Instagram
 /images/prototypes/Introduction
 /images/prototypes/ProductThumb/
 /images/prototypes/Slider/
 /images/prototypes/Testimonial/

23	商品側欄-1	ProductSlider
24	商品側欄-2	ProductSlideOne
25	商品側欄-3	ProductSlideTwo
26	商品網格呈現	ProductGrid
27	商品標籤式-1	ProductTabOne
28	商品標籤式-2	ProductTabTwo
29	商品標籤式-3	ProductTabSlideOne
30	段落抬頭	SectionTitleOne
31	側邊-1	SliderOne
32	側邊-2	SliderTwo
33	團隊	TeamOne
34	客戶感言-1	TestimonialOne
35	客戶感言-2	TestimonialTwo
36	客戶感言-3	TestimonialThree
37	商店表頭	ShopHeader
38	商品商品	ShopProducts
39	商品側邊	ShopSidebar

 
 */
const taskData = [
  {
    comname: "BrandsOne",
    DnDId: 0,
    title: "品牌",
    imagepath: "/images/prototypes/Brands/BrandsOne.png",
  },
  {
    comname: "BlogOne",
    DnDId: 1,
    title: "部落格-1",
    imagepath: "/images/prototypes/Blog/BlogOne.png",
  },
  {
    comname: "BlogTwo",
    DnDId: 2,
    title: "部落格-2",
    imagepath: "/images/prototypes/Blog/BlogTwo.png",
  },
  {
    comname: "BlogThree",
    DnDId: 3,
    title: "部落格-3",
    imagepath: "/images/prototypes/Blog/BlogThree.png",
  },
  {
    comname: "CategoriesOne",
    DnDId: 4,
    title: "商品分類-1",
    imagepath: "/images/prototypes/Categories/CategoriesOne.png",
  },
  {
    comname: "CategoriesTwo",
    DnDId: 5,
    title: "商品分類-2",
    imagepath: "/images/prototypes/Categories/CategoriesTwo.png",
  },
  {
    comname: "CTAOne",
    DnDId: 6,
    title: "CallToCation-1",
    imagepath: "/images/prototypes/CTA/CTAOne.png",
  },
  {
    comname: "CTATwo",
    DnDId: 7,
    title: "CallToCation-2",
    imagepath: "/images/prototypes/CTA/CTATwo.png",
  },
  {
    comname: "DaleOfWeekOne",
    DnDId: 8,
    title: "限時搶購-1",
    imagepath: "/images/prototypes/DaleOfWeek/DaleOfWeekOne.png",
  },
  {
    comname: "DaleOfWeekTwo",
    DnDId: 9,
    title: "限時搶購-2",
    imagepath: "/images/prototypes/DaleOfWeek/DaleOfWeekTwo.png",
  },
  {
    comname: "DaleOfWeekThree",
    DnDId: 10,
    title: "限時搶購-3",
    imagepath: "/images/prototypes/DaleOfWeek/DaleOfWeekThree.png",
  },
  {
    comname: "InstagramOne",
    DnDId: 11,
    title: "IG-1",
    imagepath: "/images/prototypes/Instagram/InstagramOne.png",
  },
  {
    comname: "InstagramTwo",
    DnDId: 12,
    title: "IG-2",
    imagepath: "/images/prototypes/Instagram/InstagramTwo.png",
  },
  {
    comname: "IntroductionOne",
    DnDId: 13,
    title: "公司介紹-1",
    imagepath: "/images/prototypes/Introduction/IntroductionOne.png",
  },
  {
    comname: "IntroductionTwo",
    DnDId: 14,
    title: "公司介紹-2",
    imagepath: "/images/prototypes/Introduction/IntroductionTwo.png",
  },
  {
    comname: "IntroductionThree",
    DnDId: 15,
    title: "公司介紹-3",
    imagepath: "/images/prototypes/Introduction/IntroductionThree.png",
  },
  {
    comname: "IntroductionFour",
    DnDId: 16,
    title: "公司介紹-4",
    imagepath: "/images/prototypes/Introduction/IntroductionFour.png",
  },
  {
    comname: "IntroductionFive",
    DnDId: 17,
    title: "公司介紹-5",
    imagepath: "/images/prototypes/Introduction/IntroductionFive.png",
  },
  {
    comname: "IntroductionSix",
    DnDId: 18,
    title: "公司介紹-6",
    imagepath: "/images/prototypes/Introduction/IntroductionSix.png",
  },
  {
    comname: "IntroductionSeven",
    DnDId: 19,
    title: "公司介紹-7",
    imagepath: "/images/prototypes/Introduction/IntroductionSeven.png",
  },
  {
    comname: "IntroductionEight",
    DnDId: 20,
    title: "公司介紹-8",
    imagepath: "/images/prototypes/Introduction/IntroductionEight.png",
  },
  {
    comname: "IntroductionNine",
    DnDId: 21,
    title: "公司介紹-9",
    imagepath: "/images/prototypes/Introduction/IntroductionNine.png",
  },
  {
    comname: "IntroductionTen",
    DnDId: 22,
    title: "公司介紹-10",
    imagepath: "/images/prototypes/Introduction/IntroductionTen.png",
  },
  {
    comname: "IntroductionTen",
    DnDId: 23,
    title: "商品側欄-1",
    imagepath: "/images/prototypes/Introduction/ProductSlider.png",
  },
  {
    comname: "ProductSlideOne",
    DnDId: 24,
    title: "商品側欄-1",
    imagepath: "/images/prototypes/Slider/ProductSlideOne.png",
  },
  {
    comname: "ProductSlideTwo",
    DnDId: 25,
    title: "商品側欄-3",
    imagepath: "/images/prototypes/Slider/ProductSlideTwo.png",
  },
  {
    comname: "ProductGrid",
    DnDId: 26,
    title: "商品網格呈現",
    imagepath: "/images/prototypes/Slider/ProductGrid.png",
  },
  {
    comname: "ProductTabOne",
    DnDId: 27,
    title: "商品標籤式-1",
    imagepath: "/images/prototypes/ProductThumb/ProductTabOne.png",
  },
  {
    comname: "ProductTabTwo",
    DnDId: 28,
    title: "商品標籤式-2",
    imagepath: "/images/prototypes/ProductThumb/ProductTabTwo.png",
  },
  {
    comname: "ProductTabSlideOne",
    DnDId: 29,
    title: "商品標籤式-3",
    imagepath: "/images/prototypes/ProductThumb/ProductTabSlideOne.png",
  },
  {
    comname: "SectionTitleOne",
    DnDId: 30,
    title: "段落抬頭",
    imagepath: "/images/prototypes/Slider/SectionTitleOne.png",
  },
  {
    comname: "SliderOne",
    DnDId: 31,
    title: "側邊-1",
    imagepath: "/images/prototypes/Slider/SliderOne.png",
  },
  {
    comname: "SliderTwo",
    DnDId: 32,
    title: "側邊-2",
    imagepath: "/images/prototypes/Slider/SliderTwo.png",
  },
  {
    comname: "TeamOne",
    DnDId: 33,
    title: "團隊",
    imagepath: "/images/prototypes/Teams/TeamOne.png",
  },
  {
    comname: "TestimonialOne",
    DnDId: 34,
    title: "客戶感言-1",
    imagepath: "/images/prototypes/Testimonial/TestimonialOne.png",
  },
  {
    comname: "TestimonialTwo",
    DnDId: 35,
    title: "客戶感言-2",
    imagepath: "/images/prototypes/Testimonial/TestimonialTwo.png",
  },
  {
    comname: "TestimonialThree",
    DnDId: 36,
    title: "客戶感言-3",
    imagepath: "/images/prototypes/Testimonial/TestimonialThree.png",
  },
  {
    comname: "ShopHeader",
    DnDId: 37,
    title: "客戶感言-1",
    imagepath: " ",
  },
  {
    comname: "ShopProducts",
    DnDId: 38,
    title: "客戶感言-2",
    imagepath: " ",
  },
  {
    comname: "ShopSidebar",
    DnDId: 369,
    title: "客戶感言-3",
    imagepath: "",
  },
];

const ColumnData = [
  {
    BoradPageId: 1,
    PageColumnId: 1,
    PageColumn: "Home-1",
    title: "版位來源",
    board_id: "board-1",
    task_orders: [
      "31",
      "1",
      "2",
      "3",
      "4",
      "6",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
    ],
    editing: false,
  },
  {
    BoradPageId: 1,
    PageColumnId: 2,
    PageColumn: "Home-2",
    title: "前台顯示版位",
    board_id: "board-1",
    task_orders: ["32", "7"],
    editing: false,
  },
  {
    BoradPageId: 2,
    PageColumnId: 1,
    PageColumn: "Shop-1",
    title: "版位來源",
    board_id: "board-2",
    task_orders: ["3", "4", "7", "8"],
    editing: false,
  },
  {
    BoradPageId: 2,
    PageColumnId: 2,
    PageColumn: "Shop-2",
    title: "前台左側顯示版位(1/4)",
    board_id: "board-2",
    task_orders: ["9", "10"],
    editing: false,
  },

  {
    BoradPageId: 2,
    PageColumnId: 3,
    PageColumn: "Shop-3",
    title: "前台右側顯示版位(3/4)",
    board_id: "board-2",
    task_orders: ["1", "12"],
    editing: false,
  },
  {
    BoradPageId: 3,
    PageColumnId: 1,
    PageColumn: "ProductDetail-1",
    title: "版位來源",
    board_id: "board-3",
    task_orders: ["12", "13", "16", "18"],
    editing: false,
  },
  {
    BoradPageId: 3,
    PageColumnId: 2,
    PageColumn: "ProductDetail-2",
    title: "前台顯示版位",
    board_id: "board-3",
    task_orders: ["14", "15"],
    editing: false,
  },
  {
    BoradPageId: 4,
    PageColumnId: 1,
    PageColumn: "Cart-1",
    title: "版位來源",
    board_id: "board-4",
    task_orders: ["20", "21", "23", "25"],
    editing: false,
  },
  {
    BoradPageId: 4,
    PageColumnId: 2,
    PageColumn: "Cart-2",
    title: "前台顯示版位",
    board_id: "board-4",
    task_orders: ["22", "24"],
    editing: false,
  },
  {
    BoradPageId: 5,
    PageColumnId: 1,
    PageColumn: "Checkout-1",
    title: "版位來源",
    board_id: "board-5",
    task_orders: ["30", "31", "33", "25"],
    editing: false,
  },
  {
    BoradPageId: 5,
    PageColumnId: 2,
    PageColumn: "Checkout-2",
    title: "前台顯示版位",
    board_id: "board-5",
    task_orders: ["32", "34"],
    editing: false,
  },
  {
    BoradPageId: 6,
    PageColumnId: 1,
    PageColumn: "Member-1",
    title: "版位來源",
    board_id: "board-6",
    task_orders: ["22", "26", "28", "24"],
    editing: false,
  },
  {
    BoradPageId: 6,
    PageColumnId: 2,
    PageColumn: "Member-2",
    title: "前台顯示版位",
    board_id: "board-6",
    task_orders: ["21", 23],
    editing: false,
  },
  {
    BoradPageId: 7,
    PageColumnId: 1,
    PageColumn: "Footer-1",
    title: "版位來源",
    board_id: "board-7",
    task_orders: ["12", "24"],
    editing: false,
  },
  {
    BoradPageId: 7,
    PageColumnId: 2,
    PageColumn: "Footer-2",
    title: "前台顯示版位",
    board_id: "board-7",
    task_orders: ["11", "6"],
    editing: false,
  },
  {
    BoradPageId: 8,
    PageColumnId: 1,
    PageColumn: "About-1",
    title: "版位來源",
    board_id: "board-8",
    task_orders: ["12", "6", "8", "2", "0"],
    editing: false,
  },
  {
    BoradPageId: 8,
    PageColumnId: 2,
    PageColumn: "About-2",
    title: "前台顯示版位",
    board_id: "board-8",
    task_orders: ["3", "5", "9"],
    editing: false,
  },
  {
    BoradPageId: 9,
    PageColumnId: 1,
    PageColumn: "Service-1",
    title: "版位來源",
    board_id: "board-9",
    task_orders: ["10", "9", "14", "5", "7", "12"],
    editing: false,
  },
  {
    BoradPageId: 9,
    PageColumnId: 2,
    PageColumn: "Service-2",
    title: "前台顯示版位",
    board_id: "board-9",
    task_orders: ["11", "2", "3"],
    editing: false,
  },
  {
    BoradPageId: 10,
    PageColumnId: 1,
    PageColumn: "OurProduct-1",
    title: "版位來源",
    board_id: "board-10",
    task_orders: ["4", "7", "32", "12"],
    editing: false,
  },
  {
    BoradPageId: 10,
    PageColumnId: 2,
    PageColumn: "OurProduct-2",
    title: "前台顯示版位",
    board_id: "board-10",
    task_orders: ["5", "6", "13"],
    editing: false,
  },
  {
    BoradPageId: 11,
    PageColumnId: 1,
    PageColumn: "Blog-1",
    title: "版位來源",
    board_id: "board-11",
    task_orders: ["1", "5", "7", "9", "21"],
    editing: false,
  },
  {
    BoradPageId: 11,
    PageColumnId: 2,
    PageColumn: "Blog-2",
    title: "前台顯示版位",
    board_id: "board-11",
    task_orders: ["19", 21],
    editing: false,
  },
  {
    BoradPageId: 12,
    PageColumnId: 1,
    PageColumn: "BlogDetail-1",
    title: "版位來源",
    board_id: "board-12",
    task_orders: ["3", "6", "9", "21"],
    editing: false,
  },
  {
    BoradPageId: 12,
    PageColumnId: 2,
    PageColumn: "BlogDetail-2",
    title: "前台顯示版位",
    board_id: "board-12",
    task_orders: ["12", "2", "7"],
    editing: false,
  },
  {
    BoradPageId: 13,
    PageColumnId: 1,
    PageColumn: "OnePage-1",
    title: "版位來源",
    board_id: "board-13",
    task_orders: ["0", "1", "8", "9", "10", "12"],
    editing: false,
  },
  {
    BoradPageId: 13,
    PageColumnId: 2,
    PageColumn: "OnePage-2",
    title: "前台顯示版位",
    board_id: "board-13",
    task_orders: ["1", "4", "9", "2"],
    editing: false,
  },
];

const boardData = [
  {
    id: "board-1",
    column_orders: ["Home-1", "Home-2"],
    title: "首頁",
    category: "軟體",
  },

  {
    id: "board-2",
    title: "館別頁",
    column_orders: ["Shop-1", "Shop-2", "Shop-3"],
    category: "軟體",
  },
  {
    id: "board-3",
    title: "商品明細頁",
    column_orders: ["ProductDetail-1", "ProductDetail-2"],
    category: "軟體",
  },
  {
    id: "board-4",
    title: "購物車頁",
    column_orders: ["Cart-1", "Cart-2"],
    category: "軟體",
  },
  {
    id: "board-5",
    title: "結帳頁",
    column_orders: ["Checkout-1", "Checkout-2"],
    category: "軟體",
  },
  {
    id: "board-6",
    title: "會員中心",
    column_orders: ["Member-1", "Member-2"],
    category: "軟體",
  },
  {
    id: "board-7",
    title: "頁尾",
    column_orders: ["Footer-1", "Footer-2"],
    category: "軟體",
  },
  {
    id: "board-8",
    title: "關於我們",
    column_orders: ["About-1", "About-2"],
    category: "軟體",
  },
  {
    id: "board-9",
    title: "我們的服務",
    column_orders: ["Service-1", "Service-2"],
    category: "軟體",
  },
  {
    id: "board-10",
    title: "我們的產品",
    column_orders: ["OurProduct-1", "OurProduct-2"],
    category: "軟體",
  },
  {
    id: "board-11",
    title: "部落格主頁",
    column_orders: ["Blog-1", "Blog-2"],
    category: "軟體",
  },
  {
    id: "board-12",
    title: "部落格明細頁",
    column_orders: ["BlogDetail-1", "BlogDetail-2"],
    category: "軟體",
  },
  {
    id: "board-13",
    title: "一頁式",
    column_orders: ["OnePage-1", "OnePage-2"],
    category: "軟體",
  },
];

let tasksobj = {};
let columnsobj = {};
let boardobj = {};
taskData.map((task, index) => {
  return (tasksobj[task.DnDId] = {
    id: task.DnDId.toString(), //此處必須是字串
    DnDId: task.DnDId,
    title: task.title,
    image: task.imagepath,
  });
});

ColumnData.map((column, index) => {
  return (columnsobj[column.PageColumn] = {
    id: column.PageColumn,
    board_id: column.board_id,
    task_orders: column.task_orders,
    title: column.title,
    editing: false,
    boradpage_id: column.BoradPageId,
    pagecolumn_id: column.PageColumnId,
  });
});

boardData.map((board, index) => {
  return (boardobj[board.id] = {
    id: board.id,
    board_id: board.board_id,
    column_orders: board.column_orders,
    title: board.title,
  });
});

const initialData = {
  tasks: tasksobj,
  columns: columnsobj,
  boards: boardobj,
};

export default initialData;
