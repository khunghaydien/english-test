import VolumeBasic, { VolumeBasicProps } from "./Basic"
import VolumeDetail, { VolumeDetailProps } from "./Detail"
import './index.scss'

export type Volume = {
    basic: VolumeBasicProps,
    detail: VolumeDetailProps
}
type Props = {
    id: string,
    volume: Volume
}
const VolumeInfo = ({ volume }: Props) => {
    const { basic, detail } = volume
    return (
        <div className='volume-info'>
            <VolumeBasic volumeBasic={basic} id={'1'} />
            <VolumeDetail volumeDetail={detail} id={'2'} />
            <div></div>
        </div>
    )
}
export default VolumeInfo