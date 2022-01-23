import CourseCard from "../CourseCard"
import ShowcaseStyles from "./Showcase.module.css"
    const Showcase = (props) => {
      return <div className={ShowcaseStyles.showcase_set}>
          {props.data.map(course => {
          	return <CourseCard courseData={course}/>
          })}
        </div>
      
    };
    
    export default Showcase;
    
    