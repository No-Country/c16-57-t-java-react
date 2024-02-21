import ButtonGeneric from '@components/ButtonGeneric'
import { SearchBar } from '@components/SearchBar'
const CompradorHome = () => {
  return ( 
    <div className="flex flex-col gap-4 items-center justify-center bg-red-100 w-full h-full">
   <SearchBar className="items-start"/>
    <ButtonGeneric text="Boton Generico" variant="outlined"/>   
 </div>
  )
}

export default CompradorHome