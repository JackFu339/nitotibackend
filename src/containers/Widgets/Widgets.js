import React from "react";
import clone from "clone";
import { Row, Col } from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import basicStyle from "@iso/assets/styles/constants";
import IsoWidgetsWrapper from "./WidgetsWrapper";
import IsoWidgetBox from "./WidgetBox";
// import CardWidget from "./Card/CardWidget";
// import ProgressWidget from "./Progress/ProgressWidget";
// import SingleProgressWidget from "./Progress/ProgressSingle";
// import ReportsWidget from "./Report/ReportWidget";
import StickerWidget from "./Sticker/StickerWidget";
import SaleWidget from "./Sale/SaleWidget";
// import VCardWidget from "./vCard/vCardWidget";
// import SocialWidget from "./SocialWidget/SocialWidget";
// import SocialProfile from "./SocialWidget/SocialProfileIcon";
// import userpic from "@iso/assets/images/user4.png";
// import { isServer } from "@iso/lib/helpers/isServer";
import {
  // TableViews,
  // tableinfos,
  dataList,
} from "../Tables/AntTables/AntTables";
// import * as rechartConfigs from "../Charts/Recharts/config";
// import StackedAreaChart from "../Charts/Recharts/Charts/StackedAreaChart";
import GoogleChart from "react-google-charts";
import * as googleChartConfigs from "../Charts/GoogleChart/config";
import IntlMessages from "@iso/components/utility/intlMessages";

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
  wisgetPageStyle: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    overflow: "hidden",
  },
};
// const SIGNLE_PROGRESS_WIDGET = [
//   {
//     label: "widget.singleprogresswidget1.label",
//     percent: 70,
//     barHeight: 7,
//     status: "active",
//     info: true,
//   },
//   {
//     label: "widget.singleprogresswidget2.label",
//     percent: 80,
//     barHeight: 7,
//     status: "active",
//     info: true,
//   },
//   {
//     label: "widget.singleprogresswidget3.label",
//     percent: 40,
//     barHeight: 7,
//     status: "active",
//     info: true,
//   },
//   {
//     label: "widget.singleprogresswidget4.label",
//     percent: 60,
//     barHeight: 7,
//     status: "active",
//     info: true,
//   },
// ];

const STICKER_WIDGET = [
  {
    number: "widget.stickerwidget1.number",
    text: "widget.stickerwidget1.text", //未讀電子郵件
    icon: "ion-email-unread",
    fontColor: "#ffffff",
    bgColor: "#7266BA",
  },
  {
    number: "widget.stickerwidget2.number",
    text: "widget.stickerwidget2.text",
    icon: "ion-android-camera", //圖片上傳
    fontColor: "#ffffff",
    bgColor: "#42A5F6",
  },
  {
    number: "widget.stickerwidget3.number",
    text: "widget.stickerwidget3.text", //總信息
    icon: "ion-chatbubbles",
    fontColor: "#ffffff",
    bgColor: "#7ED320",
  },
  {
    number: "widget.stickerwidget4.number",
    text: "widget.stickerwidget4.text", //訂單發佈
    icon: "ion-android-cart",
    fontColor: "#ffffff",
    bgColor: "#F75D81",
  },
];

const SALE_WIDGET = [
  {
    label: "widget.salewidget1.label", //收入
    price: "widget.salewidget1.price", //15000
    details: "widget.salewidget1.details", //Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget2.label", //收入
    price: "widget.salewidget2.price", //15000
    details: "widget.salewidget2.details",
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget3.label", //收入
    price: "widget.salewidget3.price", //15000
    details: "widget.salewidget3.details",
    fontColor: "#F75D81",
  },
  {
    label: "widget.salewidget4.label", //收入
    price: "widget.salewidget4.price", //15000
    details: "widget.salewidget4.details",
    fontColor: "#F75D81",
  },
];

// const CARD_WIDGET = [
//   {
//     icon: "ion-android-chat",
//     iconcolor: "#42A5F5",
//     number: "widget.cardwidget1.number",
//     text: "widget.cardwidget1.text",
//   },
//   {
//     icon: "ion-music-note",
//     iconcolor: "#F75D81",
//     number: "widget.cardwidget2.number",
//     text: "widget.cardwidget2.text",
//   },
//   {
//     icon: "ion-trophy",
//     iconcolor: "#FEAC01",
//     number: "widget.cardwidget3.number",
//     text: "widget.cardwidget3.text",
//   },
// ];

// const PROGRESS_WIDGET = [
//   {
//     label: "widget.progresswidget1.label",
//     details: "widget.progresswidget1.details",
//     icon: "ion-archive",
//     iconcolor: "#4482FF",
//     percent: 50,
//     barHeight: 7,
//     status: "active",
//   },
//   {
//     label: "widget.progresswidget2.label",
//     details: "widget.progresswidget2.details",
//     icon: "ion-pie-graph",
//     iconcolor: "#F75D81",
//     percent: 80,
//     barHeight: 7,
//     status: "active",
//   },
//   {
//     label: "widget.progresswidget3.label",
//     details: "widget.progresswidget3.details",
//     icon: "ion-android-download",
//     iconcolor: "#494982",
//     percent: 65,
//     barHeight: 7,
//     status: "active",
//   },
// ];

// const SOCIAL_PROFILE = [
//   {
//     url: "#",
//     icon: "ion-social-facebook",
//     iconcolor: "#3b5998",
//   },
//   {
//     url: "#",
//     icon: "ion-social-twitter",
//     iconcolor: "#00aced",
//   },
//   {
//     url: "#",
//     icon: "ion-social-googleplus",
//     iconcolor: "#dd4b39",
//   },
//   {
//     url: "#",
//     icon: "ion-social-linkedin-outline",
//     iconcolor: "#007bb6",
//   },
//   {
//     url: "#",
//     icon: "ion-social-dribbble-outline",
//     iconcolor: "#ea4c89",
//   },
// ];
export default function () {
  const { rowStyle, colStyle } = basicStyle;

  const chartEvents = [
    {
      eventName: "select",
      callback(Chart) {},
    },
  ];

  // const stackConfig = {
  //   ...rechartConfigs.StackedAreaChart,
  //   width: !isServer && window.innerWidth < 450 ? 300 : 500,
  // };
  return (
    <LayoutWrapper>
      <div style={styles.wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                  icon={widget.icon}
                  fontColor={widget.fontColor}
                  bgColor={widget.bgColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          {SALE_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id={widget.label} />}
                  price={<IntlMessages id={widget.price} />}
                  details={<IntlMessages id={widget.details} />}
                  fontColor={widget.fontColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470} style={{ overflow: "hidden" }}>
                <GoogleChart
                  {...googleChartConfigs.BarChart}
                  chartEvents={chartEvents}
                />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>

          <Col md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={470} style={{ overflow: "hidden" }}>
                <GoogleChart {...googleChartConfigs.Histogram} />
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>
      </div>
    </LayoutWrapper>
  );
}
