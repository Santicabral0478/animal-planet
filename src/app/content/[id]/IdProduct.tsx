"use client";

import DetailContent from "@/components/DetailContent";

export const IdProducts = ({ params }: { params : any}) => {

    return (
        <DetailContent content={params}/>
    );
};

export default IdProducts;
