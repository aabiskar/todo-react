import React from 'react'
import PropTypes from 'prop-types';

export const TodoItem = (props) => {

	return (
			console.log("@@@@@@",props),
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