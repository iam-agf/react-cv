import React from "react";
import '../../App.css';

class NameDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.style = { fill: "white" };
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
                    Fast learner and autodidact. Programming problem solver by hobby. Always disposed to learn anything.
                </div>
            </div>
        );
    }
}

export default NameDescription;
