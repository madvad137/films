import styles from './style.module.css'
function Header() {
    return (
     <header className={styles.header}>
        <div className='container'>
            <div className={styles.inner}>
                <div className={styles.logo}>Vilm</div>
                <input type="text" className={styles.input} placeholder='Найдите фильм' />
            </div>
        </div>
     </header>
    );
  }
  
  export default Header;