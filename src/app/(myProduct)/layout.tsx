    "use client";

    import React, { useState } from "react";
    import { Layout, Button, Drawer } from "antd";
    import { MenuOutlined } from "@ant-design/icons";
    import ProductSideNav from "../components/productSideNav/ProductSideNav";
    import { useMediaQuery } from "react-responsive";

    const { Header, Sider, Content } = Layout;

    export default function ProductLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    const [collapsed, setCollapsed] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const toggleDrawer = () => setCollapsed(!collapsed);

    const layoutStyle: React.CSSProperties = { minHeight: "100vh" };
    const headerStyle: React.CSSProperties = {
        background: "#FFFFFF",
        color: "#0f172a",
        margin: "5px",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };
    const siderStyle: React.CSSProperties = { background: "#f0f2f5" };

    return (
        <Layout style={layoutStyle}>
        <Header style={headerStyle}>
            {isMobile && (
            <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleDrawer}
            />
            )}
            <h1 style={{ fontSize: "18px", fontWeight: 600 }}>Header</h1>
        </Header>

        <Layout>
            {/* Mobile Drawer */}
            <Drawer
            placement="left"
            closable
            onClose={() => setCollapsed(false)}
            open={collapsed}
            width={286}
            style={{ display: isMobile ? "block" : "none" }}
            >
            <ProductSideNav />
            </Drawer>

            {/* Desktop Sider */}
            {!isMobile && (
            <Sider width={256} style={siderStyle}>
                <ProductSideNav />
            </Sider>
            )}

            <Content style={{ padding: "16px", width: "100%" }}>{children}</Content>
        </Layout>
        </Layout>
    );
    }
