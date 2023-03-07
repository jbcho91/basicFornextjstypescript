import React, {useState} from 'react';

const Banner3 = () => {

    return (    
        <div style={{float:'left', maxWidth:1050, width:'100%', backgroundColor:'#F6F6F6', height:400, padding:50}}>           
            <div style={{width:'100%', float:'right'}}>
                <div style={{float:'right', padding:25}}>
                    <img 
                        src={'/home/chatEx.png'}
                        style={{width:150, height:300}}
                    />
                </div>  
                <div style={{float:'right', padding:25}}>
                    <a>
                        <h3>
                        Contact seller using our app easily.
                        </h3>
                    </a>
                </div>
                              
            </div>
        </div>
    )
}

export default Banner3;