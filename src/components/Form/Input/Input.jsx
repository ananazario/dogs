import styles from './Input.module.css'

const Input = ({ label, type, name, value, onChange }) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} className={styles.input} type={type} value={value} onChange={onChange} />
            <p className={styles.error}>Error</p>
        </div>
    )
}

export default Input