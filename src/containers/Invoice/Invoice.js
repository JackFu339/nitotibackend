import React from "react";

import InvoiceAddress from "@iso/components/Invoice/Address";
import { ViewTable } from "@iso/components/Invoice/InvoiceTable";
import Dateymd from "../../library/helpers/Dateymd";
/**
 * 傳送 ref 是一種自動把 ref 從一個 component 傳遞到它底下的其中一個 child 的技巧。
 * 傳送 ref 是個選擇性的功能，它能夠讓某些 component 利用它們收到的 ref 來傳遞到底下的 child component。
 */
const Invoice = React.forwardRef(({ currentInvoice }, ref) => {
  console.log(ref);
  return (
    <div className="PageContent" style={{ padding: "10" }} ref={ref}>
      <div className="OrderInfo">
        <div className="LeftSideContent">
          <h3 className="Title">發票資訊</h3>
          <span className="InvoiceNumber">{currentInvoice.number}</span>
        </div>
        <div className="RightSideContent">
          <p>
            <span className="orderStatusSpan">訂單狀態: </span>
            <span className="orderStatus">{currentInvoice.orderStatus}</span>
          </p>
          <p>
            <span className="orderDateSpan">訂單日期: </span>
            <span className="orderDate">
              <Dateymd oDate={currentInvoice.orderDate} />
            </span>
          </p>
        </div>
      </div>
      <div className="BillingInformation">
        <div className="LeftSideContent">
          <h3 className="Title">賣方</h3>

          <InvoiceAddress
            companyName={currentInvoice.billFrom}
            companyAddress={currentInvoice.billFromAddress}
          />
        </div>
        <div className="RightSideContent">
          <h3 className="Title">買方</h3>

          <InvoiceAddress
            companyName={currentInvoice.billTo}
            companyAddress={currentInvoice.billToAddress}
          />
        </div>
      </div>
      <div className="InvoiceTable">
        <ViewTable invoiceList={currentInvoice.invoiceList} />
        <div className="TotalBill">
          <p>
            小計 :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.subTotal}`}</span>
          </p>
          <p>
            稅額 :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.vatPrice}`}</span>
          </p>
          <h3>
            總價 :{" "}
            <span>{`${currentInvoice.currency}${currentInvoice.totalCost}`}</span>
          </h3>
        </div>
      </div>
    </div>
  );
});
export default Invoice;
