import '../styles/Dropdown.css'

function Dropdown({ options , variant, callback}){

    let classRenderer = function(){

        let classes = [
            'Dropdown', variant
        ]
        return classes. join(" ")
}

let ChangeHandler = function(e){
    console.log(e)
    if(variant !="disabled"){
        callback(e.currentTarget.value)
    }          
}

return(

    <div className={classRenderer()}>
    
    <select name="JokeType" id="JokeType" defaultValue={"Scegli un opzione"} onChange={ChangeHandler}>

    
    <option disabled>Scegli un opzione</option>   
    {options.map((ele, id) => {return <option key={id} value={ele}>{ele}</option>})}
    
    </select> 
    
    </div>
    )
}

export default Dropdown