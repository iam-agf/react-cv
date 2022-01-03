import React from "react";

class NameDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.noStyleATag = {textDecoration:"none"};
    }
    render() {
        return (
            <div class='name'>
                <div class='title-section'>
                    Antonio Gonzalez Fernandez
                </div>
                <div class='mail-section'>
                    agf0710@gmail.com
                </div>
                <div class='description-section'>
                    Fast learner and autodidact. Always practicing new technologies. More than 7 years coding and 3 of working experience. 
                </div>
            </div>
        );
    }
}

export default NameDescription;
