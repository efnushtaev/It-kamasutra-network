import React from 'react';
import * as axios from 'axios';
import classes from './users.module.scss'

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }


    render() {
        let pages = [];
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={classes.pages}>
                {pages.map(e => {
               
                    return <span onClick={() => {this.onPageChanged(e)}} className={this.props.currentPage === e && classes.activePage}>{e}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : <span>pHOTO</span>} />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Unfollow </button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users;