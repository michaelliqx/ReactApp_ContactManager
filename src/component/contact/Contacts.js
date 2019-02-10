import React, {
	Component
} from 'react';
import Contact from './Contact';
import {
	Consumer
} from '../../context';

class Contacts extends Component {
	constructor() {
		super();

	}


	deleteContact = id => {
		const {
			contacts
		} = this.state;

		const newContacts = contacts.filter(c =>
			c.id !== id);

		this.setState({
			contacts: newContacts
		});

	};

	render() {
		return (
			<Consumer>
			{value => {
				const {contacts} = value;
				return (
					<React.Fragment>
					<h1 className = 'display-4 mb-2'>
					<span className = 'text-danger'>
					Contact
					</span> List
					</h1>
			 		{contacts.map(c => 
						<Contact
						key = {c.id}
						c = {c}
						deleteClickHandler = {this.deleteContact.bind(this,c.id)}
				 		/>
			 		)}
					</React.Fragment>
				)
			}}
			</Consumer>
		)


	}
}

export default Contacts