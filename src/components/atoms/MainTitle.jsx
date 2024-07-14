
const MainTitle = ({ contenido, margin }) => {
  return (
    <h2 className="text-5xl font-medium color__gradiente" style={{ marginBottom: margin }}>
      {contenido}
    </h2>
  );
};

export default MainTitle;
