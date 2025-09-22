"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Merci de valider le reCAPTCHA ✅");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },

        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setCaptchaToken(null);
    } catch (err) {
      console.error("Erreur EmailJS :", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white shadow-md rounded-2xl p-6 border border-border w-full max-w-2xl"
    >
      <h2 className="text-2xl font-heading-sb text-center mb-4">
        Contactez-nous
      </h2>

      {/* Nom / Prénom */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2"
          required
        />
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-border rounded-md px-4 py-2"
          required
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-border rounded-md px-4 py-2"
        required
      />

      {/* Téléphone */}
      <input
        type="tel"
        name="phone"
        placeholder="Téléphone (optionnel)"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border border-border rounded-md px-4 py-2"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Votre message..."
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full border border-border rounded-md px-4 py-2 resize-none"
        required
      />

      {/* reCAPTCHA */}
      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          onChange={(token) => setCaptchaToken(token)}
        />
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 rounded-md bg-primary text-white py-3 px-6 hover:bg-primary/90 transition disabled:opacity-50"
      >
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {/* Messages de feedback */}
      {status === "success" && (
        <p className="text-green-600 text-center">
          ✅ Message envoyé avec succès !
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center">
          ❌ Une erreur est survenue, réessayez plus tard.
        </p>
      )}
    </form>
  );
}
