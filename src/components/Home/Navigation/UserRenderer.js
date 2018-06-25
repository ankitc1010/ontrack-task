import React, { Component } from 'react'
import axios from 'axios'
class UserRenderer extends Component {
	deleteUser = id => {
		console.log('here', id)
		axios
			.post('/user-api/users/deleteUser', { id })
			.then(succ => {
				console.log(succ)
				this.props.deleteUser(id)
			})
			.catch(err => {
				console.log(err)
			})
	}
	userRender = () => {
		let { users } = this.props
		if (users === null) {
			return <div>Loading...</div>
		} else if (users.length === 0) {
			return <div class="empty-user">No user added yet.</div>
		} else {
			return users.map(user => {
				return (
					<div key={user.id} className="sales-user-delete">
						<div>{user.email}</div>
						<button onClick={() => this.deleteUser(user.id)}>Delete</button>
					</div>
				)
			})
		}
	}
	render() {
		return <div>{this.userRender()}</div>
	}
}

export default UserRenderer
//getusers
//postuser
