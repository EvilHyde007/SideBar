import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    //background: #000;// ==> linea superior
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav ` //===>sidebar
    background: #F8F8FF;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    //left: ${({sidebar})=> (sidebar ? '0' : '-100%')};
    //transition: 350ms;
    z-index: 10;
    box-shadow: 0 0 15px #DCDCDC;
    `;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {

    /* const [sidebar, setSidebar] = useState (false);

    const showSidebar = ()=> setSidebar(!sidebar)
     */
    return (
    <>
    <IconContext.Provider value= {{color: '#696969'}}>
    
    {/* <Nav>    

        <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar}/>
        </NavIcon>

    </Nav> */}

    <SidebarNav >  {/*  sidebar={sidebar}>  */}
        <SidebarWrap>

        <NavIcon to="#">
            {/* <AiIcons.AiOutlineClose onClick={showSidebar}/> ==>>> boton X*/}
        </NavIcon>
               
               
            {SidebarData.map((item, index)=> {
                return <SubMenu item= {item} key={index} />;
            })}

        </SidebarWrap>
    
    </ SidebarNav >
    </IconContext.Provider>
    
    </> 
    );     
                
};

export default Sidebar;