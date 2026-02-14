import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  imagem: string;
  preco: number;
};

const PRODUTOS_MOCK: Produto[] = [
  { id: 1, nome: "Pano de Prato", categoria: "Panos de Prato", preco: 20, imagem: "" },
  { id: 2, nome: "Caneca de Café", categoria: "Copos & Canecas", preco: 35, imagem: "" },
  { id: 3, nome: "Espátula de Silicone", categoria: "Utensílios", preco: 15, imagem: "" },
];

const CATEGORIAS = ["Todos", "Panos de Prato", "Copos & Canecas", "Utensílios", "Acessórios", "Organização", "Decoração"];

const EMOJIS_CATEGORIAS: Record<string, string> = {
  "Todos": "✨",
  "Panos de Prato": "🧵",
  "Copos & Canecas": "☕",
  "Utensílios": "🍳",
  "Acessórios": "🏠",
  "Organização": "📦",
  "Decoração": "🌿",
};

const ProductSection = () => {
  const [inputVal, setInputVal] = useState("");
  const [termoPesquisado, setTermoPesquisado] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [ordenacao, setOrdenacao] = useState("A-Z");

  const handleSearch = () => setTermoPesquisado(inputVal);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setInputVal(valor);
    if (valor === "") setTermoPesquisado("");
  };

  const produtosFiltrados = useMemo(() => {
    const resultado = PRODUTOS_MOCK.filter((produto) => {
      const matchesBusca = produto.nome.toLowerCase().includes(termoPesquisado.toLowerCase());
      const matchesCategoria = categoriaAtiva === "Todos" || produto.categoria === categoriaAtiva;
      return matchesBusca && matchesCategoria;
    });

    return resultado.sort((a, b) => {
      if (ordenacao === "A-Z") return a.nome.localeCompare(b.nome);
      return b.nome.localeCompare(a.nome);
    });
  }, [termoPesquisado, categoriaAtiva, ordenacao]);

  return (
    <section className="bg-[#FDF8EF] py-6 px-4 md:p-12 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header simplificado para Mobile */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
            Nossos Produtos
          </h1>
          <p className="text-gray-400 text-sm">
            {produtosFiltrados.length} {produtosFiltrados.length === 1 ? "produto" : "produtos"}
          </p>
        </div>

        {/* Busca e Filtro - Stacked no mobile, linha no Desktop */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={handleSearch}
            >
              <FaSearch size={16} />
            </div>

            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-all bg-white text-base"
              value={inputVal}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          <select
            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none cursor-pointer text-sm"
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value)}
          >
            <option value="A-Z">Ordenar: A-Z</option>
            <option value="Z-A">Ordenar: Z-A</option>
          </select>
        </div>

        {/* Categorias - Scroll Horizontal no Mobile */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full border transition-all text-xs font-semibold shadow-sm flex items-center gap-2
                ${categoriaAtiva === cat
                  ? "bg-[#2D2926] text-white border-[#2D2926]"
                  : "bg-white text-gray-600 border-gray-100"
                }`}
            >
              <span>{EMOJIS_CATEGORIAS[cat]}</span>
              <span>{cat}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((p) => (
              <div
                key={p.id}
                className="bg-white p-3 md:p-5 rounded-2xl shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
              >
                <div className="aspect-square bg-gray-50 rounded-xl mb-3 flex items-center justify-center text-xs text-gray-400">Sem foto</div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">{p.nome}</h3>
                <p className="text-amber-600 font-bold text-sm">
                  R$ {p.preco.toFixed(2).replace(".", ",")}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-400 text-sm italic">
              Nenhum resultado encontrado.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;