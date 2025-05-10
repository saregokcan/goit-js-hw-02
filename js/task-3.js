function checkForSpam(message) {
    if(message.toLowerCase().search("spam")!=-1||message.toLowerCase().search("sale")!=-1){
        console.log(true); 
    }else {
        console.log(false);
    }
}