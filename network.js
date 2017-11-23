import {webURL} from './config'
import {getuid,gettoken} from './auth'
const post = (url,params) =>{
    if(!getuid||!gettoken){
        return new Promise(()=>{});
    }
    return new Promise((resolve) => {
        // Where someAsyncFunction takes a callback, i.e. api call
        let useragent=window.navigator.userAgent
        let formData=new FormData;
        formData.append('token',gettoken);
        formData.append('userId',getuid);
        formData.append('useragent',useragent);
        for(let key in params){
            formData.append(key,params[key]);
         }
         fetch(webURL+url,{method:'POST',cache:'default',body:formData}).then(
             function(response) {
                 resolve(response.json());
             }
         );
    })
}

export default post;