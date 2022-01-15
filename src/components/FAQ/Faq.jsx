import Acordeon from "./Accordion"

const Faq = () => {
    return (
        <div className='bg-fondoSeccionPreguntas w-full pb-12'>
            <h3 className='text-colortitulo text-5xl text-center font-semibold py-12'>Preguntas Frecuentes</h3>
            <div className="accordion accordion-flush container w-3/4 mx-auto grid grid-cols-1 gap-2" id="accordionExample">
                <Acordeon title="¿Qué es Finder Now?" collapse="collapseOne"/>
                <Acordeon title="¿Qué hacemos con tus datos?" collapse="collapseTwo"/>
                <Acordeon title="¿Dónde se encuentran nuestras oficinas?" collapse="collapseThree"/>
                <Acordeon title="¿finder Now tiene cobertura intenacional" collapse="collapseFour"/>
            </div>
        </div>
    )
}

export default Faq
