import { useEffect, useState } from "react"

const useSingleItem = id => {
    const [item, setItem] = useState([]);
     
    useEffect(() => {
        const url = `https://t-fashion-warehouse.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    return [item, setItem];
}

export default useSingleItem;