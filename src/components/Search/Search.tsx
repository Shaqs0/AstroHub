import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, appearance = 'small', ...props }, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input ref={ref} className={cn(styles['input'], className, {
				[styles['small']]: appearance === 'small',
				[styles['big']]: appearance === 'big',
				[styles['invalid']]: !isValid,
			})} {...props} />
		</div>
	);
});

export default Search;