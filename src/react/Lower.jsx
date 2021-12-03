import '../index.css';
import Contributions from './lower/Contributions';
import Education from './lower/Education';
import Experience from './lower/Experience';
import Others from './lower/Others';
import Prizes from './lower/Prizes';
import Projects from './lower/Projects';

function Lower() {
  return (
    <div class='lower'>
        <Experience/>
        <Education/>
        <Projects/>
        <div style={{display:'flex', flexDirection: 'column', margin: '0 auto'}}>
          <Contributions/>
          <Others/>
        </div>
        <Prizes/>
    </div>
  );
}

export default Lower;
