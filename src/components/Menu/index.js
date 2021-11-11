import React from "react";
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

  return (
    <S.Row>
      <S.Wrapper>
        <S.Logo src="" alt="Kitten House Logo" title="Logo generated by DesignEvo" />
        <S.Mavigation>
          <S.Link href=""></S.Link>
          <S.Link href=""></S.Link>
          <S.Link href=""></S.Link>
          <S.Link href=""></S.Link>
          <S.Link href=""></S.Link>
          <S.Telephone href=""></S.Telephone>
        </S.Mavigation>
      </S.Wrapper>
    </S.Row>
  );
}