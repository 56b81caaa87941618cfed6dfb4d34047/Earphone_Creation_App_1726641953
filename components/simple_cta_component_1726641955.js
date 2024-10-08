<!-- 
INSTRUCTION: Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
-->
<template>
    <section id="cta-component" style="min-height: 510px" class="flex-1 bg-gradient-to-br from-purple-900 via-pink-800 to-black min-h-[390px] py-16 px-4">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex mb-4">
                    <h2 id="cta-title" class="flex-1 text-3xl font-extrabold leading-tight tracking-tight text-pink-200">
                        Craft Cosmic Sound: Your Ethereal Earphone Factory
                    </h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-6">
                    <p id="cta-subtitle" class="flex-1 font-light text-purple-200 md:text-lg">
                        Transform celestial ideas into otherworldly earphones with our dreamlike manufacturing platform
                    </p>
                </div>

                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <span class="flex items-center justify-center">
                            <i class='bx bx-planet mr-2'></i>
                            Launch Your Cosmic Creation
                        </span>
                    </a>
                </div>

                <div id="great-button-container" class="flex mt-4">
                    <button id="great-button" class="flex-1 text-white bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <span class="flex items-center justify-center">
                            <i class='bx bx-check-circle mr-2'></i>
                            Great
                        </span>
                    </button>
                </div>

                <div id="form-container" class="flex mt-8">
                    <form id="cta-form" class="flex-1 space-y-4">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
                        <button type="submit" class="w-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <span class="flex items-center justify-center">
                                <i class='bx bx-send mr-2'></i>
                                Send Message
                            </span>
                        </button>
                    </form>
                </div>

                <div id="form-container" class="flex mt-8">
                    <form id="cta-form" class="flex-1 space-y-4">
                        <input type="text" placeholder="Your Name" class="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <input type="email" placeholder="Your Email" class="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500">
                        <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
                        <button type="submit" class="w-full text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                            <span class="flex items-center justify-center">
                                <i class='bx bx-send mr-2'></i>
                                Send Message
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            expanded: false,
            tab: null
        };
    },
    methods: {
        // Form submission method
        submitForm(event) {
            event.preventDefault();
            console.log("Form submitted");
            // Add your form submission logic here
        }
        // End of form submission method
    }
        // Form submission method
        submitForm(event) {
            event.preventDefault();
            console.log("Form submitted");
            // Add your form submission logic here
        }
        // End of form submission method
    }
};
};
</script>
