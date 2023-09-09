import { useEffect, useState } from "react";
//Face io key 119b2ef23660b8e5a526394c78b7f9dc
const useFaceIO = () => {
  const [faceio, setFaceio] = useState(null);
//fioa62dc
//fioac3fd
// 
//fioae94f
  useEffect(() => {
    // eslint-disable-next-line
    const faceio = new faceIO("fioa6766");
    setFaceio(faceio);
  }, []);

  const handleEnroll = async (fullName, walletAddress, identityNumber) => {
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          fullName,
          walletAddress,
          identityNumber,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthenticate = async () => {
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleEnroll,
    handleAuthenticate,
  };
};

export default useFaceIO;
