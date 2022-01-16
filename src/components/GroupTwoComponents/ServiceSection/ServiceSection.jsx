import React from 'react'

const ServiceSection = ({children, number, saving, consumption, power}) => { 
    // Este componente recibe 4 props que son :
    // 1.La prop number es el numero de ofertas encontradas
    // 1.La prop saving es el numero de dinero ahorrado
    // 1.La prop consumption es el consumo medio en Kw
    // 1.La prop power es el consumo por mes en Kwh
    return (
        <section className='w-full max-w-[700px]'>
            <div className='text-center flex flex-col gap-[1rem] mb-[1rem]'>
                <h1 className='text-[#302E60] text-[2.625rem]'>!ENHORABUENA!</h1>
                <p className='text-[1.25rem] mb-[1rem]'>Finder now ha encontrado {number} ofertas económicas Según nuestra estimación, pueden ahorrar {saving} euros al año</p>
                <div className='flex justify-between'>
                    <select className='w-[170px] text-[0.875rem] py-[8px] px-[12px] bg-[#F2F2F2] border-[#CDCDCD] border-[1px] rounded-[5px] outline-none'>
                        {/* No agregue todas la opciones por que aun no se cuales seran por lo que me limite a solo darle estilos a select */}
                        <option value="">Luz y Gas</option>
                    </select>
                    <div>
                        <label htmlFor="#rigth-selected">Ordenar por:</label>
                        {/* A este select tambien lo deje en blanco */}
                        <select id='rigth-selected' className='ml-[10px] w-[170px] text-[0.875rem] py-[8px] px-[12px] bg-[#F2F2F2] border-[#CDCDCD] border-[1px] rounded-[5px] outline-none'>
                        </select>
                    </div>
                </div>
                <p className='text-[0.813rem]'>Precios mensuales estimados para un consumo medio de {consumption}Kw de Potencia y {power}Kwh de consumo/mes. Si conoces los datos de la factura, puedes editar los filtros</p>
            </div>
            <div className='flex flex-col gap-[1rem]'>
                {/* Como este componente recibe children aqui deben de ir el Componente ServiceCard que se va a mapear con los datos obtenidos */}
                {children}
            </div>
        </section>
    )
}

export default ServiceSection
