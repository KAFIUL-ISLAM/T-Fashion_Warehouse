import { useEffect, useState } from "react"

const useItems = () => {
    const [ items, setItems ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://t-fashion-warehouse.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, [setItems]);
    
    return [items, setItems, loading];
}

export default useItems;