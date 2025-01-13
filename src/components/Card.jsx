const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </div>
);

export default Card;
