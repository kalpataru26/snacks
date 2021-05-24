import React from 'react'
import { Icon,
    SidebarContainer,
    CloseIcon, 
    SidebarMenu,
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>Snacks</SidebarLink>
                    <SidebarLink to='product'onClick={toggle}>Menu</SidebarLink>
                    <SidebarLink to='service'onClick={toggle}>Service</SidebarLink>
                    <SidebarLink to='gallary'onClick={toggle}>Gallary</SidebarLink>
                    <SidebarLink to='contactus'onClick={toggle}>Contact Us</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Order now</SidebarRoute>
                </SideBtnWrap>
            
        </SidebarContainer>
    );
};

export default Sidebar;