import { type NextPage } from "next";
import Head from "next/head";
import { cn } from "~/utils/cn";


const GeneratePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Generate Icon with AI</title>
                <meta name="description" content="Generate icons with chatGPT AI" />
            </Head>

            <main className={cn("flex min-h-screen items-center justify-center")}>
                <form className={cn("flex flex-col justify-start items-start")}>
                    <label htmlFor="prompt" className={cn("")}>Prompt</label>
                    <input className={cn()} type="text" name="prompt" id="prompt" />
                    <button type="submit" className={cn("bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 active:bg-blue-800")}>Generate</button>
                </form>
            </main>
        </>
    )
}

export default GeneratePage;