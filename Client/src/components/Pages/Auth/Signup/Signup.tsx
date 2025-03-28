import BtnSignup from "./UtilitySignup/BtnSignup";
import { useCreateAccountForm } from "./UtilitySignup/useCreateAccountForm";
import CreateAccountForm from "./CreateAccountForm";
import ErrorDisplay from "../../../../context/errorContext/ErrorDisplay";

const Signup = () => {
  const { loading } = useCreateAccountForm();

  return (
    <section className="d-flex justify-content-center">
      <div
        className="w-75 backgroundMobile vh-100 d-flex flex-column align-items-center"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold mt-5">Create Account</h3>
        </div>

        <CreateAccountForm />

        <BtnSignup loadingSignup={loading} />
        <ErrorDisplay />
      </div>
    </section>
  );
};

export default Signup;
