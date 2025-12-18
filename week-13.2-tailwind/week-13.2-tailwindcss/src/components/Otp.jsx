import { useState, useRef } from "react"

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex justify-center">
      <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} />
      <SubOtpBox reference={ref2} onDone={() => ref3.current.focus()} goBack={() => ref1.current.focus()} />
      <SubOtpBox reference={ref3} onDone={() => ref4.current.focus()} goBack={() => ref2.current.focus()} />
      <SubOtpBox reference={ref4} onDone={() => ref5.current.focus()} goBack={() => ref3.current.focus()} />
      <SubOtpBox reference={ref5} onDone={() => ref6.current.focus()} goBack={() => ref4.current.focus()} />
      <SubOtpBox reference={ref6} goBack={() => ref5.current.focus()} />
    </div>
  )
}

function SubOtpBox({ reference, onDone, goBack }) {
  const [inputBoxVal, setInputBoxVal] = useState("");

  return (
    <div>
      <input
        ref={reference}
        value={inputBoxVal}
        maxLength={1}
        onKeyUp={(e) => {
          if (e.key === "Backspace" && goBack) {
            setInputBoxVal(""); // clear current
            goBack();           // always move back
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (/^\d$/.test(val)) {   // accept only one digit
            setInputBoxVal(val);
            if (onDone) onDone();
          } else {
            setInputBoxVal("");    // clear invalid input
          }
        }}
        type="text"
        className="m-2 h-[50px] w-[40px] bg-blue-500 rounded-2xl text-white text-center"
      />
    </div>
  )
}
