import '../styles/home.css';
import hpic from '../../img/hpic.jpg';
import op from '../../img/op.png';
export default function Home() {
    return(
        <div id="Home_con">
           <div id="nav_bar">
            <h1 id='head_home_bar'>Rahul Rajan</h1>
            <ul id='nav_links'>
           <li> <a href='#Home_con'>Home</a></li>
             <li> <a href='#work_con'>Work</a></li>
             <li> <a href='#about_con'>About</a></li>
             <li> <a href='#tool_main'>Tools</a></li>
             <li> <a href='#footer_con'>Contact</a></li>
               
            </ul>
            <div id='nav_options' >
                <img src={op} id='h_btn' onClick={togglePop} alt='its option icon'/>
            </div>
                <div id='options'>
                <ul id='nav_option'>
              <a href='#Home_con'>Home</a><hr/>
              <a href='#work_con'>My Work</a><hr/>
              <a href='#about_con'>About Me</a><hr/>
              <a href='#tool_main'>My Tools</a><hr/>
              <a href='#footer_con'>Contact me</a><hr/>
               
            </ul>
                </div>
           </div>


           <div id="home_content">
           <div className='home_items'>

               <h2 id='header_main'>I'm a passionate <br/>
               Software/Web Developer</h2>
               <p>Take a look at my projects and learn more about me</p>
           </div>

           <div className='home_items'>
            <img id='himg' src={hpic} alt='it is a my pic'/>
           </div>

           </div>

        </div>
    )
    
};
const togglePop=()=>{
    const options=document.getElementById('options');
    options.style.display=options.style.display==='none'?'block':'none';

}
