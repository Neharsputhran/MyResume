
import profile from './profile.jpg';
import './App.css';

function Resume() {
  return (
    <div className="Resume">
      <div className='Leftside'>
      <img src={profile} className="Profile-pic" alt="profile"></img>
      
      <div className="ContactUs">
        <h3>Contact Me:</h3>
      
       <div className="Linkedin"><i class="fa-brands fa-linkedin"></i>https://www.linkedin.com/in/neha-r-8267b4228/ 
       </div>
       <div className="Email"> <i class="fa-solid fa-envelope"></i>nehaputhran3108@gmail.com
     
       </div> 
         <div className="Github">
         <i class="fa-brands fa-square-github"></i>https://github.com/Neharsputhran 

          </div>     
       
        
   
       </div>
       <div className="Skills">
        <h3>Skills:</h3>
        <li><h4>HTML</h4>
           <span className="Bar"><span className="Html"></span></span>
        </li>
        <li><h4>CSS</h4>
           <span className="Bar"><span className="Css"></span></span>
        </li>
        <li><h4>JAVASCRIPT</h4>
           <span className="Bar"><span className="Javascript"></span></span>
        </li>
        <li><h4>C</h4>
           <span className="Bar"><span className="C"></span></span>
        </li>

       </div>
       <div className="Hobbies">
        <h3>Hobbies & Interests:</h3>
          <li>Throwball</li>
          <li>Reading</li>

       </div>
       
      </div>
      <div className="Rightside">
      <div className="Profile">
         <div className="Name-Designation">
         <h1 className="Name">Neha</h1>
         <h4 className="Designation">Developer</h4>
         </div>
       </div> 
       <div className="About">
       <h3>About:</h3>
        <p>I am a third year ComputerScience student studying in Canara Engineering College</p>
        </div>
        <div className="Education">
          <h3>Education:</h3>
          
           <div className="Degree"><li><strong>Bachelor Of Degree</strong></li> <li><strong>2021-2025</strong></li></div> 
            <li>Pursueing Engineering at Canara Engineering College in the field of Computer Science And ENgineering</li>
            <div className="PU"><li><strong>Pre-University</strong></li> <li><strong>2019-2021</strong></li></div> 
            <li>Completed my PU education at Viveka PU College,Kota with a grade of 94%</li>
            <div className="Secondary"><li><strong>Secondary Education</strong></li> <li><strong>2018-2021</strong></li></div> 
            <li>Completed my Secondary education at Govt. Compound Highschool, Manoor-Padukare with a grade of 91%</li>
          
          

        </div> 
        <div className="Projects">
        <h3>Projects:</h3>
        
            <li><strong>Quiz App</strong></li>
            <li>This is a quiz app built using Android studios where i have included questions and options and based on the answers chosen by the user it will display the score.</li>
            <li><strong>Time-website</strong></li>
            <li>This is a website consisting of a clock, timer and a stop watch</li>
           
          
        

       </div>


      </div>
   
    </div>
   
    
  );
}

function Prop(props){
  return(
    <div>
      <h1>Hi {props.name}</h1>
    </div>
  );
}
function App() {
  return (
    <div className="App">
       {/* <Prop name="Neha"/> */}
       <Resume/>
    </div>
  );
}



export default App;
