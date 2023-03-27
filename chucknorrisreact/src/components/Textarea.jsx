import {useState} from 'react'
import '../styles/Textarea.css'

function Textarea(props)
{
	const [count,setCount] = useState(0)
	return(

		<div className="Textarea">
			<b><p id={props.id}>{props.children}</p></b>
		</div>
	)
}


export default Textarea

