import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
	text-decoration: ${props => (props.done ? "line-through" : "none")};
`;

const XStyle = styled.span`
	:hover {
		color: red;
		cursor: pointer;
	}
`;

//stateless functional component

const TodoItem = props => (
	<div>
		<ListItem done={props.done}>
			{props.title + " - " + props.details + " "}
			<XStyle onClick={props.remove}>X</XStyle>
		</ListItem>
	</div>
);

export default TodoItem;
