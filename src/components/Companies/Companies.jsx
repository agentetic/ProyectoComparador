import CardsCompanies from '../CardsCompanies/CardsCompanies';

const Companies = () => {

    const dataCompanies = [
        {
            name: "axa",
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/2048px-AXA_Logo.svg.png',
            id: 1
        },
        {
            name: 'mapre',
            url: 'http://www.numeroservicioalcliente.com/wp-content/uploads/2017/05/Mapfre-01.jpg',
            id: 2
        },
        {
            name: 'mutuaMadrid',
            url: 'https://gt-echeverria.es/wp-content/uploads/2018/02/mm-logo.jpg',
            id: 3
        },
        {
            name: 'direct',
            url: 'http://www.brandemia.org/wp-content/uploads/2014/02/Direct-portada.jpg',
            id: 4
        },
        {
            name: 'verti',
            url: 'http://www.lawebdeseguros.com/wp-content/uploads/2012/11/VERTI.png',
            id: 5
        },
        {
            name: 'allianz',
            url: 'https://www.mediadoresdesegurosdemadrid.com/wp-content/uploads/2014/09/Logo-Allianz.jpeg',
            id: 6
        },
        {
            name: 'mmt',
            url: 'https://i2.wp.com/www.usplus.es/wp-content/uploads/2014/11/Grupo2_1_red.png?fit=450%2C338',
            id: 7
        },
        {
            name: 'nuez',
            url: 'https://www.kelisto.es/assets/providers/seguros-coche/nuez.jpg',
            id: 8
        },
        {
            name: 'lineaDirecta',
            url: 'https://www.masfamilia.org/wp-content/uploads/2019/10/12-1.png',
            id: 9
        },
        {
            name: 'allianzDirect',
            url: 'https://selectra.es/sites/selectra.es/files/es-logo-allianz-direct-350x183.png',
            id: 10
        },
        {
            name: 'zurich',
            url: 'https://bienseguros.es/wp-content/uploads/2018/12/zurich-seguros-logotipo.jpg',
            id: 11
        },
        {
            name: 'qualitas',
            url: 'http://www.lawebdeseguros.com/wp-content/uploads/2012/11/QUALITAS-AUTO.jpg',
            id: 12
        },
        {
            name: 'reale',
            url: 'https://descuentos.reaj.com/wp-content/uploads/2019/11/reale-800x600.png',
            id: 13
        },
        {
            name: 'pelayo',
            url: 'https://www.asociacionmkt.es/wp-content/uploads/2015/04/pelayo300x300.jpg',
            id: 14
        },
        {
            name: 'regal',
            url: 'https://www.arpem.com/wp-content/uploads/2021/06/regal-seguros-200.png',
            id: 15
        },
        {
            name: 'balumba',
            url: 'https://www.comparadorseguros.dev/images/aseguradoras/balumba.png',
            id: 16
        },
        {
            name: 'adeslas',
            url: 'https://www.womens.es/wp-content/uploads/adeslas.jpg',
            id: 17
        },
        {
            name: 'sanitas',
            url: 'http://www.colmedjaen.es/images/catarritis/2020/11/logo-sanitas.jpg',
            id: 18
        },
        {
            name: 'asisa',
            url: 'https://salud24h.com/wp-content/uploads/2020/08/Asisa-logo.jpg',
            id: 19
        },
        {
            name: 'dkv',
            url: 'https://distritodigitalcv.es/wp-content/uploads/2021/04/logo-dkv-300x300.jpg',
            id: 20
        },
        {
            name: 'aegon',
            url: 'https://multimedia.paginasamarillas.es/adsContentSrv/14622252-0-FXEI1xovUj/cda1c60d-2862-470e-9164-309c49448fbe/aegon.jpg',
            id: 21
        },
        {
            name: 'fiatc',
            url: 'https://fedelhorce.es/wp-content/uploads/2020/10/marco-imagen-destacada.jpg',
            id: 22
        },
        {
            name: 'nectar',
            url: 'https://www.conmarca.com/archivos/espectacles_foto_gran/091117195527_nectar-logo_gr.jpg',
            id: 23
        },
        {
            name: 'plusUltra',
            url: 'https://www.grupocatalanaoccidente.com/img/esp/gco/ilg/-/logo%20pu_ndp.jpg',
            id: 24
        }
    ]

    return (
        <div className='bg-backgroundMain flex-column align-center'>
            <h1 className='text-center text-4xl font-semibold text-colortitulo pt-36 pb-5'>Comparamos ofertas de todas las compañias</h1>
            <div className='flex flex-wrap justify-center pb-10'>
                {dataCompanies.map((dataCompanies) => (
                    <CardsCompanies  key={dataCompanies.id} name={dataCompanies.name} url={dataCompanies.url} />
                ) )}
            </div>
        </div>
    )
}

export default Companies