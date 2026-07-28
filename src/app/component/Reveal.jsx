/**
 * Scroll-triggered reveal animation wrapper.
 * type: "up" | "left" | "right" | "scale" | "fade"
 * delay: seconds before the animation starts on first paint
 */
export default function Reveal({ children, type = "up", delay = 0, className = "", as: Tag = "div" }) {
  return (
    <Tag
      className={`reveal ${type} ${className}`.trim()}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
