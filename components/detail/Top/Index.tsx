import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LeftInfo from './LeftInfo';
import RightInfo from './RightInfo';
import star from '@/public/images/star.svg';
import heartIcon from '@/public/images/heart.svg';
import heartFillIcon from '@/public/images/heart_fill.svg';
import { hotelInfo } from '@/data/detail/hotelData';
import { motion } from 'framer-motion';
import { fetchProductData } from 'api/reviewApi';
import { productId } from '@/data/detail/productData';
import { ProductDataType } from 'api/types/reviewTypes';
import { BlackButton } from '@/components/global/button/BlackButton';
import { negativeTags, positiveTags } from '@/data/detail/tagData';

export default function TopInfo() {
  const [productData, setProductData] = useState<ProductDataType | null>(null);
  const [heart, setHeart] = useState(false);

  const heartClick = () => {
    setHeart(!heart);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductData(productId); // userId를 원하는 값으로 수정
      setProductData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-title font-bold mb-1'>{hotelInfo.name}</h1>
      <div className={'flex flex-row items-center mb-5'}>
        <Image
          className='mr-[5px]'
          src={star}
          alt='rating'
          width={15}
          height={15}
        />
        <div className='mr-[10px] font-bold'>
          {productData?.rating && Math.round(productData?.rating * 10) / 10}
        </div>
        <div className='text-gray02'>{hotelInfo.grade}</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
        <LeftInfo />
        <RightInfo
          positiveTags={positiveTags || []}
          negativeTags={negativeTags || []}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div />
        <div className='flex flex-row justify-between'>
          <div className='flex'>
            <motion.button
              onClick={heartClick}
              className='flex justify-center items-center mr-2.5 w-[50px] h-[50px] bg-gray07 rounded'
              whileTap={{ scale: 0.8 }}
            >
              {heart ? (
                <Image src={heartFillIcon} alt='찜하기(찜한 상태)' width={24} />
              ) : (
                <Image
                  src={heartIcon}
                  alt='찜하기(찜하지 않은 상태)'
                  width={24}
                />
              )}
            </motion.button>
            <BlackButton title='객실선택' />
          </div>
          <div className='flex'>
            <div className='text-num1 font-bold mr-1'>
              {hotelInfo.price.toLocaleString()}
            </div>
            <div className='text-num1 font-bold'>원 ~</div>
          </div>
        </div>
      </div>
    </div>
  );
}
