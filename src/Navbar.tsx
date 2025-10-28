import { useEffect, useState } from "react";
import Computer from "./assets/icons/computer.svg";

const Navbar = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);
    // smoother time display
    const timeString = time.toLocaleTimeString("en-GB", { hour12: false });
    return <div className="navbar">
        <img src={Computer} alt="Computer" />
        <div>{timeString}</div>
    </div>
}

export default Navbar