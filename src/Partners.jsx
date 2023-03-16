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
    </SponsorBox>
  );
}
