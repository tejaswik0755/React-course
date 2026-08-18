import StatisticLine from "./StatisticLine"
const Statistics = ({good,neutral,bad}) => {
    const all=good+neutral+bad 
    if(all!=0){
    return(
        
        <table>
            <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={(good-bad)/all} />
                <StatisticLine text="positive" value={(good*100)/all} />
            </tbody>
        </table>

        
    )
    }else{
        return(
            <p>no feedback given</p>
        )
    }
}
export default Statistics