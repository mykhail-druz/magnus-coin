import {
  AboutMagnusFrame,
  EiffelFrame,
  Footer,
  Header,
  MeetMagnusFrame,
  MoonFrame,
  MountainFrame,
  RocketFrame,
  TokenomicsFrame,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Header />

      <MountainFrame />
      <EiffelFrame />
      <RocketFrame />
      <MoonFrame />
      <MeetMagnusFrame />
      <AboutMagnusFrame />
      <TokenomicsFrame />

      <Footer />
    </main>
  );
}
