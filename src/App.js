
import './App.css';
import {useState} from "react";
function MyDiv(props){
    return <div className={"inputclass"}>{props.x}</div>
}

function App() {
    function clear(){
        setSomething("")
    }
    const [something, setSomething]= useState("")

    function handleClick7(){
        setSomething(something+"7")
    }
    function handleClick8(){
        setSomething(something+"8")

    }
    function handleClick9(){
        setSomething(something+"9")
    }
    function handleClickDivide(){
        let exp =(something)
        let last = exp[exp.length-1]
        if(last === "-" ) {
            setSomething(exp.substring(0,exp.length-1)+"/")
        }
        else if (last === "+" ) {
            setSomething(exp.substring(0,exp.length-1)+"/")}
        else if (last === "*" ) {
            setSomething(exp.substring(0,exp.length-1)+"/")}
        else if (last === "/" ) {
            setSomething(exp.substring(0,exp.length-1)+"/")}
        else if (exp.length===0){setSomething(something)}
        else setSomething(something+"/")
    }
    function handleClick4(){
        setSomething(something+"4")
    }
    function handleClick5(){
        setSomething(something+"5")
    }
    function handleClick6(){
        setSomething(something+"6")
    }
    function handleClickMultiply(){
        let exp =(something)
        let last = exp[exp.length-1]
        if(last === "-" ) {
            setSomething(exp.substring(0,exp.length-1)+"*")
        }
        else if (last === "+" ) {
            setSomething(exp.substring(0,exp.length-1)+"*")}
        else if (last === "*" ) {
            setSomething(exp.substring(0,exp.length-1)+"*")}
        else if (last === "/" ) {
            setSomething(exp.substring(0,exp.length-1)+"*")}
        else if (exp.length===0){setSomething(something)}
        else setSomething(something+"*")
    }
    function handleClick1(){
        setSomething(something+"1")
    }
    function handleClick2(){
        setSomething(something+"2")
    }
    function handleClick3(){
        setSomething(something+"3")

    }
    function handleClickPlus(){
        let exp =(something)
        let last = exp[exp.length-1]
        if(last === "-" ) {
            setSomething(exp.substring(0,exp.length-1)+"+")
        }
        else if (last === "+" ) {
            setSomething(exp.substring(0,exp.length-1)+"+")}
        else if (last === "*" ) {
            setSomething(exp.substring(0,exp.length-1)+"+")}
        else if (last === "/" ) {
            setSomething(exp.substring(0,exp.length-1)+"+")}
        else if (exp.length===0){setSomething(something)}
        else setSomething(something+"+")
    }
    function handleClickPoint(){
        let exp =(something)
        let last = exp[exp.length-1]

        if (exp.length===0) {setSomething(something)}
        else if (last===".") {setSomething(something)}
        else if (last==="*") {setSomething(something)}
        else if (last==="-") {setSomething(something)}
        else if (last==="/") {setSomething(something)}
        else if (last==="+") {setSomething(something)}


        else setSomething(something+".")


    }
    function handleClick0(){
        let exp =(something)
        let last = exp[exp.length-1]
        if ( last === "-"  ){
        setSomething(something)}
        else if ( last === "+"  ){
            setSomething(something)}
        else if ( last === "/"  ){
            setSomething(something)}
        else if ( last === "*"  ){
            setSomething(something)}
        else if (exp==="")
        {
            setSomething(something+"0")
        }
        else setSomething(something+"0")
    }
    function handleClick00(){
        let exp =(something)
        let last = exp[exp.length-1]
        if ( last === "-"  ){
            setSomething(something)}
        else if ( last === "+"  ){
            setSomething(something)}
        else if ( last === "/"  ){
            setSomething(something)}
        else if ( last === "*"  ){
            setSomething(something)}
        else if (exp==="")
        {
            setSomething(something)
        }
        else setSomething(something+"00")
    }
    function handleClickEqual(){
        let exp =(something)
        let last = exp[exp.length-1]

        if (last=== "+"){setSomething(something)}
        else if (exp.length===0){setSomething(something)}
        else if (last=== "-"){setSomething(something)}
        else if (last=== "/"){setSomething(something)}
        else if (last=== "*"){setSomething(something)}
        else setSomething(eval(something))

    }
    function handleClickMinus(){
        let exp =(something)
        let last = exp[exp.length-1]
        if(last === "-" ) {
            setSomething(exp.substring(0,exp.length-1)+"-")
        }
        else if (last === "+" ) {
            setSomething(exp.substring(0,exp.length-1)+"-")}
        else if (last === "*" ) {
            setSomething(something+"-")}
        else if (last === "/" ) {
            setSomething(something+"-")}
        else if (exp.length===0){setSomething(something)}
        else setSomething(something+"-")
    }
    function Back(){
        let exp = (something)
        setSomething(something.slice(0,-1))
    }


  return (
          <div className="App">
             <div className={"cal"}>
                     <MyDiv x={something} name="screen" />

                <div className={"row"}>
                    <button id={"button7"} onClick={handleClick7} className={"button-style"}>7</button>
                    <button onClick={handleClick8} className={"button-style"}>8</button>
                    <button onClick={handleClick9} className={"button-style"}>9</button>
                    <button onClick={handleClickDivide} className={"op-style"}>/</button>
                </div>
                 <div className={"row"}>
                     <button onClick={handleClick4} className={"button-style"}>4</button>
                     <button onClick={handleClick5} className={"button-style"}>5</button>
                     <button onClick={handleClick6} className={"button-style"}>6</button>
                     <button onClick={handleClickMultiply} className={"op-style"}>*</button>
                 </div>
                 <div className={"row"}>
                     <button onClick={handleClick1} className={"button-style"}>1</button>
                     <button onClick={handleClick2} className={"button-style"}>2</button>
                     <button onClick={handleClick3} className={"button-style"}>3</button>
                     <button onClick={handleClickPlus} className={"op-style"}>+</button>
                 </div>
                 <div className={"row"}>
                     <button onClick={handleClickPoint} className={"button-style"}>.</button>
                     <button onClick={handleClick0} className={"button-style"}>0</button>
                     <button onClick={handleClick00} className={"button-style"}>00</button>
                     <button onClick={handleClickMinus} className={"op-style"}>-</button>
                 </div>
                 <div className={"row"}>
                     <button onClick={clear} className={"op-style"}>AC</button>
                     <button onClick={handleClickEqual} className={"op-style"}>=</button>
                 </div>
             </div>
          </div>
          );


  }



export default App;

