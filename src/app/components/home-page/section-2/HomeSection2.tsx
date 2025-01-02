import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Content {
  title: string;
  para: string;
  logoPath: string;
}
interface Props {
  contents: Content[];
}

const HomeSection2 = ({ contents }: Props) => {
  return (
    <div className="bg-white flex flex-col md:flex-row gap-5 justify-start md:justify-evenly w-full md:w-11/12 md:mx-auto my-10">
      {contents.map((content, index) => (
        <div
          className="card card-compact bg-base-100 w-full shadow-xl mx-auto md:mx-0"
          key={`content-${index}`}
        >
          <figure className="h-[500px]">
            <Image
              src={content.logoPath}
              alt={content.title}
              width={"357"}
              height={"500"}
              style={{ margin: "auto" }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title ">{content.title}</h2>
            <p>{content.para}</p>
            <Link className="card-actions justify-end" href={"/gallery"}>
              <button className="btn btn-sm btn-outline">Explore</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection2;
