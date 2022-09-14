import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPizza } from "../store/pizzas/slice"

const AddPizzaForm = () => {

  const dispatch = useDispatch()

  const [ name, setName ] = useState("Hawaii Pizza")
  const [ image, setImage ] = useState("https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg")
  const [ description, setDescription ] = useState("Hawaiian pizza is a pizza originating in Canada, and is traditionally topped with pineapple, tomato sauce, cheese, and either ham or bacon.")

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log("submitting this info:", name, image, description)
    dispatch(addPizza({ name, image, description }))
  }

  return (
    <div>
      <b>Add Pizza Form</b>
      <form onSubmit={handleSubmit}>
        <p>
          Name: <input value={name} onChange={(event) => setName(event.target.value)} />
        </p>
        <p>
          Image: <input value={image} onChange={(event) => setImage(event.target.value)} />
        </p>
        <p>
          Description:<input value={description} onChange={(event) => setDescription(event.target.value)} />
        </p>
        <button type="submit" >Add Pizza</button>
      </form>
    </div>     
  )
}

export default AddPizzaForm
