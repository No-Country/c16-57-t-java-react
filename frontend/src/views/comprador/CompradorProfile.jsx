import ModeSwitch from "@components/ModeSwitch";
import Perfil from "../../components/Perfil";

const CompradorProfile = () => {
  return (
    <div className="flex flex-col  justify-center w-full h-full gap-4">
    <Perfil/>
      <ModeSwitch />
    </div>
  )
}

export default CompradorProfile