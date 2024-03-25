import Button from '../../components/Buttons/Button';
import Search from '../../components/Search/Search';
import styles from './Layout.module.css';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['top']}>
				<div className={styles['logo']}>
					<img src='../public/AstroHub_logo.svg' alt='Логотип сайта' />
					<span>AstroHub</span>
				</div>
				<div className={styles['search']}><Search appearance='small' placeholder='Search' /></div>
				<div className={styles['profile_area']}>
					<Button appearence='small'><img src="../public/search_area_icon.svg" alt="Иконка лупы" /></Button>
					<Button appearence='small'><img src="../public/bookmark_icon.svg" alt="Иконка закладки" /></Button>
					<Button appearence='small'><img src="../public/notification_icon.svg" alt="Иконка уведомления" /></Button>
				</div>
			</div>
			<div className={styles['search_background']}>
				<div className="">
					<span className={styles['main_text']}>Explore the universe</span>
					<span className={styles['text']}>Learn about the cosmos with our guides to space phenomena, news, and more</span>
					<div className={styles['searchContainer']}>
						<img className={styles['image']} src='/search_icon.svg' alt='Иконка лупы'></img>
						<Search className={styles['input']} appearance='big' placeholder='Search for topics, articles, and more' />
						<Button className={styles['btn']} appearence='big'>Search</Button>
					</div>
				</div>
			</div>
			<div className={styles['featured_content']}>
				<span className={styles['featured_content_main_text']}>Featured content</span>
				<span className={styles['featured_content_secondary_text']}>From the birth of stars to the search for life on Mars, we've got you covered</span>

				<Button appearence='big' className={styles['featured_content_see_all']}>See all</Button>

			</div>
			<div className={styles['news']}>
				<span className={styles['header_news']}>What's new</span>
				<div className={styles['news_card']}>
					<img src="../public/news_picture1.png" />
					<div className={styles['text_news']}>
						<span className={styles['news_card_theme']}>Featured</span>
						<span className={styles['news_card_header']}>NASA's Artemis I mission: What you need to know</span>
						<span className={styles['news_text']}>Copy The first uncrewed test flight for NASA's Artemis program is set to launch soon</span>
						<Button appearence='middle' className={styles['btn_news']}>Read more</Button>
					</div>
				</div>
				<div className={styles['news_card']}>
					<img src="../public/news_picture2.png" />
					<div className={styles['text_news']}>
						<span className={styles['news_card_theme']}>Featured</span>
						<span className={styles['news_card_header']}>What's a black hole? A guide to the universe's darkest mysteries</span>
						<span className={styles['news_text']}>Black holes are some of the most fascinating and enigmatic objects in the cosmos. Learn about their properties, formation, and more in this guide</span>
						<Button appearence='middle' className={styles['btn_news']}>Read more</Button>
					</div>
				</div>
				<div className={styles['news_card']}>
					<img src="../public/news_picture3.png" />
					<div className={styles['text_news']}>
						<span className={styles['news_card_theme']}>Featured</span>
						<span className={styles['news_card_header']}>The search for extraterrestrial life: A cosmic quest</span>
						<span className={styles['news_text']}>Are we alone in the universe? It's a question that has captivated human imagination for centuries. In this guide, we'll explore the science behind the search for extraterrestrial life, from the icy moons of Jupiter to the deserts of Mars</span>
						<Button appearence='middle' className={styles['btn_news']}>Read more</Button>
					</div>
				</div>
			</div>
		</div>
	);
}