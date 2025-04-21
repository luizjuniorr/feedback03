import iconStar from "../images/icon-star.svg"
import { InputButton } from "./InputButton"

export function CardInicial({ setNotaAvaliacao, notaAvaliacao, setSubmited }) {

    function handleSubmit() {
        if (notaAvaliacao !== 0) {
        setSubmited(true)
        return
        }

        alert("Please, chose a rate button!")
  }

    return (
        <div className="bg-gradient-dark mx-6 p-6 rounded-2xl text-white font-overpass max-w-103">
            <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
                <img src={iconStar} alt="icone da estrela" />
            </div>

            <h1 className="text-2xl font-bold mb-2.5">How did we do?</h1>

            <p className="text-light-gray text-sm leading-1 mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="flex justify-between mb-6">
                <InputButton value={1} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={2} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={3} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={4} setNotaAvaliacao={setNotaAvaliacao}/>
                <InputButton value={5} setNotaAvaliacao={setNotaAvaliacao}/>
            </div>

            <button className="bg-orange w-full py-3 uppercase text-sm rounded-3xl tracking-1 font-bold hover:bg-white hover:text-orange cursor-pointer transition duration-400" onClick={handleSubmit}>Submit</button>
        </div>
    )
}