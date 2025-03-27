export function Footer(){

    const data = new Date();

    return(
        <>
            {/* Footer */}
            <footer className="max-w-7xl w-full mx-auto flex justify-center">
                <span className="font-sora font-light text-lg mb-4 text-center
                md:text-xl md:mb-2 md:text-start
                ">
                    {`ADAC Finance © Copyright ${data.getFullYear()}`}
                </span>
            </footer>
        
        </>
    )
}