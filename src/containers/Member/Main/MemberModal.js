import React from "react";

import { Form, Row, Col, Input } from "antd";

import { AddressComp } from "../../../components/Address/Address";
import { Label } from "../../../library/tablecolumn/table.style";
import {
  getYearList,
  getMonthAndDayList,
} from "../../../library/Uitilities/Common";
import Select, {
  SelectOption as Option,
} from "@iso/components/uielements/select";
import { CreateDateUpdateDateComp } from "../../../components/CreateUpdate/CreateUpdate";

export const MemberModal = ({ member, form }) => {
  let yaerdata = getYearList();
  let monthdata = getMonthAndDayList(12);
  let daydata = getMonthAndDayList(31);

  return (
    <Form form={form} name="fromControl">
      {/**第一列 */}
      <Row gutter={[16, 16]}>
        {/**姓名 */}
        <Col className="gutter-row" span={12}>
          <Label>姓名</Label>
          <Form.Item name="MemberName" rules={[{ required: true }]}>
            <Input
              label="姓名"
              name="MemberName"
              placeholder="輸入姓名"
              value={""}
            />
          </Form.Item>
        </Col>
        {/**電子郵件 */}
        <Col className="gutter-row" span={12}>
          <Label>電子郵件</Label>
          <Form.Item name="Email" rules={[{ required: true }]}>
            <Input label="電子郵件" placeholder="電子郵件" value={""} />
          </Form.Item>
        </Col>
      </Row>
      {/**第二列 */}
      <Row gutter={(16, 16)}>
        {/**行動電話 */}
        <Col className="gutter-row" span={12}>
          <Label>行動電話</Label>
          <Form.Item name="Mobile" rules={[{ required: true }]}>
            <Input label="行動電話" placeholder="輸入行動電話" value={""} />
          </Form.Item>
        </Col>
        {/**出生日期 */}
        <Col className="gutter-row">
          <Label>出生年</Label>
          <Form.Item name="BOD_Y" rules={[{ required: true }]}>
            <Select style={{ width: "100px" }}>
              {yaerdata.map((item, key) => {
                return (
                  <Option value={item.key} key={key}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row">
          <Label>出生月</Label>
          <Form.Item name="BOD_M" rules={[{ required: true }]}>
            <Select style={{ width: "100px" }}>
              {monthdata.map((item, key) => {
                return (
                  <Option value={item.key} key={key}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row">
          <Label>出生日</Label>
          <Form.Item name="BOD_D" rules={[{ required: true }]}>
            <Select style={{ width: "100px" }}>
              {daydata.map((item, key) => {
                return (
                  <Option value={item.key} key={key}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <AddressComp tableName={member} form={form} />
      <CreateDateUpdateDateComp tableName={member} />
    </Form>
  );
};
