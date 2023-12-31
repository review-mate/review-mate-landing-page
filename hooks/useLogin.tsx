import { useLoginContext } from 'context/LoginContext';
import { useRouter } from 'next/router';
import { use, useEffect } from 'react';

export const useLogin = () => {
  const { setIsLogin, isLogin } = useLoginContext();
  const login = (
    name: string,
    phoneNum: string,
    kakaoId: string,
    callback?: () => void
  ) => {
    const date = new Date();
    const token =
      phoneNum.substring(7, 11) + kakaoId.substring(0, 3) + date.getTime();

    if (typeof window !== 'undefined') {
      localStorage.setItem('loginToken', token);
      localStorage.setItem('name', name);
      localStorage.setItem('phoneNum', phoneNum);
      localStorage.setItem('kakaoId', kakaoId);
    }

    setIsLogin(true);
    callback && callback();
  };

  return login;
};
