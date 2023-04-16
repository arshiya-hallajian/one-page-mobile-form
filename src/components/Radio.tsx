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
                                <input type="checkbox" className="hidden peer" id={id + index} name={id} value="" />
                                <label htmlFor={id + index}  className={`flex rounded-sm ring-0 justify-center items-center px-3 py-2 bg-gray-200 text-sm hover:text-gray-600 hover:bg-green-200 hover:ring-1 hover:ring-green-800 peer-checked:ring-1 peer-checked:ring-green-800 peer-checked:bg-green-600/30 cursor-pointer`}>{value}</label>
                            </div>
                        )
                    })}
                </div>
            </fieldset>
        );
    }
;