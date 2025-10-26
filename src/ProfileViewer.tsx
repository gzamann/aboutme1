const ProfileViewer = ({profileRef, setProfileVisible, startProfileDrag}) => {
    return <div
        ref={profileRef}
        className="profile-viewer"
        style={{ left: "300px", top: "150px" }}
    >
        <div className="profile-header" onMouseDown={(e)=>startProfileDrag(e, profileRef.current)}>
            Profile Viewer
            <button className="close-btn" onClick={() => setProfileVisible(false)}>
                ✕
            </button>
        </div>
        <div className="profile-content">
            <p>Name: Mr Holmes</p>
            <p>Role: Web Developer</p>
            <p>Status: Active</p>
        </div>
    </div>
}

export default ProfileViewer