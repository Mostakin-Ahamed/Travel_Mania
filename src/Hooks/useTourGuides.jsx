import { useEffect, useState } from "react";

const useTourGuides = () => {
    const [guide, setGuide] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/Guides.json')
            .then(res => res.json())
            .then(data => {
                setGuide(data)
                setLoading(false);
            });
    }, [])
    return [guide, loading]
}
export default useTourGuides;