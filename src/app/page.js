import { CollabsSection } from "./component/MainSection/CollabrationSection/CollabsSection";
import { ConstructionSection } from "./component/MainSection/ConstructionSection/ConstructionSection";
import { Faqs } from "./component/MainSection/FAQs/Faqs";

import { GlimpseSection } from "./component/MainSection/GlimpseSection/GlimpseSection";
import { HeroSection } from "./component/MainSection/HeroSection";
import { InteriorSection } from "./component/MainSection/InteriorSection/InteriorSection";
import { Services } from "./component/MainSection/Services/Services";
import { Packages } from "./component/MainSection/Packages/Packages";
import { Projects } from "./component/MainSection/Projects/Projects";
import { CustomerReviews } from "./component/MainSection/CustomerReviews/CustomerReviews";
import { TableSection } from "./component/MainSection/TableSection/TableSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full justify-between bg-white">
       <HeroSection/>
       <ConstructionSection />
       <InteriorSection  />
       <Services />
       
       <div id="packages">
         <Packages />
       </div>
       <GlimpseSection />
       
       
       <TableSection />

       <div id="ourprojects">
         <Projects />
       </div>
     
       <Faqs />
       <CollabsSection />
    </main>
  );
}
