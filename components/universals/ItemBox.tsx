import { ItemBoxInterface } from '@/app/typing/ItemBoxTypes';
import { log } from 'console';
import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';

export const ItemBox =
  // ({image_url, component, bg_color, name} : ItemBoxInterface) => {
  // ({image_url, bg_color, name, path} : ItemBoxInterface) => {
  // (item : ItemBoxInterface) => {
  ({ item } : {item: ItemBoxInterface}) => {
  // item: ItemBoxInterface => {
  const {image_url, bg_color, name} = item;
  // const default_color = "bg-blue-300";
  // const color = (bg_color == undefined) ? "bg-blue-300" : "";
  // const color = (bg_color == undefined) ? "bg-blue-300" : "";
  const handleClick = () => {
  }

  return (
    <div className={
      "rounded-md inline-flex rounded-xl p-2 mx-2 "
      // + color
    }
      onClick={() => handleClick()}
      style={{backgroundColor : bg_color}}
    >
      <Image
          src={image_url || ""}
          width={25}
          height={25}
          alt="icon"
          className="rounded-full mx-1"
      />
      <p>
        {name}
      </p>
    </div>
  );
};

