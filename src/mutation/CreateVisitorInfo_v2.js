import React from "react";
import { useMutation, gql } from "@apollo/client";

const CRERATE_VISITOR_INFO_V2 = gql`
  mutation CreateVisitorInfo_v2(
    $rvType: receptionVisitorType!
    $rvName: String!
    $rvCellPhone: String!
    $rvVisitPath: visitPath!
    $rvCarLicenseNumber: String!
    $rvHour: Int!
    $rvMin: Int!
    $rvManagerName: String!
    $rvSite: String
    $rvTeam: String
    $rvCompanyName: String
  ) {
    createVisitorInfo_v2(
      rv_type: $rvType
      rv_name: $rvName
      rv_cellPhone: $rvCellPhone
      rv_visitPath: $rvVisitPath
      rv_carLicenseNumber: $rvCarLicenseNumber
      rv_hour: $rvHour
      rv_min: $rvMin
      rv_managerName: $rvManagerName
      rv_site: $rvSite
      rv_team: $rvTeam
      rv_companyName: $rvCompanyName
    )
  }
`;

const CreateVisitorInfo_v2 = () => {
  const [createVisitorInfo_v2] = useMutation(CRERATE_VISITOR_INFO_V2, {
    onCompleted: (data) => console.log("data:", data),
  });

  const handleClick = async (e) => {
    try {
      const variables = {
        rvType: "visitor",
        rvName: "이영광",
        rvCellPhone: "01028355820",
        rvVisitPath: "car",
        rvCarLicenseNumber: "172호1158",
        rvHour: 11,
        rvMin: 25,
        rvManagerName: "ES팀 우라미",
        rvCompanyName: "주식회사 플랫큐브",
        rvTeam: "개발팀",
        rvSite: "무신사캠퍼스N1",
      };
      console.log("입력값:", variables);

      const { data } = await createVisitorInfo_v2({ variables });
      console.log("결과 data:", data);
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <>
      <br></br>
      <b>CreateVisitorInfo_v2</b>
      <br></br>
      CreateVisitorInfo_v2:
      <br></br>
      <button onClick={handleClick}>수정</button>
      <br></br>
    </>
  );
};

export default CreateVisitorInfo_v2;
