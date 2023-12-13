import Hair from '../../assets/HairAffair.png'

const Hero = () => {
    return(
        <div className="bg-white">
            <section className='flex flex-col'>
                <div>
                    <img src={Hair} alt="" className='h-40 -my-10' />
                </div>
                <hr className='w-80 ml-4'/>
                <div className='p-20 flex flex-col'>
                    <span className='text-4xl font-thin'>Thicker,</span>
                    <span className='text-8xl'>Fuller and</span>
                    <span className='text-4xl font-thin'>Healthier Hair</span>
                    <div className='flex flex-col pt-4'>
                        <span className=''>'It's all about you...'</span>
                        <span className='mb-4'>Create your style with us</span>
                        <button className='bg-black w-36 p-1 text-white text-sm border-2'>SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section>
                <img src="" alt="" />
            </section>
        </div>
    )
}

export default Hero;