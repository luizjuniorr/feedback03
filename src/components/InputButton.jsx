export function InputButton({ value, setNotaAvaliacao }) {
    
    function handleAlterarNotaAvaliacao(nota) {
        setNotaAvaliacao(nota)
      }

    return (
        <input type="button" value={value} className="bg-dark-blue w-10.5 h-10.5 rounded-full text-sm leading-2 text-medium-gray focus:bg-medium-gray focus:text-white hover:bg-orange hover:text-white cursor-pointer sm:w-13 sm:h-13 transition duration-400" onClick={() => handleAlterarNotaAvaliacao(value)} />
    )
}