import React, { Component } from "react";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>空白頁</h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
