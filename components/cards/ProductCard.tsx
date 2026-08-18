type ProductCardProps = {
  name: string;
  category: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (

    <div

      className="
      group
    relative
    rounded-2xl
    border
    border-cyan-500/30
    bg-zinc-900
    p-4
    shadow-lg
    transition-all
    duration-300
    hover:-translate-y-2
    hover:scale-[1.03]
    hover:border-cyan-400
    hover:shadow-2xl
    hover:shadow-cyan-500/20
  "


    >
      <div className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
        🔥 OFERTA
      </div>
      <div className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-zinc-900/80 text-lg transition-all duration-300 hover:scale-110 hover:bg-red-500">
        🤍
      </div>

      <img
        src={image}
        alt={name}
        className="
    mb-4
    h-40
    w-full
    rounded-xl
    object-cover
    bg-zinc-800
    transition-transform
    duration-500
    group-hover:scale-105
  "
      />
      <p className="text-sm text-cyan-300">
        {category}
      </p>

      <h3 className="mt-2 text-lg font-bold text-white">
        {name}
      </h3>

      <p className="mt-4 text-2xl font-bold text-cyan-400">
        R$ {price.toLocaleString("pt-BR")}
      </p>

      <button
        className="
    mt-5
    w-full
    rounded-xl
    bg-gradient-to-r
    from-cyan-500
    to-blue-600
    py-3
    font-bold
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-cyan-500/40
    active:scale-95
  "
      >
        🛒 Ver Produto
      </button>

    </div >
  );
}