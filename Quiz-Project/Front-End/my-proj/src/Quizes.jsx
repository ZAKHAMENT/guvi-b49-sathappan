import styles from './Quizes.module.css';

function Gk() {
  return (
    <>

{/* <div className={styles.InputContainer}>
  <input type="text" name="text" className={styles.input} id="input" placeholder="Search"></input>
  <div className={styles.border}></div>

  <label htmlFor="input" className={styles.labelforsearch}>
<svg viewBox="0 0 512 512" className={styles.searchIcon}><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>
</div> */}

    <div className={styles.parentcardContainer}>
      <div className={styles.parent}>
        <div className={styles.div1}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div2}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div3}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div1}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div2}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.div3}>
          <div className={styles.cardContainerQuiz}>
            <div className="card" style={{ borderRadius: '10%' }}>
              <div className={styles.imageContainer}>
                <img src='/images/guvi-icon.png' className={styles.quizImg} alt="..." />
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Let's Start</a>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat other card blocks as needed */}
      </div>
      </div>
    </>
  );
}

export default Gk;
