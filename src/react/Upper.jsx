import Frameworks from './upper/Frameworks';
import Languages from './upper/Languages';
import SocialNetworks from './upper/SocialNetworks';
import Software from './upper/OperativeSystems';
import NameDescription from './upper/NameDescription';

function Upper() {
  return (
    <div className="upper">
        <NameDescription/>
        <SocialNetworks/>
        <Languages/>
        <Frameworks/>
        <Software/>
    </div>
  );
}

export default Upper;
