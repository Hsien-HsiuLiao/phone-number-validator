function telephoneCheck(str) {
  
var re = /(\d)/g;
  var newArr=[];
  newArr=str.split('');
  var str2='';
  str2=newArr[0];
  str2=str2.replace(re, 'x');
        // newArr[0]==='1' returns true
  if(newArr[0]!=='(' && str2!=='x'){
     return false;
     }
 re = /[-]/g;
  var newstr = str.replace(re, '');  //var test = new RegExp(str,/\d/);
  if (newstr.length===10){
    return true;
  }
  re=/\s+/g;
  newstr=newstr.replace(re, '');
  if (newstr.length===10){
    return true;
  }
  re=/[1]/g;
  newstr=newstr.replace(re, '');
  if (newstr.length===10){
    return true;
  }
 
  //re=/[]/g;
  //newstr=newstr.replace('(', '');
  if (newstr.length===12){
     newArr=newstr.split('');
   // return newArr;
    if (newArr[0]==='(' && newArr[4]===')'){
      return true;
    }
  }
  
  
  if (newstr.length<10){
    return false;
  }
  return false;
}



telephoneCheck("555-555-5555");
//telephoneCheck("(6505552368)");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("1 555-555-5555");
