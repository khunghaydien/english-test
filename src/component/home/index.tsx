import Vote from "@/common/vote";
import { mocExam } from "@/const/Exam";
import { mocTip } from "@/const/Tip";
import { mocWhyUsing } from "@/const/WhyUsing";
import { mocFact } from "@/const/Fact";
import { mocExamFeature } from "@/const/Exam";
import { useState } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import './index.scss'
const ExamNewest = () => {
    return (
        <section className="exam-newest">
            <div className="container">
                <div className="exam-newest__title title">Các bộ đề IELTS mới nhất</div>
                <div className="exam-newest__list">
                    {mocExam.map((mocExam, idx) => (
                        <NavLink
                            className="exam-newest__item"
                            key={idx}
                            to={`/exam-set/${mocExam.id}`}
                        >
                            <div className="exam-newest__item--image">
                                <img src={mocExam.imageUrl} alt={mocExam.imageAlt} />
                            </div>
                            <div className="name">{mocExam.name}</div>
                            <Vote
                                className="exam-newest__item--vote"
                                star={mocExam.vote.star}
                                quantity={mocExam.vote.quantity}
                            ></Vote>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};
const Tip = () => {
    return (
        <section className="tip">
            <div className="container">
                <div className="tip__title title">Tip hay mỗi ngày</div>
                <div className="tip__list">
                    {mocTip.map((mocTip, idx) => (
                        <NavLink className="tip__item" key={idx} to={`/tip/${mocTip.id}`}>
                            <div className="tip__item--header">
                                <div className="tip__item--image">
                                    <img src={mocTip.imageUrl} alt={mocTip.imageAlt} />
                                </div>
                                <div className="tip__item--header-right">
                                    <div className="name">{mocTip.name}</div>
                                    <Vote
                                        className="tip__item--vote"
                                        star={mocTip.vote.star}
                                        quantity={mocTip.vote.quantity}
                                    ></Vote>
                                </div>
                            </div>

                            <div className="introduce">{mocTip.introduce}</div>
                            <div className="tip__item--footer">
                                <div className="tip__item--type">
                                    <span className="icon-tag"></span>
                                    {mocTip.type}
                                </div>
                                <div className="tip__item--viewed">
                                    <span className="icon-eye"></span>
                                    {mocTip.viewed}
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyUsing = () => {
    return (
        <section className="why-using">
            <div className="container">
                <div className="title why-using__title">
                    Vì sao nên chọn IELTS Online Tests?
                </div>
                <div className="why-using__list">
                    {mocWhyUsing.map((mocWhyUsing, idx) => (
                        <div className="why-using__item" key={idx}>
                            <div className="why-using__item--image image">
                                <img src={mocWhyUsing.imageUrl} alt={mocWhyUsing.imageAlt} />
                            </div>
                            <div className="name">{mocWhyUsing.name}</div>
                            <div className="introduce">{mocWhyUsing.introduce}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Fact = () => {
    return (
        <section className="fact">
            <div className="container">
                <div className="title fact__title">
                    Trang luyện thi tiếng anh số #1 Việt Nam
                </div>
                <div className="fact__list">
                    {mocFact.map((mocFact, idx) => (
                        <div className="fact__item" key={idx}>
                            <div className="fact__item--image image">
                                <img src={mocFact.imageUrl} alt={mocFact.imageAlt} />
                            </div>
                            <div className="fact__item--left">
                                <div className="name">{mocFact.number}</div>
                                <div className="introduce">{mocFact.fact}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExamFeature = () => {
    const [currentKey, setCurrentKey] = useState("locate");
    const handleExamFeatureClick = (key: string) => {
        if (key !== currentKey) setCurrentKey(key);
    };
    return (
        <section className="exam-feature">
            <div className="container">
                <div className="exam-feature__list">
                    {Object.keys(mocExamFeature).map((key) => (
                        <div className="exam-feature__item" key={key}>
                            <div
                                className={classNames("exam-feature__item--title", {
                                    ["active"]: currentKey === key,
                                })}
                                onClick={() => handleExamFeatureClick(key)}
                            >
                                {mocExamFeature[key].name}
                            </div>
                            {currentKey === key && (
                                <div className="exam-feature__item--content">
                                    <div className="exam-feature__item--container">
                                        <div className="exam-feature__image image">
                                            <img
                                                src={mocExamFeature[key].imageUrl}
                                                alt={mocExamFeature[key].imageAlt}
                                            />
                                        </div>
                                        <div className="exam-feature__item--content-right">
                                            <div className="name">{mocExamFeature[key].name}</div>
                                            <div className="introduce">
                                                {mocExamFeature[key].introduce}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HomeComponent = () => {
    return (
        <div className="home">
            {ExamNewest()}
            {Tip()}
            {WhyUsing()}
            {Fact()}
            {ExamFeature()}
        </div>
    );
};

export default HomeComponent;
