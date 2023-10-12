import React from "react";
import { useMutation, gql } from "@apollo/client";

const EDIT_MEDICAL_DEVICE = gql`
  mutation EditMedicalDevice(
    $md_id: Int!
    $md_introDate: String
    $md_name: String
    $md_description: String
    $md_notification: Upload
    $md_img: Upload
    $md_openAvailable: Boolean
  ) {
    editMedicalDevice(
      md_id: $md_id
      md_introDate: $md_introDate
      md_name: $md_name
      md_description: $md_description
      md_notification: $md_notification
      md_img: $md_img
      md_openAvailable: $md_openAvailable
    )
  }
`;

const EditMedicalDevice = () => {
  const [editMedicalDevice] = useMutation(EDIT_MEDICAL_DEVICE, {
    onCompleted: (data) => console.log("data:", data),
  });

  let file1, file2;

  const handleFileChange1 = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    file1 = file;
  };
  const handleFileChange2 = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    file2 = file;
  };

  const handleClick = async (e) => {
    try {
      console.log("file1 정보:", file1);
      console.log("file2 정보:", file2);

      const variables = {
        md_id: 1,
        md_introDate: new Date(),
        md_name: "인바디 980",
        md_description: "소개합니다",
        md_notification: file1 ? file1 : undefined,
        md_img: file2 ? file2 : undefined,
        md_openAvailable: false,
      };
      console.log("입력값:", variables);

      const { data } = await editMedicalDevice({ variables });
      console.log("editMedicalDevice data:", data);
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <>
      <br></br>
      <b>EditMedicalDevice</b>
      <br></br>
      EditMedicalDevice:
      <br></br>
      기기 이미지 : <input type="file" name="GraphQLSingleUpload" onChange={handleFileChange1} />
      <br></br>
      기기 주의사항 : <input type="file" name="GraphQLSingleUpload" onChange={handleFileChange2} />
      <br></br>
      <button onClick={handleClick}>수정</button>
      <br></br>
    </>
  );
};

export default EditMedicalDevice;
