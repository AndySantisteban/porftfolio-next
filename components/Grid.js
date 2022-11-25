const Grid = ({ children }) => {
  return (
    <>
      <div className={"grid"}>{children}</div>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          grid-gap: 20px;
          margin: 20px;
        }
      `}</style>
    </>
  );
};
export default Grid;
