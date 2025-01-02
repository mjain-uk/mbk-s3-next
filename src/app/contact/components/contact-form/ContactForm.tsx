"use client";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onSubmitAction } from "@/app/actions/contact/contact.action";
import FormFieldError from "@/app/ui/form-field-error/FormFieldError";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";



const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [state, formAction] = useFormState(onSubmitAction, { success: false });
  const router = useRouter();
  useEffect(() => {
    if (state.fieldErrors || state.formErrors) {
      setLoading(false);
      return;
    }
    let timeoutId: any;
    if (state.success) {
       // Add Google Analytics conversion tracking here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16749609188/nKIkCNHXq_gZEOSB67I-'
      });
    }
      setLoading(false);
      setShowToast(true);
      timeoutId = setTimeout(() => {
        setShowToast(false);
        router.push("/");
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [router, state.fieldErrors, state.formErrors, state.success]);

  if (loading) {
    return (
      <div className="w-full max-w-s m-auto h-96">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-info">
            <span>Thank you for your enquiry!</span>
          </div>
        </div>
      )}
      <form
        className="form-control w-full max-w-xs m-auto"
        action={(props) => {
          setLoading(true);
          formAction(props);
        }}
      >
        {/* Full Name */}
        <label className="label w-full max-w-xs">
          <span className="label-text">Your Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Enter full name"
            className="input input-bordered w-full max-w-xs"
            name="name"
          />
          <FormFieldError errors={state?.fieldErrors?.name} />
        </label>

        {/* Email */}
        <label className="label">
          <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
          <input
            type="email"
            placeholder="Enter email address"
            className="input input-bordered w-full max-w-xs"
            name="email"
          />
          <FormFieldError errors={state?.fieldErrors?.email} />
        </label>

        {/* Contact */}
        <label className="label">
          <span className="label-text">Your query</span>
        </label>
        <label className="input-group">
          <textarea
            rows={5}
            className="textarea textarea-bordered w-full max-w-xs"
            placeholder="Describe your requirement"
            name="requirement"
          ></textarea>
          <FormFieldError errors={state?.fieldErrors?.requirement} />
        </label>

        <button
          className="btn btn-active btn-accent"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
