import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

export const Logo = () => {
	return (
		<Link to='/'>
			<div className="flex justify-start items-start">
              <img src={logo} alt="logo" className="w-[27px] h-[23px] md:w-[50px] md:h-[40px]"/>
			</div>
		</Link>
	);
};
