//------------------------ Create Body
let header = document.createElement("fieldset")
document.body.appendChild(header);
let legend = document.createElement("legend");
legend.innerHTML = "JavaSccript Exercise";
let Sol = document.createElement("ol");
header.append(legend, Sol);

//-------------------------------------- Solution1

// Create list
let Sol1 = Sol.appendChild(document.createElement("li"));
Sol1.innerHTML = "Create a function which returns the number of true values there are in an array?<br>";

//Create a function to make random boolean array 
function randBooleanArray(len) {
    boolean = [];
    for (let i = 0; i < Math.min(100, len); i++) { boolean[i] = Math.random() < 0.5 }
    return boolean
}

//create a function to count true values
function countTrue(arr) {
    i = 0;
    arr.forEach(element => element === true ? i++ : i)
    return i
}

// Create Html input and label and paragraph
let label = Sol1.appendChild(document.createElement("label"))
let inPut = Sol1.appendChild(document.createElement("input"));
let ansP = Sol1.appendChild(document.createElement("p"));

label.setAttribute("for", "inPut");
label.innerHTML = "Enter size of Array:" + "<br>";

//set attribute input and add event to it
inPut.setAttribute("id", "inPut1");
inPut.setAttribute("type", "text");
inPut.setAttribute("value", "1");
inPut.addEventListener("input", e => {

    let boolean = randBooleanArray(e.target.value);

    ansP.innerHTML = "Random array: " + boolean +
        "<br>" + "The number of true value: "
        + countTrue(boolean);
})


//--------------------------------------- Solution2

// Create list
let Sol2 = Sol.appendChild(document.createElement("li"));
Sol2.innerHTML = "Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.";
Sol2.innerHTML += "<br>"

// Create a function to make object by list value

function makeobj(obj, listvalue) {

    if (listvalue.length > 2) {
        obj[[listvalue[0]]] ? (obj[listvalue[0]] = makeobj(typeof (obj[listvalue[0]]) === "object" ? obj[listvalue[0]] : {}, listvalue.slice(1))) : obj = { ...obj, [listvalue[0]]: makeobj({}, listvalue.slice(1)) }
        return obj
    }
    else {
        obj[listvalue[0]] ? (obj[listvalue[0]] = listvalue[1]) : obj = { ...obj, [listvalue[0]]: listvalue[1] }
        return (obj)
    }
}

// Convert obj to array

function obj2array(obj) {
    let arr = [];
    for (let key in obj) {
        typeof (obj[key]) === "object" ? arr.push([key, obj2array(obj[key])]) : arr.push([key, obj[key]]);
    }
    return JSON.stringify(arr);
}

// Create input html for take a value to make object
let label_value = Sol2.appendChild(document.createElement("label"));
label_value.innerHTML = "Make an object and update it: ";
label_value.setAttribute("for", "valueobj");

let valueobj = Sol2.appendChild(document.createElement("input"));
valueobj.setAttribute("value", "key1 key2 ... keyn value")
valueobj.setAttribute("id", "valueobj");

Sol2.innerHTML += "<br>"

// Create button for taking input and send it to makeobj function
let button = Sol2.appendChild(document.createElement("button"));
button.innerHTML = "set"

let showobj = Sol2.appendChild(document.createElement("p"));

// add listener to make obj button
let obj = {};
button.addEventListener("click", e => {
    let valueobj = document.getElementById("valueobj").value;
    values = valueobj.split(" ")
    obj = makeobj(obj, values)
    showobj.innerHTML = JSON.stringify(obj);
})

// Create Conv2Array button and paragraph to show array
let conv2Array = Sol2.appendChild(document.createElement("button"));
let showarray = Sol2.appendChild(document.createElement("p"));
conv2Array.innerHTML = "Conv2Array";
conv2Array.addEventListener("click", e => showarray.innerHTML = obj2array(obj))

//--------------------------------------- Solution3 

// Create list
let Sol3 = Sol.appendChild(document.createElement("li"));
Sol3.innerHTML = "There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.";
Sol3.innerHTML += "<br>"

// Create a function to sum of two arrays by index
function sum2arrays(array1,array2){
    array1.length > array2.length?array2 = array2.concat(Array(array1.length-array2.length).fill(0)):array1 = array1.concat(Array(array2.length-array1.length).fill(0))
    let ans = []
    array1.forEach((e,index) => ans[index] = +array2[index] + +e)
    return ans
}
// Create 2 inputs for taking arrays
let label_array_one = Sol3.appendChild(document.createElement("label"));
label_array_one.innerHTML = "Making first array: ";
label_array_one.setAttribute("for", "array_one");

let array_one = Sol3.appendChild(document.createElement("input"));
array_one.setAttribute("value","1 2 3 4 5")
array_one.setAttribute("id", "array_one");

Sol3.innerHTML += "<br>"

let label_array_two = Sol3.appendChild(document.createElement("label"));
label_array_two.innerHTML = "Making second array: ";
label_array_two.setAttribute("for", "array_two");

