import Head from "next/head"
import Profile from "@/components/Profile"
import TopAllTime from "@/components/TopAllTime"
import Top1Month from "@/components/Top1Month"
import Top10AllTime from "@/components/Top10"
import RecentSongs from "@/components/RecentSongs"

export default function Home(){
    return(
        <>
            <Head>
                <title>Melodic GG</title>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                <div className="flex flex-col min-w-fit max-w-min mx-96 mt-5">
                    <Profile />
                    <div className="grid grid-cols-[300px_700px] gap-3.5">
                        <div className="grid auto-rows-max gap-3.5">
                            <TopAllTime />
                            <Top1Month />   
                            <Top10AllTime />                                     
                        </div>
                        <div className="pt-3.5">
                            <RecentSongs />
                        </div>
                    </div>
                </div> 
            </main> 
        </>
    )
}