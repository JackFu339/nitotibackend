import React, { useState } from "react";
import { Tree } from "antd";
import { treeData } from "../../../library/Uitilities/ShippingFee";

const ControlledTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeys) => {
    console.log("onExpand", expandedKeys); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeys) => {
    setCheckedKeys(checkedKeys);
    console.log("onCheck", checkedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    console.log(info.node);
    // info.node.selected = selectedKeys;
    setSelectedKeys(selectedKeys);
  };

  return (
    <Tree
      // checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};
export default ControlledTree;
