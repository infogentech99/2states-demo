export default function ThingsToKnow() {
    return (
        <>
            <div className="bg-[url('/assets/thingtoknow.png')] bg-cover bg-no-repeat">
                <div className="lg:h-460 md:h-290 h-305">
                    <h1 className="lg:text-[80px] text-3xl text-center text-white lg:pt-42 pt-12">Things to <br />know</h1>
                    <h2 className="lg:text-2xl text-[18px] text-center text-white lg:pt-6 lg:px-60 px-6 lg:mt-4 mt-2">To help you feel at ease and enjoy every moment of the celebrations, we’ve gathered a few thoughtful details we’d love for you to know before the big day.</h2>
                    <div className="flex justify-center mt-20 pb-24">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-24 gap-10 sm:gap-16">
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/weather.png" alt="" className="h-24 w-24" />
                                <h2 className="text-2xl text-[#DEE6FF] mt-2">Weather</h2>
                                <p className="text-[16px] text-[#DEE6FF] mt-1">
                                    It will be mostly cloudy with <br />
                                    temperature reaching up <br />
                                    to 22 degrees at the venue
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/drive.png" alt="" className="h-24 w-24" />
                                <h2 className="text-2xl text-[#DEE6FF] mt-2">Staff</h2>
                                <p className="text-[16px] text-[#DEE6FF] mt-1">
                                    We recommend the nearby <br/>lodge called VEGA near the <br/>venue for the staff members
                                </p>
                            </div>
                          <div className="flex flex-col items-center justify-center text-center">
                                <img src="/assets/car.png" alt="" className="h-24 w-24" />
                                <h2 className="text-2xl text-[#DEE6FF] mt-2">Parking</h2>
                                <p className="text-[16px] text-[#DEE6FF] mt-1">
                                    Valet parking for all our <br/>guests will be available <br/>at the venue
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}