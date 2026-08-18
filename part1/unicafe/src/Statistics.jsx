const Statistics = ({good,neutral,bad}) => {
    const all=good+neutral+bad 
    if(all!=0){
    return(
        <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {(good-bad)/all} </p>
        <p>positive {(good*100)/all}</p>
        </>
    )
    }else{
        return(
            <p>no feedback given</p>
        )
    }
}
export default Statistics