import Axios from 'axios';

export default Axios.create({
  baseURL : 'http://api.zhinengshe.com/10004-taobao/',
  headers : {
    apikey : 'eb5ed25889e0420eb645691224c417bb'
  }
});
// http://api.zhinengshe.com/10003-taobao-simple/
// http://api.zhinengshe.com/10004-taobao/'
