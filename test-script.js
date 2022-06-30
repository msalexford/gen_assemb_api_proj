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