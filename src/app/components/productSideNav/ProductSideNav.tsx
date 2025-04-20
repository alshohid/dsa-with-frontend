    "use client";

    import React from "react";
    import { Menu } from "antd";
    import type { MenuProps } from "antd";
    import { useRouter } from "next/navigation";
    import { items } from "@/app/helperData/productNavData/ProductNavData";

    interface CustomMenuItem {
    key: string;
    label: React.ReactNode;
    path?: string;
    children?: CustomMenuItem[];
    type?: "group" | "divider";
    }

    function flattenMenu(items: CustomMenuItem[], result: CustomMenuItem[] = []) {
    for (const item of items) {
        if (item.children) {
        flattenMenu(item.children, result);
        } else {
        result.push(item);
        }
    }
    return result;
    }

    const ProductSideNav: React.FC = () => {
    const router = useRouter();

    const flatItems = flattenMenu(items as CustomMenuItem[]);

    const onClick: MenuProps["onClick"] = (e) => {
        const clickedItem = flatItems.find((item) => item.key === e.key);
        if (clickedItem?.path) {
        router.push(clickedItem.path);
        }
    };

    return (
    <Menu
        onClick={onClick}
        style={{ width: 256 }}
        mode="inline"
        defaultSelectedKeys={["sub1"]}
        items={items as MenuProps["items"]}
    />
    );
    };

    export default ProductSideNav;
