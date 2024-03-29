import { Button, Stack, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { FormProvider, FTextField } from "../component/form";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
});
const defaultValues = {
  username: "trongnm",
  password: "123",
};

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    let from = location.state?.from?.pathname || "/";
    let username = data.username;
    auth.login(username, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={3}
        sx={{
          minWidth: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ color: "black" }}
          mt={2}
        >
          Login
        </Typography>
        <FTextField name="username" label="Username" sx={{ color: "white" }} />
        <FTextField
          name="password"
          type="password"
          label="Password"
          sx={{ color: "white" }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ maxWidth: "100px" }}
          onSubmit={handleSubmit}
        >
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginPage;
