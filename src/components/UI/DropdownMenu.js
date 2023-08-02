import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";

const items = [
  {
    label: <Link href="/category/cpu">CPU / Processor</Link>,
    key: "0",
  },
  {
    label: <Link href="/category/motherboard">Motherboard</Link>,
    key: "1",
  },
  {
    label: <Link href="/category/ram">RAM</Link>,
    key: "2",
  },
  {
    label: <Link href="/category/power supply">Power Supply Unit</Link>,
    key: "3",
  },
  {
    label: <Link href="/category/storage">Storage Device</Link>,
    key: "4",
  },
  {
    label: <Link href="/category/monitor">Monitor</Link>,
    key: "5",
  },
];
const DropdownMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="lg:text-[17px] text-xs" style={{ color: "black", fontWeight: "bold" }}>
        Categories
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownMenu;
