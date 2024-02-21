import Image from 'next/image'
import Link from 'next/link'
import Logo from '/public/images/hexdrinker-dark.png'
import styles from '@/app/page.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles['main__leftSection']}>
          <Image
            src={Logo}
            alt={'logo'}
          />
        </section>
        <section className={styles['main__rightSection']}>
          <span className={styles['main__rightSectionTitle']}>
            지금 일어나고 있는 일
          </span>
          <div className={styles['main__rightSectionDescription']}>
            지금 가입하세요.
          </div>
          <div className={styles['main__authSection']}>
            <Link
              className={`${styles['main__button']} ${styles['main__button--blue']}`}
              href='/i/flow/signup'
            >
              계정 만들기
            </Link>
            <div className={styles['main__signupDescription']}>
              가입하시려면{' '}
              <span className={styles['main__signupDescription--link']}>
                쿠키 사용
              </span>
              을 포함해{' '}
              <span className={styles['main__signupDescription--link']}>
                이용약관
              </span>
              과{' '}
              <span className={styles['main__signupDescription--link']}>
                개인정보 처리방침
              </span>
              에 동의해야 합니다.
            </div>

            <p className={styles['main__loginDescription']}>
              이미 트위터에 가입하셨나요?
            </p>
            <Link
              className={`${styles['main__button']} ${styles['main__button--black']}`}
              href='/i/flow/login'
            >
              로그인
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
