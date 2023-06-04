import React from "react";


// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

export default function Assignment(props) {
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleassignmentCompleted(props.id)}
          />
          <label className="Assignment-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
    </div>
  );


  return <li className="Assignment">{viewTemplate}</li>;
}