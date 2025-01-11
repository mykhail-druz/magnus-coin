import {
  AboutMagnusFrame,
  EiffelFrame,
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
    </main>
  );
}
