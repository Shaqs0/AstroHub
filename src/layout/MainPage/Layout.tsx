import Search from '../../components/Search/Search';
import styles from './Layout.module.css';

export function Layout() {
	return <div className={styles['layout']}>
		<div className={styles['top']}>
			<div className={styles['logo']}>
				<img src='../public/AstroHub_logo.svg' alt='Логотип сайта' />
				<p>AstroHub</p>
			</div>
			<div className={styles['search']}><Search /></div>
			<div className={styles['profile-area']}></div>
			
		</div>
	</div>;
}