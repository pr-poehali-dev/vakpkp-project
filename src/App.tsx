
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ServicesIndex from "./pages/ServicesIndex";
import PricesPage from "./pages/PricesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import ContactsPage from "./pages/ContactsPage";
import BlogIndex from "./pages/BlogIndex";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

// Services
import ZamenaProvodki from "./pages/services/ZamenaProvodki";
import UstanovkaRozetok from "./pages/services/UstanovkaRozetok";
import MontazhOsveshcheniya from "./pages/services/MontazhOsveshcheniya";
import SborkaElektroschita from "./pages/services/SborkaElektroschita";
import RemontElektriki from "./pages/services/RemontElektriki";
import AvarijnyElektrik from "./pages/services/AvarijnyElektrik";
import ElektrikaKvartira from "./pages/services/ElektrikaKvartira";
import ElektrikaDom from "./pages/services/ElektrikaDom";
import ElektrikaNovostrojka from "./pages/services/ElektrikaNovostrojka";
import ElektrikaUnderKey from "./pages/services/ElektrikaUnderKey";
import PodkluchenieVarihnoj from "./pages/services/PodkluchenieVarihnoj";
import PodkluchenieDuhovki from "./pages/services/PodkluchenieDuhovki";
import PodklyuchenieStiralnoj from "./pages/services/PodklyuchenieStiralnoj";
import ElektromontazhIzhevsk from "./pages/services/ElektromontazhIzhevsk";
import UstanovkaVykluchatelej from "./pages/services/UstanovkaVykluchatelej";
import UstanovkaLyustry from "./pages/services/UstanovkaLyustry";
import MontazhSvetilnikov from "./pages/services/MontazhSvetilnikov";
import ZamenaAvtomatov from "./pages/services/ZamenaAvtomatov";
import UstanovkaUZO from "./pages/services/UstanovkaUZO";
import PerenozRozetok from "./pages/services/PerenozRozetok";
import MontrazhProvodki from "./pages/services/MontrazhProvodki";
import ElektrikIzhevsk from "./pages/services/ElektrikIzhevsk";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Main pages */}
          <Route path="/services/" element={<ServicesIndex />} />
          <Route path="/prices/" element={<PricesPage />} />
          <Route path="/portfolio/" element={<PortfolioPage />} />
          <Route path="/reviews/" element={<ReviewsPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/faq/" element={<FaqPage />} />
          <Route path="/contacts/" element={<ContactsPage />} />
          <Route path="/blog/" element={<BlogIndex />} />
          <Route path="/privacy/" element={<PrivacyPage />} />

          {/* Service pages */}
          <Route path="/services/elektrik-izhevsk/" element={<ElektrikIzhevsk />} />
          <Route path="/services/elektromontazh-izhevsk/" element={<ElektromontazhIzhevsk />} />
          <Route path="/services/zamena-provodki-izhevsk/" element={<ZamenaProvodki />} />
          <Route path="/services/montazh-elektroprovodki-izhevsk/" element={<MontrazhProvodki />} />
          <Route path="/services/ustanovka-rozetok-izhevsk/" element={<UstanovkaRozetok />} />
          <Route path="/services/perenos-rozetok-izhevsk/" element={<PerenozRozetok />} />
          <Route path="/services/ustanovka-vyklyuchatelej-izhevsk/" element={<UstanovkaVykluchatelej />} />
          <Route path="/services/ustanovka-lyustry-izhevsk/" element={<UstanovkaLyustry />} />
          <Route path="/services/montazh-svetilnikov-izhevsk/" element={<MontazhSvetilnikov />} />
          <Route path="/services/montazh-osveshcheniya-izhevsk/" element={<MontazhOsveshcheniya />} />
          <Route path="/services/sborka-elektroschita-izhevsk/" element={<SborkaElektroschita />} />
          <Route path="/services/zamena-avtomatov-izhevsk/" element={<ZamenaAvtomatov />} />
          <Route path="/services/ustanovka-uzo-izhevsk/" element={<UstanovkaUZO />} />
          <Route path="/services/remont-elektriki-izhevsk/" element={<RemontElektriki />} />
          <Route path="/services/avarijnyj-elektrik-izhevsk/" element={<AvarijnyElektrik />} />
          <Route path="/services/elektrika-v-kvartire-izhevsk/" element={<ElektrikaKvartira />} />
          <Route path="/services/elektrika-v-dome-izhevsk/" element={<ElektrikaDom />} />
          <Route path="/services/elektrika-v-novostrojke-izhevsk/" element={<ElektrikaNovostrojka />} />
          <Route path="/services/elektrika-pod-klyuch-izhevsk/" element={<ElektrikaUnderKey />} />
          <Route path="/services/podklyuchenie-varochnoj-paneli-izhevsk/" element={<PodkluchenieVarihnoj />} />
          <Route path="/services/podklyuchenie-dukhovki-izhevsk/" element={<PodkluchenieDuhovki />} />
          <Route path="/services/podklyuchenie-stiralnoj-mashiny-izhevsk/" element={<PodklyuchenieStiralnoj />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
