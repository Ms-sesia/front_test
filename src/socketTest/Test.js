import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import { SOCKET_SERVER_URL } from "./SocketUrl";

const Test = (props) => {
  const [socket, setSocket] = useState(null);
  const [resConnect, setResConnect] = useState(null);
  const [getVisior, setGetVisitor] = useState(null);
  const [getParking, setGetParking] = useState(null);
  const [getMuPeople, setGetMuPeople] = useState(null);

  const workSiteName = "무신사캠퍼스N1";
  const userType = "reception";
  // -----------------------------------------
  useEffect(() => {
    // Socket.io 클라이언트 연결
    const newSocket = socketIOClient(SOCKET_SERVER_URL, { path: "/musinsaES", query: { workSiteName, userType } });
    setSocket(newSocket);

    return () => newSocket.close(); // 컴포넌트 unmount 시 소켓 연결 종료
  }, [setSocket]);

  // -----------------------------------------
  // connect
  useEffect(() => {
    if (!socket) return;
    // 서버로부터 'resGetWaitingPatient' 메시지를 수신하면 state 업데이트
    socket.on("resConnection", (data) => {
      console.log("resConnection:", JSON.parse(data));
      setResConnect(data);
    });

    return () => socket.off("frontGetPatient");
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    // 서버로부터 'resGetWaitingPatient' 메시지를 수신하면 state 업데이트
    socket.on("registVisitor", (data) => {
      console.log("registVisitor:", JSON.parse(data));
      setGetVisitor(data);
    });

    return () => socket.off("frontGetPatient");
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    // 서버로부터 'resGetWaitingPatient' 메시지를 수신하면 state 업데이트
    socket.on("registParking", (data) => {
      console.log("registParking:", JSON.parse(data));
      setGetParking(data);
    });

    return () => socket.off("frontGetPatient");
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    // 서버로부터 'resGetWaitingPatient' 메시지를 수신하면 state 업데이트
    socket.on("registMuPeople", (data) => {
      console.log("registMuPeople:", JSON.parse(data));
      setGetMuPeople(data);
    });

    return () => socket.off("frontGetPatient");
  }, [socket]);


  return (
    <>
      <h1>무신사 ES팀 리셉션 소켓 연결 테스트</h1>
    </>
  );
};

export default Test;
