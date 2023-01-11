import { useState } from "react"
import './Income.css'


const Income = () => {
    const [userInput,setUserInput]= useState('')
    const [surInput,setSurInput]= useState({
      surname:''
    })

const [numInput,setNumInput] =useState({
    passInput:''
})


//   const[title,setTitle]=useState('')
//   const[amount,setAmount]=useState('')
//   const[date,setDate]=useState('')


//   const inputChangeHandler =(event)=>{
//     const currentInput = event.target.name;
//     setUserInput({
//         ...userInput,
//         [currentInput]:event.target.value
//     })
//   }
// }

      const userChangeHandler= (event)=> {
        setUserInput(event.target.value)
                
            }
    
    const surChangeHandler= (event)=> {
       const currentInput = event.target.name
            setSurInput({
                ...surInput,
            [currentInput]:event.target.value
       })
    };
    
    const numChangeHandler= (event)=> {
        setNumInput((prevState)=>{
            return{
                ...prevState,
                numInput:event.target.value
            }
        })
    };
   



const submitHandler = (event)=>{
    event.preventDefault();
    console.log(userInput);
    console.log(surInput.surname);
    console.log(numInput.numInput);
}
return (
    <form onSubmit={submitHandler} className="form">
    <div className="new-income__controls">
       <div className="new-income__control">
        <label>`User name</label>
        <input name="username" type="text" onChange={userChangeHandler}/></div> 
       <div className="new-income__control">
        <label>Surname</label>
        <input name="surname" type="text"  onChange={surChangeHandler}/>
        </div> 
       <div className="new-income__actions">
       <label>Password</label>
        <input name="number" type="password" onChange={numChangeHandler}/>
        </div> 
       <div className="btn">
       <button type="submit" >Add Income</button>
       </div>
    </div>
    </form>
)
}




export default Income;