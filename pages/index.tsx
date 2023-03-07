import React, { useEffect, useState} from 'react';
import List from '../components/pages/home/list';
import Header from '../components/pages/home/header';
import Banner from '../components/pages/home/banner';
import Banner2 from '../components/pages/home/banner2';
import Banner3 from '../components/pages/home/banner3';
import { HeadInfo } from '../components/common/HeadInfo';
function Home(/*results*/) {

    return (
        <div style={{margin:0, padding:0}}>
            <HeadInfo
                title={'Closr live'}
                keyword={'property, trade, broadcast, contact'}
                contents={'closr live'}
            />
            <Header />
            <List />
            <Banner/>
            <Banner2/>
            <Banner3/>
            {/* buyer profile examples list */}

        </div>
    )
  }
  

  /*
  export async function getServerSideProps(){//server쪽에서 돌아가는 함수
    //이걸 이용해서 APIKEY 여기다가 써서 숨길수도있다.    

    
    const results = difjfidjfiodjf

    return {
        props: {
            results, 
        }
    }
    
  }
  */
  export default Home;