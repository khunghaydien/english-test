type Props = {
    id: string,
    volumePractice: VolumnPracticProps
}
export type VolumnPracticProps = {
    title: string
}
const VolumePractice = ({ volumePractice }: Props) => {
    const { title } = volumePractice
    return (
        <div className="volume-practice">
            <div className="volume-practice-icon">
                <img src="" alt="" />
            </div>
            <div className="volume-practice-title">{title}</div>
        </div>
    )
}
export default VolumePractice