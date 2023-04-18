import {Radio} from "./components/Radio";
import React from "react";

const App = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("you submitted");
    }

    return (
        <div className="flex flex-col w-full h-screen items-end bg-white px-5 overflow-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.9}
                 stroke="currentColor" className="w-6 h-6 mt-5 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>

            <h2 className="flex items-center mb-5">
                <div className="group relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-5 h-5 text-green-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                    </svg>
                    <span
                        className="absolute group-hover:flex hidden transition -top-1 right-6 w-40 px-2 py-1 bg-green-600/30 rounded-sm text-center font-normal text-green-700 text-sm before:content-[''] after:absolute after:top-1/2  after:left-[100%] after:-translate-y-5 after:border-8 after:border-y-transparent after:border-r-transparent after:border-l-green-600/30">
                    میتوانید یک یا چند گزینه انتخواب نمیایید
                </span>
                </div>
                <span className="text-md font-bold">زمینه فعالیت اختصاصی</span>
            </h2>
            <form onSubmit={(e) => handleSubmit(e)} className="w-full flex flex-auto flex-col self-end gap-4 relative">
                <Radio id="produce" names={['مبل', 'سرویس خواب', 'مبل اداری', 'سایر']} title="تولید کننده محصول"/>
                <Radio id="buyer" names={['خرید عمده مبل', 'خریدار فروشگاه مبل', 'صادر کننده', 'سایر']}
                       title="خریدار عمده"/>
                <Radio id="services" names={['فروشنده مبل', 'مشاور مبل', 'الیاف مبل', 'سایر']} title="خدمات"/>

                <div className="flex flex-auto flex-col justify-end items-center">
                    <button
                        className="w-full h-10 rounded-sm bg-green-700/70 text-white font-bold self-center mx-5"
                        type="submit">ثبت نام
                    </button>
                    <p className="mb-2 text-sm text-center">با ثبت نام در اپلیکیشن ما <span
                        className="text-green-700 underline">قوانین و شرایط ما</span> رو میپذیرید</p>
                </div>
            </form>
        </div>
    )
}

export default App
