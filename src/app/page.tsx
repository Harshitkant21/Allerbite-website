// import { AboutSection } from "@/components/AboutSection";
// import { ContactUsSection } from "@/components/ContactUs";
// import { FeaturesSection } from "@/components/FeatureSection";
// import Footer from "@/components/Footer";
// import { HomeGemini } from "@/components/HomeGemini";
// import { TeamSection } from "@/components/TeamSection";
// import FloatingDownloadButton from "@/components/ui/FloatingDownloadButton";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black/[0.98] antialiased bg-grid-white/[0.02]">
//       <HomeGemini />
//       <FeaturesSection />
//       <AboutSection />
//       <TeamSection />
//       <ContactUsSection />
//       <Footer />
//       <FloatingDownloadButton />
//     </main>
//   );
// }

import { AboutSection } from "@/components/AboutSection";
import { ContactUsSection } from "@/components/ContactUs";
import { FeaturesSection } from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { HomeGemini } from "@/components/HomeGemini";
import { TeamSection } from "@/components/TeamSection";
import FloatingDownloadWrapper from "@/components/ui/FloatingDownloadWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.98] antialiased bg-grid-white/[0.02]">
      <HomeGemini />
      <FeaturesSection />
      <AboutSection />
      <TeamSection />
      <ContactUsSection />
      <Footer id="footer" />
      <FloatingDownloadWrapper />
    </main>
  );
}
