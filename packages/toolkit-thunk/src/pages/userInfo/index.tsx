import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  selectUserInfo,
  fetchUserInfoThunk,
  setUserInfo,
} from "@/store/slices/userInfo";

const Home = () => {
  const dispatch = useAppDispatch();
  const { userInfo, loading } = useAppSelector(selectUserInfo);

  useEffect(() => {
    dispatch(fetchUserInfoThunk());
  }, []);

  if (loading === "pending") {
    return <div>Loading data ...</div>;
  }

  if (loading === "failed") {
    return <div>Loading data failed</div>;
  }

  return (
    <div>
      <h2>User Page Container</h2>
      <div>name: {userInfo?.name}</div>
      <div>createTime: {userInfo?.createdAt}</div>
      <div>question: {userInfo?.question}</div>
      <div>answer: {userInfo?.answer}</div>
      <button
        onClick={() => {
          dispatch(setUserInfo({ ...userInfo, name: "@reduxjs/toolkit" }))
        }}
      >
        修改 name: 为 @Redux/toolkit
      </button>
    </div>
  );
};

export default Home;
