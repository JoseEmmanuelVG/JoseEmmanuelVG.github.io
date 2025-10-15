// components/Video.jsx
export default function Video({ src, width = "100%", height = "auto", controls = true }) {
  return (
    <video
      src={src}
      controls={controls}
      style={{
        width,
        height,
        borderRadius: "1rem",
        marginTop: "1rem",
      }}
      muted
      playsInline
    />
  );
}
