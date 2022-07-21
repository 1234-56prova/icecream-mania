import { useEffect, useState } from "react"

const useCoffees = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/1234-56prova/data/main/coffee-beans.json')
            .then(res => res.json())
            .then(data => setCoffees(data));

    }, [])
    return [coffees, setCoffees];
}

export default useCoffees;