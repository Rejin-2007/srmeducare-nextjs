// app/termsandconditions/page.tsx

import type { Metadata } from "next";
import HomeView from "@/components/HomeView";
import Terms from "@/components/Terms";

export const metadata: Metadata = {
  title: "Terms and Conditions | SRM Educare - Kerala PSC Online Coaching",
  description:
    "Read the terms and conditions of SRM Educare Kerala PSC online coaching services, course usage policies, payments, refunds, and student responsibilities.",
  keywords: [
    "Kerala PSC terms and conditions",
    "online coaching terms Kerala",
    "PSC coaching policies",
    "Kerala PSC course terms",
    "SRM Educare terms",
  ],
  alternates: {
    canonical: "https://www.srmeducare.com/termsandconditions",
  },
  openGraph: {
    title: "Terms and Conditions | SRM Educare Kerala PSC Online Coaching",
    description: "Terms and conditions for SRM Educare Kerala PSC online coaching services",
    url: "https://www.srmeducare.com/termsandconditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main>
      <h1 className="sr-only">
        Terms and Conditions – SRM Educare Kerala PSC Online Coaching
      </h1>

      <HomeView title="📄 Terms & Conditions - Please read carefully" />
      <Terms />
    </main>
  );
}