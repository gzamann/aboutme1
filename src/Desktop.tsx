import React, { useRef, useEffect, useState } from "react";
import FolderIcon from "./FolderIcon";
import ProfileViewer from "./ProfileViewer";
import { startIconDrag, startProfileDrag } from "./utils/dragutils";
import Navbar from "./Navbar";

export default function Desktop() {
    const [profileVisible, setProfileVisible] = useState(true);
    const iconRefs = useRef({});
    const profileRef = useRef(null);
    const icons = [
        { id: 1, name: "Profile", x: 50, y: 50 },
        { id: 2, name: "Documents", x: 150, y: 50 },
        { id: 3, name: "Contact", x: 50, y: 150 },
    ];

    return (
        <>
        <Navbar />
            <div className="desktop-area">
                {icons.map((icon) => (
                    <div
                        key={icon.id}
                        className="folder-icon"
                        ref={(el) => (iconRefs.current[icon.id] = el)}
                        style={{ left: icon.x, top: icon.y, position: "absolute" }}
                        onMouseDown={(e) => startIconDrag(e, icon.id, iconRefs.current[icon.id])}
                        onDoubleClick={() => {
                            icon.name === "Profile" && setProfileVisible(true)
                        }}
                    >
                        <FolderIcon />
                        <div>{icon.name}</div>
                    </div>
                ))}
                {profileVisible && (
                    <ProfileViewer profileRef={profileRef} setProfileVisible={setProfileVisible} startProfileDrag={startProfileDrag} />
                )}
            </div>
        </>
    );
}
