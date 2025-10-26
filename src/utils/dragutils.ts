// profile drag handler
export const startProfileDrag = (event, element) => {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const move = (ev) => {
        element.style.left = ev.clientX - offsetX + "px";
        element.style.top = ev.clientY - offsetY + "px";
    };
    const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
};

// icon drag handler
export const startIconDrag = (e, id, el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const move = (ev) => {
        el.style.left = ev.clientX - offsetX + "px";
        el.style.top = ev.clientY - offsetY + "px";
    };
    const up = () => {
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
};