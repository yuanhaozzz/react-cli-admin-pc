import React, { Component } from "react";

import { Layout, Menu, Breadcrumb, Dropdown, Button } from "antd";
import "./style.scss";

import Router from "../Router";

const { Content } = Layout;

function ContentPage() {
  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Router />
    </Content>
  );
}

export default ContentPage;
