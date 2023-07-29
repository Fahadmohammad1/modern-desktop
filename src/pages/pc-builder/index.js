import { Card } from "antd";
import React from "react";
import RootLayout from "@/components/Layout/RootLayout";

const PcBuilderPage = () => {
  return (
    <section>
      <Card
        title="Modern Dektop"
        bordered={false}
        style={{
          width: "100%",
        }}
      >
        <p>Card content</p>
      </Card>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
