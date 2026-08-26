import Part from "./components/Part"
const Content=({parts})=>{
    return(
        <>
        {parts.map(part =>
            <Part key={part.id} name={part.name} exs={part.exercises} />
            )}
        <b>total of {parts.reduce((acc,part)=> acc+part.exercises,0 )} exercises</b>
        
        </>
    )
}
export default Content