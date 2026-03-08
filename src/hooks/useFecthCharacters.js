import {useEffect, useState} from "react";

function useFecthCharacters(url) {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fecthCharacters = async () => {
            try {
                const response = await fetch(url);
                
                if (!response.ok)
                    throw new Error("El servidor devolvió código de error " + response.status);

                const data = await response.json();
                
                setCharacter(data);
            }
            catch(error) {
                console.error("Error obteniendo el personaje de la URL " + url, error);
            }
        };

        fecthCharacters();
    }, []);

    return character;
}

export default useFecthCharacters;