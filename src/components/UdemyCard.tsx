import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CardProps } from '../types/types';

const Card: FC<CardProps> = ({ id, title, description, imageUrl, link }) => {
  return (
    <Link href={`${link}`} className="flex justify-center p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
        {/* image */}
        <div>
          {' '}
          <Image
            className="w-full static h-auto"
            src={imageUrl}
            alt=""
            width={150}
            height={90}
            quality={30}
          />
        </div>

        {/* title & date*/}
        <div className="px-6 py-4">
          <h2 className="text-base font-medium mb-3 ">{title}</h2>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>

        {/* tag */}
        {/* <div className="px-6 pb-4 ">
          <span className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2">
            #tag
          </span>
        </div> */}
      </div>
    </Link>
  );
};

export default Card;
