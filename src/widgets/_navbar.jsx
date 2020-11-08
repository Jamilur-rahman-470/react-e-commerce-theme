import React from "react";
import { site_data } from "../data/site-data";
import { link } from "../data/routes";
import { Badge, Brand, Links, Links2, Nav } from "../styles/navbar.sct";
import { LinkBtn } from "../styles/global.stc";
import Flag from '../images/flag.png'

const Navbar = () => {
  return (
    <Nav>
      <div style={{
        width: '100%',
        height: '20px',
        background: '#000',
        color: '#fff',
        textAlign: 'center'
      }}>IN DEVELOPMENT</div>
      <div className="container h-100">
        <div className="container flex between w-100 h-100">
          <Brand href="/">{site_data.name}</Brand>
          <Links>
            {link.map((i, k) => (
              <li key={k}>
                {" "}
                <a href={i.path}>{i.lable}</a>
              </li>
            ))}
          </Links>
          <Links2>
            <li>
              <a href="/">Offer</a>
            </li>
            <li>
              <a href="/">Need Help</a>
            </li>
            <li>
              <Badge> <img src={Flag} alt="EN" width='20'style={{marginRight: '5px'}}/> EN</Badge>
            </li>
            <li>
              <LinkBtn href="/" style={{color: '#fff'}}>JOIN</LinkBtn>
            </li>
          </Links2>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
