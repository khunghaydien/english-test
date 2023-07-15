type Props = {
    id: string,
    volumeBasic: VolumeBasicProps
}

export type VolumeBasicProps = {
    logoUrl: string,
    logoAlt: string,
    title: string,
    vote: number,
}

const VolumeBasic = ({ volumeBasic }: Props) => {
    const { logoUrl, logoAlt, title, vote } = volumeBasic
    return (
        <div className="volume-basic">
            <div className="volume-logo">
                <img src={logoUrl} alt={logoAlt} />
            </div>
            <div className="title-vote">
                <div className="volume-title">{title}</div>
                <div className="volume-vote">{vote}</div>
            </div>
        </div>
    )
}
export default VolumeBasic