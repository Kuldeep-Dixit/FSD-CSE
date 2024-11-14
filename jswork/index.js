// // let key="sname";

// //  Creating objects

// // const students={
// //     sname:"gulu gulu",
// //     course: "Gundagiri",
// //     college:"namak Haram"
// // }
// // students[key]="chik tapak dam dam"
// // console.log(students)

// // Higher Order Functions



// function selectlanguge(language){
//     let data;
//     if(language=="c"){
//         function cCompiler(){
//             return "C Compiler.";
//         }
//         data=cCompiler();
//     }
//     else if(language=='java'){
//         function javaCompiler(){
//             return "Java Compiler.";
//         }
//         data=javaCompiler();
//     }
//     return data

//     // console.log("You have selected : "+clbk());
// }

// console.log(selectlanguge("java"));

// console.log("Hello World");
// const div = document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerHTML="<h2 style=color:red>Data has changed</h2>";
// const h1 = document.createElement("h1");
// console.log(h1);
// h1.innerText="ABES Engineering College";
// console.log(h1);
// h1.style.backgroundColor="cyan";
// h1.style.color="black";
// h1.style.padding="20px";
// h1.style.marginLeft="300px";
// div[0].appendChild(h1);

// const img = document.createElement("img");
// img.src="./dog.webp";
// console.log(img);
// img.setAttribute("height","300");
// img.setAttribute("width","300");
// div[0].appendChild(img);
// div[0].removeChild(img);


// function getData(){
//     console.log("Hii inside get data function")
//     div[0].innerHTML="<h2 style = color:cyan>Hello, Event handled</h2>"
// }
// var btn =document.getElementsByClassName("btn")
// console.log(btn)
// btn[0].addEventListener("click",getData)

const promise=new Promise((resolve,reject)=>{
    let a=12
    if(a>10){
        resolve("Accepted")
    }
    else{
        reject("Not Accepted")
    }
})
// promise.then((msg)=>{console.log(msg)})
// .catch((error)=>{console.log(error)})
// .finally(()=>console.log("All resources have closed."))

// const promise2=new Promise((resolve,reject)=>{
//     resolve({name:"Prashant tomer",Stack:"MERN STACK"})
// });
// promise2.then((data)=>{console.log(data.name)})
// .catch(x=>{console.log(x)})

const response=fetch("https://dummyjson.com/products")
response.then((data)=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res)
    })
})