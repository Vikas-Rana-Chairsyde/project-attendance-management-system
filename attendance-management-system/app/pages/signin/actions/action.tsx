import { signIn } from "next-auth/react";
import { CONSTANT } from "../constants/constant";

export class SubmitHandler {
  constructor(
    private setLoading: (loading: boolean) => void,
    private router: any 
  ) {}

  async handleSubmit(
    values: typeof CONSTANT.INITIAL_VALUES,
    { setSubmitting, setErrors }: any
  ) {
    this.setLoading(true);

    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.ok) {
      this.router.push("/pages/dashboard"); 
    } else {
      this.setLoading(false);
      setErrors({ password: "Invalid email or password" });
    }

    setSubmitting(false);
  }
}
