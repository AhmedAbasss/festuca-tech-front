// import { getPathImages, UploadType, UploadTypeSizeProduct } from "@/src/lib/utils";
import React from "react";
import Item from "./Item";
import { IProduct } from "./type";
import { getPathImages, UploadType, UploadTypeSizeProduct } from "./utils";

const RowItem = ({ data }: { data?: IProduct[] }) => {
  return (
    <div className="grid gap-2 md:gap-4  grid-cols-auto-fill-270 max-md:grid-cols-2 w-full p-2">
      {data?.map((item, index) => {
        return (
          <Item
            key={index}
            {...item}
            flags={item.tags.find((_, i) => i == 0) ?? ""}
            imgBack={getPathImages({
              imageCode: item.imageCode,
              type: UploadType.Product,
            }).find((it) => it.includes(UploadTypeSizeProduct.Size360x360))}
            imageFont={getPathImages({
              imageCode: item.imageCode,
              type: UploadType.Product,
            }).find((it) => it.includes(UploadTypeSizeProduct.Size360x360))}
            delay={Math.min(200 * (index + 1), 2000)} // TODO: this should be updated when product is updated
          />
        );
      })}
    </div>
  );
};

export default RowItem;
