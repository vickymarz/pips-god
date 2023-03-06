import {useResendOTP} from "../../../../../hooks";

type ButtonProps = {
  disabled: boolean
  remainingTime: number
  onClick: () => void
}

type ResendOtpProp = {
  renderTime?: (remainingTime:number) => void
  renderButton?: ({disabled }: ButtonProps) => void
  className?: string
  handleForgotPassword: () => void
}

export const ResendOTP = ({ renderTime, renderButton,  className, handleForgotPassword, ...props }: ResendOtpProp ) => {
  const { remainingTime, handelResendClick } = useResendOTP(props);

  const resendToken = () => {
    handleForgotPassword()
    handelResendClick()
  }

  return (
    <div
      className={className || ""}
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px"
      }}
    >
      <button disabled={remainingTime !== 0} onClick={resendToken} type="button">
          Resend OTP
      </button>
      <span> {remainingTime} sec</span>
    </div>
  );
}
