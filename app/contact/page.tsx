import ContactForm from "./form";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex min-h-fit min-w-[425px] flex-col justify-center md:flex-row md:space-x-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center md:text-left">
            <p className="mt-2 text-lg font-semibold text-gray-800">
              We look forward to hearing from you!
            </p>
            <p className="mt-1 text-gray-600">
              Please fill out the form, or use the contact information below.
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="mx-auto flex max-w-fit items-center space-x-2 md:mx-0 md:max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-500 md:mx-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="text-lg font-medium">
                wellspring-montessori@mail.com
              </span>
            </div>

            <div className="mx-auto flex max-w-fit items-center space-x-2 md:mx-0 md:max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span className="text-lg font-medium">(860) 849-2965</span>
            </div>

            <div className="mx-auto flex max-w-fit items-center space-x-2 md:mx-0 md:max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="text-lg font-medium">Bloomfield, CT</span>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full max-w-md rounded-lg bg-white p-8 shadow-lg md:mt-0">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
