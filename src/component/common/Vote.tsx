import './Vote.scss'
type Vote = {
    voteStar: number,
    voteNumber: number
}
const Vote = ({ voteStar, voteNumber }: Vote) => {
    return (
        <div className="vote">
            {Array.from({ length: voteStar }, (_, index) => (
                <div key={index} className="star"></div>
            ))}
            <div>{`(${voteNumber} votes)`}</div>
        </div>
    )
}
export default Vote