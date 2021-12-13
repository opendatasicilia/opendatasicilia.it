import * as React from "react"

export default function NotFound(){

  React.useEffect(() => {
    let interval;
       interval = setInterval(() => {
        if (typeof window !== 'undefined') {
            window.location = `/`;
          }
       }, 1);
    return () => interval ? clearInterval(interval) : null;
  }, [])

  return(
      <div/>
  )
}