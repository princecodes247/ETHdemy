// import "./styles.scss";
function Loading() {
  return (
    <div className="loading">
      {/* <div class="lds-hourglass"></div> */}
      <div className="lds-ripple">
        <div></div>
        <div>Loading</div>
      </div>
    </div>
  );
}

export default Loading;
