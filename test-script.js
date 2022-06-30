// here I will copy & paste snippets of code tried while building this website

// on trying to display results of the API call on the webpage:

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

    // console.log(readingList)
    // const readingListTest = readingList

    // const { title: myTitle, authors: {'0': {name: authorName} } } = readingListTest
    // console.log(readingListTest)


// this function works but repeat searches just append more books
    // could I empty the array using .reduce when the user clicks search again?
    // a clunkier option would be to have another button "start over"


//---------------------------------------------//
// add a function to clear the list and start over
//---------------------------------------------//

// function newSearch() {
//     list = []
//     console.log('new search button clicked')
// }

// document.getElementById('clearButton').addEventListener('click', newSearch)

// // select loading div
// let loader = document.querySelector('#loading')

// // select content div
// let content = document.querySelector('#content')

// // showing loading
// function displayLoading() {
//     loader.classList.add('display')
//     // to stop loading after some time
//     setTimeout(() => {
//         loader.classList.remove('display')
//     }, 5000)
// }

// // hiding loading
// function hideloading() {
//     loader.classList.remove('display')
// }
