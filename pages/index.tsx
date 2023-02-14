import { useEffect, useState} from "react";

function Home(/*results*/) {
    const [test, setTest] = useState(0);

    useEffect(() => {
        setTest(0);
    }, [])

    const plus = () => {
        setTest(test+1);
    }
    return <div>
        
        Welcome to closr web
        <button
            onClick={() => {
                plus()
            }}
        >click</button> {test}
    </div>
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