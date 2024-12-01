import { AlisaIcon, HappIcon, NaturalIcon, SmileIcon, UrbanIcon, WaveIcon } from "../../assets";

export default function Work() {
    return (
        <div className="bg-[#18181C] py-24">
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-white text-[20px] font-[600] sm:max-w-lg text-center sm:text-[40px]">Companies we Worked With in SInce 2015</h3>
                <div className="container mx-auto w-full">
                    <div className="grid  mt-10 lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-10 ">
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={SmileIcon} alt=""  />
                        </div>
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={UrbanIcon} alt=""  />
                        </div>
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={NaturalIcon} alt=""  />
                        </div>
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={WaveIcon} alt=""  />
                        </div>
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={HappIcon} alt=""  />
                        </div>
                        <div className="h-[100px] rounded-xl bg-black flex justify-center items-center"> 
                            <img  src={AlisaIcon} alt=""  />
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}