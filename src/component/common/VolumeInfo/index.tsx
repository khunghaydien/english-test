import VolumeBasic, { VolumeBasicProps } from "./Basic"
import VolumeDetail, { VolumeDetailProps } from "./Detail"
import VolumePractice, { VolumnPracticProps } from "./Practice"
import './index.scss'

export type Volume = {
    basic: VolumeBasicProps,
    detail: VolumeDetailProps,
    practice: VolumnPracticProps
}
type Props = {
    id: string,
    volume: Volume
}
const VolumeInfo = ({ volume }: Props) => {
    const { basic, detail, practice } = volume
    return (
        <div className='volume-info'>
            <VolumeBasic volumeBasic={basic} id={'test'} />
            <VolumeDetail volumeDetail={detail} id={'test'} />
            <VolumePractice volumePractice={practice} id={'test'} />
        </div>
    )
}
export default VolumeInfo