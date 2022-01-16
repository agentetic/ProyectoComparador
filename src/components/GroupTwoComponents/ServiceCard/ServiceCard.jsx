import React from "react"

const ServiceCard = ({title, image, phone, date}) => {
	// Este componente recibe 4 props que son :
    // 1.La prop title que sera el titulo que mostrara el componente
    // 2.La prop image que es el logo de la compañia
    // 1.La prop number que es el numero de telefono de la compañia
    // 1.La prop date que muestra el horario en que la compañia opera
	// Posiblemente se necesitaran mas props asi que las ire agregando gradualmente
	return (
		<div className="border-2 flex border-[#CBCBCB] rounded-[7px]">
			<section className="pt-[5px] pb-[14px] px-[10px] mr-auto">
				<h3 className="mb-[15px]">{title}</h3>
				<div className="flex gap-8">
					<img className="w-[80px] h-auto" src={image} alt="Logo"/>
					<p className="text-[0.813rem] leading-[15px]">
						Sin permanencia
						<br/>
						Precio fijo durante 12 meses
						<br/>
						50% descuneto en
						<br/>
						mantenimiento
						<br/>
						Bono Mediamark
					</p>
				</div>
			</section>
			<section className="bg-[#999999] text-[0.781rem] flex flex-col text-white pb-[9px] px-[5px] pt-auto">
				<p className="font-bold mt-auto leading-[16px]">
					Usted Ahorra
					<br/>
					<span className="font-normal">
						300 €/año
					</span>
				</p>

				<p className="font-bold leading-[16px]">
					Luz
					<br/>
					<span className="font-normal">
						XXPotencia / XXXEnergía
					</span>
				</p>	

				<p className="font-bold leading-[16px]">
					Gas
					<br/>
					<span className="font-normal">
						xxxCoste fijo / xcoste variables
					</span>
				</p>		
			</section>
			<section className="pl-[6px] pr-[9px] pt-[22px] pb-[12px] w-auto flex flex-col gap-[1.4rem] items-center">
				<div className="flex items-center">
					<div className="bg-[#74C045] rounded-full w-[40px] h-[40px] mr-[4px]"></div>
					<p className="text-[1.25rem] leading-[14px] text-right">
						{phone}
						<br/>
						<span className="text-[0.663rem]">
							{date}
						</span>
					</p>
				</div>
				<button className="p-[0.5rem] bg-[#74C045] m-auto rounded-[5px]">Más Información</button>
			</section>
		</div>
	)
}

export default ServiceCard