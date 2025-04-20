    import React from "react";

    import type { MenuProps } from "antd";
    import { Menu } from "antd";
    import { items } from "@/app/helperData/productNavData/ProductNavData";

    const ProductSideNav: React.FC = () => {
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
    };

    return (
        <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        />
    );
    };

    export default ProductSideNav;
