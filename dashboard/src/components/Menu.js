import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Menu = () => {

  const [selectMenu , setSelectMenu] = useState(0);
  const [isProfileDropdown , setIsProfileDropdown] = useState(false);


  const handleMenu =(index)=>{
    setSelectMenu(index);
  }
 
  const handlesProfileDropdown =(index)=>{
    setIsProfileDropdown(!isProfileDropdown);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className='menu-container'>
      <img src='image.png' style={{width : "50px"}}/>
      <div className='menus'>
        <ul>
          <li>
            <Link to='/' style={{textDecoration : "none"}} onClick={()=> handleMenu(0)}>
            <p className={selectMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to='/orders' style={{textDecoration : "none"}} onClick={()=> handleMenu(1)}>
            <p className={selectMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
          <Link to='/holding' style={{textDecoration : "none"}} onClick={()=> handleMenu(2)}>
            <p className={selectMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to='/positions' style={{textDecoration : "none"}} onClick={()=> handleMenu(3)}>
            <p className={selectMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
          <Link to='/funds' style={{textDecoration : "none"}} onClick={()=> handleMenu(4)}>
            <p className={selectMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
          <Link to='/apps' style={{textDecoration : "none"}} onClick={()=> handleMenu(5)}>
            <p className={selectMenu === 5 ? activeMenuClass : menuClass}>App</p>
            </Link>
          </li>
        </ul>
        <hr/>
        <div className='profile' onClick={handlesProfileDropdown}>
          <div className='avatar'>
            ZU
          </div>
          <p className='username'>USERID</p>
        </div>
        {isProfileDropdown}
      </div>
    </div>
  )
}

export default Menu
