const num1 = document.querySelector('#num1')  as HTMLInputElement
const num2 = document.querySelector('#num2')  as HTMLInputElement
const buttonElement = document.querySelector('button')!

const numResult : number[] = []
const textResult: string []= []

type numOrString = number  | string
type Result = { val :number ; timestamp : Date}

interface ResultInterface {
    val :number ; 
    timestamp : Date;
}

function add(num1:numOrString , num2 : numOrString){
    if (typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else if (typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2
    }
    return +num1 +  +num2
}

function printResult(resultObj : Result){
    console.log(resultObj.val)

}

buttonElement?.addEventListener('click',() =>{
    const num1Element = num1?.value
    const num2Element = num2?.value

    const result  = add(+num1Element, +num2Element)
    numResult.push(result as number)
    const stringResult = add(num1Element,num2Element)
    textResult.push(stringResult as string)
    printResult({val : result as number , timestamp : new Date()})
    console.log(numResult , textResult)



})

