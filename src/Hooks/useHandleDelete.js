const useHandleDelete = () => {

    const handleDelete = id => {

        const url = `https://t-fashion-warehouse.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
    return handleDelete;
}

export default useHandleDelete;