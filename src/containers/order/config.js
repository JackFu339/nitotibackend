const localDataName = "mateInvoice";
const orderStatusOptions = ["Pending", "Shipped", "Delivered"];
/**
 * OrderMaster
1 Id		 
2	CompanyId		 	            公司ID
3	OrderNo	 	                訂單編號
4	OrderDate			            訂單日期
5	MemberId			            會員ID
6	EventId			              活動ID
7	BonusRedeem		            紅利點數折抵
8	CoupponRedeem		          優惠券折抵
9	DiscountAmount		        折扣金額
10	Amount		              應收金額
11	ARAmount		            實收金額
12	TransactionCode		      交易代碼
13	Remarks		              備註
14	IsHold		              是否攔單
15	ChannelId			          通路編號 1 家庭雲 2 Momo 3 小P
16	VIPCode	      	        VIP編號
17	TargetArrivalDate		    指定到貨日期
18	TempLayer		            溫層
19	RecommendedCode	    		推薦碼
20	CreateId		            建立ID
21	CreateDate	            建立日期
22	UpdateId		            更新ID
23	UpdateDate	            更新日期

OrderDeatil
1	Id		 
2	OrderId		 	              訂單ID
3	OrderNo	 	                訂單編號
4	ProductId	                商品ID
5	ProductNo	                商品編號
6	UnitPrice	                單價
7	Quantity	                數量
8	NonTaxAmount	            未稅金額
9	TaxAmont	                稅額
10	Amount	                小計金額
11	Cost	                  成本
12	Remarks	                備註
13	Status	                狀態
14	CreateId		            建立ID
15	CreateDate		          建立日期
16	UpdateId	              更新ID
17	UpdateDate	            更新日期
 */

const fakedata1 = {
  Code: 200,
  Message: "",
  Data: {
    PluralData: [
      {
        Id: 1,
        CompanyId: 1, //公司ID
        OrderNo: "1202104200001", //訂單編號
        OrderDate: "2021-04-20T12:09:13", //訂單日期
        MemberId: 1, //會員ID
        MemberName: "林勝正", //會員姓名
        EventId: 1, //活動ID
        BonusRedeem: 0, //紅利點數折抵
        CoupponRedeem: 0, //優惠券折抵
        DiscountAmount: 0, //折扣金額
        Amount: 0, //應收金額
        ARAmount: 0, //實收金額
        TransactionCode: "", //交易代碼
        Remarks: "", //備註
        IsHold: "", //是否攔單
        ChannelId: 1, //通路編號 1 家庭雲 2 Momo 3 小P
        VIPCode: "", //VIP編號
        TargetArrivalDate: "2021-04-20T12:09:13", //指定到貨日期
        TempLayer: 3, //溫層
        RecommendedCode: "", //推薦碼
        CreateId: 1, //建立ID
        CreateDate: "2021-04-20T12:09:13", //建立日期
        UpdateId: 1, //更新ID
        UpdateDate: "", //更新日期
        orderdetail: [
          {
            Id: 1,
            OrderId: 1,
            OrderNo: "121041900011",
            ProductId: 1,
            ProductNo: "100001",
            UnitPrice: 60.0,
            Quantity: 2,
            NonTaxAmount: null, //未稅金額
            TaxAmont: null, //稅額
            Amount: 120.0, //小計
            Cost: 20.0, //成本
            Remarks: null, //備註
            Status: 1,
            CreateId: 1,
            CreateDate: "2021-04-20T00:00:00",
            UpdateId: 1,
            UpdateDate: "2021-04-20T00:00:00",
          },
          {
            Id: 2,
            OrderId: 1,
            OrderNo: "121041900011",
            ProductId: 2,
            ProductNo: "100002",
            UnitPrice: 50.0,
            Quantity: 3,
            NonTaxAmount: 0,
            TaxAmont: 0,
            Amount: 150.0,
            Cost: 30.0,
            Remarks: "",
            Status: 1,
            CreateId: 1,
            CreateDate: "2021-04-20T00:00:00",
            UpdateId: 1,
            UpdateDate: "2021-04-20T00:00:00",
          },
        ],
      },
      {
        Id: 1,
        CompanyId: 1, //公司ID
        OrderNo: "1202104200001", //訂單編號
        OrderDate: "2021-04-20T12:09:13", //訂單日期
        MemberId: 1, //會員ID
        MemberName: "林勝正", //會員姓名
        EventId: 1, //活動ID
        BonusRedeem: 0, //紅利點數折抵
        CoupponRedeem: 0, //優惠券折抵
        DiscountAmount: 0, //折扣金額
        Amount: 0, //應收金額
        ARAmount: 0, //實收金額
        TransactionCode: "", //交易代碼
        Remarks: "", //備註
        IsHold: "", //是否攔單
        ChannelId: 1, //通路編號 1 家庭雲 2 Momo 3 小P
        VIPCode: "", //VIP編號
        TargetArrivalDate: "2021-04-20T12:09:13", //指定到貨日期
        TempLayer: 3, //溫層
        RecommendedCode: "", //推薦碼
        CreateId: 1, //建立ID
        CreateDate: "2021-04-20T12:09:13", //建立日期
        UpdateId: 1, //更新ID
        UpdateDate: "", //更新日期
        orderdetail: [
          {
            Id: 1,
            OrderId: 1,
            OrderNo: "121041900011",
            ProductId: 2,
            ProductNo: "10000001",
            ProductName: "",
            UnitPrice: 60.0,
            Quantity: 2,
            NonTaxAmount: null, //未稅金額
            TaxAmont: null, //稅額
            Amount: 120.0, //小計
            Cost: 20.0, //成本
            Remarks: null, //備註
            Status: 1,
            CreateId: 1,
            CreateDate: "2021-04-20T00:00:00",
            UpdateId: 1,
            UpdateDate: "2021-04-20T00:00:00",
          },
          {
            Id: 2,
            OrderId: 1,
            OrderNo: "121041900011",
            ProductId: 2,
            ProductNo: "10000002",
            UnitPrice: 50.0,
            Quantity: 3,
            NonTaxAmount: 0,
            TaxAmont: 0,
            Amount: 150.0,
            Cost: 30.0,
            Remarks: "",
            Status: 1,
            CreateId: 1,
            CreateDate: "2021-04-20T00:00:00",
            UpdateId: 1,
            UpdateDate: "2021-04-20T00:00:00",
          },
        ],
      },
    ],
  },
};

