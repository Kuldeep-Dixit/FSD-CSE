// let key="sname";

//  Creating objects

// const students={
//     sname:"gulu gulu",
//     course: "Gundagiri",
//     college:"namak Haram"
// }
// students[key]="chik tapak dam dam"
// console.log(students)

// Higher Order Functions



function selectlanguge(language){
    let data;
    if(language=="c"){
        function cCompiler(){
            return "C Compiler.";
        }
        data=cCompiler();
    }
    else if(language=='java'){
        function javaCompiler(){
            return "Java Compiler.";
        }
        data=javaCompiler();
    }
    return data
    
    // console.log("You have selected : "+clbk());
}

console.log(selectlanguge("java"));