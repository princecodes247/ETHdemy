
    import CourseDetailStyles from "./CourseDetail.module.css"
    const CourseDetail = () => {
      return <div styles={CourseDetailStyles.container}>
            <div className={CourseDetailStyles.card}>
               <div className={CourseDetailStyles.cardImg}>

            </div>
            <div className={CourseDetailStyles.cardDetails}>
              <h5 className={CourseDetailStyles.cardTitle}>Complete NodeJS Developer Course</h5>
              <p className={CourseDetailStyles.cardDesc}>Description for the course right here</p>
              <div className={CourseDetailStyles.cardRating}>5 stars</div>
              <div className={CourseDetailStyles.cardPrice}>0.036 ETH</div>
            </div>
          </div>
          <div className={CourseDetailStyles.buttonSet}>
          	<button className={CourseDetailStyles.btn}>Remove</button>
          	<button className="btn">Move to Wishlist</button>
          	
          </div>
            </div>
        
    };
    
    export default CourseDetail;
    
    