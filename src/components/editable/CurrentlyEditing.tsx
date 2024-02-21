import React, { ReactNode } from "react";

interface CurrentlyEditingProps {
    onSave: () => void;
    children: ReactNode;
    [key: string]: any;
}

function CurrentlyEditing(props: CurrentlyEditingProps) {
    const { enableEditing, onSave, children, ...rest } = props;
    return (
        <div {...rest}>
            {children}
            <button
                className="btn btn-secondary btn-sm"
                onClick={onSave}
            >
                Save
            </button>
        </div>
    );
}

export default CurrentlyEditing;