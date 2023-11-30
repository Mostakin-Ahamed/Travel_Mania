import { useEffect, useState } from "react";

const useTourGuides = () => {
    const [guides, setGuide] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://travel-mania-server.vercel.app/allGuides')
            .then(res => res.json())
            .then(data => {
                setGuide(data)
                setLoading(false);
            });
            
    }, [])
    return [guides, loading]
}
export default useTourGuides;