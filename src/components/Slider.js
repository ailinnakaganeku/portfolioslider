import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const images = [image1, image2, image3, image4];

export default function Slider() {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	const redirect = () => {
		window.location.href = 'https://nakaganeku.herokuapp.com/';
	};

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={images[imageIndex]}
					custom={direction}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 300 },
						opacity: { duration: 0.7 },
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onClick={() => redirect()}
				/>
			</AnimatePresence>
			<motion.button
				whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
				whileTap={{ scale: 0.9 }}
				className='next'
				onClick={() => paginate(1)}
			>
				<FontAwesomeIcon icon={faAngleRight} size='2x' />
			</motion.button>
			<motion.button
				whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
				whileTap={{ scale: 0.9 }}
				className='prev'
				onClick={() => paginate(-1)}
			>
				<FontAwesomeIcon icon={faAngleLeft} size='2x' />
			</motion.button>
		</>
	);
}
