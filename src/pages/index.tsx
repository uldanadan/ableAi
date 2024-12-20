import { GetStaticPropsContext } from 'next';
import MainPage from '@/pageComponents/mainPage/mainPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
}
export default MainPage;
