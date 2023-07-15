import VolumeInfo, { Volume } from "../VolumeInfo"
const volume: Volume = {
    basic: {
        logoUrl: `src/assets/ielts-volume.jpg`,
        logoAlt: 'test',
        title: 'IELTS Mock Test 2023 January',
        vote: 5,
    },
    detail: {
        published: '21 Feb 2023',
        views: 3528624,
        testTaken: 744461,
    },
    practice: {
        title: 'Reading Practice Test 1'
    }
}
const Test = () => {
    return (
        <>
            <VolumeInfo volume={volume} id={'test'} />
        </>
    )
}
export default Test