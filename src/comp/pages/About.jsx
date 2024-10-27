import '../styles/about.css';
import Hpic from '../../img/pic.png';
export default function About() {
    return(
        <div>
            <div id="about_con">
                <div id='about_header'>
                    <h2>About Me</h2>
                    <hr />
                </div>
                <div id='about_section'>
                    <img src={Hpic} alt=''/>
                   
                    <p>Hello! I'm Rahul. <br/>
<br/>

I'm a software developer with a passion for building intuitive and impactful applications. With a strong foundation in front-end and back-end technologies, I have completed my BTech in Computer Science and Engineering. Whether it's developing a community-driven disaster alert system or a pharmacy app that makes medicine information more accessible, I’m always excited to tackle new challenges and bring ideas to life.</p>
                </div>
               
            </div>
        </div>
    )
    
};
