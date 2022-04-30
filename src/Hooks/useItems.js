import { useEffect, useState } from "react"

const useItems = () => {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch("https://t-fashion-warehouse.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setItems(data));
    }, [setItems]);
    
    return [items, setItems];
}

export default useItems;