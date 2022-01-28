import Link from 'next/link'
import Image from 'next/image'
    import CourseCardStyles from "./CourseCard.module.css"
    const CourseCard = (props) => {
      return <Link href={`/course?id=${props.courseData.id}`}>
          <div className={CourseCardStyles.card}>
               <div className={CourseCardStyles.cardImg}>
               


            </div>
            <div className={CourseCardStyles.cardDetails}>
              <h5 className={CourseCardStyles.cardTitle}>{props.courseData.title}</h5>
              <p className={CourseCardStyles.cardDesc}>{props.courseData.desc}</p>
              <div className={CourseCardStyles.cardRating}>{props.courseData.rating} stars</div>
              <div className={CourseCardStyles.cardPrice}>{props.courseData.price} ETH</div>
            </div>
          </div>
         </Link>
        
    };
    
    export default CourseCard;
    
    