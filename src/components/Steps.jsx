
import Step from '/img/steps.webp'
import stepsData from '../datas/stepsData'

const Steps = () => {
    return (
        <>
            <div className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className='grid grid-cols-2 gap-10 mx-[70px]'>
                        <div className="w-full relative">
                            <div className='w-[74%] mx-auto mb-[50px] text-end'>
                                <h2 className="text-[67px] font-bold text-[#1F2937] leading-[74px]"> 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Steps</span> of <br/>A Project
                                </h2>
                                <p className="mx-auto max-w-full mt-2 text-[#1F2937] w-full text-[21px] font-[300] leading-[37px]">
                                    I use these steps to reach the destination of your project needs
                                </p>
                            </div>
                            <div className="p-7 backdrop-blur-lg bg-white/[.25] shadow-[0_3px_35px_0px_rgba(2,24,93,0.095)] rounded-[45px]">
                                <img src={Step} alt="steps"/>
                            </div>
                        </div>
                        <div className="w-full ps-10">
                            {stepsData.map(step => (
                                <div key={step.id} className="relative w-full flex items-center mb-5 px-7 py-2 backdrop-blur-lg bg-white/[.15] shadow-[0_3px_35px_0px_rgba(2,24,93,0.095)] rounded-[45px]">
                                    <span className='w-[40px] h-[40px] rounded-full bg-[#1F2937] flex items-center justify-center'>
                                        <h3 className='text-[23px] font-[600] text-white'>{step.id}</h3>
                                    </span>
                                    <div>
                                        <h2 className='text-[12px] font-[600] text-[#1F2937] tracking-wider uppercase bg-white/[.75] rounded-[30px] table'>{step.Name}</h2>
                                        <h4 className="text-[17px] font-[600] text-[#1F2937] tracking-normal">{step.Name}</h4>
                                    </div>
                                    <span className="bg-[#1F2937] w-0.5 h-full top-4 left-[13px] absolute"></span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps