import mest from '../../assets/img/mest.png';

const PackSponsor = () => {
    return (
        <section class="px-4 py-24 mx-auto max-w-7xl">
            <h1 class="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase dark:text-gray-400">We’re proud to have played a part in these amazing journeys.</h1>
            <div class="grid grid-cols-2 gap-10 text-center lg:grid-cols-2">
                <div class="flex items-center justify-center">
                    <img src="https://www.mest-egypt.com/wp-content/uploads/2020/09/MEST-LOGO-website.png" alt="Todoist Logo" class="block object-contain h-12" />
                </div>
                <div class="flex items-center justify-center">
                    <img src={mest} alt="Slack Logo" class="block object-contain h-12" />
                </div>


            </div>
        </section>

    )
}

export default PackSponsor
