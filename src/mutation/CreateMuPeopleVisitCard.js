import React from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_MU_PEOPLE_VISIT_CARD = gql`
  mutation CreateMuPeopleVisitCard(
    $mpvcSite: String!
    $mpvcTeamName: String!
    $mpvcName: String!
    $mpvcCellphone: String!
    $mpvcReturnDate: String!
    $mpvcReason: String!
  ) {
    createMuPeopleVisitCard(
      mpvc_site: $mpvcSite
      mpvc_teamName: $mpvcTeamName
      mpvc_name: $mpvcName
      mpvc_cellphone: $mpvcCellphone
      mpvc_returnDate: $mpvcReturnDate
      mpvc_reason: $mpvcReason
    )
  }
`;

const CreateMuPeopleVisitCard = () => {
  const [createMuPeopleVisitCard] = useMutation(CREATE_MU_PEOPLE_VISIT_CARD, {
    onCompleted: (data) => console.log("data:", data),
  });

  const handleClick = async (e) => {
    try {
      const variables = {
        mpvcSite: "무신사캠퍼스N1",
        mpvcTeamName: "ES팀",
        mpvcName: "테스트4",
        mpvcCellphone: "01012340004",
        mpvcReturnDate: "2023-07-05T11:00:00.000Z",
        mpvcReason: "사원증 재발급 대기4",
      };
      console.log("입력값:", variables);

      const { data } = await createMuPeopleVisitCard({ variables });
      console.log("결과 data:", data);
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <>
      <br></br>
      <b>CreateMuPeopleVisitCard</b>
      <br></br>
      CreateMuPeopleVisitCard:
      <br></br>
      <button onClick={handleClick}>입력</button>
      <br></br>
    </>
  );
};

export default CreateMuPeopleVisitCard;
