import React from 'react'

const sign = "<Rayyan></Shaikh>"
export default function Footer(props) {
  return (
    <footer className="container footer" style={props.darkt ? props.dark : props.light}>
      {/* eslint-disable-next-line */}
      <a href="#" className="btt">Back to top &rarr;</a>
      <p className="text-center">&copy; The Web Journal Inc. &middot; {sign}</p>
    </footer>
  )
}

