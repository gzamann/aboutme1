import React, { useEffect, useState } from "react";

const FolderIcon = ({ width = 50, height = 50 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="yellow"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
);

export default function Desktop() {
    const [icons, setIcons] = useState([
        { id: 1, name: "Profile", x: 50, y: 50 },
        { id: 2, name: "Documents", x: 150, y: 50 },
    ]);
    const [drag, setDrag] = useState(null);
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = `${time.getHours().toString().padStart(2,'0')}:${time.getMinutes().toString().padStart(2,'0')}:${time.getSeconds().toString().padStart(2,'0')}`;

    const onMouseDown = (e, id) => {
        const icon = icons.find(i => i.id === id);
        setDrag({ id, offsetX: e.clientX - icon.x, offsetY: e.clientY - icon.y });
    };

    const onMouseMove = e => {
        if (!drag) return;
        setIcons(icons =>
            icons.map(i =>
                i.id === drag.id
                    ? { ...i, x: e.clientX - drag.offsetX, y: e.clientY - drag.offsetY }
                    : i
            )
        );
    };

    const onMouseUp = () => setDrag(null);

    return (
        <>
        <div className="navbar">
            {timeString}
            </div>
        <div
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            style={{ width: "100vw", height: "100vh", position: "relative" }}
            >
            {icons.map(icon => (
                <div
                className="folder-icon"
                key={icon.id}
                onMouseDown={e => onMouseDown(e, icon.id)}
                onDoubleClick={()=> console.log('kjhkjhkh')}
                style={{
                    position: "absolute",
                    left: icon.x,
                    top: icon.y,
                    cursor: "grab",
                }}
                >
                    <FolderIcon width={50} height={50} />
                    <div>{icon.name}</div>
                </div>
            ))}
        </div>
            </>
    );
}
