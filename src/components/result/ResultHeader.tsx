import Image from "next/image";

interface ResultHeaderProps {
  percentage: string;
  type: string;
  description: string;
  image: string;
}

export default function ResultHeader({
  percentage,
  type,
  description,
  image,
}: ResultHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <div className="mb-6 inline-block rounded-full border border-purple-200 bg-purple-50 px-5 py-2">
        <span className="text-sm font-semibold text-purple-700">
          상위 {percentage}
        </span>
      </div>

      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
        당신은 <span className="gradient-text">{type}</span>
      </h1>

      <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
        {description}
      </p>

      <div className="mt-8">
        <Image
          src={image}
          alt={type}
          width={400}
          height={400}
          className="mx-auto rounded-3xl"
        />
      </div>
    </div>
  );
}
