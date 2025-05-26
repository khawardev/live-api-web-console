import { useState } from "react";
import { useLiveAPIContext } from "../contexts/LiveAPIContext";
import cn from 'classnames';


function Connection() {
    const { connected } = useLiveAPIContext();
    const [open, setOpen] = useState(true);
    return (
        <div className={cn("streaming-indicator", { connected })}>
            {connected
                ? `🔵${open ? " Streaming" : ""}`
                : `⏸️${open ? " Paused" : ""}`}
        </div>

    );
}

export default Connection;