const getClientCoords = (event: any) => {
    if ('touches' in event) {
        return {
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY,
        };
    }
    return {
        clientX: event.clientX,
        clientY: event.clientY,
    };
};

// profile drag handler
export const startProfileDrag = (event: any, element: HTMLElement) => {
    if (!element) return;

    // Prevent scrolling on touch devices
    if ('touches' in event) {
        event.preventDefault();
    }

    const rect = element.getBoundingClientRect();
    const coords = getClientCoords(event);
    const offsetX = coords.clientX - rect.left;
    const offsetY = coords.clientY - rect.top;

    const move = (ev: MouseEvent | TouchEvent) => {
        const moveCoords = getClientCoords(ev);
        element.style.left = moveCoords.clientX - offsetX + "px";
        element.style.top = moveCoords.clientY - offsetY + "px";
    };

    const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
};

// icon drag handler
export const startIconDrag = (event: any, id: number, element: HTMLElement) => {
    if (!element) return;

    // Prevent scrolling on touch devices
    if ('touches' in event) {
        event.preventDefault();
    }

    const rect = element.getBoundingClientRect();
    const coords = getClientCoords(event);
    const offsetX = coords.clientX - rect.left;
    const offsetY = coords.clientY - rect.top;

    const move = (ev: MouseEvent | TouchEvent) => {
        const moveCoords = getClientCoords(ev);
        element.style.left = moveCoords.clientX - offsetX + "px";
        element.style.top = moveCoords.clientY - offsetY + "px";
    };

    const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
        window.removeEventListener("touchmove", move);
        window.removeEventListener("touchend", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", up);
};