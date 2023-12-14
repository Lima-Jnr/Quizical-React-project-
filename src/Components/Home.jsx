import React from 'react'


import { Link } from 'react-router-dom';


function Home( { onHome}) {
  const [preference, setPreference] = React.useState({
    numberOfQuestion: 0,
  category: "",
   difficulty: "", 
     type: "", 
     timeNeeded: 0   
  })


  function enter (event) {
    const { name, value,  type, checked} = event.target
   setPreference( (prevData) => {
    return {
      ...prevData,
      [name] : value
    }
   })
   
 }
 
  function handleSubmit (event){
    event.preventDefault()
   saveURl();
   
   
  }
  function saveURl (){
  localStorage.setItem("fetchUrl", (JSON.stringify(preference)));
  }



 

  return (
    

    <div  className='firstpage'>
    
    
<h1>Quizical</h1>
<p>Select your preference, and click the button to start the Assessment test</p>
{/* <Link to={"https://www.google.com/"}> Click me</Link> */}

<form className='quiz-form' onSubmit={handleSubmit}>

<label htmlFor='number'> Enter the number of Questions You want</label>
<br/>
<input  id='number'
onChange={enter}
type="number"
value={preference.numberOfQuestion}
name='numberOfQuestion' 
 placeholder='select the number of question you want'/>
<br/>


<label htmlFor='category' > Select your desired Category</label>
<br/>
<select 
onChange={enter}
     value={preference.category}
    name='category'


     id='category'
     >
        
       <option value="21">Sport</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
         <option value="26">Celebrities</option>
        <option value="28">Vehicle</option>
        <option value="27">Animal</option>
         <option value="23">History</option>
     </select>
     <br/>

     <label htmlFor='difficulty'> Select desired difficulty</label>
     <br/>
     <select
     value={preference.difficulty}
     onChange={enter}
     name='difficulty'
     id='difficulty'
     >
       <option value="easy">Easy</option>
        <option value="medium">Medium</option>
         <option value="hard"> Hard</option>

     </select>
     <br/>

     <label htmlFor='type'> Select the Options type</label>
     <br/>
     <select
     onChange={enter}
     value={preference.type}
     name='type'
     id='type'
     >
       
        <option value="multiple">Multiple Choice</option>
         <option value="boolean"> True / False</option>

     </select>
     <br/>
     <label htmlFor='number'> Set the minutes You want</label>
<br/>
<input  id='number'
onChange={enter}
type="number"
value={preference.timeNeeded}
name='timeNeeded' 
 placeholder='How many minutes do You want'/>
<br/>
   <Link to={"quiz"}>
<button className='firstpage-btn' type='submit' onClick={saveURl}>START QUIZ</button>
</Link> 


</form>



</div>


    
  )
}

export default Home