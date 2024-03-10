import Button from '../../components/Buttons/Button';
import Search from '../../components/Search/Search';
import styles from './Layout.module.css';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['top']}>
				<div className={styles['logo']}>
					<img src='../public/AstroHub_logo.svg' alt='Логотип сайта' />
					<p>AstroHub</p>
				</div>
				<div className={styles['search']}><Search placeholder='Search' /></div>
				<div className={styles['profile-area']}>
					<Button appearence='small'><img src="../public/search_area_icon.svg" alt="Иконка лупы" /></Button>
					<Button appearence='small'><img src="../public/bookmark_icon.svg" alt="Иконка закладки" /></Button>
					<Button appearence='small'><img src="../public/notification_icon.svg" alt="Иконка уведомления" /></Button>
				</div>
			</div>
			<div className={styles['search_background']}>
				<div className={styles['photo_search']}>
					<img src='../public/background_photo_large.png' alt="Explore the universe" />
					<span className={styles['main-text']}>Explore the universe</span>
					<span className={styles['text']}>Learn about the cosmos with our guides to space phenomena, news, and more</span>
					<div className={styles['input']}><Search placeholder='Search for topics, articles, and more' /></div>
				</div>
			</div>
			<div className={styles['featured-content']}>
				<span className={styles['featured-content-main-text']}>Featured content</span>
				<span className={styles['featured-content-secondary-text']}>From the birth of stars to the search for life on Mars, we've got you covered</span>
				<Button appearence='big' className={styles['featured-content-see-all']}>See all</Button>
			</div>
			<div className={styles['news']}>
				<span className={styles['header-news']}>What's new</span>
				<div className={styles['news-card']}>
					<img src="../public/news_picture1.png" />
					<span className={styles['news-card-theme']}>Featured</span>
					<span className={styles['news-card-header']}>NASA's Artemis I mission: What you need to know</span>
					<span className={styles['news-text']}>Copy The first uncrewed test flight for NASA's Artemis program is set to launch soon</span>
				</div>
				<div className={styles['news-card']}>
					<img src="../public/news_picture2.png" />
					<span className={styles['news-card-theme']}>Featured</span>
					<span className={styles['news-card-header']}>What's a black hole? A guide to the universe's darkest mysteries</span>
					<span className={styles['news-text']}>Black holes are some of the most fascinating and enigmatic objects in the cosmos. Learn about their properties, formation, and more in this guide</span>
				</div>
				<div className={styles['news-card']}>
					<img src="../public/news_picture3.png" />
					<span className={styles['news-card-theme']}>Featured</span>
					<span className={styles['news-card-header']}>The search for extraterrestrial life: A cosmic quest</span>
					<span className={styles['news-text']}>Are we alone in the universe? It's a question that has captivated human imagination for centuries. In this guide, we'll explore the science behind the search for extraterrestrial life, from the icy moons of Jupiter to the deserts of Mars</span>
				</div>
			</div>
		</div>
	);
}