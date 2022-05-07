import { useEffect, useState } from "react"

const useSingleItem = id => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        setLoading(true);
        const url = `https://t-fashion-warehouse.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false);
            });
    }, [id]);

    return [item, loading];
}

export default useSingleItem;