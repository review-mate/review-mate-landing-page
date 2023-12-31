import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import logo from '@/public/images/logo.svg';
import { useLogout } from '@/hooks/useLogout';
import { useLoginContext } from 'context/LoginContext';
import { useRouter } from 'next/router';
import { layoutPaddingStyle, layoutWidth } from './Layout';

export default function NavBar() {
  const router = useRouter();
  const { isLogin } = useLoginContext();
  const { handleLogout } = useLogout();

  return (
    <nav className={`left-0 fixed w-full bg-white z-10`}>
      <div
        className={`flex flex-row items-center justify-between my-3 ${layoutWidth}`}
      >
        <div className='flex flex-row items-center'>
          <Link href='/' className='mr-7'>
            <Image src={logo} alt='로고' width={100} height={65} />
          </Link>
          <div className='max-h-0 invisible sm:visible sm:max-h-max flex flex-row mt-5 sm:mt-0 text-body3'>
            <Link className='mr-7' href='/demo/pre-trip/reviewList'>
              리뷰 목록 체험
            </Link>
            <Link className='mr-7' href='/demo/during-trip/chatBot'>
              챗봇 체험
            </Link>
            <Link
              className='mr-7'
              href={{
                pathname: '/demo/reservation',
                query: { destination: '/demo/post-trip/reviewWrite' },
              }}
            >
              리뷰 작성 체험
            </Link>
            <Link href='/guide/startGuide'>도입 가이드</Link>
          </div>
        </div>
        <div className='p-1 px-2 h-7 border rounded text-body3 text-primary border-primary whitespace-nowrap'>
          {isLogin ? (
            <button
              onClick={() =>
                handleLogout(() => {
                  router.push('/login');
                })
              }
            >
              로그아웃
            </button>
          ) : (
            <Link href='/login'>
              <div>로그인</div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
