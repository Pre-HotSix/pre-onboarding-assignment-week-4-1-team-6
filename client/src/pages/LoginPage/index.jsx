import { useNavigate } from "react-router-dom";
import { signinApi } from 'apis/loginApi';
import { COMPANY_NAME } from 'constants';
import { basicButton, activeButton, basicText } from 'styles/theme';

function LoginPage() {
  const BUTTON_TEXT = '로그인';
  const navigate = useNavigate();

  const signinSignup = async (e) => {
    e.preventDefault()
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    const data = await signinApi(user.email, user.password);
    sessionStorage.setItem('token', data.accessToken);
    sessionStorage.setItem('worker', data.user.email);
    navigate("/accounts");
  };

  const inputNames = [ 
    {
      text: '이메일',
      name: 'email', 
      type: 'text',
      placeholder: '이메일을 입력하세요',
    },
    {
      text: '비밀번호',
      name: 'password', 
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
    },
  ];
  const inputLists = inputNames.map((input, index) => {
    return (
      <div key={index} className="flex py-2">
        <div className="w-1/5 pt-3 select-none">{input.text}</div>
        <input type={input.type} name={input.name} placeholder={input.placeholder} className="input input-bordered w-4/5 cursor-pointer text-black" required />
      </div>
    );
  });


  return (
    <div className={`w-screen h-screen relative bg-gray-200 ${basicText}`}>
      <p className="text-center pt-32 text-5xl font-bold select-none">{COMPANY_NAME}</p>
      <form onSubmit={signinSignup} className="flex flex-col absolute left-1/2 -translate-x-1/2 top-52 w-96 2xl:w-1/4 h-72 border-solid border rounded-md p-6">
        {inputLists}
        <button type="submit" name="submit" className={`btn mt-auto cursor-pointer border-0 ${basicButton} ${activeButton}`}>{BUTTON_TEXT}</button>
      </form>
    </div>
  );
}

export default LoginPage;