// AQUI FICA A SETA SCROLL DA SECTION 1
import './Arrow_scroll.css'
const ScrollArrow = () => {
  return (
    <div className="scroll-arrow-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="50"
        height="50"
        className="scroll-arrow"
      >
        <path
          d="M12 16l-4-4h8z"
          fill="none"
          stroke="#b3e9e7"
          strokeWidth="2"
        />
      </svg>
    
    </div>
  );
};

export default ScrollArrow;
