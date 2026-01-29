import React from "react";
import "./Brands.scss";
import { logos } from "../../assets/import-logos";

interface Brand {
  id: string;
  name: string;
  logo: string;
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    { id: "1", name: "Cola Cola", logo: "Coca-Cola.svg" },
    { id: "2", name: "Forbes", logo: "Forbes.svg" },
    { id: "3", name: "Inditex", logo: "Inditex.svg" },
    { id: "4", name: "Mcdonalds", logo: "Mcdonalds.svg" },
    { id: "5", name: "Natura", logo: "Natura.svg" },
    { id: "6", name: "Oceanbank", logo: "Oceanbank.svg" },
    { id: "7", name: "Puma", logo: "Puma.svg" },
    { id: "8", name: "Visa", logo: "Visa.svg" },
    { id: "9", name: "Yoplait", logo: "Yoplait.svg" },
  ];

  return (
    <div className="brands">
      <span className="brands__title">Brand that trust us</span>
      <div className="brands__logos">
        {brands.map((brand) => (
          <img key={brand.id} src={logos(brand.logo)} alt={brand.name} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
