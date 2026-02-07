// components/AboutSection.tsx

import Image from "next/image";

const AboutSection = () => {
  const aboutData = {
    title: "About SRM Educare – Kerala PSC Online Coaching",
    logo: "/logo.webp",
    content: {
      introduction:
        "SRM EDUCARE INDIVIDUAL ONLINE Educating Service was established in 2021 under the company SREERAM AGENCY, focusing on Kerala PSC online classes and personal coaching.",
      history:
        "Initially started as an offline Kerala PSC coaching center, SRM Educare later expanded into personalized online classes across Kerala, offering one-to-one guidance for PSC aspirants and students.",
      services: [
        {
          title: "Kerala PSC Online Coaching",
          description:
            "Individual online coaching for Kerala PSC exams including LDC, Degree Level, Prelims & Mains with personal mentors.",
        },
        {
          title: "Online Tuition for School Students",
          description:
            "Live one-to-one online tuition from Grade 1 to Plus Two (STATE, NCERT, ICSE) with subject-wise expert teachers.",
        },
        {
          title: "Entrance Exam Coaching",
          description:
            "Personal online coaching for competitive exams like NEET, KEAM, and JEE.",
        },
        {
          title: "Language Classes",
          description:
            "Grammar-focused online classes for English and Hindi with personal attention.",
        },
      ],
      achievement:
        "Within three years, SRM Educare has become one of the trusted Kerala PSC online coaching centres, helping aspirants achieve excellent results.",
    },
  };

  return (
    <section
      className="py-16 px-6 bg-white overflow-x-hidden"
      aria-labelledby="about-srm-educare"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Logo */}
          <div className="lg:w-2/5 w-full flex justify-center">
            <div className="max-w-xs w-full aspect-square bg-linear-to-br from-blue-50 to-gray-100 rounded-2xl shadow-xl flex items-center justify-center p-6">
              <Image
                src={aboutData.logo}
                alt="SRM Educare Kerala PSC Online Coaching Logo"
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 w-full">
            <h2
              id="about-srm-educare"
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              {aboutData.title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {aboutData.content.introduction}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {aboutData.content.history}
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutData.content.services.map((service, index) => (
                  <article
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600"
                  >
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800 text-lg font-medium">
                {aboutData.content.achievement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
