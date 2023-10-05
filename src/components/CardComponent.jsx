const CardComponent = ({ icon, title, body }) => {
    return (
        <>
            <div
                class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
            >
                <div class="p-1 bg-white rounded-full flex justify-center items-center">
                    <img src={`/${icon}.svg`} width={85/2.5} height={94/2.5} alt='icon' />
                </div>
                <h2 class="text-xl font-bold text-white">
                    {title}
                </h2>
                <p class="text-zinc-200 dark:text-zinc-100 w-3/6">
                    {body}
                </p>
            </div>
        </>
    )
}

export default CardComponent
