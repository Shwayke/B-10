// FormWrapper component definition
const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // Outer container div for the form
    <div
      className="form-wrapper-outer"
    >
      {/* Inner container div for the form */}
      <div
        className="form-wrapper-inner"
      >
        {/* Rendering child components inside the FormWrapper */}
        {children}
      </div>
    </div>
  );
};

export default FormWrapper; // Exporting the FormWrapper component
