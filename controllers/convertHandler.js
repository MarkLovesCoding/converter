/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var initNum,initUnit,returnNum, returnUnit
  
  
  
  this.getNum = function(input) {
    
    
 //   var regex = /[\d]+[\/]*[\d]*[\.]*[\d]*|[\d]+(?=[a-zA-Z])/gi
    var reg = /[A-Za-z]/gi
    var match=reg.exec(input);
    if(match == null){
      initNum = input;
    }
    else{initNum = input.slice(0,match.index);}
    
    //case no number
    
    if(initNum.length == 0){
      return initNum=1;
 
    }
    // case length 1
    else if(initNum.length == 1){
      var numArr = [initNum]
    }
    //case length > 1 seperate into array to determine  eligibility
    else if(initNum.length > 0){
      var numArr = initNum.split('');
    }
    
    console.log(numArr);
    //validate only 1 divisor sign
    let fractions = numArr.filter((el)=>{
      return el == '/';
    })
    if (fractions.length>1){

      initNum = 'invalid number'
    }
    console.log(fractions)
    //
    //reg for all 5 cases of  / and . and 6th case of just nums
     let rg = /^\d+(\.?\d+)?(\/?(\d+(\.?\d+)?))?/
    
    var rgmatch = rg.exec(initNum);
    var rgbool;
    if(rgmatch == null){
      rgbool=false;initNum = 'invalid number';
      returnNum = 'invalid number';
    }
    else if(rgmatch[0] == initNum){
      rgbool=true;
      
    }
    console.log(rgbool)

  
    if (fractions.length === 1){
      var initNums = initNum.split('/');
      console.log("initNums: "+initNums)
      var num = parseFloat(initNums[0]);
      var div = parseFloat(initNums[1]);
      
      initNum = num / div;
      console.log("math: "+ initNum);
      
      
    }
    
    
    
    
    
    
    
     return initNum;
    
    
    
    
    
    
    
    
  };
  
  this.getUnit = function(input) {
    var reg = /[A-Za-z]/gi
    var match=reg.exec(input);
   if(match == null){
      return 'no input unit'
    }
    
    initUnit = input.slice(match.index ,input.length).toLowerCase();;
    if (initUnit == 'l'){
      initUnit = 'L';
    }
     
    switch(initUnit){
      case 'mi':
        break;
      case 'km':
        break;
      case 'lbs':
        break;
      case 'kg':
        break;
      case 'gal':
        break;
      case 'L':
        break;
      default:
        initUnit = 'invalid unit';
        break;
                       }
    
    
    
     return initUnit;
    
    
    
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit){
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'gal':
        result = 'L';
        break;
      case 'L':
        result = 'gal';
        break;
      default:
        result = 'invalid unit'
                   } 
    returnUnit = result;
    return returnUnit;
  };

  this.spellOutUnit = function(unit) {
    
    switch(unit){
      case 'mi':
        unit = 'miles'
        break;
      case 'km':
        unit = 'kilometers';
        break;  
      case 'lbs':
        unit = 'pounds';
        break;  
      case 'kg':    
        unit = 'kilograms';
        break; 
     case 'gal':
        unit = 'gallons';
        break;  
      case 'L':
        unit = 'liters';
        break;
      default:
        break;
    }
    
    var result=unit;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const LTogal = 1/galToL;
    const KgTolbs = 1/lbsToKg;
    const KmTomi = 1/miToKm;
    
    if(initNum.length==0){
      console.log(initNum);
      initNum = 1;
    }
    
    switch(initUnit){
      case 'gal':
        returnNum = initNum * galToL;
        break;
      case 'L':
        returnNum = initNum * LTogal;
        break;
     case 'lbs':
        returnNum = initNum * lbsToKg;
        break;
      case 'kg':
        returnNum = initNum * KgTolbs;
        break; 
     case 'mi':
        returnNum = initNum * miToKm;
        break;
      case 'km':
        returnNum = initNum * KmTomi;
        break; 
      default:
        returnNum = initNum;
        break;
                   }

    var result = returnNum;

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
   
  if (returnNum.isNaN){
    var returNum = returnNum.toFixed(5)}

    
    var result = initNum+ " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    console.log(result);
    return result;
  };
  
}


            
module.exports = ConvertHandler;
