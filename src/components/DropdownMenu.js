import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        CPU / Processor
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Motherboard
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        RAM
      </Link>
    ),
    key: '2',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Power Supply Unit 
      </Link>
    ),
    key: '3',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Storage Device
      </Link>
    ),
    key: '4',
  },
  {
    label: (
      <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Monitor
      </Link>
    ),
    key: '5',
  },
  {
    type: 'divider',
  }
];
const DropdownMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{fontSize : "17px", color : "black", fontWeight : "bold"}}>
        Categories
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownMenu;
