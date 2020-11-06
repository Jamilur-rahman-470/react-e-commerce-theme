import React, { useState } from "react";
import {
  Banner,
  Content,
  IMG,
  Overlay,
  Search,
} from "../styles/home-banner.stc";
import BG from "../images/banner.jpg";
import { site_data } from "../data/site-data";

const HomeBanner = () => {
  const [seach, setSearch] = useState("");

  return (
    <Banner>
      <IMG bg={BG}></IMG>
      <Overlay></Overlay>
      <Content>
        <h1>{site_data.home_banner.heading}</h1>
        <h4>{site_data.home_banner.sub_heading}</h4>
        <Search>
          <form>
            <div className="prefix">Search</div>
            <input type="text" placeholder='What are you looking for' value={seach} onChange={(e) => setSearch(e.target.value)}/>
            <input type="submit" value="Search" className="btn" />
          </form>
        </Search>
      </Content>
    </Banner>
  );
};

export default HomeBanner;
