import { mocExam } from "@/const/Exam";
import Vote from "../vote";

const ROOT = "exam";
const ExamSet = () => {
  return (
    <>
      <div className={`${ROOT}-header-info`}>
        <div className={`${ROOT}-header-image image`}>
          <img src={mocExam[0].imageUrl} alt={mocExam[0].imageAlt} />
        </div>
        <div>
          <div className={`${ROOT}-header-name`}>{mocExam[0].name}</div>
          <Vote
            star={mocExam[0].vote.star}
            quantity={mocExam[0].vote.quantity}
          />
        </div>
      </div>
      <div className={`${ROOT}-header-detail`}>
        <div className={`${ROOT}-header-published`}>
          <span className="icon-date_range icon"></span>
          <span>Ngày đăng: </span>
          <span>{mocExam[0].published}</span>
        </div>
        <div className={`${ROOT}-header-viewed`}>
          <span className="icon-eye icon"></span>
          <span>Lượt xem: </span>
          <span>{mocExam[0].viewed}</span>
        </div>
        <div className={`${ROOT}-header-tested`}>
          <span className="icon-done icon"></span>
          <span>Lượt thi: </span>
          <span>{mocExam[0].tested}</span>
        </div>
      </div>
    </>
  );
};
export default ExamSet;
