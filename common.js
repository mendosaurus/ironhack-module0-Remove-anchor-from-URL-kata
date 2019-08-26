function removeUrlAnchor(url){
    // TODO: complete
    if(url.endsWith("/")){
      return url;
    }
    else{
      let newUrl = url.slice(0,url.indexOf("#"))
      return newUrl;
    }
  }
  
  removeUrlAnchor("www.codewars.com/katas/#about");