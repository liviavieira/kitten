import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function Menu() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        menus {
          logo {
            url
          }
          home
          about
          services
          reservation
          contact
          telephone {
            url
          }
          phone
        }
      }
    }
  `);

  const query = data.kittendata.menus[0];

  const [scroll, setScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);

    if (window.pageYOffset > 0) {
      if (scrollPosition > window.pageYOffset) {
        setScroll('up');
      } else {
        setScroll('down');
      }
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  return (
    <S.Row
      showMenu={scroll === 'up'}
      hiddenMenu={scroll === 'down'}
    >
      <S.Wrapper>
        <S.Logo
          src={query.logo.url}
          alt="Kitten House Logo"
          title="Logo generated by DesignEvo"
        />
        <S.Mavigation>
          <S.Link href="">{query.home}</S.Link>
          <S.Link href="">{query.about}</S.Link>
          <S.Link href="">{query.services}</S.Link>
          <S.Link href="">{query.reservation}</S.Link>
          <S.Link href="">{query.contact}</S.Link>
          <S.Telephone
            href=""
            phoneImg={query.telephone.url}
          >
            {query.phone}
          </S.Telephone>
        </S.Mavigation>
      </S.Wrapper>
    </S.Row>
  );
}