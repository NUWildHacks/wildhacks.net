import Sponsor from './components/Sponsor';
import SponsorBox from './components/SponsorBox';

export default function Partners() {
  return (
    <SponsorBox title="OUR PARTNERS">
      <Sponsor
        src="/standout-stickers.png"
        alt="StandOut Stickers"
        href="http://hackp.ac/mlh-StandOutStickers-hackathons"
        h={128}
      />
      <Sponsor
        src="/the-planting-hope-company.jpeg"
        alt="The Planting Hope Company"
        href="http://www.plantinghopebrands.com/"
        h={128}
      />
      <Sponsor
        src="/coca-cola.png"
        alt="Coca-Cola"
        href="https://us.coca-cola.com/"
      />
      <Sponsor
        src="/unreal-snacks.png"
        alt="UNREAL"
        href="https://unrealsnacks.com/"
        h={128}
      />
    </SponsorBox>
  );
}
