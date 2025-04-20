    "use client";
    import { initialProducts } from "@/app/helperData/productNavData/ProductNavData";
    import { useMemo, useState } from "react";
    import { Table, Input, Select, Watermark } from "antd";
    import {brandOptionValue} from "@/app/helperData/productNavData/ProductNavData"
    import {categoryOptionValue} from "@/app/helperData/productNavData/ProductNavData"
    import WaterMark from "../lazyparctices/WaterMark";

    const { Search } = Input;
    const { Option } = Select;

    const ProductTable = () => {
    const [searchText, setSearchText] = useState("");
    const [filterCategory, setFilterCategory] = useState("");
    const [filterByBrand, setsetFilterBybrand]=useState('');



    const productMap = new Map(
        initialProducts.map((product) => [product.id, product])
    );


    const filterProducts = useMemo(() => {
        let values = Array.from(productMap.values());
        if (searchText) {
        values = values.filter((p) =>
            p.name.toLowerCase().includes(searchText.toLowerCase())
        );
        }

        if (filterCategory) {
        values = values.filter((p) => p.category === filterCategory);
        }
        if(filterByBrand){
        values = values.filter((p)=>p.brand === filterByBrand)
        }

        return values;
    }, [searchText, filterCategory,filterByBrand]);
    
    const columns = [
        {
        title: "Product Name",
        dataIndex: "name",
        },
        {
            title: "Category",
            dataIndex: "category",
        },
        {
            title: "price",
            dataIndex: "price",
        },
        {
        title: "Brand",
        dataIndex: "brand",
        },
    ];

    return (
    <div>
        <WaterMark>
            <div className="flex flex-wrap mb-5 gap-4">
            <Search
                placeholder="Search by name"
                onChange={(e) => setSearchText(e.target.value)}
                style={{width:330}}
            />
            <Select
                placeholder="Filter by category"
                allowClear
                onChange={(value) => setFilterCategory(value)}
                style={{width:330}}
            >
                {categoryOptionValue.map((item) => (
                <Option key={item.value} value={item.value}>
                    {item.label}
                </Option>
                ))}
            </Select>
            <Select
                placeholder="Filter by brand"
                allowClear
                onChange={(value) => setsetFilterBybrand(value)}
                style={{width:330}}
            >
                {brandOptionValue.map((item) => (
                <Option key={item.name} value={item.name}>
                    {item.name}
                </Option>
                ))}
            </Select>
            </div>

        <Table
            rowKey="id"
            dataSource={filterProducts}
            columns={columns}
            pagination={{ pageSize: 10 }}
        />
        </WaterMark>
        </div>
    );
    };

    export default ProductTable;
