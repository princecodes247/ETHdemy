import Link from 'next/link'
    import CourseCardStyles from "./CourseCard.module.css"
    const CourseCard = () => {
      return <Link href="/course">
          <div className={CourseCardStyles.card}>
               <div className={CourseCardStyles.cardImg}>

            </div>
            <div className={CourseCardStyles.cardDetails}>
              <h5 className={CourseCardStyles.cardTitle}>Complete NodeJS Developer Course</h5>
              <p className={CourseCardStyles.cardDesc}>Description for the course right here</p>
              <div className={CourseCardStyles.cardRating}>5 stars</div>
              <div className={CourseCardStyles.cardPrice}>0.036 ETH</div>
            </div>
          </div>
         </Link>
        
    };
    
    export default CourseCard;
    
    