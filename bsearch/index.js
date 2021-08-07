/* bsearch = search text and numbers value (fast score) */
/* thx git: https://github.com/dominictarr/random-name */
/* grokking algorithms practice by me #1 */

var fs = require('fs')

function load_names() {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile("first-names.json", function(err, data) {
                if(!err) { console.log('first-names.json loaded'); data = JSON.parse(data); } else { reject(err) }
                resolve(data)
            })
        } catch(e) {
            reject(e)
        }
    })
}

load_names().then(names => {

    console.log(names.length)

    let array_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let array_names = names
    let o_operations = 1 // o big opetations count

    function binarySearch(array, find) {
        let sindex = 0
        let findex = array.length - 1
        let middle = Math.floor((findex + sindex) / 2)

        while(array[middle] != find && sindex < findex) {
            if(find < array[middle]) { findex-- } else if(find > array[middle]) { sindex++ }
            console.log(`operation #${o_operations}`)
            middle = Math.floor((findex + sindex) / 2)
            o_operations++
        }

        return (array[middle] != find) ? null : middle

    }


    let getGrock = binarySearch(array_names, "Tellarion")

    console.log(getGrock)

})

