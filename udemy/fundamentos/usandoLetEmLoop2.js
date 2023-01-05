
const numbers = []

for (let i = 0; i < 11; i++){
    numbers.push(function(){
        console.log(i)
    })
}

numbers[3]()
numbers[8]()


