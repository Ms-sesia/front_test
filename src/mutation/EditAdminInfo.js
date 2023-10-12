import React from "react";
import { useMutation, gql } from "@apollo/client";

const EDIT_ADMIN_INFO = gql`
  mutation EditAdminInfo($adminImg: Upload!, $adminSite: String, $adminIntroduce: String) {
    editAdminInfo(admin_img: $adminImg, admin_site: $adminSite, admin_introduce: $adminIntroduce)
  }
`;

const EditAdminInfo = () => {
  const [editAdminInfo] = useMutation(EDIT_ADMIN_INFO, {
    onCompleted: (data) => console.log("data:", data),
  });

  let file1;
  // let file2;

  const handleFileChange1 = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    file1 = file;
  };
  // const handleFileChange2 = async (e) => {
  //   const file = e.target.files[0];

  //   if (!file) return;

  //   file2 = file;
  // };

  const handleClick = async (e) => {
    try {
      const variables = {
        adminImg: file1 ? file1 : undefined,
        adminSite: "성수동 캠퍼스 N1",
        adminIntroduce: "무신사 EHS팀 김다은입니다.",
        // md_id: 1,
        // md_introDate: new Date(),
        // md_name: "인바디 980",
        // md_description: "소개합니다",
        // md_notification: file1 ? file1 : undefined,
        // md_img: file2 ? file2 : undefined,
        // md_openAvailable: false,
      };
      console.log("입력값:", variables);

      const { data } = await editAdminInfo({ variables });
      console.log("editAdminInfo data:", data);
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <>
      <br></br>
      <b>EditAdminInfo</b>
      <br></br>
      EditAdminInfo:
      <br></br>
      프로필 이미지 : <input type="file" name="GraphQLSingleUpload" onChange={handleFileChange1} />
      <br></br>
      <button onClick={handleClick}>수정</button>
      <br></br>
    </>
  );
};

export default EditAdminInfo;
