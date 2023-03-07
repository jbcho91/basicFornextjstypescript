import React from 'react';
import Link from 'next/link';

const Header = () => {    
    return (
        <div style={{width:'100%', height:55, borderBottom:'1px solid #e5e5e5'}}>
            
            <div style={{float:'left'}}>
                <img 
                    src='/common/logo.png'
                    style={{width:45, height:45, backgroundColor:'black'}}    
                />       
                <div style={{float:'right', verticalAlign:'center', padding:5}}>
                    <a style={{fontSize:35, fontWeight:'bold'}}>                
                        Closr                
                    </a>
                </div>
            </div>  
            <div 
                onClick={() => {
                    console.log("click")
                }}
                style={{float:'right', padding:12}}
            >
             
                    <a style={{fontSize:21, fontWeight:'bold'}}>                
                        Sign in
                    </a>
             
                
            </div>               
        </div>
    )
}

export default Header;