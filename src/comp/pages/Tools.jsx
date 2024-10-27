import '../styles/tool.css';
import {Aarduino, Bblender, Ccss, Ddb, Eexpress, Ffirebase, Ggithub, Hhtml, Jjs, Llinux, Nnode, Ppostman, Rreact, Ssql }   from '../../Img';
export default function Tools() {
    return(
        <div id='tool_main'>
        <div id='tool_header'>
            <p>Development Tools and Technologies</p>
            <hr />

        </div>
        <div className='tools_item'>
            <div className='tools'>
                <img src={Hhtml} alt=''/>
                <p>HTML</p>
            </div>

            <div className='tools'>
                <img src={Ccss} alt=''/>
                <p>CSS</p>
            </div>

            <div className='tools'>
                <img src={Jjs} alt=''/>
                <p>JAVA SCIRPT</p>
            </div>

            <div className='tools'>
                <img src={Rreact} alt=''/>
                <p>REACT</p>
            </div>

            <div className='tools'>
                <img src={Eexpress} alt=''/>
                <p>EXPRESS</p>
            </div>

            <div className='tools'>
                <img src={Ddb} alt=''/>
                <p>MONGODB</p>
            </div>

            <div className='tools'>
                <img src={Ssql} alt=''/>
                <p>SQL</p>
            </div>

            <div className='tools'>
                <img src={Ffirebase} alt=''/>
                <p>FIREBASE</p>
            </div>

            <div className='tools'>
                <img src={Ppostman} alt=''/>
                <p>POSTMAN</p>
            </div>

            <div className='tools'>
                <img src={Ggithub} alt=''/>
                <p>GITHUB</p>
            </div>

            <div className='tools'>
                <img src={Bblender} alt=''/>
                <p>BLENDER</p>
            </div>

            <div className='tools'>
                <img src={Nnode} alt=''/>
                <p>NODE</p>
            </div>

            <div className='tools'>
                <img src={Llinux} alt=''/>
                <p>LINUX</p>
            </div>

            <div className='tools'>
                <img src={Aarduino} alt=''/>
                <p>Arduino</p>
            </div>

            
        </div>
        </div>
    )
    
};
