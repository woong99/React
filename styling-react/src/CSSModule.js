import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">SCC Module!</span>
      </div>
    </div>
  );
};

export default CSSModule;
