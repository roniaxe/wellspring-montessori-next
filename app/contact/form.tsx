"use client";

import { useActionState } from "react";
import { contactFormSubmit } from "@/app/actions";
import Link from "next/link";

const initialState = {
  error: { name: [], email: [], message: [] },
  success: false,
  formValues: { name: "", email: "", message: "" },
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    contactFormSubmit,
    initialState,
  );

  return state.success ? (
    <div>
      <p className="text-lg text-green-500">
        Your message has been sent successfully!
      </p>
      <Link href="/" className="w-full text-blue-700">
        <p className="text-center">Back to Home</p>
      </Link>
    </div>
  ) : (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          defaultValue={state?.formValues?.name?.toString() || ""}
          required
        />
        <p aria-live="polite" className="text-sm text-red-500">
          {state?.error.name}
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email"
          defaultValue={state?.formValues?.email?.toString() || ""}
          required
        />
        <p aria-live="polite" className="text-sm text-red-500">
          {state?.error.email}
        </p>
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="mb-2 block font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Message"
          rows={10}
          defaultValue={state?.formValues?.message?.toString() || ""}
          required
        ></textarea>
        <p aria-live="polite" className="text-sm text-red-500">
          {state?.error.message}
        </p>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:opacity-50"
          disabled={isPending}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
