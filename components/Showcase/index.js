import CourseCard from "../CourseCard"
import ShowcaseStyles from "./Showcase.module.css"
    const Showcase = () => {
      return <div className={ShowcaseStyles.showcase_set}>
          <CourseCard/>
          <CourseCard/>
        </div>
      
    };
    
    export default Showcase;
    
    