

//---------------------------------------------//
// for api call, store variables of three items we will need:
//---------------------------------------------//

// search button we will use to make the search
const searchButton = document.getElementById('searchButton')
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

    // try to manipulate the DOM to show the contents of the array to the user on the page

    // create a variable named list and get the element whose id is “myList”

    let list = document.getElementById("myList")

 

    let result = readingList.map((a => a.title))
    
    // now show in the DOM using the list variable I created above
    result.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item
        list.appendChild(li)
    })

    // this works but repeat searches just append more books
    // could I empty the array using .reduce when the user clicks search again?
    // a clunkier option would be to have another button "clear list"















    // wondering if I could include the author somehow?
    // trying different approaches
    // realized that name of author is nested inside the authors key with another key

    // didn't work -
    // let newArray = readingList.map(function(item) {
    //     return item[readingList.title, readingList.authors.name]
    // })
    // console.log(newArray)

    // function selectFewerProps(show) {
    //     const {title, authors} = show
    //     return {title, authors}
    // }

    // const newArray = readingList.map(selectFewerProps)

    // trying to pass in new variable to list loop
    // doesn't work, shows in console.log as an object but I think the nested
    // and sometimes multiple authors is snagging somehow

    // trying destructuring to extract author name

    console.log(readingList)
    const readingListTest = readingList

    const { title: myTitle, authors: {'0': {name: authorName} } } = readingListTest
    console.log(readingListTest)
}

//---------------------------------------------//
// add a click event listener to the result-generating button ('on click, do this'), call getBooks function
//---------------------------------------------//
document.getElementById('searchButton').addEventListener('click', getBooks)

//---------------------------------------------//
// add a mouseover event listener to style button
//---------------------------------------------//

// create variable for button
const button = document.querySelector('button')

// create function to change background color of button on mouseover
function changeBgColor() {
    button.style.background = '#FFD1BD'
}
// create function to return background color to default on mouseover
function returnBgColor() {
    button.style.background = ''
}

// use function with event listener - on hover, change color to yellow
button.addEventListener('mouseover', changeBgColor)
// on mouseout, return color to default
button.addEventListener('mouseout', returnBgColor)



