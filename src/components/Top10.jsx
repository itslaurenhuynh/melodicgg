export default function Top10AllTime(){  
    return(
        <div className="flex flex-col row-start-4 bg-main-blue px-2.5 pb-2.5 space-y-1.5 rounded-2xl">
            <div className="flex justify-center">
                <p>Top 10 All Time</p>
            </div>
            <div className="flex flex-row bg-box-blue rounded-2xl p-1">
                <div className="p-1">
                    <img className="rounded-full h-12" src="/pic.jpg"/>
                </div>
                <div className="flex flex-auto items-center p-2">
                    <p>Artist</p>
                </div>
            </div>
            <div className="flex flex-row bg-box-blue rounded-2xl p-1">
                <div className="p-1">
                    <img className="rounded-full h-12" src="/pic.jpg"/>
                </div>
                <div className="flex flex-auto items-center p-2">
                    <p>Artist</p>
                </div>
            </div> 
        </div>
    );
}