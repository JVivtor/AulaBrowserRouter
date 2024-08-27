export default function ListaProduto({ listaProduto }) {
    
    return (
        <div className="lista-produtos-container">

            <h2>Mais Produtos</h2>

            <ul className="lista-produtos">
                {listaProduto.map((produto) => (
                    <li key={produto.id} className="produto-item">
                        <p>{produto.nome}</p>
                        <img className="Produtoimg" src={produto.imagem} alt={produto.jvs} />
                        <p>{produto.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}