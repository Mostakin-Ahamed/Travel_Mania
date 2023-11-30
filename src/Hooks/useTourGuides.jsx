import { useEffect, useState } from "react";

const useTourGuides = () => {
    const [guides, setGuide] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/allGuides')
            .then(res => res.json())
            .then(data => {
                setGuide(data)
                setLoading(false);
            });
            
    }, [])
    return [guides, loading]
}
export default useTourGuides;