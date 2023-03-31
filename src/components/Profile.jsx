export default function Profile(){
    return(
        <div className="flex flex-row flex-nowrap bg-main-blue rounded-2xl self-start">
            <div className="p-2">
                <img className="rounded-full h-24" src="/pic.jpg"/>
            </div>
            <div className="p-3 pr-4">
                <p>name</p>
                <p>100 followers</p>
                <p>999 following</p>
            </div>
        </div>
    );
}
