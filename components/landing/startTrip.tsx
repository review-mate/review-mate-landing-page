import Image from 'next/image';
import React, { Fragment } from 'react';
import Link from 'next/link';
import arrow from '@/public/images/arrow.svg';
import { layoutWidth } from '../Layout';
import { Line } from './line';
import { flexCol } from '@/styles/styleUtils';

export default function StartTrip() {
  return (
    <div className={`relative xl:h-[720px] w-full py-16`}>
      <Line
        title='여행의 시작'
        iconSrc='/icons/line1.svg'
        top={'top-[225px]'}
      />
      <div
        className={`${layoutWidth} ${flexCol} lg:flex-row lg:justify-between`}
      >
        <div className='flex flex-col items-center w-auto mb-24 lg:items-start lg:w-1/2 animate-appear1 lg:mb-0'>
          <h1 className='mb-7 text-4xl font-bold'>
            여행의 시작은 리뷰로 부터!
          </h1>
          <h2 className='text-subTitle text-gray01 mb-24 w-[355px] text-center lg:text-start'>
            리뷰메이트와 함께 특별한 여행을 경험한
            <br />
            여행자들의 살아있는 이야기를 소개합니다!
          </h2>
          <Image
            src='/images/luggage.webp'
            alt='여행가방 이미지'
            width={440}
            height={330}
          />
        </div>
        <div className='flex justify-center pb-10 animate-appear1 lg:justify-end lg:pb-0'>
          <div className='grid grid-cols-3 grid-rows-3 gap-x-8 place-items-center'>
            <ArrowImage rotate={'rotate-0'} />
            <MainImage
              src={'/images/circle_image_1.webp'}
              alt={'키워드 분석 이미지'}
              title={'리뷰 키워드 분석'}
            />
            <ArrowImage rotate={'rotate-90'} />
            <MainImage
              src={'/images/circle_image_2.webp'}
              alt={'리뷰 긍·부정 분석 이미지'}
              title='리뷰 긍·부정 분석'
            />
            <div />
            <MainImage
              src={'/images/circle_image_4.webp'}
              alt={'리뷰 작성 보조 이미지'}
              title='리뷰 작성 보조'
            />
            <ArrowImage rotate={'-rotate-90'} />
            <MainImage
              src={'/images/circle_image_3.webp'}
              alt={'여행객 피드백 대응 이미지'}
              title='여행객 피드백 대응'
            />
            <ArrowImage rotate={'rotate-180'} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ArrowImageProps {
  rotate?: string;
}
interface MainImageProps {
  src: string;
  alt: string;
  title: string;
}
const ArrowImage = ({ rotate }: ArrowImageProps) => {
  return (
    <div className={`transform ${rotate}`}>
      <div className={`pt-6 pl-6`}>
        <Image
          src='/images/round_arrow.png'
          alt='화살표'
          width={60}
          height={30}
        />
      </div>
    </div>
  );
};

const MainImage = ({ src, alt, title }: MainImageProps) => {
  return (
    <div className='flex flex-col items-center'>
      <Image src={src} alt={alt} width={180} height={125} />
      <div className='text-body2 text-gray01'>{title}</div>
    </div>
  );
};