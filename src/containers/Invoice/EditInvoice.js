import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import { EditTable } from "@iso/components/Invoice/InvoiceTable";
import OrderStatus from "@iso/components/Invoice/OrderStatus";
import notification from "@iso/components/Notification";
import Button from "@iso/components/uielements/button";
import Input, { Textarea } from "@iso/components/uielements/input";
import DatePicker from "@iso/components/uielements/datePicker";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import InvoicePageWrapper from "./SingleInvoice.styles";
import { stringToPosetiveInt } from "@iso/lib/helpers/utility";
import { orderStatusOptions } from "./config";
import invoiceActions from "@iso/redux/invoice/actions";

const { updateInvoice, editInvoice } = invoiceActions;
const updateValues = (invoice) => {
  const { invoiceList } = invoice;
  let subTotal = 0;
  invoiceList.forEach((item, index) => {
    const price = item.costs * item.qty;
    invoice.invoiceList[index].price = price;
    invoice.invoiceList[index].key = index + 1;
    subTotal += price;
  });
  invoice.subTotal = subTotal;
  invoice.vatPrice = Math.floor(invoice.vatRate * subTotal * 0.01);
  invoice.totalCost = invoice.vatPrice + subTotal;
  return invoice;
};
const checkInvoice = (invoice) => {
  const emptyKeys = [
    "number",
    "billTo",
    "billToAddress",
    "billFrom",
    "billFromAddress",
    "currency",
  ];
  const emptyKeysErrors = [
    "Invoice Number",
    "Bill To",
    "Bill To Address",
    "Bill From",
    "Bill From Address",
    "Currency",
  ];
  for (let i = 0; i < emptyKeys.length; i++) {
    if (!invoice[emptyKeys[i]]) {
      return `${emptyKeysErrors[i]}不可空白 `;
    }
  }
  for (let i = 0; i < invoice.invoiceList.length; i++) {
    if (!invoice.invoiceList[i].itemName) {
      return `請填入 ${i + 1} 品項`;
    }
    if (invoice.invoiceList[i].costs === 0) {
      return `成本 ${i + 1} 不可為零`;
    }
    if (invoice.invoiceList[i].qty === 0) {
      return `數量 ${i + 1} 不可為零`;
    }
  }
  return "";
};

export default function (props) {
  const dispatch = useDispatch();
  const { editableInvoice, isNewInvoice, redirectPath, toggleView } = props;
  const onSave = () => {
    const error = checkInvoice(editableInvoice);
    if (error) {
      notification("error", error);
    } else {
      const successMessage = isNewInvoice ? "新增發票" : "更新發票";
      notification("success", successMessage);
      dispatch(updateInvoice(editableInvoice));
    }
  };

  function handleChange(event) {
    const name = "orderStatus";
    const { value } = event;
    const data = {
      ...editableInvoice,
      [name]: value,
    };

    dispatch(editInvoice(data));
  }
  return (
    <LayoutWrapper>
      <Box>
        <InvoicePageWrapper className="editView">
          <div className="PageHeader">
            {isNewInvoice ? (
              <Link to={redirectPath}>
                <Button color="primary">
                  <span>取消</span>
                </Button>
              </Link>
            ) : (
              <Button onClick={() => toggleView(false)}>
                <span>取消</span>
              </Button>
            )}

            <Button type="primary" onClick={onSave} className="saveBtn">
              <span>存檔</span>
            </Button>
          </div>
          <div className="PageContent">
            <div className="OrderInfo">
              <div className="LeftSideContent">
                <h3 className="Title">訂單資訊</h3>
                <Input
                  placeholder="Number"
                  name="number"
                  value={editableInvoice.number}
                  onChange={handleChange}
                  className="LeftSideContentInput"
                />
              </div>
              <div className="RightSideContent">
                <div className="RightSideStatus">
                  <span className="RightSideStatusSpan">訂單狀態: </span>
                  <OrderStatus
                    value={editableInvoice.orderStatus}
                    name="orderStatus"
                    onChange={handleChange}
                    orderStatusOptions={orderStatusOptions}
                    className="RightStatusDropdown"
                  />
                </div>
                <div className="RightSideDate">
                  訂單日期:{" "}
                  <DatePicker
                    allowClear={false}
                    value={moment(new Date(editableInvoice.orderDate))}
                    onChange={(val) => {
                      editableInvoice.orderDate = val.toDate().getTime();
                      dispatch(editInvoice(editableInvoice));
                    }}
                    format="yyyy/MM/DD"
                    animateYearScrolling={true}
                  />
                </div>
              </div>
            </div>
            <div className="BillingInformation">
              <div className="LeftSideContent">
                <Input
                  placeholder="Bill From"
                  value={editableInvoice.billFrom}
                  name="billForm"
                  onChange={handleChange}
                  className="BillFormTitle"
                />
                <Textarea
                  placeholder="Bill From Address"
                  value={editableInvoice.billFromAddress}
                  rows={5}
                  name="billFromAddress"
                  onChange={handleChange}
                  className="BillFormAddress"
                />
              </div>
              <div className="RightSideContent">
                <Input
                  placeholder="Bill To"
                  value={editableInvoice.billTo}
                  name="billTo"
                  onChange={handleChange}
                  className="BillFormTitle"
                />
                <Textarea
                  placeholder="Bill To Address"
                  value={editableInvoice.billToAddress}
                  rows={5}
                  name="billToAddress"
                  onChange={handleChange}
                  className="BillFormAddress"
                />
              </div>
            </div>

            <div className="InvoiceTable editInvoiceTable">
              <EditTable
                editableInvoice={editableInvoice}
                editInvoice={(e) => dispatch(editInvoice(e))}
                updateValues={updateValues}
              />
              <div className="InvoiceTableBtn">
                <Button
                  onClick={() => {
                    editableInvoice.invoiceList.push({
                      key: editableInvoice.invoiceList.length + 1,
                      itemName: "",
                      costs: 0,
                      qty: 0,
                      price: 0,
                    });
                    dispatch(editInvoice(editableInvoice));
                  }}
                  type="primary"
                >
                  新增項目
                </Button>
              </div>
              <div className="TotalBill">
                <p>
                  <span className="TotalBillTitle">小計 : </span>
                  <span>{`${editableInvoice.currency}${editableInvoice.subTotal}`}</span>
                </p>
                <div className="vatRateCalc">
                  <span className="vatRateCalcSpan"> 稅額 : </span>
                  <div className="vatRateCalcWrap">
                    <Input
                      value={editableInvoice.vatRate}
                      addonAfter="%"
                      onChange={(event) => {
                        editableInvoice.vatRate = stringToPosetiveInt(
                          event.target.value,
                          editableInvoice.vatRate
                        );
                        dispatch(editInvoice(updateValues(editableInvoice)));
                      }}
                    />

                    <span>
                      {`${editableInvoice.currency}${editableInvoice.vatPrice}`}
                    </span>
                  </div>
                </div>
                <div className="currencySignWithTotal">
                  <span className="grandTotalSpan">總計 </span>
                  <div className="currencySignWrap">
                    <Input
                      value={editableInvoice.currency}
                      onChange={handleChange}
                      name="currency"
                      className="currencySign"
                    />
                    <span className="currencySignSpan">
                      {editableInvoice.totalCost}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ButtonWrapper" />
          </div>
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
