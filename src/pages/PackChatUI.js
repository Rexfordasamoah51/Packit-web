const PackChatUI = () => {

    return (
        <div>
            <section class="hidden lg:block px-4 py-24 mx-auto max-w-7xl">
                <div class="grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32">
                    <div>
                        <p class="mb-2 text-xs font-semibold tracking-wide dark:text-white text-gray-500 uppercase">Message</p>
                        <h1 class="mb-4 text-2xl font-extrabold leading-tight tracking-tight dark:text-white text-left text-gray-900 md:text-4xl">Oops!  We are allergic to Large screen.</h1>
                        <p class="mb-5 text-base text-left dark:text-gray-200 text-gray-800 md:text-xl">We don't have chat support for large screen now. Try with smiler screen</p>
                        
                    </div>
                    <div>
                        <div class="w-full h-full py-48 bg-gray-200 rounded-lg ">
                            
                        </div>
                    </div>
                </div>
            </section>

            <iframe
                className="m-16 mt-10 md:hidden"
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/01650df4-beed-423e-90bb-4c1bd05a69ad">
            </iframe>
            {/* <Helmet>
            <script type="text/javascript"
                id="botcopy-embedder-d7lcfheammjct"
                class="botcopy-embedder-d7lcfheammjct"
                data-botId="609439099e3b0000098e6a2e"
            >
                var s = document.createElement('script');
                s.type = 'text/javascript'; s.async = true;
                s.src = 'https://widget.botcopy.com/js/injection.js';
                document.getElementById('botcopy-embedder-d7lcfheammjct').appendChild(s);
</script>
        </Helmet> */}
        </div>

    )
}

export default PackChatUI
