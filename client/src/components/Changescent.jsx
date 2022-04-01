import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


let scent = [
    {label: "Rosemary", value: "Rosemary"},
    {label: "Peppermint", value: "Peppermint"},
    {label: "Lavendar", value: "Lavendar"}

]


function smell() {
    const [changescents, setChangescent] = useState({
       aromas: ""
    })


const createSmell = async () => {
    let newSmell = await axios.post('http://localhost:3001/smells', smell)
    console.log(newSmell)
}

const handleChange = (e) => {
    setChangescent({...changescent, [e.target.aroma]: e.target.value })

}

// const handleSubmit = (e) => {
//     e.preventDefault()
//     createSmell()
// }

return (
    <div>
        <select>
            <option></option>
        </select>
    </div>
)
}


export default smell;