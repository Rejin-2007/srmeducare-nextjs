"use client";

import Image from "next/image";

const MainFacultySection = () => {
  const sectionData = {
    title: "LEARN FROM THE BEST",
    description:
      "SRM EDUCARE’s top students have excelled in PSC and entrance exams with outstanding results. Their success reflects the power of personalized coaching and expert guidance.",
    faculty: [
      {
        id: 1,
        name: "Preetha H",
        education: "B.Sc, B.Ed",
        role: "CEO & Head Of Education",
        image: "/PREETHA_H.webp",
        bio: "The only thing that I, along with every teacher here, offer to the world is to provide personalized training to each student who arrives with the hope of succeeding in their studies.",
      },
      {
        id: 2,
        name: "Vimal VS",
        education: "",
        role: "H.O.D (PSC Classes & Marketing Organisation)",
        image: "/vimal_vs.webp",
        bio: "Teaching is not just a job, it's a divine art for our society.",
      },
      {
        id: 3,
        name: "Ashish V S",
        education: "BA & MA Economics",
        role: "PSC Tricks & Tips Master",
        image: "/ASHISH_V_S.webp",
        bio: "All subjects are taught using codes based on previous year question papers to make learning simple.",
      },
      {
        id: 4,
        name: "Shibin",
        education: "BSc Maths",
        role: "Mathematics & English",
        image: "/shibin.webp",
        bio: "Dedicated to ensuring 100% success for every aspirant in Maths and English.",
      },
      {
        id: 5,
        name: "Sariga MS",
        education: "B.Sc Botany",
        role: "Science & Constitution",
        image: "/sariga_MS.webp",
        bio: "Committed to supporting job aspirants until they secure government employment.",
      },
      {
        id: 6,
        name: "Siniya",
        education: "B.Ed with KTET Category 3",
        role: "History, Economics, Civics",
        image: "/SINIYA.webp",
        bio: "Let history, economics, and citizenship guide you to a noble future.",
      },
      {
        id: 7,
        name: "Najitha Sharaf",
        education: "MA Economics",
        role: "PSC - Economics",
        image: "/najitha.webp",
        bio: "",
      },
      {
        id: 8,
        name: "Rijeena Saju",
        education: "MA English Literature",
        role: "English, Geography, Malayalam, Civics",
        image: "/RijeenaSaju.webp",
        bio: "Flexible learning with personal monitoring for every aspirant.",
      },
      {
        id: 9,
        name: "Athira Shaji",
        education: "MA Criminology & PhD (Ongoing)",
        role: "Sports, Arts, Literature, Culture",
        image: "/AthiraShaji.webp",
        bio: "If you have the will, SRM can help you achieve your dream job.",
      },
      {
        id: 10,
        name: "Shubhija RK",
        education: "M.Tech Structural Engineering",
        role: "PSC - Civil Engineering",
        image: "/shubhaja_rk.webp",
        bio: "Committed to guiding students towards successful government careers.",
      },
      {
        id: 11,
        name: "Derly",
        education: "ME Structural Engineering",
        role: "PSC - Civil",
        image: "/derly.webp",
        bio: "",
      },
      {
        id: 12,
        name: "Aju",
        education: "BSc Maths",
        role: "Maths & General PSC",
        image: "/aju.webp",
        bio: "",
      },
      {
        id: 13,
        name: "Vineetha",
        education: "B.Com Cooperation",
        role: "History & Economics",
        image: "/vineetha.webp",
        bio: "Hard work and dedication can fulfill your dream through SRM.",
      },
      {
        id: 14,
        name: "Karishma Nair",
        education: "MA English Literature",
        role: "English Grammar",
        image: "/karishma-nair.webp",
        bio: "Dedicated to achieving 100% success for every English learner.",
      },
      {
        id: 15,
        name: "Aswathy",
        education: "M.Sc, B.Ed",
        role: "Maths - PSC & +1 +2",
        image: "/aswathy.webp",
        bio: "",
      },
    ],
  };

  return (
    <section className="py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {sectionData.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {sectionData.description}
          </p>
        </div>

        <div className="space-y-16">
          {sectionData.faculty.map((person, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={person.id} className="flex flex-col lg:flex-row gap-10 items-center">
                <div
                  className={`w-full lg:w-1/3 ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-contain"
                      priority={index < 2}
                    />
                  </div>
                </div>

                <div
                  className={`w-full lg:w-2/3 ${
                    isEven ? "text-left" : "text-left lg:text-right"
                  }`}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {person.name}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-2">
                    {person.role}
                  </p>
                  {person.education && (
                    <p className="text-gray-600 mb-4">
                      <span className="font-medium">Education:</span>{" "}
                      {person.education}
                    </p>
                  )}
                  {person.bio && (
                    <p className="text-gray-700 leading-relaxed">
                      {person.bio}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainFacultySection;
