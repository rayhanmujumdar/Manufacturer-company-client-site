import { useEffect, useState } from "react";

const useNav = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos > 400) {
          setNav(true)
      }
       else {
          setNav(false)
      }
    };
}, []);
return [nav,setNav]
};

export default useNav;
