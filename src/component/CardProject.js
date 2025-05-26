const CardProject = ({projecturl, projecttitle, projectdesc, projectimage}) => {
    const gotoProject = () => {
        window.open(projecturl, '_blank');
    }

    return (
        <div className="flex flex-wrap gap-8 justify-center card-project">
            <div class="relative flex flex-col mt-6 text-gray-700 border-2 border-fourthry bg-white shadow-xl bg-clip-border rounded-xl w-96">
                <div
                    class="relative h-fit border-fourthry border-2 mx-4 -mt-6 overflow-hidden text-white shadow-xl bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img className="object-cover"
                        src={projectimage}
                        alt="card-image" />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {projecttitle}
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        {projectdesc}
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button
                        class="card-project align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={gotoProject} >
                        See Project...
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CardProject