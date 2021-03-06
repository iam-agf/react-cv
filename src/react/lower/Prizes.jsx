import React from "react";
import { prizesData } from './jsonData/prizesInfo';


class Prizes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class='lower-prizes'>
                <div class='lower-prizes-title'>
                    Prizes <div class='lower-others-title-subtitle'>(Clickable titles)</div>
                </div>
                <div class='lower-prizes-content'>
                    <table>
                        {
                            prizesData.map((value) => {
                                return (
                                    <div style={{paddingBottom:"6px"}}>
                                        <tr>
                                            <td>
                                                <div class='date'>{value.date}</div>
                                            </td>
                                            <td>
                                                {value.link ? 
                                                <a target='_blank' href={value.link}>
                                                    <strong>
                                                        {value.position}
                                                    </strong> (<em>{value.contest}</em>)
                                                </a> : 
                                                <> <strong>
                                                        {value.position}
                                                    </strong> (<em>{value.contest}</em>)
                                                </>}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>{value.detail}
                                            </td>
                                        </tr>
                                    </div>
                                )
                            })
                        }
                        
                    </table>
                </div>
            </div>
        );
    }
}

export default Prizes;
