import {useState} from 'react'
import '../styles/Textarea.css'

function Textarea(props)
{
	const [count,setCount] = useState(0)
	return(

		<div className="Textarea">
			<p id={props.id}>{props.children}</p>
		</div>
	)
}


export default Textarea

