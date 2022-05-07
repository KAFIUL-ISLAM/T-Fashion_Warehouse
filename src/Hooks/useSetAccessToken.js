const useSetAccessToken = () => {

    const setAccessToken = async email => {
        
        await fetch('https://t-fashion-warehouse.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.accessToken);
            })
    }
    return setAccessToken;
};

export default useSetAccessToken;

