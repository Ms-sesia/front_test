import React from "react";
import { useMutation, gql, useQuery } from "@apollo/client";

const SEE_REG_PRODUCT_LIST = gql`
  query SeeRegProductList {
    seeRegProductList {
      productList {
        prd_id
        prd_name
        prd_link
        prd_price
        prd_review_count
        product_image {
          prd_img_url
        }
      }
    }
  }
`;

const SeeRegProductList = () => {
  const { data, loading } = useQuery(SEE_REG_PRODUCT_LIST, {
    onCompleted: (data) => console.log("data:", data),
  });

  React.useEffect(() => {
    console.info(data);
  }, [data]);

  return (
    <div>리스트 : </div>
  );
};

export default SeeRegProductList;
