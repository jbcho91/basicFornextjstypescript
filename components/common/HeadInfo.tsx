import * as React from 'react';
import Head from 'next/head';

export interface IHeadInfoProps {
    title:string,
    keyword:string,
    contents:string,
}

export function HeadInfo (props: IHeadInfoProps) {
  const {
    title,
    keyword,
    contents
  } = props;
  return (
    <Head>
        <title>{title}</title>
        <meta name="keywords" content={keyword}/>
        <meta name="description" content={contents}/>
    </Head>
  );
}
