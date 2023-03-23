import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { colors } from "../../constants/colors";
import "./sign-in.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import "./sign-in.css";
export function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    // console.log(regex.test(email));
    if (!validateEmail()) {
      setEmailError(true);
      // navigate("/dashboard");
    } else if (passWord.length == 0) {
      setPasswordError(true);
    } else {
      // navigate(navigatePath.DASHBOARD);
    }
  };

  const validateEmail = () => {
    let emailRegx = new RegExp("[A-Za-z].@growder.com");
    return emailRegx.test(email);
  };

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            style={{ backgroundColor: colors.primary }}
            className="mb-4 grid h-28 place-items-center colors"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col ">
            <Input
              type="email"
              label="Email"
              size="lg"
              onBlur={() => {
                let emailvalidation = validateEmail();
                setEmailError(!emailvalidation);
              }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={emailError}
            />
            <div className="mt-1 mb-3">
              <Typography style={{}}>Enter valid email</Typography>
            </div>

            {/* <Input
              type="password"
              label="Password"
              size="lg"
              icon={
                <i
                  className="fas fa-heart w-1 h-1 "
                  style={{ color: colors.primary }}
                />
              }
            /> */}
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                label="Password"
                type={showpassword ? "text" : "password"}
                onChange={(e) => {
                  setPasswordError(false);
                  setPassWord(e.target.value);
                }}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
                icon={
                  <div
                    onClick={() => {
                      setShowpassword((prev) => !prev);
                    }}
                  >
                    {showpassword ? (
                      <AiFillEyeInvisible
                        size={25}
                        className="-mt-0.5 cursor-pointer"
                      />
                    ) : (
                      <AiFillEye size={25} className="-mt-0.5 cursor-pointer" />
                    )}
                  </div>
                }
              />
            </div>

            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              style={{ background: colors.primary }}
            >
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
