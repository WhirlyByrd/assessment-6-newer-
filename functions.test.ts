const {shuffleArray} = require('./utils')

describe('shuffleArray should..', () => {

   
    test('shuffleArray returns same length as argument', () => {
        let array = [1,2,3,4,5]
        let result = shuffleArray(array)
        expect(array.length).toBe(result.length)
    })

    test('return array with same items', () => {
        //create array
        //run through function
        //check to make sure all original values are included

        let array = [1,2,3,4,5]
        let result = shuffleArray(array)

        let myVar = true

        for(let i =0; i < result.length; i++){
            if(array.includes(result[i]) === false) {
                myVar = false
                return
            }
        }

        expect(myVar).toBe(true)
        
    })


})