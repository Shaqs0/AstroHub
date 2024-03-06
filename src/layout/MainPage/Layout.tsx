import Button from '../../components/Buttons/Button';
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
			<div className={styles['profile-area']}>
				<Button appearence='small'><img src="../public/search_area_icon.svg" alt="Иконка лупы" /></Button>
				<Button appearence='small'><img src="../public/bookmark_icon.svg" alt="Иконка закладки" /></Button>
				<Button appearence='small'><img src="../public/notification_icon.svg" alt="Иконка уведомления" /></Button>
			</div>
		</div>
		<div className={styles['body']}>
			<div className={styles['photo_search']}>
				<img src='../public/background_photo.png'></img>
				<p className={styles['main-text']}>Explore the universe</p>
				<p className={styles['text']}>Learn about the cosmos with our guides to space phenomena, news, and more</p>
				<div className={styles['input']}><Search appearence=''/></div>
			</div>
		</div>
	</div>;
}