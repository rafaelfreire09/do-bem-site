import * as S from './styles';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <S.Wrapper>
        <Image
          src="/logo-header.png"
          width={45}
          height={39}
          alt="Picture of the author"
        />
        <S.Navbar>
          <S.NavbarItem>Início</S.NavbarItem>
          <S.NavbarItem>ONG's</S.NavbarItem>
          <S.NavbarItem>Empresa</S.NavbarItem>
          <S.NavbarItem>Fazer parte</S.NavbarItem>
        </S.Navbar>
      </S.Wrapper>
    </>
  );
}
