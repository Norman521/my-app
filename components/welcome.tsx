import "../css/welcome.css";

type MessageProps = {
  text: string;     // Required prop
  author?: string;  // Optional prop (the ? makes it optional)
};

export default function Message({ text, author }: MessageProps) {
  return (
    <div>
      <h1 className="welcome">{text}</h1>
      {author && <p className="welcome">— {author}</p>}
    </div>
  );
}
