import { useState } from "react"

import "./popup.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        width: 640,
        height: 480,
        position: "relative"
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          position: "fixed",
          left: 0,
          right: 0,
          fontSize: 20,
          padding: 16
        }}>
        <div>Sprunki Retake Deluxe</div>
        <div>
          Visit{" "}
          <a
            href="https://sprunkiretake.art"
            target="_blank"
            style={{ textDecorationLine: "underline", color: "white" }}>
            sprunkiretake.art
          </a>{" "}
          for more games
        </div>
      </div>
      <iframe
        src="https://cdn.sprunki.art/sprunki-retake-deluxe/index.html"
        title="Play Sprunki Retake Deluxe for Free"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ width: "100%", height: "100%", borderWidth: 0 }}
      />
    </div>
  )
}

export default IndexPopup
