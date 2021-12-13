import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/**
 *  彈性容器（Flex container）
    包住彈性項目（Flex item）的父元素。在 display 屬性用上 flex 或 inline-flex 值的，就是彈性容器。
    彈性項目（Flex item）
    所有彈性容器的子元素都會變成彈性項目。直接包含在彈性容器的文字，會被包裝成匿名的 Flex 項目。

    軸（Axes）
    所有彈性盒子布局都有兩個軸。主軸（main axis）是跟隨著彈性項目順序的軸、而切軸(cross axis)是垂直於主軸的軸。
 
    是為了適應不同螢幕尺寸和顯示設備而生的佈局模式
    flex-direction 屬性啟用主軸。
    justify-content 屬性定義目前彈性項目的主軸如何擺放。
    align-items 屬性定義目前彈性項目的切軸如何擺放。
    align-self 屬性定義目前單一彈性項目如何對齊。這個設定會覆蓋 align-items 的預設值。
 */
