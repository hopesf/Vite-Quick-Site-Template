import { useState } from 'react';
import { AiFillSetting, AiOutlineNodeIndex } from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiDashboardFill } from 'react-icons/ri';
import { GiConverseShoe, GiRunningShoe, GiSonicShoes } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';

import { BiCategory, BiUserCircle, BiLogOutCircle, BiTransferAlt } from 'react-icons/bi';
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsArrowRight, BsShop } from 'react-icons/bs';
import { useAuth } from '../../context/AuthContext';

const Leftbar = () => {
  const { navbarOpen, setNavbarOpen } = useAuth();
  const [menus, setMenus] = useState([
    { title: 'Anasayfa', icon: <GoHome />, href: '/' },
    {
      title: 'Ürün Yönetimi',
      submenu: true,
      status: false,
      icon: <BsShop />,
      href: '#',
      submenuItems: [
        { title: 'Kategoriler', icon: <BiCategory />, href: '/category' },
        {
          title: 'Nitelik Ekle',
          icon: <GiSonicShoes />,
          href: '/Attributes',
        },
      ],
    },
    { title: 'Ürünler', spacing: true, icon: <GiConverseShoe />, href: '/' },
    {
      title: 'Transfer ',
      submenu: true,
      status: false,
      icon: <BiTransferAlt />,
      href: '#',
      submenuItems: [
        { title: 'Transfer Yap', icon: <BsArrowRight />, href: '/' },
        {
          title: 'Transfer Kayıtları',
          icon: <HiOutlineDocumentText />,
          href: '/',
        },
        {
          title: 'Transfer süreçleri',
          icon: <AiOutlineNodeIndex />,
          href: '/',
        },
      ],
    },

    { title: 'Profil', spacing: true, icon: <BiUserCircle />, href: '/' },
    { title: 'Ayarlar', icon: <AiFillSetting />, href: '/' },
  ]);

  return (
    <div className={`bg-dark-purple h-screen p-5 pt-8 fixed ${navbarOpen ? 'w-72' : 'w-20'}`}>
      <BsArrowLeftShort
        onClick={() => setNavbarOpen(!navbarOpen)}
        className={`bg-white text-dark-purple text-3xl absolute -right-3 top-9 rounded-full border border-dark-purple cursor-pointer ${
          !navbarOpen && 'rotate-180'
        }`}
      />

      <div className="inline-flex">
        <Link to={'/'}>
          <GiRunningShoe
            className={`bg-white text-4xl text-dark-purple cursor-pointer block float-left mr-2 duration-500 ${
              navbarOpen && 'rotate-[360deg]'
            }`}
          />
        </Link>
        <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!navbarOpen && 'scale-0'}`}>
          Arasta Supply
        </h1>
      </div>

      <div className={`flex items-center bg-white mt-6  rounded ${!navbarOpen ? 'px-2.5' : 'px-4'} py-2`}>
        <BsSearch className={`text-dark-purple text-lg block float-left cursor-pointer ${navbarOpen && 'mr-2'}`} />
        <input
          type="search"
          placeholder="Birşeyler yaz..."
          className={`text-base bg-transparent w-full text-black focus:outline-none  ${!navbarOpen && 'hidden'}`}
        />
      </div>

      <ul className="pt-2 ">
        {menus?.map((el, i) => (
          <div key={i + 1}>
            <Link to={`${el?.href}`}>
              <li
                onClick={() => {
                  el.submenu &&
                    setMenus((old) =>
                      old.map((ele) =>
                        ele.title === el.title && ele.status === false
                          ? { ...ele, status: true }
                          : { ...ele, status: false }
                      )
                    );
                }}
                className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 group rounded hover:bg-white hover:text-dark-purple  ${
                  el.spacing ? 'mt-9' : 'mt-2'
                }`}
              >
                <span className="text-2xl block float-left">{el.icon ? el.icon : <RiDashboardFill />}</span>
                <span className={`text-base font-medium flex-1 duration-200 ${!navbarOpen && 'hidden'}`}>
                  {el.title}
                </span>

                {el.submenu && navbarOpen && (
                  <BsChevronDown
                    className={`text-white rounded-full group-hover:text-dark-purple text-xl ${
                      el.status && ' rotate-180'
                    }`}
                  />
                )}
              </li>
            </Link>
            {el.status && navbarOpen && (
              <ul>
                {el.submenuItems.map((submenuItem, index) => (
                  <Link key={`${submenuItem + index}`} to={`${submenuItem.href}`}>
                    <li className="text-white text-sm flex items-center gap-x-2 cursor-pointer p-2 px-5 rounded hover:bg-white hover:text-dark-purple ">
                      <span className="text-2xl">{submenuItem.icon && submenuItem.icon}</span>
                      <span>{submenuItem.title}</span>
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}

        <li
          onClick={() => console.log('logout butonu')}
          className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded hover:bg-white hover:text-dark-purple
             mt-2"
        >
          <span className="text-2xl block float-left">
            <BiLogOutCircle />
          </span>
          <span className={`text-base font-medium flex-1 duration-200 ${!navbarOpen && 'hidden'}`}>Oturumu Kapat</span>
        </li>
      </ul>
    </div>
  );
};
export default Leftbar;
