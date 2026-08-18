"use client";

import ProductHeader from "./product/ProductHeader";
import ProductGallery from "./product/ProductGallery";
import ProductInfo from "./product/ProductInfo";

export default function WorkspaceProduct() {
    return (
        <div className="flex h-full flex-col overflow-hidden p-6">

            <ProductHeader />

            <div className="mt-6 flex flex-1 flex-col gap-6 overflow-y-auto">

                <ProductGallery />

                <ProductInfo />

            </div>

        </div>
    );
}