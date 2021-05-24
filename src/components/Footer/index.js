import React from 'react';
import{
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Home</FooterLink>
                                <FooterLink to="/signin">Product</FooterLink>
                                <FooterLink to="/signin">Service</FooterLink>
                                <FooterLink to="/signin">Contact</FooterLink>
                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to="/signin">Home delivery</FooterLink>
                                <FooterLink to="/signin">canteen serve</FooterLink>
                                <FooterLink to="/signin">Party serve</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle>Social media</FooterLinkTitle>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Whats App</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                
                                <FooterLink to="/signin">Gmail</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle>Product</FooterLinkTitle>
                                <FooterLink to="/signin">Veg</FooterLink>
                                <FooterLink to="/signin">Non-veg</FooterLink>
                                <FooterLink to="/signin">Biriyani</FooterLink>
                                <FooterLink to="/signin">Snacks</FooterLink>
                                <FooterLink to="/signin">Drinks</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Kalpa</SocialLogo>
                        
                            <WebsiteRights>Kalpa @ {new Date().getFullYear()}All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer
