import {
  EiffelFrame,
  Header,
  MoonFrame,
  MountainFrame,
  RocketFrame,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Header />

      <MountainFrame />
      <EiffelFrame />
      <RocketFrame />
      <MoonFrame />
    </main>
  );
}
