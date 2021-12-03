import '../index.css';
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
        <Others/>
        <Prizes/>
    </div>
  );
}

export default Lower;
