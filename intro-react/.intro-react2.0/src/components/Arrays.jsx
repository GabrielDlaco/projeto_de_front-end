const Arrays = () => {
  // const produtos = ["Notebook", "Smartphone", "Tablet"]
  const empresas = [<li key="e1">Apple</li>, <li key="e2">microsoft</li>];

  const filmes = [
    "Piratas do caribe",
    "Toy Story",
    "Titanic",
    "Interinstelar",
    "Crespusculo",
  ];

  const livros = [
    {nome: "Harry potter e a pedra filosofal", ano: 1996},
    {nome: "Game of Thrones", ano: 1996},
    {nome: "1984", ano: 1949},
  ]

  return (
    <>
    <ul>
        {livros
        .filter((livro) => livro.ano >= 1996)
        .map((livro) => (
        <li key={livro}>Titulo: {livro.nome}, ano: {livro.ano};</li>
        ))}
    </ul>
      {/* <ul>
        {filmes.map((filme) => 
        <li key={filme}>{filme}</li>
        )}
      </ul> */}
      {/* <p>{empresas}</p> */}
    </>
  );
};

export default Arrays;
