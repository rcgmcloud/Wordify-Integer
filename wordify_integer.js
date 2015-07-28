  function wordify(x){
  if(x > 9 && x < 20){
    switch(x){
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
    }
  }

    var numString = x.toString().split("");

      switch(numString[numString.length-1]){
        case '0': numString[numString.length-1] = ''; break;
        case '1': numString[numString.length-1] = 'one'; break;
        case '2': numString[numString.length-1] = 'two'; break;
        case '3': numString[numString.length-1] = 'three'; break;
        case '4': numString[numString.length-1] = 'four'; break;
        case '5': numString[numString.length-1] = 'five'; break;
        case '6': numString[numString.length-1] = 'six'; break;
        case '7': numString[numString.length-1] = 'seven'; break;
        case '8': numString[numString.length-1] = 'eight'; break;
        case '9': numString[numString.length-1] = 'nine'; break;
      }

    if(numString[numString.length-2] !== undefined){
      switch(numString[numString.length-2]){
        case '0': numString[numString.length-2] = ''; break;
        case '2': numString[numString.length-2] = 'twenty'; break;
        case '3': numString[numString.length-2] = 'thirty'; break;
        case '4': numString[numString.length-2] = 'forty'; break;
        case '5': numString[numString.length-2] = 'fifty'; break;
        case '6': numString[numString.length-2] = 'sixty'; break;
        case '7': numString[numString.length-2] = 'seventy'; break;
        case '8': numString[numString.length-2] = 'eighty'; break;
        case '9': numString[numString.length-2] = 'ninety'; break;
      }
    }
    if(numString[numString.length-3] !== undefined){
      switch(numString[numString.length-3]){
        case '1': numString[numString.length-3] = 'one hundred'; break;
        case '2': numString[numString.length-3] = 'two hundred'; break;
        case '3': numString[numString.length-3] = 'three hundred'; break;
        case '4': numString[numString.length-3] = 'four hundred'; break;
        case '5': numString[numString.length-3] = 'five hundred'; break;
        case '6': numString[numString.length-3] = 'six hundred'; break;
        case '7': numString[numString.length-3] = 'seven hundred'; break;
        case '8': numString[numString.length-3] = 'eight hundred'; break;
        case '9': numString[numString.length-3] = 'nine hundred'; break;
      }
    }
    if(numString[numString.length-2] === "1"){
    switch(numString[numString.length-1]){
        case '': numString[numString.length-2] = "ten"; numString[numString.length-1] = ""; break;
        case 'one': numString[numString.length-2] = 'eleven'; numString[numString.length-1] = ""; break;
        case 'two': numString[numString.length-2] = 'twelve'; numString[numString.length-1] = ""; break;
        case 'three': numString[numString.length-2] = 'thirteen'; numString[numString.length-1] = ""; break;
        case 'four': numString[numString.length-2] = 'fourteen'; numString[numString.length-1] = ""; break;
        case 'five': numString[numString.length-2] = 'fifteen'; numString[numString.length-1] = ""; break;
        case 'six': numString[numString.length-2] = 'sixteen'; numString[numString.length-1] = ""; break;
        case 'seven': numString[numString.length-2] = 'seventeen'; numString[numString.length-1] = ""; break;
        case 'eight': numString[numString.length-2] = 'eighteen'; numString[numString.length-1] = ""; break;
        case 'nine': numString[numString.length-2] = 'nineteen'; numString[numString.length-1] = ""; break;
      }
    numString[numString.length-1] = "";
  }

  if(numString[numString.length-2] === ""){
    numString.splice(numString.length-2, 1);
  }

   return numString.join(" ").trim();
}