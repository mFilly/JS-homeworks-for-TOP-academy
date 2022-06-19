// Необязательная задача.
// Количество дубликатов
// Напишите функцию, которая будет возвращать количество символов и цифр, не зависящих от регистра
// , которые встречаются во входной строке более одного раза.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times

const duplicateCount = (text) => {
   return text.split("")
}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
