import Button from '../Button';
import * as S from './styles';
import Image from 'next/image'

export default function HomePage() {
  const handleSubmit = async () => {
    window.open('https://docs.google.com/forms/d/1R8PJmYB4FdKHyDz1pJfuwYGIvUJ4sEYgcFBClHgs0D4/edit', '_blank');
  };

  return (
    <>
      <S.Wrapper>
        <S.Hero>
          <S.Title>
            <S.Headline>
              Clube Inovador
            </S.Headline>
            <S.Subheadline>
              Do bem app conecta doadores, ONGs e empresas. Por meio de um clube de benefícios. Oferecemos cupons de desconto aos usuários que são fornecidos por empresas comprometidas com causas sociais. Além de tudo isso, você ajuda instituições e projetos sociais de sua escolha!
            </S.Subheadline>
            <S.ButtonSection>
              <Button
                label="Garanta seu desconto!"
                width="360"
                height='50'
                fontSize='22'
                colorType='green'
                onClick={handleSubmit}
                submit={true}
              />
            </S.ButtonSection>
          </S.Title>
          <S.LogoHero>
            <Image
            src="/logo-hero.png"
            width={326}
            height={160}
            alt="Picture of the author"
          />
          </S.LogoHero>
        </S.Hero>
        <S.NGOSection>
          <S.NGOHeadline>
            ONG's Apoiadas
          </S.NGOHeadline>
          <S.NGOSubheadline>
            Viva uma nova experiência ajudando Projetos e ainda recebendo ofertas de empresas
          </S.NGOSubheadline>
          <S.ImageSection>
            <Image
              src="/ong1.png"
              width={180}
              height={185}
              alt="Picture of the author"
              style={{
                borderRadius: '100%',
                boxShadow: '0 0 25px #ccc'
              }}
            />
          </S.ImageSection>
          <S.ButtonSection>
              <Button
                label="Experiência exclusiva"
                width="360"
                height='50'
                fontSize='22'
                colorType='green'
                onClick={handleSubmit}
                submit={true}
              />
            </S.ButtonSection>
        </S.NGOSection>
        <S.CompaniesSection>
          <S.CompaniesHeadline>
            Empresas Apoiadas
          </S.CompaniesHeadline>
          <S.CompaniesSubheadline>
            Economize dinheiro com nossas ofertas de empresas parceiras
          </S.CompaniesSubheadline>
          <S.ImageSection>
            <Image
              src="/empresa1.png"
              width={180}
              height={185}
              alt="Picture of the author"
              style={{
                borderRadius: '100%',
                boxShadow: '0 0 25px #ccc'
              }}
            />
          </S.ImageSection>
          <S.ButtonSection>
              <Button
                label="Quero economizar!"
                width="360"
                height='50'
                fontSize='22'
                colorType='green'
                onClick={handleSubmit}
                submit={true}
              />
            </S.ButtonSection>
        </S.CompaniesSection>
      </S.Wrapper>
    </>
  );
}
