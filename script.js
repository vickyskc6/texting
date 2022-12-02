 
const data = [10,20,30,40]
 console.log(data)
  console.log("this obly texting purpose")
const f = data[0]
const l = data[1]
const m = data[2]
const d = data[3]

let [x,y,z,v] = data
console.log(x,y,z,v)

let arr =  [10,19,29]
let arr3 = [30,40,50,arr[0],arr[1],arr[2]]

console.log(...arr3);

let setValue =  new Set([
    "vikcy",
    "skc",
     "kabaddi",
     "kabaddi"

])

console.log(setValue.has("lemonTea"))
setValue.add("cricket")
setValue.delete("kabaddi")
console.log(setValue)

let dataValue = ["one","two","three","four"]
   
let getDataValue =  new Set(dataValue)

console.log(getDataValue)




//function prototype----------------------------------

function prinName(options){
    let data = {
        name:"vicky",
        age:24
    }
    options = Object.assign(data,options)
    console.log(`my name is ${options.name} and age is ${options.age}`)
}
prinName({
    age:25
})

 function user(email,name){
   this.email = email,
   this.name = name,
   this.online = false
}

user.prototype.login =  function(){
    this.online = true
console.log(this.email, `has in login`)

}
user.prototype.logout = function (){
    this.online = false
    console.log(this.email,"has logout")
}
newOne = new user("vicky.com","bikkey")
newTwo = new user("bikky.com","vicky")
console.log(newOne)

let arrLoop= ["a","b","c"]
let arr2 =  ["1","2","3"]

const pushTheKeyAndValuePair = {}

for(let i = 0; i< arrLoop.length ; i++){
    pushTheKeyAndValuePair[arrLoop[i]] = arr2[i]
}
console.log(pushTheKeyAndValuePair,"loop")
 let c = {}
for(let val in pushTheKeyAndValuePair){
     c[val] =pushTheKeyAndValuePair[val]
}
console.log(c)
 
// //HCL interview qustions ---------------------------------------------

const obj = {
    company:"a8",
   role:"developer",
   address:{
    city:"bangalore"
   }
}

let data2 = {...obj}
data2.address.city = "chennai"
data2.role = "admin"

console.log("city",obj.address.city)
console.log("role",obj.role)



console.log(1)
setTimeout(()=>{
    console.log(2)
},2000)
setTimeout(()=>{
   console.log(3)
},0)
console.log(4)



//array methods -----------------------------------------------

let arrayData = [10,20,30]
console.log(arrayData[0])
console.log(arrayData.at(0),"arrayCheck")
 
//getting last array element

console.log(arrayData[arrayData.length -1],"length")
console.log(arrayData.slice(-1)[0])
console.log(arrayData.at(1))
let name =  "vikky"
console.log(name.at(2))

//forEach method ----------------------------------------------

let movements = [100,200,-290,500,-2000,50]
  for(let i  of movements.entries())
  console.log(i,"forEach")
movements.forEach((movement) =>{
    if(movement > 200){
        console.log(`this is forEach value ${movement}`)
    }
})
console.log("-----------MAP METHOD------------");

const currencies = new Map([
    ['usd','united status dollor'],
    ['eur','euro'],
    ['gbp','pound streling']
])

currencies.forEach((value,key,array)=>{
    console.log(`${key}:${value}`);
})

console.log("-----------SET METHOD------------");

currenciesUnquie = new Set(["usd",'eur',"gbp","usd","eur"])
   
currenciesUnquie.forEach((value,_,array)=>{
    console.log(`${value}:${value}`);
})

 //MAP method -------------------------------------------

 let userData = "Vigensh tharmar T";

 let userName = userData.toUpperCase().split(" ").map(name=>{
    return name[0]
 }).join("")
 console.log(userName)

 //reduce method -----------------------------------------

  let totalAmount = [100,200,-100,500,-1000]

  getTotalAmount = totalAmount.reduce((ac ,cur) =>  ac + cur + 1000)
  console.log(getTotalAmount,"getTotalAmount");


//  let a = "dharma";
// let b = "dharmi";
// if (a.length === b.length) {
//   let arr = a.split(""); 
//   let arr1 = b.split("");
//   let des = [];
  
//   arr.forEach((e) => {
//     if (arr1.includes(e)) {
//       des.push("true");
//     } else {
//       des.push("false");
//     }
//   });
//   if (des.includes("false")) return console.log("two words are not same");
//   return console.log("two words are same");
// } else {
//   console.log("the two words are not same");
// }
 
 // function  declaration------------------------
const first = ()=>{
    let a = 1
    const b = second();
    a = a + b
    return a
};
function second(params) {
    let c = 3
    return 3
}
let funCal =  first()
 console.log(funCal,"funCal");
  
for (let i = 0; i < 3 ; i++) {
    setTimeout(() => {
        alert(i)
    }, 1000 + 1);
    
}
 function add (a){
    return console.log(a,"aaaaaaaaaa")
    a = 6
 }(21)
 add()

// let obj =   {
   
//   d:[
//         {
//             name:"vikcy",
//             address:"chennai"
//         },
//         {
//             name:"abi",
//             address:"trichy"
//         }
//     ]
// }
// let d = obj.d.find(item=> item.name == "abi").address
// console.log(d,"address")
    console.log("checking for git ");
 
