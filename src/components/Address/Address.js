import React, { useState } from "react";
import { twCityZip } from "../../library/Uitilities/Address";
import { Form, Row, Col, Input } from "antd";
import { Label } from "../../library/tablecolumn/table.style";
import Select, {
  SelectOption as Option,
} from "@iso/components/uielements/select";

export const AddressComp = ({ tableName, form }) => {
  //取得縣市名稱
  let areaName = twCityZip.map((city, key) => {
    return city.city;
  });
  //取得鄉鎮名稱
  let area = twCityZip.map((city, key) => {
    return city.area;
  });

  let ind = 0;
  //選取縣市
  const citySelect = (key) => {
    form.setFieldsValue({ Zip: "", Area: "" });
    ind = areaName.findIndex((item) => item === key);

    SetseleArea(ind);
  };
  //選取鄉鎮
  const areaSelect = (value, key) => {
    console.log(value, key);
    form.setFieldsValue({ Zip: key.value, Area: key.children });
  };

  let [seleArea, SetseleArea] = useState(0);

  return (
    <Row gutter={(16, 16)}>
      <Col className="gutter-row">
        <Label>Zip</Label>
        <Form.Item name="Zip" rules={[{ required: true }]}>
          <Input
            label="Zip"
            placeholder=""
            value={""}
            style={{ width: "60px" }}
          />
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        <Label>縣市</Label>
        <Form.Item name="City" rules={[{ required: true }]}>
          <Select
            style={{ width: "100px" }}
            onChange={(key) => citySelect(key)}
          >
            {twCityZip.map((item, key) => {
              return (
                <Option value={item.city} key={key}>
                  {item.city}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        <Label>鄉鎮</Label>
        <Form.Item name="Area" rules={[{ required: true }]}>
          <Select
            style={{ width: "100px" }}
            onChange={(value, key) => areaSelect(value, key)}
          >
            {area[seleArea].map((item, key) => {
              return (
                <Option value={item.zip} key={key}>
                  {item.districts}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
      </Col>
      <Col className="gutter-row">
        <Label>地址</Label>
        <Form.Item name="Address" rules={[{ required: true }]}>
          <Input
            label="Address"
            placeholder=""
            value={""}
            style={{ width: "380px" }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
