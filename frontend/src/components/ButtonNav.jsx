import { Link } from "react-router-dom"

const ButtonNav = ({
    texto,
    to
  }) => {
  return (
    <>
    <Link to={to}>

    <button
  className="inline-block mt-4 md:mt-5 lg:mt-6 font-custom cursor-pointer rounded-xl bg-#095012 px-4 py-3 md:px-12 md:py-5 lg:px-15 lg:py-6 text-center text-sm md:text-lg lg:text-xl *:font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-green-900 hover:opacity-70">
  {texto} &#8594;
</button>
      </Link>
    </>
  )
}

export default ButtonNav;