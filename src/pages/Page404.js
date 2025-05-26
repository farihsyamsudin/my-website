import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-5">
            <lottie-player className="w-[50%] mx-auto" src="https://lottie.host/23c25f94-6b8b-4bb7-9649-8e3e6752821e/6jmrJ4LxSG.json" background="transparent" speed="1" loop autoplay></lottie-player>
            <h3 className="text-center font-fredoka pb-[5px]">OOPS, Sepertinya halaman yang anda cari tidak ditemukan</h3>
            <Link to="/"><button className="hover:cursor-pointer block text-center relative z-10 font-fredoka text-large text-secondary hover:underline" >Kembali ke halaman utama</button></Link>
        </div>
    )
}

export default Page404