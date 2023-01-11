// Iteration 1: Names and Input

/* 1.1 */

const hacker1 = "Ed"

/* 1.2 */

console.log(`The driver's name is ${hacker1}`)

/* 1.3 */

const hacker2 = "Michael"

/* 1.4 */

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 
   } else if (hacker1.length < hacker2.length){
     console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters`)
   } else {
     console.log(`Wow you both have equally long names, ${hacker1.length} characters!`)
   }

// Iteration 3: Loops

/* 3.1 */

for (i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
  } 
  
/* 3.2 */
  
  for (i = hacker1.length -1; i >= 0; i--) {
    console.log(hacker1[i])
  }
  
/* 3.3 */ 
  
      if (hacker1.localeCompare(hacker2) > 0) {
        console.log("Yo, the navigator goes first definitely.")
      } else {
        console.log(`The driver's name goes first`)
      }

/* Bonus */

/* First Question */

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie risus et libero aliquam mattis. Aliquam euismod tortor mauris, at placerat tellus vulputate nec. Etiam faucibus convallis dolor, sed aliquam erat. Maecenas vel tortor augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ac enim at arcu finibus auctor in dignissim lorem. Ut mattis mi est, et tincidunt urna semper sed. Nullam ac dui at ante sagittis efficitur non pretium nisi. Vestibulum turpis odio, gravida nec dignissim at, elementum quis tortor. Integer sagittis consequat justo, a lobortis risus placerat a. Cras sit amet massa at est elementum imperdiet. Mauris eu finibus diam. Suspendisse fermentum porta ex eget congue. Aenean eget posuere tortor, eget dignissim lacus. Maecenas dictum sapien ut lorem scelerisque, et pretium nibh sagittis. Donec nisl sapien, suscipit ut finibus nec, feugiat a lacus. Vestibulum turpis elit, blandit ac pellentesque in, dignissim eu ipsum. Aenean tempus consectetur pharetra. Quisque neque lorem, consectetur vel faucibus vitae, vulputate sit amet arcu. Vivamus sagittis placerat quam. Morbi tincidunt pulvinar massa, eget lobortis libero vulputate et. Proin consequat ullamcorper augue a facilisis. Aenean mattis posuere risus, egestas pretium turpis. Nunc ornare fringilla orci, ac consectetur libero. Fusce augue eros, dictum sit amet viverra sed, semper at arcu. Aliquam fermentum quis magna ut mollis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur placerat laoreet. Nunc et luctus massa. Vivamus ultrices turpis sem, at maximus nunc vulputate eu."

console.log(longText)

const newArray = longText.split(" ")

console.log(newArray)

console.log("There are " + newArray.length + "  words in the string")

let count = 0

for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] = "et") {
        count + 1
    }

}

console.log(`et appears ${count} times.`)

/* Second Question */

/* Second Question */

const phraseToCheck = "was it a car or a cat i saw"
const phraseNoSpaces = phraseToCheck.replaceAll(' ', '')




const newArray2 = phraseToCheck.split('')

const phraseReversed = newArray2.reverse().join('')


const phraseReversedNoSpaces = phraseReversed.replaceAll(' ', '')
console.log(phraseReversedNoSpaces)



function checkPalindrome(phraseToCheck, phraseReversed) {
  if (phraseNoSpaces === phraseReversedNoSpaces ) {
    return `${phraseToCheck} is a palindrome!`
  } else {
    return `${phraseToCheck} is not a palindrome!`
  } 
}

console.log(checkPalindrome(phraseToCheck, phraseReversed))

