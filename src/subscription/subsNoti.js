import React from "react";
import { useSubscription, gql } from "@apollo/client";

const SEND_CALL_NOTI = gql`
  subscription SendCallNoti($receiver_user_id: Int) {
    # subscription Subscription($receiver_user_id: Int) {
    sendCallNoti(receiver_user_id: $receiver_user_id) {
      receiver_user_id
      msg
      receiverSBId
      callerSBId
    }
  }
`;

// const EditEvent = () => {
const SendCallNoti = ({ receiver_user_id }) => {
  const { data, loading } = useSubscription(SEND_CALL_NOTI, {
    variables: { receiver_user_id: 5 },
  });
  console.log("data:", data);

  return (
    <>
      <h4>new SendCallNoti: {!loading && data.sendCallNoti.msg}</h4>
    </>
  );
};

export default SendCallNoti;

