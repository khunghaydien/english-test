import classNames from 'classnames';
import './Palette.scss';

const Palette = () => {
    const totalQuestions = 40;
    const listQuestionAnswered = [1, 2, 4, 5, 10, 35, 39];

    return (
        <div className='palette'>
            <div className="palette-title">Question Palette</div>
            <div className='palette-list'>
                {Array.from({ length: totalQuestions }, (_, index) => (
                    <div
                        key={index}
                        className={classNames(`palette-item`, {
                            [`palette-item--active`]: listQuestionAnswered.includes(index + 1),
                        })}
                    >
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Palette;