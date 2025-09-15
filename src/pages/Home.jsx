import {Banner} from '../component/Banner';
import {Card} from '../component/Card'

export function Home() {

    return <>
    <Banner
        image="src/assets/img/home-banner.svg"
        text={<>Chez vous,<span className='mobile-break'></span> partout et ailleurs</>}
    />
    <Card/>
    </>
}