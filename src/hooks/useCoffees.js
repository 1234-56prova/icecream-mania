import { useEffect, useState } from "react"

const useCoffees = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch('https://polar-journey-98399.herokuapp.com/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data));

    }, [])
    return [coffees, setCoffees];
}

export default useCoffees;