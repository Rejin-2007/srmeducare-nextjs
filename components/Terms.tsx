// components/Terms.tsx
"use client";

import React, { useState } from "react";

interface Section {
  title: string;
  content: string;
}

interface Content {
  title: string;
  sections: Section[];
}

type Language = "english" | "malayalam";

const Terms = () => {
  const [language, setLanguage] = useState<Language>("english");

  const content: Record<Language, Content> = {
    english: {
      title: "Terms & Conditions",
      sections: [
        {
          title: "Classes and Doubt Clarification",
          content:
            "Daily classes are provided at 7:00 PM as video/audio recordings via Telegram. Doubts arising during self-study within the next 24 hours should be clarified personally through WhatsApp at that time.",
        },
        {
          title: "Tests and Corrections",
          content:
            "After attempting the daily test provided via a link, immediately send a screenshot of the marks. The imposition for mistakes should be submitted within one week.",
        },
        {
          title: "Mandatory Responses",
          content:
            "To ascertain compliance with points 1 and 2, it is mandatory to respond to all messages and calls given daily.",
        },
        {
          title: "Student's Responsibility",
          content:
            "Not watching the provided classes or not utilizing the service is solely the student's fault. The institution should not incur any financial liability due to this.",
        },
        {
          title: "Payment Schedule",
          content:
            "Payments must be made strictly on the dates specified in the payment agreement.",
        },
        {
          title: "Book Cost and Penalty",
          content:
            "If course payment is not completed for any reason, the total cost of the books must be paid compulsorily within the first three weeks. Additionally, a fine of ₹1500 must be paid.",
        },
        {
          title: "Legal Action",
          content:
            "Violation of these terms will result in appropriate legal action.",
        },
      ],
    },
    malayalam: {
      title: "നിബന്ധനകളും വ്യവസ്ഥകളും",
      sections: [
        {
          title: "ക്ലാസുകളും സംശയനിവാരണവും",
          content:
            "എല്ലാ ദിവസവും വൈകുന്നേരം 7:00 മണിക്ക് വീഡിയോ/ഓഡിയോ റെക്കോർഡുകളായാണ് ക്ലാസുകൾ ടെലഗ്രാം വഴി നൽകുന്നത്. തുടർന്ന് വരുന്ന 24 മണിക്കൂറിനുള്ളിൽ സംശയങ്ങൾ വാട്‌സ്ആപ്പ് വഴി വ്യക്തിപരമായി ചോദിക്കണം.",
        },
        {
          title: "ടെസ്റ്റുകളും തെറ്റുതിരുത്തലുകളും",
          content:
            "ലിങ്ക് വഴി നൽകുന്ന ടെസ്റ്റ് ചെയ്ത ശേഷം മാർക്കിന്റെ സ്ക്രീൻഷോട്ട് ഉടൻ അയയ്ക്കണം. തെറ്റുകളുടെ ഇമ്പോസിഷൻ ഒരാഴ്ചയ്ക്കുള്ളിൽ അയയ്ക്കണം.",
        },
        {
          title: "നിർബന്ധിത മറുപടികൾ",
          content:
            "മുകളിലെ കാര്യങ്ങൾ പാലിക്കുന്നുണ്ടോയെന്ന് ഉറപ്പാക്കാൻ എല്ലാ ദിവസവും വരുന്ന മെസ്സേജുകൾക്കും കോളുകൾക്കും മറുപടി നൽകണം.",
        },
        {
          title: "വിദ്യാർത്ഥിയുടെ ഉത്തരവാദിത്വം",
          content:
            "തരുന്ന ക്ലാസുകൾ കാണാതിരിക്കുകയും സർവീസ് ഉപയോഗിക്കാതിരിക്കുകയും ചെയ്താൽ അതിന്റെ ഉത്തരവാദിത്വം വിദ്യാർത്ഥിക്കാണ്.",
        },
        {
          title: "പേയ്‌മെന്റ് ഷെഡ്യൂൾ",
          content:
            "പേയ്‌മെന്റ് എഗ്രിമെന്റിൽ പറയുന്ന തീയതികളിൽ തന്നെ പേയ്‌മെന്റ് പൂർത്തിയാക്കണം.",
        },
        {
          title: "പുസ്തകങ്ങളുടെ വിലയും പിഴയും",
          content:
            "പേയ്‌മെന്റ് പൂർത്തിയാക്കാത്ത പക്ഷം പുസ്തകങ്ങളുടെ മുഴുവൻ തുകയും ആദ്യ മൂന്ന് ആഴ്ചയ്ക്കുള്ളിൽ അടയ്‌ക്കണം. കൂടാതെ ₹1500 പിഴയും അടയ്‌ക്കേണ്ടതാണ്.",
        },
        {
          title: "നിയമനടപടി",
          content:
            "നിബന്ധനകൾ ലംഘിക്കുന്നവർക്ക് നിയമപരമായ നടപടികൾ നേരിടേണ്ടി വരും.",
        },
      ],
    },
  };

  const current = content[language];

  return (
    <section className="bg-linear-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full translate-x-20 translate-y-20"></div>

        {/* Language Toggle */}
        <div className="absolute top-6 right-6 flex bg-gray-200 rounded-lg p-1 z-10">
          {(["english", "malayalam"] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-5 py-2.5 rounded-md font-medium transition-all duration-300 ${
                language === lang
                  ? "bg-linear-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
              aria-label={`Switch to ${lang === "english" ? "English" : "Malayalam"}`}
              aria-pressed={language === lang}
            >
              {lang === "english" ? "English" : "മലയാളം"}
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {current.title}
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Please read the following terms and conditions carefully before enrolling in our courses.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 relative z-10">
          {current.sections.map((section: Section, index: number) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-8 py-2 hover:border-blue-700 transition-colors duration-300 bg-gray-50 hover:bg-white rounded-r-lg p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <div className="bg-linear-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
            <p className="text-gray-700 font-medium">
              By enrolling in our courses, students acknowledge that they have read, understood, and agreed to all the above terms and conditions.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Last updated: {new Date().toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>For any queries regarding these terms, please contact us at:</p>
          <p className="font-medium text-blue-600 mt-1">support@srmeducare.com | +91 XXXXX XXXXX</p>
        </div>
      </div>
    </section>
  );
};

export default Terms;