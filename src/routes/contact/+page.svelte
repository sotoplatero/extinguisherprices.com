<div class="flex items-center bg-white dark:bg-gray-900">
    <div class="container mx-auto">
      <div class="max-w-lg mx-auto bg-white p-5 rounded-md shadow-sm">
        <div class="text-center">
          <h1
            class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200"
          >
            Contact Us
          </h1>
          <p class="text-gray-400 dark:text-gray-400">
            Fill up the form below to send us a message.
          </p>
        </div>
        <div class="m-7">
          <form action="https://api.web3forms.com/submit" method="POST" id="form">
            <input type="hidden" name="access_key" value="0918522e-5af2-4c6f-b173-e00aea51b53c" />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            />
            <input type="checkbox" name="botcheck" id="" style="display: none;" />
            <div class="mb-6">
              <label
                for="name"
                class="block mb-2  text-gray-600 dark:text-gray-400"
                >Full Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                class="input input-bordered w-full ">
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2  text-gray-600 dark:text-gray-400"
                >Email Address</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                class="input input-bordered w-full "
              />
            </div>

            <div class="mb-6">
              <label
                for="message"
                class="block mb-2  text-gray-600 dark:text-gray-400"
                >Your Message</label
              >
  
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                class="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div class="mb-6">
              <button
                type="submit"
                class="btn btn-info w-full"
              >
                Send Message
              </button>
            </div>
            <p class="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  </div>