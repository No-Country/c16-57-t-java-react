import image from '../utils/img/verduMarket.png'
import {Link} from 'react-router-dom'
const Landing = () => {
  return (
<main className='flex md:flex lg:flex min-w-[700px]
flex-col md:flex-col lg:flex-col justify-center md:justify-center lg:justify-center items-center md:items-center lg:items-center ' >
<Link to='/intro'>
<img src={image} alt="verduMarket" className=' rounded-xl lg:justify-normal' />
</Link>
<Link to='/intro'>
<button
  className="inline-block mt-4 md:mt-5 lg:mt-6 font-custom cursor-pointer rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-green-900">
  Ingreso
</button>
</Link>
</main>
)}

export default Landing