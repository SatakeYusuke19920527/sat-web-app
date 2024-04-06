import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CardProps } from '../types/types';

const dummyImage = 'https://placehold.jp/30/dd6699/ffffff/600x400.png?text=placeholder+image';

const Card: FC<CardProps> = ({ name }) => {
  return (
    <Link href={`/`} className="flex justify-center ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
        {/* image */}
        <div>
          {' '}
          <Image
            className="w-full static h-auto"
            src={dummyImage}
            alt=""
            width={400}
            height={225}
            quality={30}
          />
        </div>

        {/* title & date*/}
        <div className="px-6 pt-4 ">
          <h2 className="text-base font-medium mb-3 ">{name}</h2>
          <p className="text-gray-700 text-xs">test</p>
        </div>

        {/* tag */}
        <div className="px-6 pb-4 ">
          <span className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2">
            #tag
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
