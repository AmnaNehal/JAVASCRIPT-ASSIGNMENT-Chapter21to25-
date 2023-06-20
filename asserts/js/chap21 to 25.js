                                    //QUESTION NO: 01
var fisrtName=prompt("Enter the first name");
var lastName=prompt("Enter the last name");
var fullName=(fisrtName + lastName);
alert("Welcome" + " " + fullName);


                                    //QUESTION NO: 02
var favMobile=prompt("My favourite phone is: ");
var textLen=favMobile.length;
document.write("Length of string: " + textLen);


                                    //QUESTION NO: 03
var nationality="Pakistani";
document.write("String: " + nationality + "<br>");
var findIndex=nationality.indexOf("n");
document.write("Index of 'n': " + findIndex);


                                    //QUESTION NO: 04
var nationality="Hello World";
document.write("String: " + nationality + "<br>");
var findIndex=nationality.lastIndexOf("l");
document.write("last index of 'l': " + findIndex);
                                    //QUESTION NO: 05
var nationality="Pakistani";
document.write("String: " + nationality + "<br>");
var findIndex=nationality.charAt("3");
document.write("Character at index 3: " + findIndex);
                                    //QUESTION NO: 06
var fisrtName=prompt("Enter the first name");
var lastName=prompt("Enter the last name");
var fullName=fisrtName.concat(" ",lastName);
alert("Welcome" + " " + fullName);
                                    //QUESTION NO: 07
var cityName="Hyderabad"
document.write("String: " + cityName + "<br>")
var newCity=cityName.replace("Hyder",'Islam');
document.write("After replacement: " + newCity)


                                    //QUESTION NO: 08
var message = "Ali and Sami are best friends. They play cricket and football together.";
var changeChar=message.replace(/and/g,'&');
document.write(changeChar);


                                    //QUESTION NO: 09
var string="472";
var number=Number(string);
document.write("Value: " + string+ "<br>");
document.write("Type: " + typeof string+ "<br>");
document.write("Value: " + number+ "<br>");
document.write("Type: " + typeof number+ "<br>");


                                    //QUESTION NO: 10
var userInput=prompt("User input: ");
var convert=userInput.toUpperCase(userInput);
document.write("Upper Case: " + convert );


                                    //QUESTION NO: 11
var userInput=prompt("User input: ");
var chA=userInput.charAt(0)
var slicEs=userInput.slice(1)
var convert=chA.toUpperCase(userInput);
document.write("Upper Case: " + convert+slicEs );


                                    //QUESTION NO: 12
var num=35.36;
document.write("Number: "+num+"<br>");
var conNum=num.toString().replace('.',"");
document.write("String: "+conNum);


                                    //QUESTION NO: 13
 userName=prompt("Enter the user name: ");
 var specialSymbol=['!',',','.','@'];
 for (var i=0;i<specialSymbol.length;i++){
    for(var j=0;j<userName.length;j++){
        if (specialSymbol[i]===userName[j]){
            prompt("Please enter a valid user name without using (!@,.)");
            break;
        }
    }
 }


                                     //QUESTION NO: 14
 var list = ["cake", "apple pie", "cookie", "chips", "patties"];
 var userInput=prompt("Enter the item you want to seacrh");
 var found=false;
 for(var i=0;i<list.length;i++){
    if(list[i].toLowerCase()===userInput.toLowerCase()){
        found=true
        
        break;
    }
}
if(found){
    alert(userInput +" is available at index "+i+" in our bakery");
}
else {
     alert("We are sorry "+userInput+" is not available in our bakery");
}


                                    //QUESTION NO: 15
let pass = prompt("enter a password");
let flag = false;
if(pass.length < 6){
    flag = true;
}
let count = 0;
for(let i = 1; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j =49; j < 58 ; j++){
        if(pass_1 === j){
            count += 1 ;
        }
    }
}

let count_1 = 0;
for(let i = 0; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j = 97 ; j < 123 ; j++){
        if(pass_1 === j){
            count_1 +=1 ;
        }
    }
   
}
let count_2 = 0;
for(let i = 0; i<pass.length; i++){
    let pass_1 = pass.charCodeAt(i);
    for(let j = 65 ; j < 91 ; j++){
        if(pass_1 === j){
            count_2 +=1 ;
        }
    }
}

let count_3 = 0;
let pass_1 = pass.charCodeAt(0);
for(let i = 49; i<58; i++){
        if(pass_1 === i){
            count_3 +=1 ;
        }
}

if(flag === true && count === 0 ){
    prompt("your password' length is smaller than 6 \ndoes not contain number\nenter a new password")
 }

 else if(flag === true && count_1 === 0 ){
    prompt("your password' length is smaller than 6\ndoes not contain small alphabet\nenter a new password")
 }
 else if(flag === true && count_3>=1){
    prompt("your password' length is smaller than 6 \nfirst index is a number\nenter a new password") 
}
else if(count === 0 && count_1 === 0 ){
    prompt("does not contain number \ndoes not contain small alphabet\nenter a new password")
 
 }
 else if(count === 0 &&  count_3>=1){
    prompt("does not contain number \nfirst index is number\nenter a new password")
 }
 else if( count_1 === 0 &&  count_3>=1){
    prompt("does not contain small alphabet \nfirst index is a number\nenter a new password")
 }
else if(flag === true){
    prompt("your password' length is smaller than 6\nenter a new password")
 }
 else if( count === 0 ){
    prompt("does ot contain numbers \nenter a new password")
 }
 else if( count_1 === 0){
    prompt("does not contain small alphabet\nenter a new password")
 }
 else if(count_3>=1){
    prompt("first index is a number\nenter a new password")
 }


                                    //QUESTION NO: 16 
var university = "University of Karachi";
for(var i=0;i<university.length;i++){
    document.write(university[i]+"<br>")
}


                                    //QUESTION NO: 17
var userInput=prompt("User input: ");
document.write("User input: "+userInput+"<br>");
for(var i=0;i<userInput.length;i++){
    var check=userInput[i]
}
document.write("Last character of user input: "+check);


                                    //QUESTION NO: 18
var sentence = "The quick brown fox jumps over the lazy dog";
document.write("Text: "+sentence+"<br>")
var wordToCount = "the";
var lowercaseSentence = sentence.toLowerCase();
var words = lowercaseSentence.split(" ");
var count_9 = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCount) {
    count_9++;
  }
}
document.write("There are"+count_9+ "occurrences of the word '" + wordToCount + "'");







 








 
 
        




    















