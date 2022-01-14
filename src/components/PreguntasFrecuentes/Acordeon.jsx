
const Acordeon = ({title, collapse}) => {
    return (
        <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
            <button
                className="
                text-blue-900 
                font-semibold 
                text-xl
                accordion-button
                relative
                flex
                items-center
                w-full
                py-4
                px-5
                text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none
                not:text-blue-900
                "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#"+collapse}
                aria-expanded="false"
                aria-controls={collapse}
            >
                {title}
            </button>
            </h2>
            <div
            id={collapse}
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            >
            <div className="accordion-body py-4 px-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem ducimus iste esse veniam sint quasi? Esse ipsum dolore impedit doloribus sit dignissimos rem quae nesciunt voluptatibus, obcaecati alias? Velit.
            </div>
            </div>
        </div>
    )
}

export default Acordeon
