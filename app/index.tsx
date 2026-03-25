import { MissionVisionValues } from './components/mission-vision/mission-vision.component';
import { Gallery } from './components/gallery/gallery.component';
import { Services } from './components/services/services.component';
import { UpcomingEvents } from './components/events/events.component';
import { ContactSection } from './components/contact/contact.component';
import { Music } from './components/music/music.component';
import { Hero2 } from './components/hero2/hero2.component';
import { ChurchIntro } from './components/church-info/church-info.component';
import { ChurchIntroText } from './components/church-info/church-intro-text-component';

export default function Home() {
  return (
    <div>
      <Hero2 />
      <ChurchIntroText />
      <ChurchIntro />
      <MissionVisionValues />
      <Gallery />
      <Services />
      <UpcomingEvents />
      <Music />
      <ContactSection />
    </div>
  );
}
