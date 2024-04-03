const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 bg-blue-gradient rounded-lg text-primary font-dancing font-medium text-lg outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
