export type VolumeDetailProps = {
    published: string,
    views: number,
    testTaken: number,
}
type Props = {
    id: string,
    volumeDetail: VolumeDetailProps
}
const VolumeDetail = ({ volumeDetail }: Props) => {
    const { published, views, testTaken } = volumeDetail
    return (
        <div className="volume-detail">
            <div className="volume-published">{published}</div>
            <div className="volume-views">{views}</div>
            <div className="volume-test-taken">{testTaken}</div>
        </div>
    )
}
export default VolumeDetail