import { useEffect, useState } from "react";

const useTourTypes = () => {
    const [tour, setTour] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => {
                setTour(data)
                setLoading(false);
            });
    }, [])
    return [tour, loading]
}
export default useTourTypes;