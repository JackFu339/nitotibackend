import React, { Component } from "react";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";
import IntlMessages from "@iso/components/utility/intlMessages";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>
            <IntlMessages id="sidebar.ordermanager" /> /{" "}
            <IntlMessages id="sidebar.ordercancel" />
          </h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
