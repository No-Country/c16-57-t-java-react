import { Boton } from '../components/Boton'
import image from '@/assets/verduMarket.png'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
<main className='flex flex-col items-center justify-center md:flex-col lg:flex-col md:justify-center lg:justify-center md:items-center lg:items-center ' >
<Link to='/intro'>
<img src={image} alt="verduMarket" className=' rounded-xl min-w-[500px]' />
</Link>

<Boton texto="INGRESO" to='/intro'/>

</main>
)}

export default Landing