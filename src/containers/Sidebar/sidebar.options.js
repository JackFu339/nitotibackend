const sidebaroptions = [
  {
    key: "ordermanager", //主要辨識鍵值
    label: "sidebar.ordermanager", //顯示語系相關定義的Wording
    leftIcon: "ion-bag", //圖示，大項功能方能呈現
    children: [
      //子項真正要執行的項目
      {
        key: "order",
        label: "sidebar.ordersearch",
         
      },
      {
        key: "ordercancel",
        label: "sidebar.ordercancel",
      },
    ],
  },
  {
    key: "productmanager",
    label: "sidebar.productmanager",
    leftIcon: "ion-bag",
    children: [
      {
        key: "products",
        label: "sidebar.products",
        leftIcon: "ion-bag",
      },
      {
        key: "productcategory",
        label: "sidebar.productcategory",
      },
      {
        key: "producttag",
        label: "sidebar.producttag",
      },
      {
        key: "productverify",
        label: "sidebar.productverify",
      },
    ],
  },
  {
    key: "member",
    label: "sidebar.member",
    leftIcon: "ion-bag",
    children: [
      {
        key: "memberedit",
        label: "sidebar.memberedit",
      },
      {
        key: "memeberbouns",
        label: "sidebar.memeberbouns",
      },
      {
        key: "memebercoupon",
        label: "sidebar.memebercoupon",
      },{
        key: "deliveries",
        label: "sidebar.deliveries",
      },
    ],
  },{
    key: "PushNotification",
    label: "sidebar.PushNotification",
    leftIcon: "ion-bag",
    children: [
      {
        key: "PushMessage",
        label: "sidebar.PushMessage",
      },
      {
        key: "PushVerify",
        label: "sidebar.PushVerify",
      },
      {
        key: "PushList",
        label: "sidebar.PushList",
      } 
    ],
  },{
    key: "Shipping",
    label: "sidebar.Shipping",
    leftIcon: "ion-bag",
    children: [
      {
        key: "ShippingFee",
        label: "sidebar.ShippingFee",
      },
      {
        key: "TaiwanCityArea",
        label: "sidebar.TaiwanCityArea",
      },
      {
        key: "TaiwanCity",
        label: "sidebar.TaiwanCity",
      } ,{
        key: "CityDeliveryGroup",
        label: "sidebar.CityDeliveryGroup",
      },
      {
        key: "TaiwanCityMapping",
        label: "sidebar.TaiwanCityMapping",
      }
    ],
  },{
    key: "events",
    label: "sidebar.events",
    leftIcon: "ion-bag",
    children: [
      {
        key: "event", //活動主檔
        label: "sidebar.event",
      } ,
      {
        key: "PromotionGift", //贈品(買Ａ送Ｂ)
        label: "sidebar.PromotionGift",
      } ,
      {
        key: "RebatePoints",//點數滿額送
        label: "sidebar.RebatePoints",
      } ,
      {
        key: "RebateHundred",//滿千送百
        label: "sidebar.RebateHundred",
      } ,
      {
        key: "ProductPriceFeedback",//指定商品折金額
        label: "sidebar.ProductPriceFeedback",
      }  ,
      {
        key: "ProductTimesFeedback",//指定商品點數倍數贈
        label: "sidebar.ProductTimesFeedback",
      }  ,
      {
        key: "Coupons",//優惠券設定
        label: "sidebar.Coupons",
      }  
    ],
  },
  {
    key: "layouts",
    label: "sidebar.layouts",
    leftIcon: "ion-bag",
    children: [
      {
        key: "NewArrivals",
        label: "sidebar.NewArrivals",
      },
      {
        key: "RecommendedGoods",
        label: "sidebar.RecommendedGoods",
      } ,
      {
        key: "FlashSale",
        label: "sidebar.FlashSale",
      },
      {
        key: "popular",
        label: "sidebar.popular",
      } ,
      {
        key: "HotSale",
        label: "sidebar.HotSale",
      } ,
      {
        key: "AlertMessage",
        label: "sidebar.AlertMessage",
      } ,
      {
        key: "ExclusiveOfferMaster",
        label: "sidebar.ExclusiveOfferMaster",
      }  ,
      {
        key: "smallMessage",
        label: "sidebar.smallMessage",
      } ,
      {
        key: "hotKeywords",
        label: "sidebar.hotKeywords",
      },
      {
        key: "scrollMessage",
        label: "sidebar.scrollMessage",
      } ,
      {
        key: "showCarousel",
        label: "sidebar.showCarousel",
      } ,
      {
        key: "special4img",
        label: "sidebar.special4img",
      } ,
      {
        key: "news",
        label: "sidebar.news",
      }   ,
      {
        key: "triviaOne",
        label: "sidebar.triviaOne",
      } ,
      {
        key: "categoryKeywords",
        label: "sidebar.categoryKeywords",
      }  

    ],
  },{
    key: "ERP&POS",
    label: "ERP&POS",
    leftIcon: "ion-bag",
    children: [
      {
        key: "PeriodOrderList",
        label: "sidebar.ERP.Products",
      },
      {
        key: "PeriodPointsList",
        label: "sidebar.ERP.Store",
      },
      {
        key: "PeriodPointsList",
        label: "sidebar.POS.SalesDate",
      }
    ],
  },{
    key: "Export&Import",
    label: "Export&Import",
    leftIcon: "ion-bag",
    children: [
      {
        key: "PeriodOrderList",
        label: "sidebar.ERP.ImportProducts",
      },
      {
        key: "PeriodPointsList",
        label: "sidebar.ERP.ImportStore",
      },
      {
        key: "ImportSalesDate",
        label: "sidebar.POS.ImportSalesDate",
      }
    ],
  },{
    key: "Basic",
    label: "sidebar.Basic",
    leftIcon: "ion-bag",
    children: [
      {
        key: "KeyValues",
        label: "sidebar.KeyValues",
      } 
    ],
  },
  {
    key: "system",
    label: "sidebar.system",
    leftIcon: "ion-bag",
    children: [
      {
        key: "programs",
        label: "sidebar.programs",
      },
      {
        key: "users",
        label: "sidebar.users",
      },
      {
        key: "roles",
        label: "sidebar.roles",
      },
      {
        key: "rolemapprograms",
        label: "sidebar.rolemapprograms",
      },
    ],
  },
  {
    key: "sample",
    label: "sidebar.sample",
    leftIcon: "ion-bag",
    children: [
      {
        key: "scrum-board",
        label: "sidebar.scrumboard",
        leftIcon: "ion-android-checkbox-outline",
      },
      {
        key: "invoice",
        label: "sidebar.invoice",
        leftIcon: "ion-clipboard",
      },
      {
        key: "articles",
        label: "sidebar.firestorecrudarticle",
      },
      {
        key: "investors",
        label: "sidebar.firestorecrudinvestor",
      },
      {
        key: "calendar",
        label: "sidebar.calendar",
        leftIcon: "ion-calendar",
      },
    ],
  },

  {
    key: "Forms",
    label: "sidebar.forms",
    leftIcon: "ion-android-mail",
    children: [
      {
        key: "InputField",
        label: "sidebar.input",
      },
      {
        key: "editor",
        label: "sidebar.editor",
      },
      {
        key: "FormsWithValidation",
        label: "sidebar.formsWithValidation",
      },
      {
        key: "progress",
        label: "sidebar.progress",
      },
      {
        key: "button",
        label: "sidebar.button",
      },
      {
        key: "tab",
        label: "sidebar.tab",
      },
      {
        key: "checkbox",
        label: "sidebar.checkbox",
      },
      {
        key: "radiobox",
        label: "sidebar.radiobox",
      },
      {
        key: "selectbox",
        label: "sidebar.selectbox",
      },
      {
        key: "transfer",
        label: "sidebar.transfer",
      },
      {
        key: "autocomplete",
        label: "sidebar.autocomplete",
      },
    ],
  },

  {
    key: "uielements",
    label: "sidebar.uiElements",
    leftIcon: "ion-leaf",
    children: [
      {
        key: "op_badge",
        label: "sidebar.badge",
      },
      {
        key: "op_card",
        label: "sidebar.card2",
      },
      {
        key: "op_carousel",
        label: "sidebar.corusel",
      },
      {
        key: "op_collapse",
        label: "sidebar.collapse",
      },
      {
        key: "op_popover",
        label: "sidebar.popover",
      },
      {
        key: "op_tooltip",
        label: "sidebar.tooltip",
      },
      {
        key: "op_tag",
        label: "sidebar.tag",
      },
      {
        key: "op_timeline",
        label: "sidebar.timeline",
      },
      {
        key: "dropdown",
        label: "sidebar.dropdown",
      },
      {
        key: "pagination",
        label: "sidebar.pagination",
      },
      {
        key: "rating",
        label: "sidebar.rating",
      },
      {
        key: "tree",
        label: "sidebar.tree",
      },
      {
        key: "swiperslider",
        label: "sidebar.swiperslider",
      },
    ],
  },
  {
    key: "advancedUielements",
    label: "sidebar.advancedElements",
    leftIcon: "ion-flash",
    children: [
      {
        key: "reactDates",
        label: "sidebar.reactDates",
      },

      {
        key: "uppy",
        label: "sidebar.uppy",
      },
      {
        key: "dropzone",
        label: "sidebar.dropzone",
      },
    ],
  },
  {
    key: "feedback",
    label: "sidebar.feedback",
    leftIcon: "ion-thumbsup",
    children: [
      {
        key: "alert",
        label: "sidebar.alert",
      },
      {
        key: "modal",
        label: "sidebar.modal",
      },
      {
        key: "message",
        label: "sidebar.message",
      },
      {
        key: "notification",
        label: "sidebar.notification",
      },
      {
        key: "popConfirm",
        label: "sidebar.popConfirm",
      },
      {
        key: "spin",
        label: "sidebar.spin",
      },
      {
        key: "menu",
        label: "sidebar.menu",
      },
    ],
  },
  {
    key: "table",
    label: "sidebar.tables",
    leftIcon: "ion-android-menu",
    children: [
      {
        key: "table_ant",
        label: "sidebar.antTables",
      },
    ],
  },
  {
    key: "pages",
    label: "sidebar.pages",
    leftIcon: "ion-document-text",
    children: [
      {
        key: "404",
        label: "sidebar.404",
        withoutDashboard: true,
      },
      {
        key: "500",
        label: "sidebar.500",
        withoutDashboard: true,
      },
      {
        key: "signin",
        label: "sidebar.signIn",
        withoutDashboard: true,
      },
      {
        key: "signup",
        label: "sidebar.signUp",
        withoutDashboard: true,
      },
      {
        key: "forgotpassword",
        label: "sidebar.forgotPw",
        withoutDashboard: true,
      },
      {
        key: "resetpassword",
        label: "sidebar.resetPw",
        withoutDashboard: true,
      },
    ],
  },
  {
    key: "blank_page",
    label: "sidebar.blankPage",
    leftIcon: "ion-document",
  },
];
export default sidebaroptions;
