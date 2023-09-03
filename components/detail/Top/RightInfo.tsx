import Image from 'next/image';
import React from 'react';

export default function RightInfo() {
  return (
    <div>
      <div className='flex flex-col justify-end h-full'>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <img src='/map.svg' alt='위치' className='m-1' />
          위치
        </div>
        <div className='flex mb-7'>
          <div className='w-[5%] m-1' />
          50 Bạch Đằng, Hải Châu 1, Hải Châu, Đà Nẵng
        </div>
        <div className='flex items-center text-body2 font-bold mb-2.5'>
          <img src='/checkin.svg' alt='체크인/체크아웃' className='m-1' />
          체크인/체크아웃
        </div>
        <ul className='list-disc list-inside mb-7'>
          <li className='ml-[28px]'>체크인 : 오후 3:00</li>
          <li className='ml-[28px]'>체크아웃 : 오전 11:00</li>
        </ul>
        <div>
          <TagBox color='blue' title='긍정 태그' />
          <TagBox color='red' title='부정 태그' />
        </div>
      </div>
    </div>
  );
}

interface TagBoxProps {
  color: string;
  title: string;
}

const TagBox = ({ color, title }: TagBoxProps) => {
  const tags = ['청결', '위치', '서비스', '가격', '편의시설', '안전'];
  return (
    <div className='flex flex-col justify-center p-5 mt-1 bg-gray08 rounded-[10px]'>
      <div className={`mb-2.5 text-${color} text-body1 font-bold`}>{title}</div>
      <div className='flex flex-wrap gap-1'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`py-1 px-2.5 bg-white rounded border border-${color} text-body3 font-mid text-${color}`}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};