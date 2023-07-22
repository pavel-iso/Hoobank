import {vcard, anly, invoice } from "../assets";
import Button from "./Button";

const Product = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center p-10">
        <div className="p-3">
            <div className="max-w-sm rounded-lg bg-gray-900">
                <a href="#">
                    <img className="rounded-t-lg" src={vcard} alt="card"/>
                </a>
                <div className="p-6">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-poppins font-bold text-white">Virtual Cards</h5>
                    </a>
                    <p className="mb-3 font-poppins font-normal text-gray-400">Mask your Personal and Financial Information</p>
                    <a href="#">
                        <Button styles={`mt-1`} />
                    </a>
                </div>
            </div>
        </div>

        <div className="p-3">
            <div className="max-w-sm rounded-lg bg-gray-900">
                <a href="#">
                    <img className="rounded-t-lg" src={anly} alt="Analysis"/>
                </a>
                <div className="p-6">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-poppins font-bold text-white">Transaction Analysis</h5>
                    </a>
                    <p className="mb-3 font-poppins font-normal text-gray-400">Analyze Various Transaction and Its Impact on Business</p>
                    <a href="#">
                        <Button styles={`mt-1`} />
                    </a>
                </div>
            </div>
        </div>
        
        <div className="p-3">
            <div className="max-w-sm rounded-lg bg-gray-900">
                <a href="#">
                    <img className="rounded-t-lg" src={invoice} alt="Invoice"/>
                </a>
                <div className="p-6">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-poppins font-bold text-white">Billing & Invoicing</h5>
                    </a>
                    <p className="mb-3 font-poppins font-normal text-gray-400">Create Professional Invoices to Stand-Out from other Businesses</p>
                    <a href="#">
                        <Button styles={`mt-1`} />
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Product;
