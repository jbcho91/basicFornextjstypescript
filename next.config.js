const nextConfig = {
    /* config options here */
    /* redirect 설정도 가능
      reactStrictMode: true,
      async redirects(){
        return 
        {
          source : "//"
          destination :"/",
          permanent:false //영원히 계속 할지 말지
        }
      }    
    */
   
    /*
    async rewrites() { //유저를 리다이렉트 시키지만 url이 변하진 않는다.
      return [{
        source: "/api/movies", //fetch경로에다가 이렇게 아무거나 대체할거 적고
        destination: "" //여기다가 real apikey가있는 진짜 경로를 적으면 api key가 network에 request가 표기가 안됨
      }]
      
    }
    */

}
  
  module.exports = nextConfig