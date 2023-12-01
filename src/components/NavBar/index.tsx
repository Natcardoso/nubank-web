import LogoNu from "../../assets/logo-nu.svg";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiExit, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="w-100 bg-purple-600 text-white p-4 flex flex-col justify-between items-center transition-all">
            <img src={LogoNu} className="w-16" />
            <div className="cursor-pointer flex flex-col gap-10">
                <NavLink
                    to={"/"}
                    className="aria-[current=page]:text-purple-900"
                >
                    <HiOutlineArrowsUpDown className="w-10 h-10 hover:text-purple-900" />
                </NavLink>
                <NavLink
                    to={"/AcompanheSeuDinheiro"}
                    className="aria-[current=page]:text-purple-900"
                >
                    <MdOutlineAttachMoney className="w-10 h-10 hover:text-purple-900" />
                </NavLink>
                <NavLink
                    to={"/ShoppingNu"}
                    className="aria-[current=page]:text-purple-900"
                >
                    <BiShoppingBag className="w-10 h-10 hover:text-purple-900" />
                </NavLink>
            </div>
            <BiExit className="w-10 h-10 cursor-pointer	hover:text-purple-900" />
        </nav>
    );
};

export default NavBar;