let array_two = Sol3.appendChild(document.createElement("input"));
array_two.setAttribute("value","1 2 3 4 5")
array_two.setAttribute("id", "array_two");

Sol3.innerHTML += "<br>"

//Create a button to calculate sun of two arrays
let sumarray = Sol3.appendChild(document.createElement("button"));
sumarray.innerHTML = "Sum_Arrays"

let showsum = Sol3.appendChild(document.createElement("p"));

// add listener to call function sum2arrays
sumarray.addEventListener("click", e => {
    let array1 = document.getElementById("array_one").value;
    let array2 = document.getElementById("array_two").value;
    array1 = array1.split(" ");
    array2 = array2.split(" ");
    // array1.forEach((e,item)=> array1[item]=e.split(","))
    // array2.forEach((e,item)=> array2[item]=e.split(","))
    showsum.innerHTML = sum2arrays(array1,array2)
})

//--------------------------------------- Solution4 

// Create list
let Sol4 = Sol.appendChild(document.createElement("li"));
Sol4.innerHTML = "Write a JavaScript program which returns a subset of a string.";
Sol4.innerHTML += "<br>"

// Create a function to sum of two arrays by index
function subsetstr(str){
    let splitstr = str.split("");
    let ans = [];
    while (splitstr.length>0){
        let pp = "";
        splitstr.forEach(e => ans.push(pp=pp+e));
        splitstr = splitstr.slice(1);
    }
    return(ans)
}

// Create 2 inputs for taking arrays
let str = Sol4.appendChild(document.createElement("label"));
str.innerHTML = "Enter a string: ";
str.setAttribute("for", "array_one");

let strinput = Sol4.appendChild(document.createElement("input"));
strinput.setAttribute("value","ali")
strinput.setAttribute("id", "strinput");

Sol4.innerHTML += "<br>"

//Create a button to calculate sun of two arrays
let string_subset = Sol4.appendChild(document.createElement("button"));
string_subset.innerHTML = "string_subset"

let subsetshow = Sol4.appendChild(document.createElement("p"));

// add listener to call function sum2arrays
string_subset.addEventListener("click", e => {
    let strinput = document.getElementById("strinput").value;
    subsetshow.innerHTML = subsetstr(strinput);
})

//--------------------------------------- Solution5

// Create list
let Sol5 = Sol.appendChild(document.createElement("li"));
Sol5.innerHTML = "Write a JavaScript program which returns a subset of a string.";
Sol5.innerHTML += "<br>"

// Create a function to sum of two arrays by index
function changeNumber(num){
    let splitstr = num.split("");
    let chk = false;
    let ans = "";
    splitstr.forEach(e => (+e%2===0)?chk?ans+="-"+e:(chk=true,ans+=e):(chk=false,ans+=e));
    return ans
}

// Create 2 inputs for taking arrays
let labelnum = Sol5.appendChild(document.createElement("label"));
labelnum.innerHTML = "Enter a number: ";
labelnum.setAttribute("for", "num");

let num = Sol5.appendChild(document.createElement("input"));
num.setAttribute("value","1234094")
num.setAttribute("id", "num");

Sol5.innerHTML += "<br>"

//Create a button to calculate sun of two arrays
let changenum = Sol5.appendChild(document.createElement("button"));
changenum.innerHTML = "change_num"

let shownum = Sol5.appendChild(document.createElement("p"));

// add listener to call function sum2arrays
changenum.addEventListener("click", e => {
    let numval = document.getElementById("num").value;
    shownum.innerHTML = changeNumber(numval);
})

//--------------------------------------- Solution6

// Create list
let Sol6 = Sol.appendChild(document.createElement("li"));
Sol6.innerHTML = "Count total Integers in nestedObject.";
Sol6.innerHTML += "<br>"

// Create function to count integers in nestedarray
function intInArrCount(arr){
    let ans = 0;
    for(let i of arr){
        if(typeof(i)==="object"){
           ans += intInArrCount(i);
        }
        else if(typeof(i)==="number"){
            ans +=1;
        }
    }
    return ans
}

// Create 2 inputs for taking arrays
let labelNA = Sol6.appendChild(document.createElement("label"));
labelNA.innerHTML = "Enter a nestedarray: ";
labelNA.setAttribute("for", "nestedarray");

let nestedarray = Sol6.appendChild(document.createElement("input"));
nestedarray.setAttribute("value","[[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]")
nestedarray.setAttribute("id", "nestedarray");

Sol6.innerHTML += "<br>"

//Create a button to calculate answer
let countint = Sol6.appendChild(document.createElement("button"));
countint.innerHTML = "count_integers"

let showanswer = Sol6.appendChild(document.createElement("p"));

// add listener to call function sum2arrays
countint.addEventListener("click", e => {
    let numval = document.getElementById("nestedarray").value;
    showanswer.innerHTML = intInArrCount(eval(numval));
})




