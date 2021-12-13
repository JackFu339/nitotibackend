import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import useWindowSize from "@iso/lib/hooks/useWindowSize";
import appActions from "@iso/redux/app/actions";
// import ThemeSwitcher from "@iso/containers/ThemeSwitcher/ThemeSwitcher";
import siteConfig from "@iso/config/site.config";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import DashboardRoutes from "./DashboardRoutes";

import { DashboardContainer, DashboardGlobalStyles } from "./Dashboard.styles";

const { Content, Footer } = Layout;
const { toggleAll } = appActions;
const styles = {
  layout: { flexDirection: "row", overflowX: "hidden" },
  content: {
    padding: "70px 0 0",
    flexShrink: "0",
    background: "#f1f3f6",
    position: "relative",
  },
  footer: {
    background: "#ffffff",
    textAlign: "center",
    borderTop: "1px solid #ededed",
  },
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const appHeight = useSelector((state) => state.App.height);
  const { width, height } = useWindowSize();
  /**
    useEffect() 呼叫 callback 函式的時機
    當第二個參數是空陣列時，只有第一次 render 會呼叫 callback 函式
    沒有加第二個參數時，會在第一次 render和每次元件 rerender 時呼叫
    第二個參數陣列內有值時，會在第一次 render和陣列內的元素值變更時呼叫 
*/
  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);
  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout
            className="isoContentMainLayout"
            style={{
              height: appHeight,
            }}
          >
            <Content className="bankproContent" style={styles.content}>
              <DashboardRoutes />
            </Content>
            <Footer style={styles.footer}>{siteConfig.footerText}</Footer>
          </Layout>
        </Layout>
        {/* <ThemeSwitcher /> */}
      </Layout>
    </DashboardContainer>
  );
}
