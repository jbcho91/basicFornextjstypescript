import React, {useState} from 'react';

const Banner2 = () => {    

    return (    
        <>           
            <div style={{width:'100%', padding:50,float:'left', textAlign:'center'}}>
                <h2>
                    Looking for buyer?
                </h2>                       
                <div style={{maxWidth:1050, minWidth:110}}>
                    <div style={{width:100, float:'left', marginRight:10, border:'1px solid #e5e5e5', borderRadius:10}}>
                        <div style={{width:'100%'}}>
                        <img
                            style={{width:'100%', height:200}}
                            src={'/home/buyer1.png'}
                        />
                        </div>                        
                    </div>
                    <div style={{width:100, float:'left', marginRight:10, border:'1px solid #e5e5e5', borderRadius:10}}>
                        <div style={{width:'100%'}}>
                        <img
                            style={{width:'100%', height:200}}
                            src={'/home/buyer2.png'}
                        />
                        </div>                        
                    </div>
                    <div style={{width:100, float:'left', marginRight:10, border:'1px solid #e5e5e5', borderRadius:10}}>
                        <div style={{width:'100%'}}>
                        <img
                            style={{width:'100%', height:200}}
                            src={'/home/buyer3.png'}
                        />
                        </div>                        
                    </div>
                </div>     
                <div style={{width:'100%', float:'left'}}>
                    <button>
                        more
                    </button>
                </div>
            </div>
        </>
    )
}

export default Banner2;