export default function Top1Month(){
    return(
        <div className="flex flex-col bg-main-blue row-start-3 row-end-4 rounded-2xl">
            <div className="">
                <p className="flex justify-center">Top Artist - 1 Month</p>
            </div>
            <div className="flex flex-row">
                <div className="p-3 pt-0">
                    <img className="rounded-full h-24" src="/pic.jpg"/>
                </div>
                <div className="flex flex-col justify-center pb-2 pr-2">
                    <h3>Artist</h3>
                    <p>Song name</p>
                </div>
            </div>    
        </div>
    );
}