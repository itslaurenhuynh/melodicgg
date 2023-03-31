export default function TopAllTime(){
    return(
        <div className="flex flex-col bg-main-blue row-start-2 row-end-3 rounded-2xl">
            <div className="">
                <p className="flex justify-center">Top Artist - All Time</p>
            </div>
            <div className="flex flex-row">
                <div className="p-3 pt-0 min-w-fit max-w-min self-start">
                    <img className="rounded-full h-24" src="/pic.jpg"/>
                </div>
                <div className="flex flex-col justify-center pb-2 pr-2">
                    <h3>artist</h3>
                    <p>song name</p>
                </div>
            </div>
        </div>
    );
}