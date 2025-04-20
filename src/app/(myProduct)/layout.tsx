// src/app/(myProduct)/layout.tsx

"use client"; // if using any client-side interactivity

import React from "react";
import { Layout } from "antd";
import ProductSideNav from "../components/productSideNav/ProductSideNav";

const { Header, Sider, Content } = Layout;

export default function ProductLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    const layoutStyle = { minHeight: "100vh" };
    const headerStyle = { background: "#001529", color: "#fff" };
    const siderStyle = { background: "#f0f2f5" };

    return (
        <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
            <Sider width="15%" style={siderStyle}>
            <ProductSideNav/>
            </Sider>
            <Content>{children}</Content>
        </Layout>
        </Layout>
    );
    }
