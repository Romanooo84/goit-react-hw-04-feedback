
export const Feedback = ({ onClicBad, onClicNeutral, onClickGood, totalClick}) => {
    return (
        <>
            <div>
                <p>Please leave feedback</p>
            </div>
            <div>
                <button onClick={() => { onClickGood(); totalClick(); }}>Good</button>
                <button onClick={() => {onClicNeutral(); totalClick();}}>Neutral</button>
                <button onClick={() => {onClicBad(); totalClick(); }}>Bad</button>
            </div>
    </>
)
}