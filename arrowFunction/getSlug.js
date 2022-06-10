/**
 * @param {string} name
 */
const getSlug = name => {
    if (name.length <= 15)
        return name.toLowerCase().replaceAll(" ", "-")
    else return name.substring(0, 15).toLowerCase().replaceAll(" ", "-")
}

// Sample usage - do not modify
console.log(getSlug("IKEA table")); // "ikea-table"
console.log(getSlug("200cm Bed")); // "200cm-bed"
console.log(getSlug("Bedside lavalamp")); // "bedside-lavalamp"
console.log(getSlug("A B C noodles")); // "a-b-c-noodles"