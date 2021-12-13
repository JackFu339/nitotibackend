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
            <IntlMessages id="sidebar.system" /> /{" "}
            <IntlMessages id="sidebar.rolemapprograms" />
          </h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
