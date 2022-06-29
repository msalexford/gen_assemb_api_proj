//---------------------------------------------//
// store variables of three items we will need:
//---------------------------------------------//

// search button we will use to make the search
const button = document.querySelector('button')
// input field where the user will be typing in their search
const input = document.querySelector('input')
// div that will hold our result when we get it back
const placeholderDiv = document.querySelector('div')

//---------------------------------------------//
// create function to pass into event listener
//---------------------------------------------//

const getBooks = async () => {
    // store input value that user has typed into our input JS variable so we can then use it
    // value here is a key word that represents whatever has been typed into the input field
    let subjectSearch = input.value
    // make axios call by storing it in a variable called 'response'
    // .get is the http method we are going to use - pass URL that we want to hit into the get request
    // if we take the value that the user entered, we can pass it into the URL so it can be dynamically updated
    // to do that, we need to use string interpolation - backticks
    let response = await axios.get(
        `https://openlibrary.org/subjects/${subjectSearch}.json`
    )

    // because the API is sending us JSON - JS object - we know we can use dot notation to retrieve keys and values

    // create variable to contain result of search (an array)
    let readingList = response.data.works
    console.log(readingList)

    // try to manipulate the DOM to show the contents of the array to the user on the page

    // try 1 FAILED
    // use for loop to display contents of variable
    // for (i=0;i<readingList.length;i++) {
    //     document.write(readingList[i] + '<br >')
    // }
    // crap, this just shows a list of items that look like '[object Object]'

    // try 2 FAILED
    // use toString()
    // document.write(readingList.toString())
    // doesn't work, same as above but in string format

    // try 3 FAILED
    // this time, create an unordered list in the HTML first
    // create a variable named list and get the element whose id is “myList”
    let list = document.getElementById("myList")
    // iterate all the array items using forEach
    // at each iteration, create a li element
    // put the innerText value the same as the current item
    // and append the li at the list
    readingList.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item
        list.appendChild(li)
    })
    // doesn't work, maybe I'm not targeting the key/value pair I want specifically enough
    // could I use a for loop to do this?


}

//---------------------------------------------//
// add a click event listener to the button ('on click, do this'), call getBooks function
//---------------------------------------------//
button.addEventListener('click', getBooks)

