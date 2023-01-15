import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

export const Logo = () => {
	return (
		<Link to='/'>
			<div className="flex justify-start items-center gap-x-[10px]">
              <img src={logo} alt="logo" className="w-[27px] h-[23px] md:w-[50px] md:h-[40px]"/>
              <h1 className="text-white text-[14px] md:text-[1.2rem] font-bold">Pips god</h1>
			</div>
		</Link>
	);
};
