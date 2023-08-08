import Vote from "../../user/common/Vote";

type Props = {
  id: string;
  volumeBasic: VolumeBasicProps;
};

export type VolumeBasicProps = {
  logoUrl: string;
  logoAlt: string;
  title: string;
  voteStar: number;
  voteNumber: number;
};

const VolumeBasic = ({ volumeBasic }: Props) => {
  const { logoUrl, logoAlt, title, voteStar, voteNumber } = volumeBasic;
  return (
    <div className="volume-basic">
      <div className="volume-basic--logo">
        <img src={logoUrl} alt={logoAlt} />
      </div>
      <div>
        <div className="volume-basic--title">{title}</div>
        <Vote voteNumber={voteNumber} voteStar={voteStar} />
      </div>
    </div>
  );
};
export default VolumeBasic;
