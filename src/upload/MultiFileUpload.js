import React from "react";
import { useMutation, gql } from "@apollo/client";

const MULTI_UPLOAD_FILE = gql`
  mutation multiFileUpload($files: [Upload]!) {
    multiFileUpload(files: $files)
  }
`;

const MultiFileUPload = () => {
  const [fileUpload] = useMutation(MULTI_UPLOAD_FILE, {
    onCompleted: (data) => console.log("data:", data),
  });

  const handleFileChange = async (e) => {
    const files = e.target.files;

    if (files.length < 1) return;

    try {
      const { data } = await fileUpload({ variables: { files } });
      console.log("multi file data:", data);
    } catch (e) {
      console.log("에러");
    }
  };

  return (
    <>
      Multi:
      <input type="file" multiple name="GraphQLUploadForMedium" onChange={handleFileChange} />
    </>
  );
};

export default MultiFileUPload;
