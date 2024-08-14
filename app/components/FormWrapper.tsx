import { styleClasses } from "@/Utils/tailwindClasses";

// FormWrapper component definition
const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // Outer container div for the form
    <div
      className={styleClasses.formWrapperOuter}
    >
      {/* Inner container div for the form */}
      <div
        className={styleClasses.formWrapperInner}
      >
        {/* Rendering child components inside the FormWrapper */}
        {children}
      </div>
    </div>
  );
};

export default FormWrapper; // Exporting the FormWrapper component
