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

    // readingList.forEach((item) => {
    //     let li = document.createElement('li')
    //     li.innerText = item
    //     list.appendChild(li)
    // })

    // doesn't work, maybe I'm not targeting the key/value pair I want specifically enough
    // could I use a for loop to do this?

    // trying pinpointing data more with dot notation:
    // readingList.title.forEach((item) => {
    //     let li = document.createElement('li')
    //     li.innerText = item
    //     list.appendChild(li)
    // })
    // nope! undefined

    // try 4 WORKS!
    // playing around with how to access title, trying .map

    let result = readingList.map((a => a.title))
    
    // now show in the DOM using the list variable I created above
    result.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = item
        list.appendChild(li)
    })

    // NOTES TO SELF, trying to add more/make adjustments

    // this works but repeat searches just append more books - way around this?

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

}

//---------------------------------------------//
// add a click event listener to the button ('on click, do this'), call getBooks function
//---------------------------------------------//
button.addEventListener('click', getBooks)

