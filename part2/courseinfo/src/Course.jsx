import Header from "./Header"
import Content from "./Content"
const Course= ({id, course})=>{
    return(
        <>
        <Header title={course.name} />
        <Content parts={course.parts} />
        </>
    )
}
export default Course