const fakedata = [
  {
    key: 1,
    id: "1518713981654",
    orderNo: "12101301231",
    orderStatus: "訂單成立",
    orderDate: 1518849188360,
    currency: "NT$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
  {
    key: 2,
    id: "1518713981655",
    number: "#1232",
    orderStatus: "Pending",
    orderDate: 1518849188360,
    currency: "$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
  {
    key: 3,
    id: "1518713981656",
    number: "#1233",
    orderStatus: "Delivered",
    orderDate: 1518849188360,
    currency: "$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
  {
    key: 4,
    id: "1518713981657",
    number: "#1234",
    orderStatus: "Shipped",
    orderDate: 1518849188360,
    currency: "$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
  {
    key: 5,
    id: "1518713981658",
    number: "#1235",
    orderStatus: "Pending",
    orderDate: 1518849188360,
    currency: "$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
  {
    key: 6,
    id: "1518713981659",
    number: "#1236",
    orderStatus: "Delivered",
    orderDate: 1518849188360,
    currency: "$",
    billTo: "REDQ Inc.",
    billToAddress:
      "redq@company.com\n\n405 Mulberry Rd, Mc Grady, \nNC, 28649 \n\nFax: +0(863) 228-7064 \nPhone: +(740) 927-9284",
    billFrom: "Pineapple Inc.",
    billFromAddress:
      "pineapple@company.com\n\n86781 547th Ave, Osmond, \nNE, 68765 \n\nPhone: +(402) 748-3970",
    invoiceList: [
      {
        key: 1,
        itemName: "A box of happiness",
        costs: 200,
        qty: 14,
        price: 2800,
      },
      { key: 2, itemName: "Unicorn Tears", costs: 500, qty: 14, price: 7000 },
      { key: 3, itemName: "Rainbow Machine", costs: 700, qty: 5, price: 3500 },
    ],
    subTotal: 13300,
    vatRate: 10,
    vatPrice: 1330,
    totalCost: 14630,
  },
];
const newInvoice = {
  orderStatus: "Pending",
  orderDate: "", //moment(new Date().getTime()).format("yyyy/MM/DD"),
  currency: "$",
  billTo: "",
  billToAddress: "",
  billFrom: "",
  billFromAddress: "",
  invoiceList: [
    {
      key: 1,
      itemName: "",
      costs: 0,
      qty: 0,
      price: 0,
    },
  ],
  subTotal: 0,
  vatRate: 10,
  vatPrice: 0,
  totalCost: 0,
};
const createDemoData = () => {
  const localData = localStorage.getItem(localDataName);
  if (localData) {
    try {
      const invoices = JSON.parse(localData);
      if (invoices && invoices.length > 0) {
        return invoices;
      }
    } catch (e) {}
  }
  return fakedata;
};

export {
  fakedata,
  createDemoData,
  localDataName,
  newInvoice,
  orderStatusOptions,
};
