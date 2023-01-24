import { useState } from "react";
// import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

    const initialData ={
      username: "",
      color:"",
      spendTime:[],
      review:"",
    }
    
    const[duckData,setData]=useState(initialData)

 const handleChange =(event) =>{
  const inputName= event.target.name
  const inputValue=event.target.value
  if(inputName === "color"){
    setData({...duckData,color:inputValue})
  }
  
  if(inputName === "spend-time"){
    let updatetime =[]
    if(duckData.spendTime.includes(inputValue)){
      updatetime =duckData.spendTime.filter((e) => e !== inputValue)
    } else {
      updatetime=[...duckData.spendTime,inputValue]
    }
    setData({...duckData,spendTime:updatetime})
      
    } 
  
  if(inputName === "review"){
    setData({...duckData,review:inputValue})
  }
  if(inputName === "username"){
    setData({...duckData,username:inputValue})
  }
  if(inputName === "email"){
    setData({...duckData,email:inputValue})
  }
 }
 const  handleSubmit = (event) =>{
  event.preventDefault()
  setData(initialData)
  console.log(duckData)
 }
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList /> */}
        {/* answers should go here */}
      </section>

      <section className="main__form">
        {/* a form should be here */}
        <form class="form"  onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div class="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <ul>
              <li>
                <input 
                id="color-one" 
                type="radio" 
                name="color" 
                value="1" 
                onChange={handleChange}
                
                />
                <label for="color-one">1</label>
              </li>
              <li>
                <input id="color-two" 
                type="radio"
                 name="color" 
                 value="2" 
                 onChange={handleChange}
                
                 />
                <label for="color-two">2</label>
              </li>
              <li>
                <input id="color-three"
                 type="radio"
                  name="color" 
                  value="3" 
                  onChange={handleChange}
                 
                  />
                <label for="color-three">3</label>
              </li>
              <li>
                <input id="color-four"
                 type="radio" 
                 name="color" 
                 value="4"
                 onChange={handleChange}
                //  checked={duckData.color === 4}
                 />
                <label for="color-four">4</label>
              </li>
            </ul>
          </div>
          <div class="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

            <ul>
              <li>
                <label>
                  <input 
                  name="spend-time"
                   type="checkbox" 
                   value="swimming"
                   onChange={handleChange} 
                   checked={duckData.spendTime.includes("swimming")}
                   />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="bathing" 
                  onChange={handleChange}
                  checked={duckData.spendTime.includes("bathing")}/>
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input 
                  name="spend-time" 
                  type="checkbox" 
                  value="chatting" 
                  onChange={handleChange}
                  checked={duckData.spendTime.includes("chatting")}/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                  name="spend-time" 
                  type="checkbox"
                   value="noTime" 
                   onChange={handleChange}
                   checked={duckData.spendTime.includes("noTime")}/>I
                  don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea 
            name="review" 
            cols="30" 
            rows="10"
            onChange={handleChange}

            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text"
             name="username" 
             value={duckData.username} 
             onChange={handleChange}
             />
          </label>
          <label>
            Leave us your email pretty please??
            <input 
            type="email" 
            name="email" 
            onChange={handleChange} 
            value={duckData.email} />
          </label>
          <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>
      </section>
    </main>
  );
}

export default Main;
