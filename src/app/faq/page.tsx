import React from "react";
import { faqs } from "./constants";

const FAQPage = () => {
  return (
    <div className="flex-grow overflow-auto pb-5">
      <div className="prose p-4">
        <h2 className="text-lg">Frequently asked questions...</h2>
      </div>

      <section className="flex flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center">
        {faqs.map(({ id, answer, question }) => (
          <div
            className="card bg-base-100 w-full shadow-xl py-3 px-3 md:py-7 md:px-7 md:w-[80%]"
            key={`faq-${id}`}
          >
            <div className="card-body ">
              <div className="prose">
                <h4 className="text-md">{question}</h4>
              </div>
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQPage;
