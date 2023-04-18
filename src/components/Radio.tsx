type RadioProps = {
    id: string;
    names: string[];
    title: string;
}

export const Radio = ({id, names, title}: RadioProps) => {

        return (

            <fieldset id={id} className="flex items-end flex-col gap-5">
                <p className="text-gray-600 text-sm font-bold">{title}</p>
                <div className="flex flex-row-reverse flex-wrap justify-start gap-4">
                    {names.map((value, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" className="hidden peer" id={id + index} name={id} value=""/>
                                <label htmlFor={id + index}
                                       className={`flex rounded-sm ring-0 justify-center items-center px-3 py-2 bg-gray-200 text-sm peer-checked:ring-1 peer-checked:ring-green-800 peer-checked:bg-green-600/30 cursor-pointer focus:text-gray-600 focus:bg-green-200 focus:ring-1 focus:ring-green-800 md:hover:text-gray-600 md:hover:bg-green-200 md:hover:ring-1 md:hover:ring-green-800`}>{value}</label>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
        );
    }
;