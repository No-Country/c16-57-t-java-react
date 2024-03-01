import IconPin from './Icons/IconPin'
import IconStar from './Icons/IconStar'
import IconBasket from './Icons/IconBasket'
import IconTag from './Icons/IconTag'
const ButtonOutstanding = ({text1,text2}) => {
  
  if(text1==="Más"){
    
  }
  
  return (
    <div className='main-container w-[64px] h-[64px] relative mx-auto my-0'>
      <div className='w-[64px] h-[64px] bg-[rgba(9,80,18,0.08)] rounded-[8px] absolute top-0 left-0 overflow-hidden'>
        <section className='flex justify-center items-center'>
         { text1==="Más"? (<IconStar />):("")
}
      
{text1==="Ubicación"? (<IconPin/>):("")}
{text1==="Bolsones"? (<IconBasket/>):("")}
{text1==="Ofertas"? (<IconTag/>):("")}
        </section>

        <span className="flex w-[23px] h-[16px] justify-center items-center font-['Montserrat'] text-[10px] font-medium leading-[16px] text-primary tracking-[0.4px] relative text-center whitespace-nowrap z-[2]  mr-0 mb-0 ml-[20.5px]">
          {text1}
        </span>
       {text2 && <span className="flex w-[49px] h-[16px] justify-center items-center font-['Montserrat'] text-[10px] font-medium leading-[16px] text-primary tracking-[0.4px] relative text-center whitespace-nowrap z-[1] mt-[-8px] mr-0 mb-0 ml-[7.5px]">
          {text2}
        </span>}
      </div>
    </div>
  )
}

export default ButtonOutstanding