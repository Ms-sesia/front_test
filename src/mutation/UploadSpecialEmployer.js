import React from "react";
import { useMutation, gql } from "@apollo/client";

const UPLOAD_SPECIAL_EMPLOYER = gql`
  mutation UploadSpecialEmployer($excelFile: Upload!) {
    uploadSpecialEmployer(excelFile: $excelFile)
  }
`;

const UploadSpecialEmployer = () => {
  const [uploadSpecialEmployer] = useMutation(UPLOAD_SPECIAL_EMPLOYER, {
    onCompleted: (data) => console.log("data:", data),
  });

  let file1;

  const handleFileChange1 = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    file1 = file;
  };

  const handleClick = async (e) => {
    try {
      console.log("file1 정보:", file1);

      const variables = {
        excelFile: file1,
      };
      console.log("입력값:", variables);

      const { data } = await uploadSpecialEmployer({ variables });
      console.log("uploadSpecialEmployer data:", data);
    } catch (err) {
      console.log("에러", err);
    }
  };

  return (
    <>
      <br></br>
      <b>CreateSpecialEmployer</b>
      <br></br>
      CreateSpecialEmployer:
      <br></br>
      업로드 파일 선택 : <input type="file" name="GraphQLSingleUpload" onChange={handleFileChange1} />
      <br></br>
      <button onClick={handleClick}>수정</button>
      <br></br>
    </>
  );
};

export default UploadSpecialEmployer;
