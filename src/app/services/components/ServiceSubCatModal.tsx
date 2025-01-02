"use client";
import React, { useRef } from "react";
import { ServiceSubCat } from "../constants";

interface ServiceSubCatModalProps {
  subCategories: ServiceSubCat[];
}
const ServiceSubCatModal = ({ subCategories }: ServiceSubCatModalProps) => {
  const modalRef = useRef<any>(null);
  return (
    <>
      <div className="card-actions justify-end">
        <button
          className="btn btn-sm btn-outline"
          onClick={() => modalRef?.current?.showModal()}
        >
          Explore
        </button>
      </div>

      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          <div className="overflow-x-auto">
            {subCategories?.map((subCat, index) => (
              <div className="flex flex-col mb-3" key={`subcat-${index + 1}`}>
                <div className="collapse collapse-plus bg-base-200">
                  <input type="radio" name="my-accordion-3" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    <div className="flex justify-between">
                      <h2>{subCat.title}</h2>
                      <h4>{subCat.price}</h4>
                    </div>
                  </div>
                  <div className="collapse-content">
                    <p>{subCat.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ServiceSubCatModal;
