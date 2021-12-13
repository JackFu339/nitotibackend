import React from "react";
import { Link } from "react-router-dom";
import Box from "@iso/components/utility/box";
import { Button } from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import InvoicePageWrapper from "./SingleInvoice.styles";
import Invoice from "./Invoice";

export default function (props) {
  const { currentInvoice, toggleView, redirectPath } = props;

  return (
    <LayoutWrapper>
      <Box style={{ padding: 20 }}>
        <InvoicePageWrapper className="InvoicePageWrapper">
          <div className="PageHeader viewMode">
            <Link to={redirectPath}>
              <Button className="isoGoInvoBtn">
                <span>回主頁</span>
              </Button>
            </Link>
            <Button color="secondary" onClick={() => toggleView(true)}>
              <span>修改</span>
            </Button>
          </div>
          <Invoice currentInvoice={currentInvoice} ref={(inv) => inv} />
        </InvoicePageWrapper>
      </Box>
    </LayoutWrapper>
  );
}
