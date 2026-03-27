'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mjgpgkvo"); // Your Formspree ID

  if (state.succeeded) {
    return (
      <p className="text-green-500 font-medium text-center mt-4">
        Thanks for reaching out! We'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
      {/* Name */}
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
        required
      />
      <ValidationError 
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      {/* Email */}
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email Address"
        className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
        required
      />
      <ValidationError 
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      {/* Message */}
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Your Message"
        className="w-full p-3 bg-black/40 border border-zinc-700 rounded-lg focus:outline-none focus:border-purple-500"
        required
      />
      <ValidationError 
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 hover:scale-105 transition-transform font-medium"
      >
        Send Message
      </button>
    </form>
  );
}
