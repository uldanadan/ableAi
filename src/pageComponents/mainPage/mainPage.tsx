import { FC } from 'react';
import Header from '@/shared/components/header/header';
import Intro from '@/shared/components/intro/intro';
import Team from '@/shared/components/team/team';
import Cases from '@/shared/components/cases/cases';
import Works from '@/shared/components/works/works';
import Questions from '@/shared/components/questions/questions';
import Footer from '@/shared/components/footer/footer';

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <Team />
      <Cases />
      <Works />
      <Questions />
      <Footer />
    </>
  );
};

export default MainPage;
