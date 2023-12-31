import Image from 'next/image';
import React from 'react';
import hotel1 from '/public/images/hotel1.png';

type Props = {};

export default function WritePageTopInfo({}: Props) {
  return (
    <div className='flex flex-col sm:flex-row pb-5'>
      <Image src={hotel1} alt='상품 사진' width={250} height={180} />
      <div className='flex flex-col justify-between sm:ml-5 py-2 mt-5 sm:mt-0'>
        <div>
          <p className='text-body1 font-bold mb-2.5'>
            [한정 특가] 힐튼호텔 다낭
          </p>
          <p className='text-body3 mb-5 sm:mb-0'>
            힐튼호텔 다낭의 위치는 시티투어를 하기 편리한 관광명소에 있습니다.
            드래곤 보트, 다낭교구 성당, 한강 등 인기 관광지들이 근처에있어,
            편리하고 다양하게 알찬 여행을 즐기실 수 있습니다.
          </p>
        </div>
        <p className='text-body1 font-bold'>
          127000 <span className='font-norm'>원</span>
        </p>
      </div>
    </div>
  );
}
