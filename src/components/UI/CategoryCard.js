import React from "react";
import { Card } from "antd";

const CategoryCard = ({category}) => {
  return (
    <Card title="Card title" bordered={false}>
      {category}
    </Card>
  );
};

export default CategoryCard;
