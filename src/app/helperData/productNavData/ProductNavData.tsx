import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
} from "@ant-design/icons";

interface CustomMenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: CustomMenuItem[];
  type?: "group" | "divider";
  path?: string;
}


export const items: CustomMenuItem[] = [
  {
    key: "sub1",
    label: "Products",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Category",
        type: "group",
        children: [
          {
            key: "electronics",
            label: "Electronics",
            path: "/products/electronics",
          },
          { key: "furniture", label: "Furniture", path: "/products/furniture" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Brands",
    icon: <AppstoreOutlined />,
    children: [
      { key: "samsung", label: "Samsung", path: "/brands/samsung" },
      { key: "apple", label: "Apple", path: "/brands/apple" },
    ],
  },
];

 export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  brand: string;
};

export const initialProducts: Product[] = [
  { id: "p1", name: "Galaxy S24", category: "Electronics", price: 999, brand: "Samsung" },
  { id: "p2", name: "MacBook Pro", category: "Computers", price: 2399, brand: "Apple" },
  { id: "p3", name: "Ergonomic Chair", category: "Furniture", price: 199, brand: "Herman Miller" },
  { id: "p4", name: "Running Shoes", category: "Footwear", price: 120, brand: "Nike" },
  { id: "p5", name: "Denim Jacket", category: "Clothing", price: 80, brand: "Levi's" },

  { id: "p6", name: "Pixel 8", category: "Electronics", price: 899, brand: "Google" },
  { id: "p7", name: "ThinkPad X1", category: "Computers", price: 1899, brand: "Lenovo" },
  { id: "p8", name: "Office Desk", category: "Furniture", price: 299, brand: "IKEA" },
  { id: "p9", name: "Sneakers", category: "Footwear", price: 95, brand: "Adidas" },
  { id: "p10", name: "Leather Jacket", category: "Clothing", price: 150, brand: "Zara" },

  { id: "p11", name: "iPhone 15", category: "Electronics", price: 1199, brand: "Apple" },
  { id: "p12", name: "Surface Laptop", category: "Computers", price: 1499, brand: "Microsoft" },
  { id: "p13", name: "Gaming Chair", category: "Furniture", price: 249, brand: "DXRacer" },
  { id: "p14", name: "Trail Shoes", category: "Footwear", price: 130, brand: "Salomon" },
  { id: "p15", name: "Winter Coat", category: "Clothing", price: 200, brand: "Uniqlo" },

  { id: "p16", name: "Xperia 1 V", category: "Electronics", price: 1099, brand: "Sony" },
  { id: "p17", name: "ROG Zephyrus", category: "Computers", price: 2099, brand: "ASUS" },
  { id: "p18", name: "Bookshelf", category: "Furniture", price: 170, brand: "Wayfair" },
  { id: "p19", name: "Loafers", category: "Footwear", price: 85, brand: "Clarks" },
  { id: "p20", name: "Hoodie", category: "Clothing", price: 60, brand: "H&M" },
];
    export const brandOptionValue = [
      { name: "Samsung" },
      { name: "Apple" },
      { name: "Herman Miller" },
      { name: "Nike" },
      { name: "Levi's" },
      { name: "Google" },
      { name: "Lenovo" },
      { name: "IKEA" },
      { name: "Adidas" },
      { name: "Zara" },
      { name: "Microsoft" },
      { name: "DXRacer" },
      { name: "Salomon" },
      { name: "Uniqlo" },
      { name: "Sony" },
      { name: "ASUS" },
      { name: "Wayfair" },
      { name: "Clarks" },
      { name: "H&M" },
    ];
    export const categoryOptionValue = [
      { label: "Electronics", value: "Electronics" },
      { label: "Computers", value: "Computers" },
      { label: "Furniture", value: "Furniture" },
      { label: "Footwear", value: "Footwear" },
      { label: "Clothing", value: "Clothing" },
    ];

