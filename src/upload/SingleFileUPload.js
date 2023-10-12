import React from "react";
import { useMutation, gql } from "@apollo/client";

const SINGLE_UPLOAD_FILE = gql`
  mutation singleFileUpload($file: Upload!) {
    singleFileUpload(file: $file)
  }
`;

const SingleFileUPload = () => {
  const [fileUpload] = useMutation(SINGLE_UPLOAD_FILE, {
    onCompleted: (data) => console.log("data:", data),
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const { data } = await fileUpload({ variables: { file } });
      console.log("single file data:", data);
    } catch (e) {
      console.log("에러");
    }
  };

  return (
    <>
      Single:
      <input type="file" name="GraphQLUploadForMedium" onChange={handleFileChange} />
    </>
  );
};

export default SingleFileUPload;
