/* message.js */
export function getMessage(value) {
    console.log(value)
      if (value<0) {
          return "invalid number"
      }
      if (value===0){
          return "you don't have any items in your shopping list"
      }

      if (value===1){
        return "you have one item in your shopping list"
    }

    if (value>1){
        return "you have more than one item in your shopping list"
    }
  }
