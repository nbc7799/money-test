interface Product {
  name: string;
  reason: string;
  link: string;
}

interface RecommendedProductsProps {
  type: string;
  products: readonly Product[];
}

export default function RecommendedProducts({
  type,
  products,
}: RecommendedProductsProps) {
  return (
    <div className="floating-card mb-12 rounded-[32px] bg-white p-10 md:p-12">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
          🎁 추천 상품
        </h2>
        <p className="text-lg text-gray-600">
          {type}에게 딱 맞는 재테크 도구
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product, index) => (
          <a
            key={index}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-2 border-gray-200 p-8 transition-all hover:border-purple-500 hover:shadow-xl"
          >
            <div className="mb-4 inline-block rounded-lg bg-purple-100 px-3 py-1">
              <span className="text-xs font-bold text-purple-600">추천</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-purple-600">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.reason}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
