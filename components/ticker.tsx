import { FunctionComponent } from "react";

const ticker: FunctionComponent = () => {
    return (
        <div className="relative flex overflow-x-hidden text-red text-lg uppercase border-b border-gray-200 space-x-4">
            <div className="py-2 animate-marquee whitespace-nowrap space-x-4">
                <span className="">Marquee Item 1</span>
                <span className="">Marquee Item 2</span>
                <span className="">Marquee Item 3</span>
                <span className="">Marquee Item 4</span>
                <span className="">Marquee Item 5</span>
            </div>

            <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap space-x-4">
                <span className="">Marquee Item 1</span>
                <span className="">Marquee Item 2</span>
                <span className="">Marquee Item 3</span>
                <span className="">Marquee Item 4</span>
                <span className="">Marquee Item 5</span>
            </div>
        </div>
    )
}

export default ticker;