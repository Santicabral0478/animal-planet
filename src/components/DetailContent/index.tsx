import Link from "next/link";

export const DetailContent = ({content} : {content: any})=>{

    return(
        <>
            <article className="contentDetailContainer">
                <div className="imageContainer">
                    {/* CONTAINER OF IMAGE CONTENT */}
                </div>
                <div className="detailsVideoContainer">
                    <h3 className="logoContent">Logo</h3>
                    <div className="spaceLetter"></div>
                    <div className="detailsContent">
                        <h1>Content Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit in atque, tempore sed sunt mollitia fuga deserunt perspiciatis officia blanditiis, aliquid corporis quo beatae ad expedita voluptatem vel velit!</p>
                        <Link href={"#"} >
                            <button>
                                View Now
                            </button>
                        </Link>
                    </div>
                </div>
            </article>
            <article className="videoContent">
                {/* ELEMENTS TO PLAY VIDEO */}
            </article>
        </>
    )

}

export default DetailContent;