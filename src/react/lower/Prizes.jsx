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
                    Prizes
                </div>
                <div class='lower-prizes-content'>
                    <table>
                        {
                            prizesData.map((value) => {
                                return (
                                    <div>
                                        <tr>
                                            <td>
                                                <div class='date'>{value.date}</div>
                                            </td>
                                            <td>
                                                <strong>
                                                    {value.position}
                                                </strong> (<em><a target='_blank' href={value.link}>{value.contest}</a></em>)
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
