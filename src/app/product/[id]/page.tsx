import ProductImage from "@/app/components/ProductImage";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok)  return notFound()

  const product: Product = await res.json();

  return product;
}

async function ProductPage({ params }: Props) {
  const product: Product = await getProduct(params.id);
  console.log(product);

  // function  ProductPage ({params}:{params:{id:string}}){

  console.log(typeof params.id);

  return (
    <div className="max-w-5xl mx-auto  flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">

      <ProductImage product={product} />

      <div className="divide-y">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold ">{product.title}</h1>

          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            {product.price}
          </h2>
        </div>


        <div className="pt-8">
          <p className="text-xs  md:text-sm">{product.description}</p>
        </div>

      </div>


    </div>
  );
}

export default ProductPage;
