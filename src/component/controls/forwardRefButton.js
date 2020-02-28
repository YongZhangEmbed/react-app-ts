
import React from 'react';
// https://blog.logrocket.com/cleaning-up-the-dom-with-forwardref-in-react/

export const ForwardRefButton = React.forwardRef((props, ref) => (
    <button
        ref={ref}
        className="button"
        onClick={() => { console.log("ButtonWithRef was clicked!") }}>
        {props.children}
    </button>
));
