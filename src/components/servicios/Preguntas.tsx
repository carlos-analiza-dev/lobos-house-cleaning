import { faqs } from "@/data/questionsData";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ButtonContactar from "../ButtonContactar";

const Preguntas = () => {
  const openWhatsApp = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_PHONE;

    const message =
      "Hello, I'm interested in your cleaning services. Could you provide me with more information?";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="px-6 py-12 md:px-24 md:py-14 lg:px-44 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {activeIndex === index && (
                <div className="p-6 pt-0 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Didn&#39;t find what you were looking for? Contact us directly.
          </p>
          <div className="flex justify-center">
            <ButtonContactar openWhatsApp={openWhatsApp} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
