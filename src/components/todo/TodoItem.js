import React from 'react'
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
	console.log("Logging the props value",props);
	return(
			
		<li>
          <input type="checkbox"
           defaultChecked = {props.isComplete}/>{props.name}
          </li>)
}

TodoItem.propTypes = {
	name: PropTypes.string.isRequired,
	isComplete:PropTypes.bool,
	id: PropTypes.number
}