import { useEffect, useState } from "react"

const useIcecream = () => {
    const [icecreams, setIcecream] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/1234-56prova/data/main/icecream.json')
        .then(res => res.json())
        .then(data => setIcecream(data));
    }, [])

    return [icecreams, setIcecream];
}

export default useIcecream;