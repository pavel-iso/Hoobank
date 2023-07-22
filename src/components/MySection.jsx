import React from 'react'
import img from '../assets/comanies.png'
import '../components/MySection.css'
function MySection() {
    return (
        <div>
            <section className="bg-[#f5f8fe] relative pt-40 pb-12 -mt-[200px] -z-[100] flexi banana">
                <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row">
                    <div className="flex flex-col justify-center w-full md:max-w-[calc(100%-500px)] sm:my-16 center">
                        <h2 className="font-mullish font-bold text-2xl text-deepBlueHead ">
                            Join the 50,00,000+ businesses using MyPay
                        </h2>
                        <div className="w-6 h-1 bg-greenLight my-4 mb-10"></div>
                        <p className="font-mullish opacity-80">
                            We make it easier for you to focus on building great products while we work on simplifying your payments. Become one of us by joining thousands of our happy users and simplify the online payment experience for your customers.
                        </p>
                        <p className="font-mullish mt-6 opacity-80">
                           <strong> "Focus on your business while we handle the complexities of payments for you."</strong>
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="h-[500px] w-[500px] relative overflow-y-hidden mx-auto aple">
                        <div style={{ background: 'linear-gradient(180deg, #f4f8ff, #fff0)' }} className="absolute w-full h-[150px] top-0 z-50"></div>
                        <img src={img} alt="" className="absolute h-auto object-cover companiesList meow2" />
                        <div style={{ background: 'linear-gradient(0deg, #f4f8ff, #fff0)' }} className="absolute w-full h-[150px] bottom-0 z-50"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MySection;