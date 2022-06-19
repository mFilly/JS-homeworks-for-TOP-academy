//Title:
//Create Phone Number
//Description:
//Напишите функцию,которая принимает массив из 10 целых чисел(от0до
//9),которая возвращает строку этих чиселввиде номера телефона.
//Example:
//createPhoneNumber([1,2,3,4,5,6,7,8,9,0])//=>returns
//(123)456-7890"
const createPhoneNumber = numbers => {
    let num = numbers.join("").toString();
    return "(" + num.substring(0, 3) + ")" + num.substring(3, 6) + "-" + num.substring(6);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));