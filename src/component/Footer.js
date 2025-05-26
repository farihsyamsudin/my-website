const Footer = () => {
    return (
        <footer class=" shadow bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Farih Syamsudin</span>
                    </div>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
                        <li>
                            <a rel='noreferrer noopener' target='_blank' href="https://github.com/farihsyamsudin" class="hover:underline me-4 md:me-6">Github</a>
                        </li>
                        <li>
                            <a rel='noreferrer noopener' target='_blank' href="https://www.instagram.com/cursaaa/" class="hover:underline me-4 md:me-6">Instagram</a>
                        </li>
                        <li>
                            <a rel='noreferrer noopener' target='_blank' href="https://www.linkedin.com/in/farih-syamsudin/" class="hover:underline me-4 md:me-6">Linkedin</a>
                        </li>
                        <li>
                            <a rel='noreferrer noopener' target='_blank' href="mailto:farihsyamsudin31@upi.edu" class="hover:underline">Email</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                <span class="block text-sm  sm:text-center text-gray-400">© 2023 Farih Syamsudin. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer