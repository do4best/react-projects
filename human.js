const btnEle = document.getElementById("btn")
const inputEle =document.getElementById("birthday")
const resulValue = document.getElementById("result")

const calculateAge=()=>{
    const birthdayValue = inputEle.value;
    (birthdayValue === ""?alert("Please Enter Valid Age"):getAge(birthdayValue))
    resulValue.innerText = `Your age is ${getAge(birthdayValue)} ${getAge(birthdayValue)>1?"years":"year"}`
}
const getAge=(birthVal)=>{
    const currentAge = new Date()
    const birthAge = new Date(birthVal)
    let age = currentAge.getFullYear() - birthAge.getFullYear()
    const month = currentAge.getMonth() - birthAge.getMonth()
    if(month<0 || (month === 0 && currentAge.getDay()< birthAge.getDay())){
        age--
    }
    return age;
}
btnEle.addEventListener('click',calculateAge)