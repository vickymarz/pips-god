import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

type LogoProp = {
	className?:string
}

const Logo = ({className}: LogoProp) => {
	return (
		<Link to='/'>
			<div className="flex justify-start items-center gap-x-[10px]">
              <img src={logo} alt="logo" className="w-[27px] h-[23px] lg:w-[64px] lg:h-[50px]"/>
              <h1 className="text-green text-[14px] lg:text-[24px] font-bold">Pips god</h1>
			</div>
		</Link>
	);
};

export default Logo;
