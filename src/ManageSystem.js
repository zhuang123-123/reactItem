import React from 'react';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import Staff from './STAFF.js';


export default class ManageSystem extends React.Component {
    constructor() {
        super();
        this.state = {
            staff: new Staff
        }
    }

    // 增
    addStaffItem(item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        })
    }

    // 搜索
    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        })
    }

    render() {
        return (
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)} />
                <StaffItemPanel items={this.state.staff.staff} />
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)} />
                <StaffDetail />
            </div>
        )
    }
}