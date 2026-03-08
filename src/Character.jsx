import styles from "./Character.module.css";

function Character({type, name, image}) {
    return (
        <div className={styles.character}>
            <h2>{type}</h2>
            <p>{name}</p>
            <img src={image} alt={name}/>
        </div>
    );
}

export default Character;