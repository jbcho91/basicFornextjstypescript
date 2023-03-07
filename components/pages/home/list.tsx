import React, {useState} from 'react';

const List = () => {
    const [citys, setCitys] = useState(
        [
            {
                name:'Los angeles',
                img:'/home/la.jpeg',
            },
            {
                name:'San francisco',
                img:'/home/sf.jpeg',
            },
            {
                name:'New york',
                img:'/home/ny.jpeg',
            },
            {
                name:'Seattle',
                img:'/home/seattle.jpeg',
            },
        ]
    )

    

    return (    
        <>           
            <div style={{width:'100%', padding:50,float:'left', textAlign:'center'}}>
                <h2>
                    Looking for house?
                </h2>                       
                <div style={{display:'grid', gridTemplateColumns: 'repeat(4,1fr)', gridGap:'1rem'}}>
                {citys.map(item => {
                    return (
                        <div style={{width:200, border:'1px solid #e5e5e5', borderRadius:10}}>
                            <div style={{width:'100%'}}>
                            <img
                                style={{width:'100%', height:200}}
                                src={item.img}
                            />
                            </div>
                            <div style={{textAlign:'center', fontWeight:'bold', fontSize:20, paddingTop:15, paddingBottom:15}}>
                                <a>                        
                                {item.name}
                                </a> 
                            </div>                       
                        </div>
                    )
                })}
                </div>     
            </div>
        </>
    )
}

export default List;