export default function RecentSongs(){
    return(
        <div className="flex flex-col w-auto row-start-2 row-end-6 bg-main-blue rounded-2xl p-1 px-2.5 pb-2.5 space-y-1.5">
            <div className="pl-3 pt-1">
                <p>Recently Played Songs</p>
            </div>
            <div className="grid grid-cols-[15%_20%_45%_20%] bg-box-blue rounded-2xl p-2">
                <div className="flex flex-col items-center justify-center">
                    <p>date</p>
                    <p>time</p>
                </div>
                <div className="flex justify-center">
                    <img className="h-20" src="/pic.jpg" />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="truncate">Song name</p>
                    <p>artist</p>
                    <p className="truncate">album</p>
                </div>
                <div className="flex items-center justify-center">
                    <p>song time</p>
                </div>
            </div>

        </div>
    );
}